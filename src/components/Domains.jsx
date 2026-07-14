const domains = [
  {
    title: "Backend Engineering",
    desc: "REST APIs, authentication, databases, scalable services",
  },
  {
    title: "Software Development",
    desc: "Full-stack applications, clean architecture, performance optimization",
  },
  {
  title: "Problem Solving",
  desc: "Data structures, algorithms, competitive programming",
  },
  {
    title: "Applied Machine Learning",
    desc: "Predictive models, data processing, computer vision, AI-powered applications",
  },
];

export default function Domains() {
  return (
    <section className="max-w-6xl mx-auto py-5 px-4">
      <h2 className="text-xl font-semibold mb-8">What I Do</h2>

      <div className="max-h-64 overflow-y-auto mt-10 grid md:grid-cols-2 gap-2">
        {domains.map((d, i) => (
          <div
            key={i}
            className="border border-gray-800 p-6 rounded-xl hover:border-accent transition"
          >
            <h3 className="font-semibold mb-2">{d.title}</h3>
            <p className="text-gray-400 text-sm">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}