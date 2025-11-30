import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-24 pb-12">
        <div className="max-w-4xl w-full">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#00ff41]/30 shadow-lg shadow-[#00ff41]/10">
              <Image
                src="/me.png"
                alt="Josiah Riggins"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl text-zinc-300 text-center mb-8">
            About <span className="text-[#00ff41]">Me</span>
          </h1>

          {/* Bio */}
          <p className="font-mono text-base md:text-lg text-zinc-400 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            I&apos;m Joe, a software developer passionate about all things development. I study Computer Science at RPI, where I contribute to open-source projects like YACS and Submitty, focusing on backend development, database design, and API architecture. I love turning ideas into polished, interactive applications. Outside of coursework, I&apos;m always experimenting — redesigning interfaces, analyzing data, improving developer tools, and crafting creative projects that push my skills further. I recently built <a href="https://website-modernizer-juje.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline">Revamp</a>, a full-stack web app designed to modernize old HTML websites using AI. My goal is simple: keep learning, keep building, and create technology that feels intuitive, modern, and genuinely useful.
          </p>

          {/* Back to Home Link */}
          <div className="flex justify-center mt-10">
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
