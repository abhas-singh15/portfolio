import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Learn",
    desc: "Integrated MSc in Mathematics & Computing at BIT Mesra, with coursework in Data Structures and Algorithms, Database Management System, Computer Networks, Operating Systems and OOPs.",
  },
  {
    title: "Build",
    desc: "I design and develop scalable backend systems and full-stack applications using Node.js, Express.js, React, MongoDB, and PostgreSQL.",
  },
  {
    title: "Deploy",
    desc: "I build production-ready applications with REST APIs, JWT authentication, Docker, cloud deployment, and modern software engineering practices.",
  },
  {
    title: "Explore",
    desc: "I apply machine learning to solve real-world problems while continuously exploring backend engineering, system design, cloud technologies, and scalable software architecture.",
  },
];

export default function About() {
  const refs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisible = 0;
        let visibleIndex = active;

        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);

          // choose the most visible section instead of first hit
          if (entry.intersectionRatio > maxVisible) {
            maxVisible = entry.intersectionRatio;
            visibleIndex = index;
          }
        });

        if (maxVisible > 0.6) {
          setActive(visibleIndex);
        }
      },
      {
        threshold: [0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="about" className="relative py-32 px-6 bg-black">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
            About Me
          </h2>

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className={`min-h-[280px] flex flex-col justify-center transition-all duration-500 ${
                active === i
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-30 blur-sm translate-y-6"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg text-gray-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl text-gray-200 font-medium">
                  {step.title}
                </h2>
              </div>

              <p className="text-gray-400 max-w-md leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 sticky top-32 h-[500px] flex items-center justify-center">

          {/* glow */}
          <div className="absolute w-[130%] h-[130%] bg-purple-500/10 blur-3xl rounded-full" />

          {/* image */}
          <img
            src="/about-img.png"
            alt="about visual"
            className="relative z-10 h-full object-contain opacity-70 mix-blend-lighten transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}