// src/components/CodeEditorIntro.jsx
import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const consoleLines = [
  { delay: 200,  type: "dim",     text: "> node developer.js" },
  { delay: 900,  type: "success", text: "✓  Profile initialized" },
  { delay: 1500, type: "success", text: "✓  Stack: React · Next · Node" },
  { delay: 2100, type: "success", text: "✓  MongoDB connected" },
  { delay: 2700, type: "warn",    text: "⚠  Caffeine level: critical" },
  { delay: 3300, type: "info",    text: "ℹ  Location: Bangladesh 🇧🇩" },
  { delay: 3900, type: "info",    text: "ℹ  Status: open to work" },
  { delay: 4500, type: "success", text: "✓  hire() → \"Best decision!\"" },
  { delay: 5100, type: "dim",     text: "Process finished. Exit code 0." },
];

const typeColor = {
  dim:     "text-gray-600",
  success: "text-emerald-400",
  warn:    "text-amber-400",
  info:    "text-sky-400",
};

const CodeEditorIntro = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone]                 = useState(false);

  /* ── Guards against StrictMode double-invoke ── */
  const hasRun    = useRef(false);
  const timers    = useRef([]);

  const handleTypingDone = () => {
    if (hasRun.current) return;   // ← already fired once, ignore second call
    hasRun.current = true;

    // clear any stale timers from a previous run
    timers.current.forEach(clearTimeout);
    timers.current = [];

    consoleLines.forEach((line) => {
      const id = setTimeout(() => {
        setVisibleLines((prev) => {
          // extra safety: don't push if this exact index already exists
          if (prev.length > consoleLines.indexOf(line)) return prev;
          return [...prev, line];
        });
      }, line.delay);
      timers.current.push(id);
    });

    const id = setTimeout(() => setDone(true), 5400);
    timers.current.push(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full font-mono text-sm z-10"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl blur-xl opacity-60 -z-10" />

      {/* Window shell */}
      <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl" style={{ background: "#0d1117" }}>

        {/* Titlebar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5" style={{ background: "#161b22" }}>
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-1 ml-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1.5 bg-[#0d1117] border border-white/8 px-3 py-1 rounded-md text-[11px] text-gray-300 flex-shrink-0">
              <span className="text-yellow-400 text-[10px] font-bold">JS</span>
              developer.js
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] text-gray-600 flex-shrink-0">
              <span className="text-emerald-500 text-[10px]">▶</span>
              console
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 text-[10px] text-gray-600 flex-shrink-0">
            <span className="hidden sm:block">UTF-8</span>
            <span className="flex items-center gap-1 text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:block">Ln 12</span>
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row" style={{ background: "#0d1117" }}>

          {/* LEFT: Code panel */}
          <div className="flex flex-1 md:border-r border-white/5">
            <div
              className="select-none text-right pr-3 pt-5 pb-5 text-[11px] leading-6 text-gray-700 border-r border-white/5 flex-shrink-0"
              style={{ minWidth: "2.2rem", background: "#0d1117" }}
            >
              {Array.from({ length: 12 }, (_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="flex-1 p-4 text-[12px] leading-6 text-gray-300 overflow-hidden min-h-[260px]">
              <Typewriter
                options={{
                  delay: 25,
                  loop: false,
                  cursor: `<span style="color:#34d399;animation:blink 1s step-end infinite">▌</span>`,
                }}
                onInit={(tw) => {
                  tw
                    .typeString(`<span style="color:#ff7b72">const</span> <span style="color:#79c0ff">developer</span> <span style="color:#e3b341">=</span> <span style="color:#e3b341">{</span>`)
                    .typeString(`<br/>`)
                    .pauseFor(80)
                    .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">name</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Nur Hossain"</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">role</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Full Stack Dev"</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .pauseFor(100)
                    .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">location</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Bangladesh 🇧🇩"</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">stack</span><span style="color:#c9d1d9">:</span> <span style="color:#e3b341">[</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a5d6ff">"React"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"Next.js"</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a5d6ff">"Node.js"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"MongoDB"</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;<span style="color:#e3b341">]</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .pauseFor(100)
                    .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">openToWork</span><span style="color:#c9d1d9">:</span> <span style="color:#79c0ff">true</span><span style="color:#c9d1d9">,</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;<span style="color:#ffa657">hire</span><span style="color:#c9d1d9">() {</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff7b72">return</span> <span style="color:#a5d6ff">"Best decision!"</span><span style="color:#c9d1d9">;</span>`)
                    .typeString(`<br/>`)
                    .typeString(`&nbsp;&nbsp;<span style="color:#c9d1d9">}</span>`)
                    .typeString(`<br/>`)
                    .typeString(`<span style="color:#e3b341">};</span>`)
                    .pauseFor(300)
                    .callFunction(handleTypingDone)
                    .start();
                }}
              />
            </div>
          </div>

          {/* RIGHT: Console panel — desktop only */}
          <div className="hidden md:flex flex-col w-[46%] border-t md:border-t-0 border-white/5" style={{ background: "#080d13" }}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 flex-shrink-0" style={{ background: "#0d1117" }}>
              <div className="flex gap-3">
                {["TERMINAL", "CONSOLE"].map((t) => (
                  <span key={t} className={`text-[10px] font-bold tracking-wider ${t === "CONSOLE" ? "text-emerald-400 border-b border-emerald-400 pb-0.5" : "text-gray-600"}`}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-1.5">
                {[...Array(2)].map((_, i) => <div key={i} className="w-3 h-3 rounded-sm bg-gray-800" />)}
              </div>
            </div>

            <div className="flex-1 px-4 py-4 flex flex-col gap-1.5 text-[11px] leading-5 overflow-hidden min-h-[226px]">
              <AnimatePresence>
                {visibleLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-start gap-1.5 ${typeColor[line.type]}`}
                  >
                    {line.type !== "dim" && <span className="text-gray-700 select-none flex-shrink-0">›</span>}
                    <span>{line.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {done && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 mt-1">
                  <span className="text-gray-600 select-none">›</span>
                  <span className="w-1.5 h-3.5 rounded-sm bg-emerald-400 inline-block" style={{ animation: "blink 1s step-end infinite" }} />
                </motion.div>
              )}
            </div>
          </div>

        </div>

        {/* Statusbar */}
        <div className="flex items-center justify-between px-4 py-1.5 text-[10px]" style={{ background: "#059669" }}>
          <div className="flex items-center gap-3 text-white/80">
            <span className="font-semibold">⎇ main</span>
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span>Spaces: 2</span>
            <span className="hidden sm:block">NurHossain-nur</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.div>
  );
};

export default CodeEditorIntro;