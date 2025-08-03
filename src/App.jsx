import LightBG from './component/LightBG';
import TrueFocus from './component/TextTop';
import ProfileCard from './component/ProfileCard'
import TextName from './component/TextName';
import TypeText from './component/TypeText'
import Captions from './component/Captions';
import CurvedLoop from './component/CurvedLoop';
import SosmedCard from './component/SosmedCard';
import FadeContent from './animations/FadeContent';
import GradientText from './component/Gradient';
import Squares from './component/Square';
import CardSwap, { Card } from './component/CardSwap';
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import ParticlesBackground from "./components/lightswind/ParticlesBackground";
import './css/card.css';
import { gsap } from 'gsap';
import RotatingText from './component/RotatingText';
import TiltedCard from './component/TitledCard';
import InfiniteScroll from './component/InfiniteScroll';
import TextScrollMarquee from './components/lightswind/TextScrollMarquee';
import GlassIcons from './component/GlassIcons';
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi';
import { IoLogoPython } from "react-icons/io";
import { TbBrandPhp, TbBrandMysql } from "react-icons/tb";
import { RiReactjsLine, RiJavaLine, RiOpenaiFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoGithub, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { BiLogoTailwindCss, BiLogoGoLang } from "react-icons/bi";
import Carousel3D from '@/components/lightswind/carousel-3d';
import Draggable3DImageRing from '@/components/lightswind/draggable-3d-image-ring';
import RollingGallery from './component/RollingGallery';
import Carousel from './component/Carousel';


const imageUrls = [
  "https://i.pinimg.com/736x/43/b0/b6/43b0b6c77528df61d92623c4bdc1e397.jpg",
  "https://i.pinimg.com/1200x/8e/90/1f/8e901f7e4827cac9073ae2c3131d90fa.jpg",
  "https://i.pinimg.com/1200x/5d/4c/cf/5d4ccf1e420b6111429f7526ea2369ec.jpg",
  "https://i.pinimg.com/1200x/0d/4a/d9/0d4ad9cfb961945a403c829becc6deff.jpg",
  "https://i.pinimg.com/736x/49/cf/c6/49cfc6c4b5a1cbbf2578bdd4abdfedc3.jpg",
  "https://i.pinimg.com/736x/d4/58/a2/d458a2b8662458f911214ad6da197a26.jpg",
];


const eventsEdu = [
  {
    year: "2006 - Present",
    title: "Learning Through Experience",
    subtitle: "At Home with Mom",
    description: "Not just books, I grew up learning real-life lessons from daily moments at home."
  },
  {
    year: "2020 - 2023",
    title: "Science Student (MIPA)",
    subtitle: "MAN 5 Bogor",
    description: "Graduated from the science major. Explored STEM, stayed curious, and had fun learning."
  },
  {
    year: "2023 - Present",
    title: "Informatics Engineering Student",
    subtitle: "UIN Sunan Gunung Djati Bandung",
    description: "Diving into software development, IT support, and a bit of AI along the way."
  },
];

const eventsExp = [
  {
    year: "Jan 2023 - Present",
    title: "Admin & Product Designer",
    subtitle: "Tuki Frame",
    description: "Handle orders, design products, and manage digital stuff for the online shop."
  },
  {
    year: "Dec 2024 - Present",
    title: "App Developer Volunteer",
    subtitle: "Informatics Digital Service",
    description: "Build features for web & mobile apps using TypeScript for campus organization."
  },
  {
    year: "Jun 2025 - Present",
    title: "IT Support Intern",
    subtitle: "UIN Bandung Central Library",
    description: "Build internal tools, sync databases, and improve system for a smoother library experience."
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "Logistics Committee",
    subtitle: "MONITOR (Informatics Student Orientation)",
    description: "Handled equipment and event needs during the freshman orientation for Informatics Engineering."
  },
  {
    year: "Jun 2025 - Sep 2025",
    title: "Engineer Team",
    subtitle: "SGDRC – Robot Competition",
    description: "Contributed to designing, maintain, and assembling robots for robotics competition."
  }
];


const items = [
  { content: "Team leadership – leading without bossing around" },
  { content: "Time management – I get things done, no matter what" },
  { content: "Written communication – making words actually make sense" },
  { content: "Teamwork – love working with cool people" },
  { content: "Critical thinking – I question stuff before jumping in" },
  { content: "Creative thinking – ideas pop up like memes in my head" },
  { content: "Problem solving – figuring stuff out is kinda my thing" },
  { content: "Fast learner – just show me once, I got it" },
  { content: "Responsibility – if I say I’ll do it, I mean it" },
];


const projects = [
  {
    id: 1,
    title: "GUTHB SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "https://i.pinimg.com/1200x/88/f3/12/88f3121cc316eee5ea56e4463b1b252a.jpg",
    link: "https://github.com/dzikriii24"
  },
  {
    id: 2,
    title: "6th SENSE Safety link dei System",
    brand: "FireCat LLLLGroup",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "https://i.pinimg.com/1200x/88/f3/12/88f3121cc316eee5ea56e4463b1b252a.jpg",
    link: ""
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "https://i.pinimg.com/1200x/88/f3/12/88f3121cc316eee5ea56e4463b1b252a.jpg",
    link: "/projects/firecat"
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "https://i.pinimg.com/1200x/88/f3/12/88f3121cc316eee5ea56e4463b1b252a.jpg",
    link: "/projects/firecat"
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "https://i.pinimg.com/1200x/88/f3/12/88f3121cc316eee5ea56e4463b1b252a.jpg",
    link: "/projects/firecat"
  }
];
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const techStack = [
  { icon: <IoLogoPython />, color: '#FFC107', label: 'Python' },
  { icon: <TbBrandPhp />, color: '#640D5F', label: 'PHP' },
  { icon: <RiReactjsLine />, color: 'navy', label: 'React' },
  { icon: <IoLogoJavascript />, color: '#E1AA36', label: 'Javascript' },
  { icon: <TbBrandMysql />, color: 'orange', label: 'MySQL' },
  { icon: <RiJavaLine />, color: '#8A0000', label: 'Java' },
  { icon: <IoLogoGithub />, color: '#09122C', label: 'Github' },
  { icon: <BiLogoTailwindCss />, color: '#0c39c0ff', label: 'Tailwind CSS' },
  { icon: <IoLogoHtml5 />, color: '#B12C00', label: 'HTML' },
  { icon: <IoLogoCss3 />, color: '#244cccff', label: 'CSS' },
  { icon: <BiLogoGoLang />, color: '#00c5cfff', label: 'Golang' },
  { icon: <RiOpenaiFill />, color: '#07003bff', label: 'OpenAI' },
];
function App() {
  return (
    <div>
      <div className='absolute w-full h-screeen bg-[#000]'>
        <LightBG
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={2.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div>
        <section className="text-white bg-none z-10 relative lg:grid lg:h-screen lg:place-content-center">
          <div
            className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
          >
            <div className="max-w-prose text-left">
              <div className="text-xl font-bold sm:text-xl">
                <TrueFocus
                  sentence="Informatics Engineering"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="red"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
              <div className="mt-2 text-4xl font-bold sm:text-5xl">
                <TextName
                  text="Dzikri Rabbani"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}

                />

              </div>

              <div className="text-2xl font-bold sm:text-2xl mt-3">
                <TypeText
                  text={["Full Stack Developer", "IT Support Engineer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
              <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
                <Captions text="Hi! I’m Dzikri Rabbani, 19 years old and currently in my 3rd year of Informatics Engineering. I have a genuine interest in technology, enjoy coding, exploring IoT, and learning about AI/ML. I love discovering new things and believe in growing a little every day." disabled={false} speed={3} className='custom-class' />
              </div>
              <div className="mt-4 text-base text-pretty sm:text-lg/relaxed italic">
                <Captions text=" For me, never stop learning, because life never stops teaching" disabled={false} speed={3} className='custom-class' />
              </div>

            </div>
            <div className="mt-8 sm:mt-0 flex justify-center items-center">
              <ProfileCard
                name="Dzikri Rabbani"
                title="Informatics Engineering Student"
                handle="sweswoz"
                status="Online"
                contactText="Contact Me"
                avatarUrl="src\assets\profileee.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>
        </section>
      </div>
      <div className='mb-10'>
        <CurvedLoop
          marqueeText="Ready ✦ To ✦ Explore ✦ My ✦ Page ✦ ? ✦ Let's ✦ Go ✦ !"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>



      {/* Timelinee */}
      <div>
        <div className='mt-10 absolute w-full h-[700vh] bg-black overflow-hidden z-0'>
          <ParticlesBackground
            colors={['#00ffff', '#ff00ff', '#ffaa00']}
            size={4}
            countDesktop={80}
            countTablet={60}
            countMobile={40}
            zIndex={1}
            height="700vh"
          />
        </div>


        <div className="my-grid sm:mt-40">

          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className="min-h-screen w-full box">
              <ScrollTimeline
                events={eventsEdu}
                title="Education & The Journey So Far"
                subtitle="Scroll to explore my educational journey"
                progressIndicator={true}
                cardAlignment="alternating"
                revealAnimation="fade"
              />
            </div>
          </FadeContent>

          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className="min-h-screen w-full box">
              <ScrollTimeline
                events={eventsExp}
                title="Experience & Organizations"
                subtitle="Scroll to explore my experience"
                progressIndicator={true}
                cardAlignment="alternating"
                revealAnimation="fade"
              />
            </div>
          </FadeContent>

        </div>

      </div>

      <div className='grid grid-cols-2 px-2 pb-40 z-10'>
        <div className='flex flex-row sm:items-center sm:justify-center relative'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>
              <TextName
                text="Things I Can Kinda Do"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}

              />

            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Captions text="Hard Skills (Still Learning)." disabled={false} speed={3} className='custom-class' />
            </div>
          </FadeContent>
        </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            skewAmount={4}            // Lebih halus skew-nya
            easing="power1.inOut"

          >
            <Card>
              <img
                src="src\assets\coding.png" // ganti dengan path atau URL gambarnya
                alt="Card Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </Card>
            <Card>
              <img
                src="src\assets\modeling.png" // ganti dengan path atau URL gambarnya
                alt="Card Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </Card>
            <Card>
              <img
                src="src\assets\msoffice.png" // ganti dengan path atau URL gambarnya
                alt="Card Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </Card>
            <Card>
              <img
                src="src\assets\githubs.png" // ganti dengan path atau URL gambarnya
                alt="Card Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </Card>
          </CardSwap>

        </div>
      </div>


      <div className="sm:h-[62vh] h-72 w-full bg-black flex justify-center items-center relative -mt-30 overflow-hidden">

        {/* LightBG - di bawah */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightBG
            raysOrigin="left"
            raysColor="#ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={2.0}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Marquee - ditaruh paling atas */}
        <div className="absolute z-[9999] w-full flex justify-center items-center pointer-events-auto">
          <TextScrollMarquee
            baseVelocity={5}
            direction="left"
            className="text-3xl font-bold uppercase text-white whitespace-nowrap"
            scrollDependent={false}
            delay={500}
          >
            Explore more? LET'S GOOOOOO 🚀
          </TextScrollMarquee>
        </div>

      </div>


      {/* Softskill */}
      <div className='z-50 my-grid-2'>
        <div className='flex flex-row sm:items-center sm:justify-center relative px-4'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <h1 className='sm:text-5xl text-2xl font-bold text-center mt-10'>
              <TextName
                text="Human Skills That Actually Matter"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}

              />

            </h1>
            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Captions text="Soft skills that come naturally to me." disabled={false} speed={3} className='custom-class' />
            </p>
          </FadeContent>
        </div>
        <div style={{ height: '500px', position: 'relative' }} className='z-50 col-span-2'>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>


      {/* tech stack */}

      <div>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div className='sm:text-5xl text-2xl font-bold text-center mt-10 px-2'>
            <TextName
              text="Tech Stack I’ve Played With"
              delay={150}
              animateBy="words"
              direction="left"
              onAnimationComplete={handleAnimationComplete}

            />

          </div>
          <div className="px-2 mt-4 text-base text-pretty sm:text-lg/relaxed">
            <Captions text="but sometimes still peek at the docs, It's human bro." disabled={false} speed={3} className='custom-class' />
          </div>
        </FadeContent>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div style={{ height: '600px', position: 'relative' }} className='justify-center items-center flex flex-col px-6 mx-auto'>
            <GlassIcons items={techStack} className="custom-class" />
          </div>
        </FadeContent>

      </div>
      <div>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>
            <TextName
              text="What I’ve Cooked in My Dev Kitchen"
              delay={150}
              animateBy="words"
              direction="left"
              onAnimationComplete={handleAnimationComplete}

            />

          </div>
          <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            <Captions text="Some of these I built alone, some with friends. Either way, it’s all part of the fun (and chaos) of learning and creating" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='mt-4'>
            <Carousel3D
              items={projects}
              autoRotate={true}
              rotateInterval={4000}
              cardHeight={500}
            />
          </div>

        </FadeContent>

      </div>



      <div className='z-50 my-grid'>
        <div className='flex flex-row sm:items-center sm:justify-center relative px-4'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>
              <TextName
                text="Human Skills That Actually Matter"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}

              />

            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Captions text="Soft skills that come naturally to me." disabled={false} speed={3} className='custom-class' />
            </div>
          </FadeContent>
        </div>

        <div style={{ height: '500px', position: 'relative' }} className='z-50 sm:justify-center sm:items-center sm:flex'>
          <Carousel
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>




















      {/* Lasting get in touch */}
      <div className='relative w-screen h-screen overflow-hidden'>
        <div className='absolute inset-0 w-full h-60 sm:h-[500px] mt-20 sm:mt-30 z-0'>
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#222'
          />
        </div>
        <div className='grid grid-cols-3 sm:px-40 sm:grid gap-4 p-4 mx-auto max-w-screen-xl mt-20 sm:mt-40'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <SosmedCard
              className="custom-spotlight-card group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br border border-white/10 backdrop-blur-xl card-glass"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >

              <div className='flex flex-col items-center justify-center'>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class mb-3 text-sm sm:text-lg -mt-4 sm:mt-0 font-semibold"
                >
                  Instagram
                </GradientText>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2" /><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16" /><circle cx="180" cy="76" r="12" /></svg>
                <p className="mt-4 text-base text-pretty text-sm sm:text-lg/relaxed sm:w-full border-t border-white/10 pt-3 text-zinc-400 text-center">
                  <Captions text="sweswos" disabled={false} speed={3} className='custom-class' />
                </p>
              </div>

            </SosmedCard>
          </FadeContent>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <SosmedCard
              className="custom-spotlight-card group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br border border-white/10 backdrop-blur-xl card-glass"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >

              <div className='flex flex-col items-center justify-center'>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class mb-3 text-sm sm:text-lg -mt-4 sm:mt-0 font-semibold"
                >
                  Linkedin
                </GradientText>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="32" y="32" width="192" height="192" rx="8" opacity="0.2" /><rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="88" cy="84" r="12" /></svg>
                <p className="mt-4 text-base text-pretty text-sm sm:text-lg/relaxed sm:w-full border-t border-white/10 pt-3 text-zinc-400 text-center">
                  <Captions text="dzikrirabbani" disabled={false} speed={3} className='custom-class' />
                </p>
              </div>

            </SosmedCard>
          </FadeContent>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <SosmedCard
              className="custom-spotlight-card group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br border border-white/10 backdrop-blur-xl card-glass"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >

              <div className='flex flex-col items-center justify-center'>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class mb-3 text-sm sm:text-lg -mt-4 sm:mt-0 font-semibold"
                >
                  Github
                </GradientText>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40Z" opacity="0.2" /><path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" opacity="0.2" /><path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
                <p className="mt-4 text-base text-pretty text-sm sm:text-lg/relaxed sm:w-full border-t border-white/10 pt-3 text-zinc-400 text-center">
                  <Captions text="dzikriii24" disabled={false} speed={3} className='custom-class' />
                </p>
              </div>

            </SosmedCard>
          </FadeContent>



        </div>

      </div>

    </div>


  )
}

export default App
