import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

const whatsappLink = "https://wa.link/y832kg";
const teleagramLink = "https://t.me/Abhas_Kumar";
const githubLink = "https://github.com/abhas-singh15";
const linkedinLink = "https://linkedin.com/in/abhas-kumar04";

const Links = [whatsappLink, teleagramLink, githubLink, linkedinLink];

import { useState } from "react";


export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; // strength
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setPos({ x, y });
  };
  return (
    <section
    onMouseMove={handleMouseMove}
    className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black"
    >

      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      {/* content container */}
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="max-w-2xl text-left">
          <p className="text-xl md:text-5xl mt-10 font-bold text-gray-200 leading-tight">
            Developing High-Performance Backend Systems
          </p>

          <p className="text-sm mt-4 text-gray-400">
            Designing scalable backend systems,
building secure APIs, and solving complex software
engineering problems.
          </p>

          <p className="mt-6 text-gray-500 text-sm font-medium">
  Node.js • Express.js • MongoDB • PostgreSQL • Docker • AWS
</p>

          <div className="mt-6 flex gap-3">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-all duration-300">
              <a href="#projects">
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  View Projects
                </button>
              </a>
            </div>

            <button className="relative border border-green-600 px-6 py-2 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-[0_0_12px_rgba(34,197,94,0.7)]">
              <span className="relative z-10">Resume</span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent via-green-400/40 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-all duration-700"></span>
            </button>
          </div>

          {/* icons */}
          <div className="flex gap-5 mt-8">
            {[FaWhatsapp, FaTelegram, FaGithub, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href={Links[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-700 
                hover:border-white hover:scale-110 
                transition-all duration-300 cursor-pointer"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (GRAPHIC) */}
        <div className="w-full md:w-[55%] relative">

          {/* glow layer */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

          {/* image */}
          <div className="relative w-full mt-25 md:w-1/2 h-[400px] flex items-center justify-self-end overflow-visible">

            {/* glow */}
            <div className="absolute w-[110%] h-[140%] bg-blue-500/10 blur-3xl rounded-full" />

            <img
              src="/hero-quant.png"
              alt="quant graphic"
              style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(1.1)`
              }}
              className="
                absolute bottom-0 right-0 h-[120%] max-w-none object-contain opacity-80 mix-blend-lighten scale-105
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}