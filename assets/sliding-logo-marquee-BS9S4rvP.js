import{o as p,r as n,j as e,n as L}from"./index-S2etx8QC.js";/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],D=p("pause",C);/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],M=p("play",I);function A({items:d,speed:h=60,pauseOnHover:o=!0,enableBlur:r=!0,blurIntensity:x=1,height:v="120px",width:f="100%",gap:y="0.5rem",scale:b=1,direction:q="horizontal",autoPlay:w=!0,backgroundColor:k,showGridBackground:z=!1,className:j,onItemClick:N,enableSpillEffect:$=!1,animationSteps:c=8,showControls:E=!0}){const s=n.useRef(null),[t,l]=n.useState(w),[R,P]=n.useState({width:0,height:0});n.useEffect(()=>{const i=()=>{if(s.current){const a=s.current.getBoundingClientRect();P({width:a.width,height:a.height})}};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const u=i=>{i.href&&window.open(i.href,"_blank","noopener,noreferrer"),N?.(i)},_=()=>{l(!t)},m=Array.from({length:c},(i,a)=>e.jsx("div",{style:{"--index":a}},a));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .sliding-marquee-container {
          --speed: ${h};
          --count: ${d.length};
          --scale: ${b};
          --blur: ${x};
          --blurs: ${c};
        }

        .sliding-marquee-resizable {
          overflow: clip;
          container-type: size;
          scale: var(--scale);
          width: 100%;
          height: ${v};
          min-height: 100px;
          min-width: 300px;
        }

        @media (min-width: 600px) {
          .sliding-marquee-resizable {
            min-width: 500px;
          }
        }

        @media (min-width: 1024px) {
          .sliding-marquee-resizable {
            min-width: 800px;
          }
        }

        .sliding-marquee-resizable[data-spill="true"] .sliding-marquee-inner::after {
          content: "";  
          position: fixed;
          top: 50%;
          left: 50%;
          width: calc(var(--scale) * 10000vw);
          height: calc(var(--scale) * 10000vh);
          pointer-events: none;
          translate: -50% -50%;
          mask: linear-gradient(white, white) 50% 50% / 100% 100% no-repeat,
              linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat;
          mask-composite: exclude;
        }

        .sliding-marquee-inner {
          height: 100%;
          width: 100%;
          position: relative;
          mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
          display: grid;
          min-height: 100px;
          min-width: 300px;
          pointer-events: none;
        }

        .sliding-marquee-blur {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 25%;
          z-index: 2;
          pointer-events: none;
        }

        .sliding-marquee-blur--right {
          right: 0;
        }

        .sliding-marquee-blur--left {
          left: 0;
          rotate: 180deg;
        }

        .sliding-marquee-blur div {
          position: absolute;
          inset: 0;
          z-index: var(--index);
          mask: linear-gradient(90deg,
              transparent calc(var(--index) * calc((100 / var(--blurs)) * 1%)),
              black calc((var(--index) + 1) * calc((100 / var(--blurs)) * 1%)),
              black calc((var(--index) + 2) * calc((100 / var(--blurs)) * 1%)),
              transparent calc((var(--index) + 3) * calc((100 / var(--blurs)) * 1%)));
          backdrop-filter: blur(calc((var(--index, 0) * var(--blur, 0)) * 1px));
        }

        .sliding-marquee-list {
          display: flex;
          gap: ${y};
          padding: 0;
          margin: 0;
          list-style-type: none;
          height: 100%;
          width: fit-content;
          align-items: center;
          pointer-events: auto;
        }

        .sliding-marquee-item {
          height: 100%;
          font-size: clamp(1rem, 3vw + 0.5rem, 4rem);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          pointer-events: auto;
        }

        .sliding-marquee-item:hover {
          transform: scale(1.05);
        }

        .sliding-marquee-item svg {
          height: 100%;
        }

        @media (max-width: 767px) {
          .sliding-marquee-list {
            gap: 0.25rem !important;
          }

          .sliding-marquee-item {
            height: 100% !important;
            font-size: 0.875rem !important;
          }

          .sliding-marquee-item svg {
            height: 100% !important;
          }
        }

        [data-play-state="running"] .sliding-marquee-list,
        [data-play-state="running"] .sliding-marquee-item {
          animation-play-state: running !important;
        }

        [data-play-state="paused"] .sliding-marquee-list,
        [data-play-state="paused"] .sliding-marquee-item {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-translate="items"] .sliding-marquee-list {
            gap: 0;
          }

          [data-translate="items"][data-direction="horizontal"] .sliding-marquee-inner {
            padding-inline: 0;
          }

          [data-translate="items"] .sliding-marquee-item {
            --duration: calc(var(--speed) * 1s);
            --delay: calc((var(--duration) / var(--count)) * (var(--index, 0) * -1));
            animation: slide var(--duration) var(--delay) infinite linear paused;
            translate: var(--origin-x) var(--origin-y);
          }

          [data-translate="items"][data-direction="horizontal"] .sliding-marquee-item {
            --origin-x: calc(((var(--count) - var(--index)) + var(--inset, 0)) * 100%);
            --origin-y: 0;
            --destination-x: calc(calc((var(--index) + 1 + var(--outset, 0)) * -100%));
            --destination-y: 0;
          }

          @keyframes slide {
            100% {
              translate: var(--destination-x) var(--destination-y);
            }
          }
        }
        `}),e.jsxs("div",{ref:s,className:L("sliding-marquee-container relative",j),style:{width:f,background:k},onMouseEnter:()=>o&&l(!1),onMouseLeave:()=>o&&l(!0),children:[z&&e.jsx("div",{className:""}),e.jsx("div",{className:"sliding-marquee-resizable","data-translate":"items","data-direction":q,"data-blurring":r,"data-play-state":t?"running":"paused","data-spill":$,children:e.jsxs("div",{className:"sliding-marquee-inner",children:[r&&e.jsx("div",{className:"sliding-marquee-blur sliding-marquee-blur--left",children:m}),e.jsx("ul",{className:"sliding-marquee-list text-foreground",children:d.map((i,a)=>e.jsx("li",{className:"sliding-marquee-item text-foreground",style:{"--index":a},onClick:()=>u(i),role:"button",tabIndex:0,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&u(i)},children:i.content},i.id))}),r&&e.jsx("div",{className:"sliding-marquee-blur sliding-marquee-blur--right",children:m})]})}),E&&e.jsx("button",{onClick:_,className:`absolute top-0 right-0 z-10 px-2 py-1 text-xs bg-white/10 text-foreground\r
            rounded hover:bg-background/20 transition-colors`,"aria-label":t?"Pause animation":"Play animation",children:t?e.jsx(D,{}):e.jsx(M,{})})]})]})}export{A as SlidingLogoMarquee,A as default};
