import React, { useEffect, useRef } from 'react'
import CardSolution from './CardSolution';
import gsap from 'gsap';
import tracks from '../assets/images/tracks.png'
import ats from '../assets/images/ats.png'
import cab from '../assets/images/cab.png'
import fleet from '../assets/images/fleetm.png'
import puc from '../assets/images/puc.png'
import ev from '../assets/images/ev.png'
import checkpost from '../assets/images/Checkpost.png'
import reflector from '../assets/images/reflector.png'
import adtt from '../assets/images/adtt.png'
import bus from '../assets/images/bus.png'
const cardsData = [
  {
    title: "PUC Networking Solutions",
    description:
      "Streamlining emissions testing processes to ensure vehicles meet environmental standards and contribute to cleaner air quality.",
      image:puc
  },
  {
    title: "Retro Reflective Tape Authentication",
    description:
      "App-based system to track sales and distribution of reflective tapes, preventing counterfeit products in the market.",
      image:reflector
  },
  {
    title: "Vehicle Location Tracking Device (AIS-140)",
    description:
      "State-of-the-art AIS-140 compliant tracking device with centralized backend for real-time vehicle monitoring.",
      image:tracks
  },
  {
    title: "Automated Driving Testing Track (ADTT)",
    description:
      "AI-powered driving test tracks integrating computer vision and sensors to simulate real-world driving scenarios.",
      image:adtt
  },
  {
    title: "ATS Networking Solution",
    description:
      "Centralized vehicle fitness testing data system enhancing transparency and regulatory oversight.",
      image:ats
  },
  {
    title: "Charging Management System (CMS)",
    description:
      "Smart EV charging management platform enabling efficient and sustainable electric mobility.",
      image:ev
  },
  {
    title: "Depot Management Solutions",
    description:
      "Digital systems empowering public transport depots with seamless operations and maintenance management.",
      image:bus
  },
  {
    title: "Fleet Management Solutions",
    description:
      "Advanced fleet optimization platform improving utilization, performance, and cost efficiency.",
      image:fleet
  },
  {
    title: "Integrated Border Checkposts (ICPs)",
    description:
      "Technology-driven border infrastructure improving trade efficiency and regulatory compliance.",
      image:checkpost
  },
  {
    title: "Cab Aggregator Platform",
    description:
      "Commission-free state-backed ride-hailing ecosystem ensuring fair pricing and driver empowerment.",
      image:cab
  },
];







const Solutions = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 50,
        repeat: -1,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-24 bg-gray-50 overflow-hidden" ref={marqueeRef}>
      
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          An integrated ecosystem of platforms designed to manage compliance,
          monitoring, infrastructure, and public mobility operations through
          a single connected network.
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden w-full">
        <div className="marquee-track flex gap-8 w-max ">
          
          {[...cardsData, ...cardsData].map((card, index) => (
            <CardSolution
              key={index}
              title={card.title}
              image={card.image}
            />
          ))}

        </div>
      </div>

    </section>
  );
};

export default Solutions;
