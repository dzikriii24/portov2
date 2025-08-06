import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";
import { FaGolang, FaJs, FaLinux   } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import "../css/carousel.css";

const DEFAULT_ITEMS = [
  {
    id: 1,
    icon: <FaGolang className="carousel-icon" />,
    description: "Golang Certificate – learning backend programming with Go.",
    background: "https://i.pinimg.com/736x/af/a4/33/afa433095a5e5eef3e9d25c02776c718.jpg",
  },
  {
    id: 2,
    icon: <FaLinux  className="carousel-icon" />,
    description: "NDG Linux Certificate – solid foundation in Linux command line & systems.",
    background: "https://i.pinimg.com/736x/98/21/6c/98216ca3786113c6924fd71a34733f7c.jpg",
  },
  {
    id: 3,
    icon: <FaJs  className="carousel-icon" />,
    description: "JavaScript Certificate – exploring dynamic frontend interactivity.",
    background: "https://i.pinimg.com/736x/a1/bf/d7/a1bfd7bb53c53efe5e3697c026e45964.jpg",
  },
  {
    id: 4,
    icon: <SiPostman className="carousel-icon" />,
    description: "API Automation Certificate – building automated API testing pipelines.",
    background: "https://i.pinimg.com/736x/bd/b1/0c/bdb10ca278826811ce95a93bc79ca74e.jpg",
  },
  {
    id: 5,
    icon: <SiPostman className="carousel-icon" />,
    description: "Basic QA Automation Certificate – introduction to quality assurance & tools.",
    background: "https://i.pinimg.com/736x/7d/63/9e/7d639e3fabb71ca11e239fc2dd8588e7.jpg",
  },
  {
    id: 6,
    icon: <SiPostman className="carousel-icon" />,
    description: "QA Test Activity Certificate – practical application of QA in projects.",
    background: "https://i.pinimg.com/736x/53/2a/ce/532acec9df09361b3791cea968fa01eb.jpg",
  },
  {
    id: 7,
    icon: <RiEnglishInput className="carousel-icon" />,
    description: "Basic English 1 Certificate – building essential English grammar and vocab.",
    background: "https://i.pinimg.com/736x/d3/ed/48/d3ed48d4dae6803e71a082ea7a2bfea0.jpg",
  },
  {
    id: 8,
    icon: <RiEnglishInput className="carousel-icon" />,
    description: "English Speaking Certificate – improving fluency and communication skills.",
    background: "https://i.pinimg.com/736x/92/5b/01/925b010000599555aa4b49d982d2e3c6.jpg",
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 400,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    return (
        <div
            ref={containerRef}
            className={`carousel-container ${round ? "round" : ""}`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
            }}
        >
            <motion.div
                className="carousel-track"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x,
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [
                        -(index + 1) * trackItemOffset,
                        -index * trackItemOffset,
                        -(index - 1) * trackItemOffset,
                    ];
                    const outputRange = [90, 0, -90];
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <motion.div
                            key={index}
                            className={`carousel-item ${round ? "round" : ""}`}
                            style={{
                                width: itemWidth,
                                height: round ? itemWidth : "100%",
                                rotateY: rotateY,
                                backgroundImage: `url(${item.background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                ...(round && { borderRadius: "50%" }),
                            }}
                            transition={effectiveTransition}
                        >
                            <div className={`carousel-item-header ${round ? "round" : ""}`}>
                                <span className="carousel-icon-container">
                                    {item.icon}
                                </span>
                            </div>
                            <div className="carousel-item-content">
                                <div className="carousel-item-title">{item.title}</div>
                                <p className="carousel-item-description">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
                <div className="carousel-indicators">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`carousel-indicator ${currentIndex % items.length === index ? "active" : "inactive"
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
