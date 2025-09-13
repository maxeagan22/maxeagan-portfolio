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
    "MongoDB",
    "PostgreSQL",
    "Elasticsearch",
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

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-6">
              Passionate software developer focused on building scalable web
              applications, writing maintainable code, and delivering measurable
              results through real-world projects and collaborative teamwork.
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

          {/* Stack Education above Work Experience */}
          <div className="flex flex-col gap-6 mt-8">
            {/* Education */}
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

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Dairy Department Manager at Hy-Vee (Jul 2025 - Present)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Increased dairy sales by ~5% over one quarter through
                      targeted promotions and optimized product placement.
                    </li>
                    <li>
                      Reduced waste by ~10% while supervising 5 associates,
                      improving team productivity by ~12%.
                    </li>
                    <li>
                      Streamlined ordering and inventory tracking, reducing
                      out-of-stock instances by ~8%.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Merchandiser at Breakthru Beverage Missouri (Jul 2023 - Jul
                    2025)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Managed merchandising across 3 high-volume accounts,
                      improving product availability by ~12%.
                    </li>
                    <li>
                      Maintained 95% compliance with brand standards by auditing
                      displays and optimizing product placement.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Retail Associate at Hy-Vee (Apr 2019 - Jul 2025)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Improved department efficiency by ~10% over 3 months
                      through multi-department support.
                    </li>
                    <li>
                      Mentored 12+ new employees, reducing onboarding ramp-up
                      time by ~10% within the first month.
                    </li>
                    <li>
                      Increased customer satisfaction scores by ~8% over 6
                      months through proactive service and collaboration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
