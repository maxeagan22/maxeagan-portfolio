import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "C",
  ];

  const developerTools = ["Git", "Docker", "Postman", "Firebase", "Jira"];

  const librariesAndFrameworks = [
    "ReactJS",
    "Spring Boot",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "Tailwind CSS",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer eager to build scalable web applications and
              contribute to innovative solutions through hands-on learning and
              real-world projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((item, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {developerTools.map((item, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Libraries/Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {librariesAndFrameworks.map((item, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> – Northwest Missouri
                  State University (Aug 2022 – Dec 2024)
                </li>
                <li>
                  Relevant Coursework: Programming I (Python), Programming II
                  (Java), Data Structures & Algorithms, Software Engineering,
                  Operating Systems, Database Systems, Network Fundamentals, Web
                  Application Development
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Merchandiser at Breakthru Beverage Missouri (July 2023 -
                    July 2025)
                  </h4>
                  <p>
                    Managed retail product displays, coordinated with store
                    staff and sales reps, and ensured brand consistency across
                    multiple locations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Retail Associate at Hy-Vee (2019 – Present)
                  </h4>
                  <p>
                    Delivered consistent, high quality service in a fast-paced
                    retail environment. Adapted to many different roles across
                    sales, inventory, and front-end operations, collaborating
                    with different teams to support day-to-day store operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
