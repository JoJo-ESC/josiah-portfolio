import Header from "@/components/Header";
import Image from "next/image";

const projects = [
  {
    title: "GneissCash",
    description:
      "A cash-flow intelligence workspace for everyday budgets. Import CSV and PDF bank statements, auto-categorize transactions, and surface insights through a 12-month cash flow dashboard, needs-vs-wants classifier, and spending trend charts.",
    image: "/GneissCashDashboard.png",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Chart.js"],
    liveUrl: "",
    githubUrl: "https://github.com/JoJo-ESC/gneisscash",
  },
  {
    title: "Revamp",
    description:
      "A full-stack web app that transforms legacy HTML into modern, Tailwind CSS-powered websites using AI. Simply paste a URL, and watch as AI converts old-school markup into clean, semantic HTML5 with Tailwind styling—all in real-time.",
    image: "/RevampLandingPage.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI/LLM", "Vercel"],
    liveUrl: "https://website-modernizer-juje.vercel.app/",
    githubUrl: "",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />

      <main className="min-h-screen px-8 md:px-16 lg:px-24 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl text-zinc-300 mb-4">
            Projects
          </h1>
          <p className="font-mono text-zinc-500 mb-12">
            A collection of things I&apos;ve built.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#00ff41]/30 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[300px] overflow-hidden bg-zinc-900/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h2 className="font-mono text-2xl text-zinc-200 mb-4 group-hover:text-[#00ff41] transition-colors">
                      {project.title}
                    </h2>

                    <p className="font-mono text-sm text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
                        Built with
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm text-[#00ff41] hover:underline"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-zinc-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home Link */}
          <div className="flex justify-center mt-12">
            <a
              href="/"
              className="font-mono text-sm text-[#00ff41] hover:underline transition-colors"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
