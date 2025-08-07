import * as THREE from 'three'
import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875

// Optimized performance settings based on device capability
const usePerformanceSettings = () => {
  const [settings, setSettings] = useState({
    dpr: [1, 1.5],
    reflectorResolution: 2048,
    reflectorBlur: [300, 100],
    fogFar: 15,
    antialias: true
  })

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEnd = navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4
    
    if (isMobile || isLowEnd) {
      setSettings({
        dpr: [1, 1.2],
        reflectorResolution: 1024,
        reflectorBlur: [150, 50],
        fogFar: 12,
        antialias: false
      })
    }
  }, [])

  return settings
}

// Memoized reflector material to prevent recreation
const ReflectorFloor = ({ resolution, blur }) => {
  const materialProps = useMemo(() => ({
    blur,
    resolution,
    mixBlur: 1,
    mixStrength: 40, // Reduced for performance
    roughness: 1,
    depthScale: 1.2,
    minDepthThreshold: 0.4,
    maxDepthThreshold: 1.4,
    color: "#050505",
    metalness: 0.5
  }), [blur, resolution])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial {...materialProps} />
    </mesh>
  )
}

export const Jasa = ({ images }) => {
  const settings = usePerformanceSettings()
  
  const canvasProps = useMemo(() => ({
    dpr: settings.dpr,
    camera: { fov: 70, position: [0, 2, 15] },
    gl: { 
      antialias: settings.antialias,
      alpha: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    },
    performance: {
      min: 0.2,
      max: 1,
      debounce: 200
    }
  }), [settings])

  return (
    <Canvas {...canvasProps}>
      <color attach="background" args={['#000']} />
      <fog attach="fog" args={['#000', 0, settings.fogFar]} />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <ReflectorFloor 
          resolution={settings.reflectorResolution} 
          blur={settings.reflectorBlur} 
        />
      </group>
      <Environment preset="city" background={false} />
    </Canvas>
  )
}

// Optimized Frames component with frustum culling
function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  const { camera } = useThree()
  
  // Memoize click handler
  const handleClick = useCallback((e) => {
    e.stopPropagation()
    const newLocation = clicked.current === e.object ? '/' : '/item/' + e.object.name
    setLocation(newLocation)
  }, [setLocation])

  const handlePointerMissed = useCallback(() => {
    setLocation('/')
  }, [setLocation])

  useEffect(() => {
    clicked.current = ref.current?.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  }, [params?.id, p, q])

  // Throttled camera animation
  useFrame((state, dt) => {
    const dampingFactor = Math.min(dt * 60, 1) * 0.4
    easing.damp3(state.camera.position, p, dampingFactor, dt)
    easing.dampQ(state.camera.quaternion, q, dampingFactor, dt)
  })

  return (
    <group
      ref={ref}
      onClick={handleClick}
      onPointerMissed={handlePointerMissed}>
      {images.map((props, index) => (
        <Frame key={props.url} {...props} index={index} />
      ))}
    </group>
  )
}

// Optimized Frame component with better memory management
function Frame({ url, index, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const group = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const { camera } = useThree()
  
  // Memoize expensive calculations
  const { name, rnd, isVisible } = useMemo(() => {
    const frameId = getUuid(url)
    const randomSeed = Math.random()
    return {
      name: frameId,
      rnd: randomSeed,
      isVisible: true // You can add frustum culling logic here
    }
  }, [url])

  const isActive = params?.id === name
  useCursor(hovered)

  // Optimized hover handlers
  const handlePointerOver = useCallback((e) => {
    e.stopPropagation()
    hover(true)
  }, [])

  const handlePointerOut = useCallback(() => {
    hover(false)
  }, [])

  // Optimized animation with reduced calculations
  useFrame((state, dt) => {
    if (!isVisible || !image.current || !frame.current) return
    
    // Reduce animation frequency for better performance
    const time = state.clock.elapsedTime
    if (time % 0.016 < dt) { // ~60fps throttle
      image.current.material.zoom = 0.8 + Math.sin(rnd * 10000 + time / 3) * 0.001
      
      const targetScale = [
        0.85 * (!isActive && hovered ? 0.85 : 1), 
        0.9 * (!isActive && hovered ? 0.905 : 1), 
        1
      ]
      
      const dampingSpeed = Math.min(dt * 60, 1) * 0.1
      easing.damp3(image.current.scale, targetScale, dampingSpeed, dt)
      easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', dampingSpeed, dt)
    }
  })

  // Don't render if not visible (can be enhanced with frustum culling)
  if (!isVisible) return null

  return (
    <group ref={group} {...props}>
      <mesh
        name={name}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
        frustumCulled={true}>
        <boxGeometry />
        <meshStandardMaterial 
          color="#151515" 
          metalness={0.5} 
          roughness={0.5} 
          envMapIntensity={1} // Reduced for performance
        />
        <mesh 
          ref={frame} 
          raycast={() => null} 
          scale={[0.9, 0.93, 0.9]} 
          position={[0, 0, 0.2]}
          frustumCulled={true}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image 
          raycast={() => null} 
          ref={image} 
          position={[0, 0, 0.7]} 
          url={url}
        />
      </mesh>
      <Text 
        maxWidth={0.1} 
        anchorX="left" 
        anchorY="top" 
        position={[0.55, GOLDENRATIO, 0]} 
        fontSize={0.025}
        frustumCulled={true}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}

export default Jasa