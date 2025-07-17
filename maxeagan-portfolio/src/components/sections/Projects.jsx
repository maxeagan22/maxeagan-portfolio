import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GrubGrade Reviews */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">GrubGrade Reviews</h3>
              <p className="text-gray-400 mb-4">
                Full-stack restaurant review platform with user authentication,
                image uploading, and review moderation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Spring Boot",
                  "React",
                  "TypeScript",
                  "Docker",
                  "Elasticsearch",
                  "Keycloak",
                  "React Hook Form",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/maxeagan22/maxeagan-resturaunt-review-platform-spring-react"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code →
                </a>
              </div>
            </div>

            {/* Maxchain */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">Maxchain</h3>
              <p className="text-gray-400 mb-4">
                Simple blockchain implementation in Java using cryptographic
                hashing and proof-of-work.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "SHA-256", "JSON"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/maxeagan22/maxchain-java"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code →
              </a>
            </div>

            {/* Gamehub */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">Gamehub</h3>
              <p className="text-gray-400 mb-4">
                Fully responsive web app to explore and discover video games
                using live data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "TypeScript",
                  "RAWG API",
                  "Chakra UI",
                  "React Query",
                  "React Router",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://maxeagan22-gamehub.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/maxeagan22/gamehub"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
