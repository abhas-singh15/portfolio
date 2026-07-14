import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Teach Bridge",
    desc: "A full-stack MERN-based tutoring platform that connects students with tutors through subject-based search, secure authentication, and session booking.",
    image: "/proj2.jpg",
    demo: "https://teach-bridge.vercel.app/",
    github: "https://github.com/abhas-singh15/TeachBridge",
  },
  {
    title: "Solar Forecasting",
    desc: "MLP outperformed persistence baseline by 17% MAE across a 7-day, 168-hour horizon. Compared 4 models: Persistence, SARIMA, Random Forest, and Neural Network on real operational data.",
    image: "/proj1.png",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* LEFT: SCROLL SECTIONS */}
        <div className="space-y-40">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="min-h-[60vh]"
            >
              <h3 className="text-2xl font-semibold">{p.title}</h3>

              <p className="text-gray-400 mt-4 max-w-md">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT: STICKY PREVIEW */}
        <div className="sticky top-24 h-fit">
          <a
            href={projects[active].demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-xl overflow-hidden border border-gray-800 cursor-pointer">
              <img
                src={projects[active].image}
                alt={projects[active].title}
                className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </a>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">
              {projects[active].title}
            </h3>

            <div className="flex gap-4 mt-4">
              <a
                href={projects[active].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Live Demo
              </a>

              <a
                href={projects[active].github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}