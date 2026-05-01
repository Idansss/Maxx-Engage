"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Code2, Users, Briefcase, Mail, BookOpen, Home } from "lucide-react";

const commands = [
  { id: "home", label: "Home", href: "/", icon: Home, group: "Pages" },
  { id: "work", label: "Work — Project gallery", href: "/work", icon: Briefcase, group: "Pages" },
  { id: "services", label: "Services", href: "/services", icon: Code2, group: "Pages" },
  { id: "team", label: "Team", href: "/team", icon: Users, group: "Pages" },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen, group: "Pages" },
  { id: "contact", label: "Contact — Start a project", href: "/contact", icon: Mail, group: "Pages" },
  { id: "thesis-desk", label: "The Thesis Desk — case study", href: "/work/the-thesis-desk", icon: ArrowUpRight, group: "Projects" },
  { id: "wearables", label: "Wearables Atelier — case study", href: "/work/wearables-atelier", icon: ArrowUpRight, group: "Projects" },
  { id: "fade", label: "Fàdè — 9thluxe Store — case study", href: "/work/fade-9thluxe", icon: ArrowUpRight, group: "Projects" },
  { id: "helping-tribe", label: "The Helping Tribe Academy — case study", href: "/work/the-helping-tribe-academy", icon: ArrowUpRight, group: "Projects" },
  { id: "aureo", label: "Aureo — case study", href: "/work/aureo", icon: ArrowUpRight, group: "Projects" },
  { id: "tunde", label: "Tunde Aremu — profile", href: "/team/tunde", icon: Users, group: "Team" },
  { id: "olaoluwa", label: "Olaoluwa Olagbemi — profile", href: "/team/olaoluwa", icon: Users, group: "Team" },
  { id: "abass", label: "Abass Ibrahim — profile", href: "/team/abass", icon: Users, group: "Team" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const runCommand = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const groups = Array.from(new Set(commands.map((c) => c.group)));

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-1/2 top-[20%] z-[1000] w-full max-w-lg -translate-x-1/2"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <Command
              className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-2xl"
              label="Command palette"
            >
              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4">
                <Search className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Command.Input
                  className="flex h-12 w-full bg-transparent py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
                  placeholder="Search pages, projects, team members…"
                  autoFocus
                />
                <kbd className="hidden rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)] sm:block">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-[var(--text-muted)]">
                  No results found.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-[var(--text-muted)]"
                  >
                    {commands
                      .filter((c) => c.group === group)
                      .map((cmd) => {
                        const Icon = cmd.icon;
                        return (
                          <Command.Item
                            key={cmd.id}
                            value={cmd.label}
                            onSelect={() => runCommand(cmd.href)}
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] data-[selected=true]:bg-[rgba(160,32,240,0.1)] data-[selected=true]:text-[var(--text-primary)]"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                            {cmd.label}
                          </Command.Item>
                        );
                      })}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="border-t border-[var(--border-subtle)] px-4 py-2 flex items-center gap-4">
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  <kbd className="rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-1 py-0.5">↑↓</kbd> navigate
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  <kbd className="rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-1 py-0.5">↵</kbd> open
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)] ml-auto">⌘K to toggle</span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
