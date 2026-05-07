"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import TerminalWindow from "@/components/ui/TerminalWindow";

type OutputLine = {
  type: "input" | "output" | "error" | "link" | "accent";
  text: string;
  href?: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<OutputLine[]>([
    {
      type: "output",
      text: `Welcome! ${contact.terminal.helpText}`,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: OutputLine[] = [
      ...history,
      { type: "input", text: `${contact.terminal.prompt} ${cmd}` },
    ];

    if (trimmed === "clear") {
      setHistory([
        { type: "output", text: contact.terminal.helpText },
      ]);
      setInput("");
      return;
    }

    if (trimmed === "contact") {
      newHistory.push({
        type: "output",
        text: contact.terminal.commands.contact,
      });
      newHistory.push({
        type: "accent",
        text: `📧 ${contact.email}`,
      });
      setHistory(newHistory);
      setInput("");
      return;
    }

    if (trimmed === "socials") {
      newHistory.push({
        type: "output",
        text: contact.terminal.commands.socials,
      });
      contact.socials.forEach((social) => {
        newHistory.push({
          type: "link",
          text: `→ ${social.label}: ${social.href}`,
          href: social.href,
        });
      });
      setHistory(newHistory);
      setInput("");
      return;
    }

    if (trimmed in contact.terminal.commands) {
      newHistory.push({
        type: "output",
        text: contact.terminal.commands[trimmed],
      });
    } else if (trimmed !== "") {
      newHistory.push({
        type: "error",
        text: `command not found: ${trimmed}. Type "help" for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="section-container max-w-2xl">
        {/* Section label */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-code text-accent text-xs tracking-widest uppercase mb-4"
        >
          {"// get in touch"}
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Let&apos;s connect.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-muted text-base sm:text-lg mb-10"
        >
          Use the terminal below or just click to reach me directly.
        </motion.p>

        {/* Terminal */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <TerminalWindow>
            {/* Output history */}
            <div
              ref={scrollRef}
              className="max-h-48 overflow-y-auto mb-4 space-y-1.5"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i}>
                  {line.type === "input" && (
                    <span className="text-muted/60">{line.text}</span>
                  )}
                  {line.type === "output" && (
                    <span className="text-foreground/80">{line.text}</span>
                  )}
                  {line.type === "error" && (
                    <span className="text-yellow-500/80">{line.text}</span>
                  )}
                  {line.type === "accent" && (
                    <span className="text-accent">{line.text}</span>
                  )}
                  {line.type === "link" && (
                    <a
                      href={line.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      {line.text}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Input line */}
            <div
              className="flex items-center gap-2 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <span className="text-accent/70 shrink-0">
                {contact.terminal.prompt}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground caret-accent placeholder:text-muted/30"
                placeholder="type a command..."
                spellCheck={false}
                autoComplete="off"
              />
              <span className="terminal-cursor" />
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Quick-action buttons below terminal */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => processCommand("contact")}
            className="px-5 py-2.5 rounded-lg border border-accent/20 bg-accent/5 text-accent text-sm font-medium transition-all duration-300 hover:bg-accent/15 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(255,51,51,0.1)]"
          >
            ✉ Email Me
          </button>
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-border text-muted text-sm font-medium transition-all duration-300 hover:border-border-hover hover:text-foreground"
            >
              {social.icon === "github" ? "⌘" : "◉"} {social.label}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border/40 text-center"
        >
          <p className="font-code text-xs text-muted/40">
            © {new Date().getFullYear()} Berk Atas — Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
