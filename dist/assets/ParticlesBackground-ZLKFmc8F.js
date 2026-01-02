import{r as u,j as e}from"./index-DSGjgx8E.js";const h=({colors:r=["#ff223e","#5d1eb2","#ff7300"],size:s=3,countDesktop:i=60,countTablet:n=50,countMobile:l=40,zIndex:o=0,height:c="100vh"})=>(u.useLayoutEffect(()=>{const t=document.createElement("script");return t.src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",t.onload=()=>{if(document.getElementById("js-particles")&&window.particlesJS){const d=()=>{const a=window.innerWidth;return a>1024?i:a>768?n:l};window.particlesJS("js-particles",{particles:{number:{value:d()},color:{value:r},shape:{type:"circle"},opacity:{value:1,random:!1},size:{value:s,random:!0},line_linked:{enable:!1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0}},retina_detect:!0})}},document.body.appendChild(t),()=>{document.body.removeChild(t)}},[r,s,i,n,l]),e.jsxs("div",{id:"js-particles",style:{width:"100%",height:c,position:"absolute",top:0,left:0,zIndex:o,pointerEvents:"none"},children:[e.jsx("style",{children:`
        #js-particles canvas {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .particles-js-canvas-el {
          position: absolute;
        }
        .particles-js-canvas-el circle {
          fill: currentColor;
          filter: url(#glow);
        }
      `}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:e.jsx("defs",{children:e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})})})]}));export{h as default};
