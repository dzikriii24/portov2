import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client';

// --- Components ---
const LightBG = React.lazy(() => import('./component/LightBG'));
const TrueFocus = React.lazy(() => import('./component/TextTop'));
const ProfileCard = React.lazy(() => import('./component/ProfileCard'));
const TextName = React.lazy(() => import('./component/TextName'));
const TypeText = React.lazy(() => import('./component/TypeText'));
const Captions = React.lazy(() => import('./component/Captions'));
const CurvedLoop = React.lazy(() => import('./component/CurvedLoop'));
const InfiniteScroll = React.lazy(() => import('./component/InfiniteScroll'));
const GlassIcons = React.lazy(() => import('./component/GlassIcons'));
const Jasa = React.lazy(() => import('./component/Jasa'));
const ChatBubble = React.lazy(() => import('./component/ChatBubble'));
const Carousel = React.lazy(() => import('./component/Carousel'));

// --- Components from lightswind ---
const ParticlesBackground = React.lazy(() => import('./components/lightswind/ParticlesBackground'));
const TextScrollMarquee = React.lazy(() => import('./components/lightswind/TextScrollMarquee'));

// --- Handling Default and Named Exports ---
// Untuk file yang punya default export (CardSwap) dan named export (Card)
const CardSwap = React.lazy(() => import('./component/CardSwap'));

// Cara khusus untuk me-load named export 'Card' dengan React.lazy
export const Card = React.lazy(() =>
  import('./component/CardSwap').then(module => ({ default: module.Card }))
);
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import './css/card.css';
import { gsap } from 'gsap';



import { Sparkles } from "lucide-react";


// ICONSSSS
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi';
import { IoLogoPython, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbBrandPhp, TbBrandMysql } from "react-icons/tb";
import { RiReactjsLine, RiJavaLine, RiOpenaiFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoGithub, IoLogoHtml5, IoLogoCss3, IoDocumentSharp } from "react-icons/io5";
import { BiLogoTailwindCss, BiLogoGoLang } from "react-icons/bi";
import { FaInstagramSquare, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";


// ANIMATION
import FadeContent from './animations/FadeContent';



const Carousel3D = React.lazy(() => import('@/components/lightswind/carousel-3d'));

const SlidingLogoMarquee = React.lazy(() => import('@/components/lightswind/sliding-logo-marquee'))

const imageUrls = [
  "https://i.pinimg.com/736x/43/b0/b6/43b0b6c77528df61d92623c4bdc1e397.jpg",
  "https://i.pinimg.com/1200x/8e/90/1f/8e901f7e4827cac9073ae2c3131d90fa.jpg",
  "https://i.pinimg.com/1200x/5d/4c/cf/5d4ccf1e420b6111429f7526ea2369ec.jpg",
  "https://i.pinimg.com/1200x/0d/4a/d9/0d4ad9cfb961945a403c829becc6deff.jpg",
  "https://i.pinimg.com/736x/49/cf/c6/49cfc6c4b5a1cbbf2578bdd4abdfedc3.jpg",
  "https://i.pinimg.com/736x/d4/58/a2/d458a2b8662458f911214ad6da197a26.jpg",
];


const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(33314533) },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(33319540) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(33315017) },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(33319036) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(33324957) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(33314755) },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(33319919) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(33320663) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(33324958) }
]


