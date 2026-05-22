// src/components/CodeEditorIntro.jsx
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Console output lines ──────────────────────────────── */
const consoleLines = [
  { delay: 0,    type: "log",     text: "Initializing developer profile..." },
  { delay: 600,  type: "success", text: "✓ Stack loaded: React, Next.js, Node.js" },
  { delay: 1200, type: "success", text: "✓ Portfolio ready to ship" },
  { delay: 1800, type: "warn",    text: "⚠ Warning: Highly caffeinated developer" },
  { delay: 2400, type: "info",    text: "ℹ Available for freelance & full-time" },
  { delay: 3000, type: "success", text: "✓ Open to work — Let's build something!" },
];

const consoleColor = {
  log:     "text-base-content/50",
  success: "text-emerald-400",
  warn:    "text-amber-400",
  info:    "text-sky-400",
};

/* ─── Component ─────────────────────────────────────────── */
const CodeEditorIntro = () => {
  const [showConsole, setShowConsole] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);

  const handleTypingDone = () => {
    setShowConsole(true);
    consoleLines.forEach((line) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full font-mono text-sm z-10"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 -z-10" />

      {/* ── Editor window ── */}
      <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
        style={{ background: "#0d1117" }}
      >

        {/* Titlebar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5"
          style={{ background: "#161b22" }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Active tab */}
          <div className="ml-3 flex items-center gap-1.5 bg-[#0d1117] border border-white/8 px-3 py-1 rounded-md text-[11px] text-gray-400">
            <span className="text-yellow-400 text-[10px] font-bold">JS</span>
            developer.js
          </div>

          {/* Editor meta — right side */}
          <div className="ml-auto flex items-center gap-3 text-[10px] text-gray-600">
            <span>UTF-8</span>
            <span className="text-emerald-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Ln 12, Col 1
            </span>
          </div>
        </div>

        {/* ── Code area ── */}
        <div className="flex" style={{ background: "#0d1117" }}>
          {/* Line numbers */}
          <div
            className="select-none text-right pr-4 pt-5 pb-5 text-[11px] leading-6 text-gray-600 border-r border-white/5"
            style={{ minWidth: "2.5rem" }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Typewriter code */}
          <div className="flex-1 p-5 text-[13px] leading-6 text-gray-300 overflow-hidden min-h-[240px]">
            <Typewriter
              options={{
                delay: 28,
                loop: false,
                cursor: `<span style="color:#34d399;animation:blink 1s step-end infinite">▌</span>`,
              }}
              onInit={(tw) => {
                tw
                  .typeString(`<span style="color:#ff7b72">const</span> <span style="color:#79c0ff">developer</span> <span style="color:#e3b341">=</span> <span style="color:#e3b341">{</span>`)
                  .typeString(`<br/>`)
                  .pauseFor(100)
                  .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">name</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Nur Hossain"</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">role</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Full Stack Developer"</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .pauseFor(150)
                  .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">location</span><span style="color:#c9d1d9">:</span> <span style="color:#a5d6ff">"Dinajpur, Bangladesh 🇧🇩"</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">stack</span><span style="color:#c9d1d9">:</span> <span style="color:#e3b341">[</span><span style="color:#a5d6ff">"React"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"Next.js"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"Node"</span><span style="color:#e3b341">]</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .pauseFor(150)
                  .typeString(`&nbsp;&nbsp;<span style="color:#79c0ff">openToWork</span><span style="color:#c9d1d9">:</span> <span style="color:#79c0ff">true</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .typeString(`&nbsp;&nbsp;<span style="color:#d2a8ff">passions</span><span style="color:#c9d1d9">:</span> <span style="color:#e3b341">[</span><span style="color:#a5d6ff">"Clean Code"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"UI Craft"</span><span style="color:#c9d1d9">,</span> <span style="color:#a5d6ff">"Chess"</span><span style="color:#e3b341">]</span><span style="color:#c9d1d9">,</span>`)
                  .typeString(`<br/>`)
                  .pauseFor(150)
                  .typeString(`&nbsp;&nbsp;<span style="color:#ffa657">hire</span><span style="color:#c9d1d9">:</span> <span style="color:#79c0ff">function</span><span style="color:#c9d1d9">() {</span>`)
                  .typeString(`<br/>`)
                  .typeString(`&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff7b72">return</span> <span style="color:#a5d6ff">"Best decision you'll make!"</span><span style="color:#c9d1d9">;</span>`)
                  .typeString(`<br/>`)
                  .typeString(`&nbsp;&nbsp;<span style="color:#c9d1d9">}</span>`)
                  .typeString(`<br/>`)
                  .typeString(`<span style="color:#e3b341">};</span>`)
                  .pauseFor(400)
                  .callFunction(handleTypingDone)
                  .start();
              }}
            />
          </div>
        </div>

        {/* ── Console output panel ── */}
        <AnimatePresence>
          {showConsole && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/5 overflow-hidden"
              style={{ background: "#0a0f16" }}
            >
              {/* Console titlebar */}
              <div
                className="flex items-center gap-3 px-4 py-2 border-b border-white/5"
                style={{ background: "#161b22" }}
              >
                <div className="flex gap-2">
                  {["PROBLEMS", "OUTPUT", "TERMINAL", "CONSOLE"].map((tab) => (
                    <span
                      key={tab}
                      className={`text-[10px] font-bold tracking-wider py-1 ${
                        tab === "CONSOLE"
                          ? "text-emerald-400 border-b border-emerald-400"
                          : "text-gray-600"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="ml-auto flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-sm bg-gray-700/60" />
                  ))}
                </div>
              </div>

              {/* Console lines */}
              <div className="px-4 py-3 flex flex-col gap-1.5 text-[11px] leading-5 min-h-[80px]">
                <div className="text-gray-600 mb-1 text-[10px] tracking-widest uppercase">
                  &gt; node developer.js
                </div>
                {visibleLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-2 ${consoleColor[line.type]}`}
                  >
                    <span className="text-gray-600 select-none flex-shrink-0 mt-0.5">›</span>
                    {line.text}
                  </motion.div>
                ))}

                {/* Blinking cursor at end */}
                {visibleLines.length === consoleLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-emerald-400 mt-1"
                  >
                    <span className="text-gray-600">›</span>
                    <span
                      className="w-2 h-3.5 rounded-sm bg-emerald-400 inline-block"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default CodeEditorIntro;