"use client";

import { useState, useEffect, useRef } from "react";
import { Hammer } from "lucide-react";

type Mode = null | "info" | "experience";

export default function Home() {
  const tech = ["TypeScript", "Python", "React", "FastAPI", "PostgreSQL"];

  const experience = [
    {
      title: "Lead Open Source Software Engineer",
      org: "YACS",
      orgUrl: "https://github.com/JoJo-ESC/yacs",
      tag: "RCOS · RPI",
      period: "Aug 2025 – Present",
      desc: "Leading complete platform rebuild of course scheduling system serving 500+ RPI students, migrating from a Vue monolith to a decoupled FastAPI backend and React TypeScript frontend.",
    },
    {
      title: "Open Source Software Engineering Intern",
      org: "Submitty",
      orgUrl: "https://submitty.org",
      tag: "RCOS · RPI",
      period: "Jan 2024 – Apr 2024",
      desc: "Led deprecation of a legacy theme system, reviewed 20+ PRs, and developed iterative frontend features for RPI's automated grading platform used by 1,000+ users.",
    },
  ];

  const projects = [
    {
      title: "GneissCash",
      tech: "Next.js · React · TypeScript · Supabase · Chart.js",
      desc: "Personal financial history analyzer — multi-format bank statement parser, needs-vs-wants classifier processing ~700 transactions in <5ms, and 12-month cash flow dashboard.",
      url: "https://github.com/JoJo-ESC/gneisscash",
      label: "GitHub",
    },
    {
      title: "Revamp",
      tech: "Next.js · React · TypeScript · Tailwind CSS",
      desc: "AI-powered webpage restyle tool that modernizes legacy HTML to semantic HTML5 with Tailwind CSS, processing 7K+ lines in under 30s.",
      url: "https://website-modernizer-juje.vercel.app/",
      label: "Live Demo",
    },
  ];

  const [mode, setMode] = useState<Mode>(null);

  const [crackLevel, setCrackLevel] = useState(0);
  const [isHitting, setIsHitting] = useState(false);
  const glassBroken = crackLevel >= 3;

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", purpose: "", _trap: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", org: "", purpose: "", _trap: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const [flashlightOn, setFlashlightOn] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnHovered, setBtnHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [btnCenter, setBtnCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const update = () => {
      if (btnRef.current) {
        const r = btnRef.current.getBoundingClientRect();
        setBtnCenter({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [isTouching, setIsTouching] = useState(false);
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });
  const isTouchingRef = useRef(false);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isTouchDevice) return;

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      setTouchPos({ x: t.clientX, y: t.clientY });
      holdTimerRef.current = setTimeout(() => {
        isTouchingRef.current = true;
        setIsTouching(true);
      }, 300);
    };

    const onMove = (e: TouchEvent) => {
      if (isTouchingRef.current) {
        const t = e.touches[0];
        setTouchPos({ x: t.clientX, y: t.clientY });
      } else {
        if (holdTimerRef.current) {
          clearTimeout(holdTimerRef.current);
          holdTimerRef.current = null;
        }
      }
    };

    const onEnd = () => {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      isTouchingRef.current = false;
      setIsTouching(false);
    };

    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isTouchDevice]);

  let overlayBg: string;
  if (isTouchDevice) {
    overlayBg = isTouching
      ? `radial-gradient(circle at ${touchPos.x}px ${touchPos.y}px,
          transparent 0px, transparent 110px,
          rgba(0,0,0,0.88) 200px, rgba(0,0,0,0.97) 300px)`
      : `rgba(0,0,0,0.96)`;
  } else if (flashlightOn) {
    overlayBg = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px,
      transparent 0px, transparent 100px,
      rgba(0,0,0,0.90) 190px, rgba(0,0,0,0.98) 280px)`;
  } else if (btnHovered) {
    overlayBg = `radial-gradient(circle at ${btnCenter.x}px ${btnCenter.y}px,
      rgba(0,0,0,0.60) 0px,
      rgba(0,0,0,0.90) 80px,
      rgba(0,0,0,0.98) 130px)`;
  } else {
    overlayBg = `radial-gradient(circle at ${btnCenter.x}px ${btnCenter.y}px,
      rgba(0,0,0,0.84) 0px,
      rgba(0,0,0,0.97) 45px,
      rgba(0,0,0,0.99) 70px)`;
  }

  const infoFont = "var(--font-inter, ui-sans-serif, system-ui, sans-serif)";

  return (
    <div
      className="min-h-screen bg-black text-stone-300"
      style={{
        ...(isTouchDevice ? { WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" } as React.CSSProperties : {}),
        ...(mode === "info" ? { fontFamily: infoFont } : {}),
      }}
    >
      {/* Choice screen */}
      {mode === null && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-12 px-8">
          <div className="text-center">
            <h1 className="text-4xl text-stone-100 tracking-tight mb-3">Josiah Riggins</h1>
            <p className="text-stone-500 text-sm tracking-wide">How would you like to proceed?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-sm">
            <button
              onClick={() => setMode("info")}
              className="flex-1 px-5 py-3 border border-stone-700 text-stone-300 text-sm tracking-wide rounded hover:border-stone-500 hover:text-stone-100 transition-all duration-200"
            >
              I&apos;m here for info
            </button>
            <button
              onClick={() => setMode("experience")}
              className="flex-1 px-5 py-3 border border-red-900/60 text-red-600 text-sm tracking-wide rounded transition-all duration-200
                shadow-[0_0_18px_rgba(180,0,0,0.3)]
                hover:border-red-700/80 hover:text-red-400 hover:shadow-[0_0_28px_rgba(180,0,0,0.5)]"
            >
              I want an experience
            </button>
          </div>
        </div>
      )}

      {/* Dark overlay — experience mode only, hidden once lights are on */}
      {mode === "experience" && !lightsOn && (
        <div
          className="fixed inset-0 z-10 pointer-events-none transition-[background] duration-300"
          style={{ background: overlayBg }}
        />
      )}

      {/* Centered activate button — shown before flashlight is on */}
      {mode === "experience" && !isTouchDevice && !flashlightOn && !lightsOn && (
        <button
          ref={btnRef}
          onClick={() => { setFlashlightOn(true); setBtnHovered(false); }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-xs px-3 py-1.5 rounded border transition-all duration-300
            text-red-600 border-red-800/60 shadow-[0_0_18px_rgba(180,0,0,0.55)] hover:shadow-[0_0_28px_rgba(180,0,0,0.7)]"
        >
          [ light ]
        </button>
      )}

      {/* Hidden "lights on" button in bottom-left — only visible when flashlight shines on it */}
      {mode === "experience" && !isTouchDevice && flashlightOn && !lightsOn && (
        <button
          onClick={() => { setFlashlightOn(false); setLightsOn(true); }}
          className="fixed bottom-5 left-5 z-[5] text-xs px-3 py-1.5 rounded border transition-all duration-200
            text-stone-800 border-stone-900 hover:text-stone-500 hover:border-stone-700"
        >
          [ lights on ]
        </button>
      )}

      {/* Content */}
      <div className="relative z-0 max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">

        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-16 lg:self-start">

          <div>
            <h1 className="text-3xl text-stone-100 tracking-tight mb-1">
              Josiah Riggins
            </h1>
            <p className="text-red-800 text-sm mb-1">Full Stack Software Engineer</p>
            <p className="text-stone-500 text-sm">Troy, NY · RPI</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="flex flex-col gap-2">
              <a href="https://github.com/josiah-riggins" target="_blank" rel="noopener noreferrer"
                className="text-stone-300 hover:text-red-700 transition-colors">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/josiah-riggins" target="_blank" rel="noopener noreferrer"
                className="text-stone-300 hover:text-red-700 transition-colors">
                LinkedIn ↗
              </a>
              <a href="/JosiahRigginsResume.pdf" target="_blank" rel="noopener noreferrer"
                className="text-stone-300 hover:text-red-700 transition-colors">
                Resume ↗
              </a>
            </div>

            <div>
              <p className="text-xs text-stone-600 uppercase tracking-widest mb-2">Core Competencies</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {tech.map((t) => (
                  <span key={t} className="text-stone-300 text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact sign */}
          <div className="border border-stone-900 rounded p-4 flex flex-col gap-3">
            <p className="text-xs text-stone-600 uppercase tracking-widest">Want to reach me?</p>

            <div className="flex items-center justify-between gap-3">
              <p className="text-stone-200 text-sm italic">Break. Press. I&apos;ll reach out to you.</p>
              <button
                onClick={() => {
                  if (glassBroken || isHitting) return;
                  setIsHitting(true);
                  setCrackLevel((v) => Math.min(v + 1, 3));
                  setTimeout(() => setIsHitting(false), 150);
                }}
                disabled={glassBroken}
                title="break the glass"
                className={`shrink-0 p-1.5 rounded border transition-all duration-150
                  ${glassBroken
                    ? "text-stone-800 border-stone-900 cursor-default"
                    : "text-stone-400 border-stone-700 hover:text-red-700 hover:border-red-900/60 hover:shadow-[0_0_8px_rgba(140,0,0,0.35)] cursor-pointer"
                  }
                  ${isHitting ? "translate-x-0.5 translate-y-0.5 rotate-12" : "rotate-0"}`}
              >
                <Hammer className="w-4 h-4" />
              </button>
            </div>

            {/* Glass-sealed red button */}
            <div className="relative mt-1">
              <button
                tabIndex={glassBroken ? 0 : -1}
                disabled={!glassBroken}
                className={`w-full py-3 rounded text-sm tracking-[0.18em] uppercase
                  bg-gradient-to-b from-red-950 to-red-900/70 text-red-400
                  shadow-[0_0_22px_rgba(200,0,0,0.55),0_0_50px_rgba(200,0,0,0.2),inset_0_1px_0_rgba(255,80,80,0.12)]
                  transition-all duration-200
                  ${glassBroken ? "cursor-pointer hover:text-red-300" : "pointer-events-none animate-pulse"}`}
                onClick={() => glassBroken && setContactOpen(true)}
              >
                contact
              </button>

              {/* Glass + cracks overlay */}
              <div
                className={`absolute inset-0 rounded transition-all duration-500
                  bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-white/[0.02]
                  border border-white/[0.08]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                  ${glassBroken ? "opacity-0 scale-[1.04] pointer-events-none" : "pointer-events-none"}`}
                style={{ backdropFilter: `blur(${Math.max(0, 2 - crackLevel * 0.7)}px)` }}
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                >
                  {[
                    { d: "M 52 48 L 28 12", level: 1 },
                    { d: "M 52 48 L 78 8",  level: 1 },
                    { d: "M 52 48 L 90 62", level: 1 },
                    { d: "M 52 48 L 38 82", level: 1 },
                    { d: "M 52 48 L 20 58", level: 1 },
                    { d: "M 28 12 L 10 2",  level: 2 },
                    { d: "M 28 12 L 18 28", level: 2 },
                    { d: "M 78 8  L 92 2",  level: 2 },
                    { d: "M 90 62 L 100 72",level: 2 },
                    { d: "M 38 82 L 18 98", level: 2 },
                    { d: "M 20 58 L 2 62",  level: 3 },
                    { d: "M 18 28 L 2 32",  level: 3 },
                    { d: "M 38 82 L 42 100",level: 3 },
                    { d: "M 52 48 L 60 40 L 72 44 L 80 36", level: 3 },
                    { d: "M 52 48 L 46 56 L 40 52 L 32 60", level: 3 },
                  ]
                    .filter((c) => c.level <= crackLevel)
                    .map((c, i) => (
                      <path
                        key={i}
                        d={c.d}
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        fill="none"
                      />
                    ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-12">

          <section>
            <p className="text-xs text-stone-600 uppercase tracking-widest mb-6">Experience</p>
            <div className="flex flex-col gap-8">
              {experience.map((e) => (
                <div key={e.org} className="group">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="text-stone-100 text-sm font-medium group-hover:text-red-700 transition-colors">
                      {e.title}
                    </span>
                    <span className="text-stone-500 text-xs shrink-0">{e.period}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <a href={e.orgUrl} target="_blank" rel="noopener noreferrer"
                      className="text-stone-400 text-xs hover:text-red-700 transition-colors">
                      @ {e.org}
                    </a>
                    <span className="text-stone-600 text-xs">· {e.tag}</span>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs text-stone-600 uppercase tracking-widest mb-6">Projects</p>
            <div className="flex flex-col gap-6">
              {projects.map((p) => (
                <div key={p.title} className="group border border-stone-900 rounded-lg p-4 hover:border-stone-800 transition-colors">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="text-stone-100 text-sm font-medium group-hover:text-red-700 transition-colors">
                      {p.title}
                    </span>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="text-red-800 text-xs hover:text-red-600 hover:underline shrink-0">
                      {p.label} ↗
                    </a>
                  </div>
                  <p className="text-stone-600 text-xs mb-2">{p.tech}</p>
                  <p className="text-stone-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75"
            onClick={() => { setContactOpen(false); setStatus("idle"); }}
          />
          <div className="relative z-10 w-full max-w-md border border-stone-800 rounded-lg bg-black p-6 flex flex-col gap-5">

            <div className="flex items-baseline justify-between">
              <div>
                <h2 className="text-stone-100 text-lg mb-1">Who are you?</h2>
                <p className="text-stone-600 text-xs italic">Give me your name and affiliation and I&apos;ll find you.</p>
              </div>
              <button
                onClick={() => { setContactOpen(false); setStatus("idle"); }}
                className="text-stone-700 hover:text-stone-400 transition-colors text-sm ml-4 shrink-0"
              >
                ✕
              </button>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center flex flex-col gap-2">
                <p className="text-stone-200 text-sm italic">Message received.</p>
                <p className="text-stone-600 text-xs">I&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot — hidden from humans */}
                <input
                  type="text"
                  value={form._trap}
                  onChange={(e) => setForm((f) => ({ ...f, _trap: e.target.value }))}
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
                />
                {[
                  { key: "name", label: "Name", placeholder: "your name" },
                  { key: "org", label: "Organization", placeholder: "where you're from" },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="text-xs text-stone-600 uppercase tracking-widest block mb-1.5">{label}</label>
                    <input
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-sm text-stone-200 placeholder-stone-700 focus:outline-none focus:border-stone-600 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-xs text-stone-600 uppercase tracking-widest block mb-1.5">Purpose</label>
                  <textarea
                    value={form.purpose}
                    onChange={(e) => setForm((f) => ({ ...f, purpose: e.target.value }))}
                    placeholder="why you're here"
                    rows={3}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-sm text-stone-200 placeholder-stone-700 focus:outline-none focus:border-stone-600 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-900 italic">Something went wrong. Try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2.5 rounded text-sm tracking-[0.15em] uppercase
                    bg-gradient-to-b from-red-950 to-red-900/70 text-red-400
                    hover:text-red-300 transition-colors
                    shadow-[0_0_16px_rgba(180,0,0,0.3)]
                    disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "sending..." : "submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