const logos = [
  {
    id: "1",
    content: <FaLinkedinIn className='text-9xl' />,
    href: "https://www.linkedin.com/in/dzikrirabbani/"
  },
  {
    id: "2",
    content: <LuGithub className='text-9xl' />,
    href: "https://github.com/dzikriii24"
  },
  {
    id: "3",
    content: <FaInstagram className='text-9xl' />,
    href: "https://www.instagram.com/sweswoz/"
  },
  {
    id: "4",
    content: <MdOutlineMailOutline className='text-9xl' />,
    href: "mailto:dzikrirabbani2401@gmail.com"
  },
  {
    id: "5",
    content: <FaWhatsapp className='text-9xl' />,
    href: "https://wa.me/6285156296580"
  }
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
    title: "KampEase",
    brand: "",
    description: "KampEase is a web-based platform designed to simplify campus navigation and enhance the daily experience of students, staff, and visitors. Through KampEase, users can easily locate classrooms, public facilities, administrative offices, and other key points of interest across the campus. all in one convenient platform.",
    tags: ["PHP", "MySQL", "OpenStreetMaps API", "Javascript"],
    imageUrl: "https://images.pexels.com/photos/33314541/pexels-photo-33314541.jpeg",
    link: "https://github.com/dzikriii24/KampEase"
  },
  {
    id: 2,
    title: "Sea Salon",
    brand: "",
    description: "Sea Salon is a web-based application designed to help customers book salon services online easily, quickly, and flexibly. With a user-friendly and responsive interface, Sea Salon offers a modern digital solution to meet the needs of both salons and their customers in today’s fast-paced digital era.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    imageUrl: "https://images.pexels.com/photos/33314756/pexels-photo-33314756.jpeg",
    link: "https://github.com/dzikriii24/seasalon2"
  },
  {
    id: 3,
    title: "Canteen Go",
    brand: "",
    description: "Canteengo is a digital web platform designed to support the sale and promotion of local food products, especially those from small and medium enterprises (UMKM). It offers an easy-to-use, responsive interface that helps sellers showcase their products, manage orders, and reach a wider audience.",
    tags: ["PHP", "PHP Library", "JavaScript", "Tailwind", "MySQL"],
    imageUrl: "https://images.pexels.com/photos/33315015/pexels-photo-33315015.jpeg",
    link: "https://github.com/dzikriii24/CanteenGo_code"
  },
  {
    id: 4,
    title: "Smart POS System for Modern Retail",
    brand: "",
    description: "A lightweight and user-friendly cashier app designed to simplify sales transactions, manage inventory, and generate real-time reports. Perfect for small businesses, cafés, retail stores, and local shops. Sell smarter, track better, grow faster.",
    tags: ["Java", "Java Swing"],
    imageUrl: "https://images.pexels.com/photos/33319037/pexels-photo-33319037.jpeg",
    link: "https://github.com/dzikriii24/supermarketGUI"
  },
  {
    id: 5,
    title: "Smart Laundry App",
    brand: "",
    description: "A lightweight and user-friendly laundry app designed to simplify order recording, track laundry progress, and manage customer data efficiently. Perfect for home-based laundries, kilo laundry services, and professional laundry businesses. Run a more organized operation, speed up your workflow, and keep your customers satisfied.",
    tags: ["Java", "Java Spring-boot", "MySQL", "H2 Database"],
    imageUrl: "https://images.pexels.com/photos/33319538/pexels-photo-33319538.jpeg",
    link: "https://github.com/dzikriii24/SpringBoot"
  },
  {
    id: 6,
    title: "Digital Wedding Invitation",
    brand: "",
    description: "A digital wedding invitation app designed to offer a more elegant, personal, and practical way to invite guests. Send your invites online, let guests RSVP with ease, showcase your love story, photo gallery, and provide event details with interactive maps. Perfect for modern couples who want to celebrate love with a touch of technology.",
    tags: ["HTML", "SASS", "JavaScript", "Tailwind"],
    imageUrl: "https://images.pexels.com/photos/33319918/pexels-photo-33319918.jpeg",
    link: "https://dzikriii24.github.io/1sUndangan/"
  },
  {
    id: 7,
    title: "Tanduria",
    brand: "",
    description: "Tanduria is a web-based application designed to help farmers and land managers—especially the younger generation—manage agriculture digitally and efficiently.With features like field condition monitoring, weather prediction, planting schedules, crop yield tracking, and IoT-based smart irrigation, Tanduria offers an accessible and user-friendly smart farming solution.",
    tags: ["PHP", "Flask", "API Development", "MySQL", "IoT"],
    imageUrl: "https://images.pexels.com/photos/33320664/pexels-photo-33320664.jpeg",
    link: "https://github.com/dzikriii24/tanduria"
  },
   {
    id: 8,
    title: "Bootstrap Company Profile",
    brand: "",
   description: "Bootstrap Company Profile adalah template berbasis Bootstrap yang dirancang untuk menampilkan profil perusahaan secara modern, responsif, dan profesional. Template ini dapat digunakan untuk memperkenalkan visi, misi, layanan, tim, serta portofolio perusahaan dengan tampilan yang elegan dan mudah disesuaikan.",
    tags: ["Bootstrap", "HTML", "JavaScript", "Tugas PAW"],
    imageUrl: "https://i.pinimg.com/736x/9f/42/0c/9f420cadb36b0846c214709f8f97f1a9.jpg",
    link: "https://dzikrirabbani-paw.netlify.app/"
  },
  {
    id: 9,
    title: "Tailwind Company Profile",
    brand: "",
    description: "Tailwind Company Profile adalah template berbasis Tailwind CSS yang dirancang untuk menampilkan identitas perusahaan secara modern, minimalis, dan responsif. Template ini membantu perusahaan memperkenalkan profil, layanan, portofolio, serta tim dengan tampilan yang fleksibel dan mudah disesuaikan sesuai kebutuhan branding.",
    tags: ["Tailwind", "HTML", "JavaScript", "Tugas PAW"],
    imageUrl: "https://i.pinimg.com/736x/75/8e/c9/758ec97fcf075e6e3e6a5409d08c4a9a.jpg",
    link: "https://dzikrirabbani-paw.netlify.app/tailwind"
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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>

      </div>

      <div>
        <section className="text-white bg-none z-10 relative lg:grid lg:h-screen lg:place-content-center">
          <div
            className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
          >
            <div className="max-w-prose text-left">
              <div className="text-xl font-bold sm:text-xl">
                <Suspense fallback={<div>Loading...</div>}>
                  <TrueFocus
                    sentence="Informatics Engineering"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                  />
                </Suspense>


              </div>
              <div className="mt-2 text-4xl font-bold sm:text-5xl">
                <Suspense fallback={<div>Loading...</div>}>
                  <TextName
                    text="Dzikri Rabbani"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}

                  />
                </Suspense>


              </div>

              <div className="text-2xl font-bold sm:text-2xl mt-3">

                <Suspense fallback={<div>Loading...</div>}>
                  <TypeText
                    text={["Full Stack Developer", "IT Support Engineer"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </Suspense>
              </div>
              <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
                <Suspense fallback={<div>Loading...</div>}>
                  <Captions text="Hi! I’m Dzikri Rabbani, 19 years old and currently in my 3rd year of Informatics Engineering. I have a genuine interest in technology, enjoy coding, exploring IoT, and learning about AI/ML. I love discovering new things and believe in growing a little every day." disabled={false} speed={3} className='custom-class' />
                </Suspense>

              </div>
              <div className="mt-4 text-base text-pretty sm:text-lg/relaxed italic">
                <Suspense fallback={<div>Loading...</div>}>
                  <Captions text=" For me, never stop learning, because life never stops teaching" disabled={false} speed={3} className='custom-class' />
                </Suspense>

              </div>

              <FadeContent>
                <div className='mt-6'>
                  <a
                    class="group flex items-center justify-between gap-4 w-60 rounded-lg border border-white bg-transparent px-5 py-3 transition-colors hover:bg-transparent focus:ring-3 focus:outline-hidden"
                    href="https://drive.google.com/drive/folders/1aaMdBPFB-zggxKNh068eXNZkWEk2Kh9V?usp=sharing" target='blank'
                  >
                    <span class="font-medium text-white transition-colors group-hover:text-white/50">
                      Curriculum Vitae
                    </span>

                    <span class="text-white text-2xl py-2">
                      <IoDocumentSharp />
                    </span>
                  </a>
                </div>
              </FadeContent>


            </div>
            <div className="mt-8 sm:mt-0 flex justify-center items-center">
              <Suspense fallback={<div>Loading...</div>}>
                <ProfileCard
                  name="Dzikri Rabbani"
                  title="Informatics Engineering Student"
                  handle="sweswoz"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="https://images.pexels.com/photos/33334833/pexels-photo-33334833.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log('Contact clicked')}
                />
              </Suspense>

            </div>
          </div>
        </section>
      </div>
      <div className='mb-10'>

        <Suspense fallback={<div>Loading...</div>}>
          <CurvedLoop
            marqueeText="Ready ✦ To ✦ Explore ✦ My ✦ Page ✦ ? ✦ Let's ✦ Go ✦ !"
            speed={3}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </Suspense>
      </div>



      {/* Timelinee */}
      <div>
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
              <Suspense fallback={<div>Loading...</div>}>
                <TextName
                  text="Things I Can Kinda Do"
                  delay={150}
                  animateBy="words"
                  direction="left"
                  onAnimationComplete={handleAnimationComplete}

                />
              </Suspense>

            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Suspense fallback={<div>Loading...</div>}>
                <Captions text="Hard Skills (Still Learning)." disabled={false} speed={3} className='custom-class' />
              </Suspense>

            </div>
          </FadeContent>
        </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <Suspense fallback={<div>Loading...</div>}>
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
                  loading='lazy'
                  src="https://images.pexels.com/photos/33334936/pexels-photo-33334936.jpeg" // ganti dengan path atau URL gambarnya
                  alt="Card Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Card>
              <Card>
                <img
                  loading='lazy'
                  src="https://images.pexels.com/photos/33334940/pexels-photo-33334940.jpeg" // ganti dengan path atau URL gambarnya
                  alt="Card Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Card>
              <Card>
                <img
                  loading='lazy'
                  src="https://images.pexels.com/photos/33334941/pexels-photo-33334941.jpeg" // ganti dengan path atau URL gambarnya
                  alt="Card Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Card>
              <Card>
                <img
                  loading='lazy'
                  src="https://images.pexels.com/photos/33334939/pexels-photo-33334939.jpeg" // ganti dengan path atau URL gambarnya
                  alt="Card Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Card>
            </CardSwap>
          </Suspense>


        </div>
      </div>


      <div className="sm:h-[62vh] h-72 w-full bg-black flex justify-center items-center relative -mt-30 overflow-hidden">

        {/* LightBG - di bawah */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>

        </div>

        {/* Marquee - ditaruh paling atas */}
        <div className="absolute z-[9999] w-full flex justify-center items-center pointer-events-auto">

          <Suspense fallback={<div>Loading...</div>}>
            <TextScrollMarquee
              baseVelocity={5}
              direction="left"
              className="text-3xl font-bold uppercase text-white whitespace-nowrap"
              scrollDependent={false}
              delay={500}
            >
              Explore more? LET'S GOOOOOO 🚀
            </TextScrollMarquee>
          </Suspense>
        </div>

      </div>


      {/* Softskill */}
      <div className='z-50 my-grid-2'>
        <div className='flex flex-row sm:items-center sm:justify-center relative px-4'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>

              <Suspense fallback={<div>Loading...</div>}>

                <TextName
                  text="Human Skills That Actually Matter"
                  delay={150}
                  animateBy="words"
                  direction="left"
                  onAnimationComplete={handleAnimationComplete}

                />
              </Suspense>
            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Suspense fallback={<div>Loading...</div>}>
                <Captions text="Soft skills that come naturally to me." disabled={false} speed={3} className='custom-class' />
              </Suspense>

            </div>
          </FadeContent>
        </div>
        <div style={{ height: '500px', position: 'relative' }} className='z-50 col-span-2'>

          <Suspense fallback={<div>Loading...</div>}>
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </Suspense>
        </div>
      </div>


      {/* tech stack */}

      <div className='mt-40'>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div className='sm:text-5xl text-2xl font-bold text-center mt-10 px-2'>
            <Suspense fallback={<div>Loading...</div>}>
              <TextName
                text="Tech Stack I’ve Played With"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}
              />
            </Suspense>
          </div>
          <div className="px-2 mt-4 text-base text-pretty sm:text-lg/relaxed">
            <Suspense fallback={<div>Loading...</div>}>
              <Captions text="but sometimes still peek at the docs, It's human bro." disabled={false} speed={3} className='custom-class' />

            </Suspense>
          </div>
        </FadeContent>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div style={{ height: '600px', position: 'relative' }} className='justify-center items-center flex flex-col px-6 mx-auto'>
            <Suspense fallback={<div>Loading...</div>}>
              <GlassIcons items={techStack} className="custom-class" />
            </Suspense>
          </div>
        </FadeContent>

      </div>
      <div className='mt-20'>
        <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
          <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>

            <Suspense fallback={<div>Loading...</div>}>
              <TextName
                text="What I’ve Cooked in My Dev Kitchen"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}
              />
            </Suspense>
          </div>
          <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            <Suspense fallback={<div>Loading...</div>}>
              <Captions text="Some of these I built alone, some with friends. Either way, it’s all part of the fun (and chaos) of learning and creating" disabled={false} speed={3} className='custom-class' />
            </Suspense>

          </div>
          <div className='mt-4'>
            <Suspense fallback={<div>Loading...</div>}>
              <Carousel3D
                items={projects}
                autoRotate={true}
                rotateInterval={4000}
                cardHeight={500}
              />
            </Suspense>

          </div>

        </FadeContent>

      </div>



      <div className='z-50 my-grid mt-20'>
        <div className='flex flex-row sm:items-center sm:justify-center relative px-4'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>

              <Suspense fallback={<div>Loading...</div>}>
                <TextName
                  text="Badges of Growth"
                  delay={150}
                  animateBy="words"
                  direction="left"
                  onAnimationComplete={handleAnimationComplete}

                />

              </Suspense>
            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Suspense fallback={<div>Loading...</div>}>
                <Captions text="Proof that I’ve learned a thing or two along the way." disabled={false} speed={3} className='custom-class' />
              </Suspense>
            </div>
          </FadeContent>
        </div>

        <div style={{ height: '500px', position: 'relative' }} className='z-50 sm:justify-center sm:items-center sm:flex'>

          <Suspense fallback={<div>Loading...</div>}>
            <Carousel
              baseWidth={380}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </Suspense>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex flex-row sm:items-center sm:justify-start mb-10 relative px-4'>
          <FadeContent blur={true} duration={800} easing="ease-out" reverse={true} initialOpacity={0}>
            <div className='sm:text-5xl text-2xl font-bold text-center mt-10'>
              <Suspense fallback={<div>Loading...</div>}>
                <TextName
                  text="Let’s Make Something Cool Together"
                  delay={150}
                  animateBy="words"
                  direction="left"
                  onAnimationComplete={handleAnimationComplete}

                />
              </Suspense>


            </div>
            <div className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              <Suspense fallback={<div>Loading...</div>}>
                <Captions text="Have an idea or want to collab? Hit me up through the socials below. I'm always down to build something fun (or at least try to)." disabled={false} speed={3} className='custom-class' />
              </Suspense>

            </div>
          </FadeContent>
        </div>
        <FadeContent>
          <div className='z-50 sm:items-center sm:flex sm:justify-center sm:justify-self-center mt-20'>
            <Suspense fallback={<div>Loading...</div>}>
              <SlidingLogoMarquee
                items={logos}
                speed={8}
                height="120px"
                enableBlur={true}
                blurIntensity={2}
                pauseOnHover={true}
                showGridBackground={true}
                onItemClick={(item) => console.log("Clicked:", item.id)}
              />
            </Suspense>
          </div>
        </FadeContent>

      </div>

      <div className='mt-40'>
        <FadeContent>
          <div className='sm:text-5xl text-2xl font-bold text-center mb-10 px-2'>
            <Suspense fallback={<div>Loading...</div>}>
              <TextName
                text="Things I Can Build for You"
                delay={150}
                animateBy="words"
                direction="left"
                onAnimationComplete={handleAnimationComplete}

              />
            </Suspense>
          </div>
        </FadeContent>
      </div>


      <div className="App mt-30">
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBubble />
        </Suspense>
      
      </div>


















    </div>


  )
}



export default App
