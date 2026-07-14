import { useState } from "react";

function ExperienceContent() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div>
          <h3 className="text-2xl font-semibold">Applied AI Engineer</h3>
          <p className="text-purple-400">Dynode AI(Freelance)</p>
        </div>

        <div className="text-gray-400">2026</div>
        <p>
        <p className="text-gray-400">
          • Built ML forecasting pipeline for photovoltaic generation
        </p>
        <p className="text-gray-400">
          • Compared LightGBM, XGBoost, CatBoost and stacking models
        </p>
        <p className="text-gray-400">
          • Increased optimized profit from €146k to €167k
        </p>
        </p>


      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div>
          <h3 className="text-2xl font-semibold">Web Development Intern</h3>
          <p className="text-purple-400">Wings Publication International</p>
        </div>

        <div className="text-gray-400">2024-25</div>

        <p>
        <p className="text-gray-400">
          • Built responsive websites 
        </p>
        <p className="text-gray-400">
          • Optimized SEO and performance
        </p>
        <p className="text-gray-400">
          • Deployed applications on AWS
        </p>
        </p>
      </div>
    </>
  );
}

function EducationContent() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <div>
        <h3 className="text-2xl font-semibold">
          IMSc in Mathematics & Computing
        </h3>
        <p className="text-purple-400">BIT Mesra</p>
      </div>

      <div className="text-gray-400">2023 – 2028</div>

      <p className="text-gray-400">
        Focus on algorithms, probability, optimization, linear algebra and financial
        mathematics.
      </p>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState("experience");

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Experience
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-20">
        <div className="flex bg-[#111] border border-gray-800 rounded-full p-1">
          <button
            onClick={() => setActive("experience")}
            className={`px-6 py-2 rounded-full text-sm transition ${
              active === "experience"
                ? "bg-black text-white"
                : "text-gray-400"
            }`}
          >
            Experience
          </button>

          <button
            onClick={() => setActive("education")}
            className={`px-6 py-2 rounded-full text-sm transition ${
              active === "education"
                ? "bg-black text-white"
                : "text-gray-400"
            }`}
          >
            Education
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-12">
        {active === "experience" ? <ExperienceContent /> : <EducationContent />}
      </div>
    </section>
  );
}