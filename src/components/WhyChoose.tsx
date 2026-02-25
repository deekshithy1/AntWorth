
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightbulb,
  ShieldCheck,
  Settings,
  BadgeCheck,
  Users,
} from "lucide-react";
import Card from "./Card";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Innovative Approach",
    img: <Lightbulb size={28} className="text-orange-500" />,
    description:
      "We deliver advanced, future-ready transport technology solutions.",
    backImg: img1,
    bg: "linear-gradient(135deg, #0f0f0f, #1c1c1c)",
  },
  {
    title: "Safety-Focused",
    img: <ShieldCheck size={28} className="text-orange-500" />,
    description:
      "Enhancing road safety and reducing accidents across India.",
    backImg: img2,
    bg: "linear-gradient(135deg, #000000, #1a0f05)",
  },
  {
    title: "Customized Solutions",
    img: <Settings size={28} className="text-orange-500" />,
    description:
      "Tailored systems designed for seamless state-level integration.",
    backImg: img3,
    bg: "linear-gradient(135deg, #111111, #1f1308)",

  },
  {
    title: "Reliable Execution",
    img: <BadgeCheck size={28} className="text-orange-500" />,
    description:
      "Proven expertise with strong government partnerships.",
    backImg: img4,
    bg: "linear-gradient(135deg, #000000, #2b1405)",
  },
  {
    title: "Customer-Centric Approach",
    img: <Users size={28} className="text-orange-500" />,
    description: "Dedicated support and long-term client success.",
    backImg: img5,
    bg: "radial-gradient(circle at top right, #f97316 0%, #111111 40%, #000000 100%)",
  },
];

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".cards");

      // Stack cards
      gsap.set(cards, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, { opacity: 1, scale: 1, y: 0, zIndex: 5 });
        } else {
          gsap.set(card, { opacity: 0, scale: 1.05, y: 80, zIndex: 1 });
        }
      });

      // First background
      gsap.set(sectionRef.current, {
        backgroundColor: data[0].bg,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 150}%`,
          scrub: 1.2,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
      
        // Bring current card to front
        tl.set(card, { zIndex: 10 });
      
        tl.to(sectionRef.current, {
          background: data[i].bg,
          duration: 1.0,
        });
      
        // Animate current card in
        tl.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      
        // Fully hide previous card
        tl.to(
          cards[i - 1],
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        );
      });;
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div
      ref={sectionRef}
     className="relative h-screen overflow-hidden text-white transition-all duration-500"
    >
      <div className="relative h-screen flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto h-full">
          {data.map((d, i) => (
            <Card
              key={i}
              title={d.title}
              description={d.description}
              image={d.img}
              backImg={d.backImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;