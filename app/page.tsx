import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />
      
      {/* Main content container */}
      <main className="flex justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-24 pb-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Intro, Bio, Socials, Experience (Span 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Hero Section */}
            <div>
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-zinc-300 mb-6">
                Hey! I&apos;m <span className="text-[#00ff41] underline decoration-[#00ff41]/50 underline-offset-4">Josiah Riggins</span>
              </h1>
              
              <p className="font-mono text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
                I&apos;m a Full Stack Software Engineer big on building software
                that makes a difference. I love collaborating on innovative projects and solving complex problems with clean code.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4 font-mono text-sm text-zinc-500">
                <a 
                  href="https://github.com/josiah-riggins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <span className="text-zinc-600">|</span>
                <a 
                  href="https://linkedin.com/in/josiah-riggins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <span className="text-zinc-600">|</span>
                <a 
                  href="/about" 
                  className="hover:text-zinc-300 transition-colors"
                >
                  More about me →
                </a>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="pt-8 border-t border-zinc-800">
              <h2 className="font-mono text-lg text-[#00ff41] mb-6">Experience</h2>
              
              <div className="space-y-6">
                {/* YACS */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                    <h3 className="text-zinc-200 font-mono text-lg font-medium group-hover:text-[#00ff41] transition-colors">
                      Software Developer
                    </h3>
                    <span className="font-mono text-sm text-zinc-500">Aug 2025 - Present</span>
                  </div>
                  <div className="mb-2">
                    <a href="https://github.com/YACS-RCOS/yacs.n" className="text-zinc-400 hover:text-[#00ff41] font-mono text-sm">@ YACS</a>
                    <span className="text-zinc-600 font-mono text-xs ml-2">• RCOS</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Building FastAPI backends and React frontends for a course scheduling platform serving 700+ students.
                  </p>
                </div>

                {/* Submitty */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                    <h3 className="text-zinc-200 font-mono text-lg font-medium group-hover:text-[#00ff41] transition-colors">
                      Software Engineering Contributor
                    </h3>
                    <span className="font-mono text-sm text-zinc-500">Jan 2024 - Apr 2024</span>
                  </div>
                  <div className="mb-2">
                    <a href="https://submitty.org" className="text-zinc-400 hover:text-[#00ff41] font-mono text-sm">@ Submitty</a>
                    <span className="text-zinc-600 font-mono text-xs ml-2">• RCOS</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Developed features and refactored UI for RPI&apos;s automated grading platform used by 1,000+ users.
                  </p>
                </div>

              </div>

              {/* Learn More Link */}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-[#00ff41] hover:underline transition-colors"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Skills (Span 5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 lg:p-8 lg:sticky lg:top-24">
              <h2 className="font-mono text-lg text-[#00ff41] mb-6">Tech Stack</h2>
              
              {/* Languages */}
              <div className="mb-8">
                <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider mb-4">Languages</h3>
                <div className="grid grid-cols-4 gap-4">
                  {/* C++ */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Python */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* HTML */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* CSS/Tailwind */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* JavaScript */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* TypeScript */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* SQL */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#4479A1]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tools & Frameworks */}
              <div>
                <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider mb-4">Frameworks & Tools</h3>
                <div className="grid grid-cols-4 gap-4">
                  {/* Git */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Vagrant */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#1868F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.556 0L.392 1.846v3.34l5.718 12.93.003.006.004.005 5.871 5.862.012.011 5.883-5.873.004-.006.003-.005L23.608 5.17v-3.34L20.444 0l-5.995 5.997L12 12.29l-2.448-6.3L3.556 0zM12 15.126l-2.905 2.902L12 21.996l2.905-2.968L12 15.126z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Next.js */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* FastAPI */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* React */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.127zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Vercel */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}