import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowUpRight,
  Github,
  Mail,
  Linkedin,
  Code2,
  FileCode,
  GitBranch,
  Sparkles,
  Rocket,
  Globe,
  Cpu,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prushti Patel — IT Student Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Prushti Patel, an IT student exploring programming, building projects, and sharing the learning journey.",
      },
      { property: "og:title", content: "Prushti Patel — IT Student Portfolio" },
      {
        property: "og:description",
        content: "An IT student's journey through code, projects, and curiosity.",
      },
    ],
  }),
  component: Index,
});

const SOCIALS = {
  email: "prushti0703@gmail.com",
  linkedin: "https://www.linkedin.com/in/prushti-patel-bba31834b",
  github: "https://github.com/prushti-patel",
};

// 👇 Replace this with your own Formspree endpoint (https://formspree.io → New form)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#learning", label: "Learning Path" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl tracking-tight transition-colors hover:text-accent"
        >
          Portfolio<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact">
          <Button
            size="sm"
            variant="default"
            className="rounded-full transition-transform hover:scale-105"
          >
            Get in touch
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-40 pb-28 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="w-8 h-px bg-accent" />
          Portfolio · 2026
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-5xl animate-fade-in-up">
          Hi, I am an{" "}
          <span className="text-accent">IT Student</span>
          <br /> & Tech Enthusiast.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Currently studying, coding late nights, and turning curiosity into small projects.
          Welcome to my corner of the internet — a quiet log of what I'm learning.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects">
            <Button size="lg" className="rounded-full transition-transform hover:scale-105">
              View projects <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full transition-transform hover:scale-105"
            >
              About me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-border/60 animate-fade-in [animation-delay:100ms]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — About</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4">A student, first.</h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm an <span className="text-foreground">Information Technology</span> student currently
            navigating the early chapters of my college journey. Every week I meet a new concept,
            a new bug, and (usually) a new way of thinking.
          </p>
          <p>
            My focus right now is on building strong fundamentals — understanding how the web works,
            how programs are structured, and how to collaborate with other developers. I treat every
            small project as a chance to practice, break things, and learn out loud.
          </p>
          <p>
            Outside of class, you'll find me reading docs, watching tutorials at 1.5×, and pushing
            tiny commits to GitHub just to keep the streak alive.
          </p>
        </div>
      </div>
    </section>
  );
}

const learning = [
  {
    icon: Code2,
    name: "Java",
    note: "Object-oriented programming, control flow, and building my first real classes.",
    step: "Step 01",
  },
  {
    icon: FileCode,
    name: "HTML & CSS",
    note: "Semantic markup, responsive layouts, and learning to think in the box model.",
    step: "Step 02",
  },
  {
    icon: GitBranch,
    name: "GitHub",
    note: "Commits, branches, pull requests — version control as a daily habit.",
    step: "Step 03",
  },
];

function Learning() {
  return (
    <section
      id="learning"
      className="py-24 px-6 border-t border-border/60 animate-fade-in [animation-delay:150ms]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              02 — My Learning Path
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Currently learning.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A journey, not a checklist — each step is a stop along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            aria-hidden
          />
          <div className="grid md:grid-cols-3 gap-5">
            {learning.map((item, i) => (
              <div key={item.name} className="relative">
                <div className="hidden md:flex absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-background z-10 items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-background" />
                </div>
                <div
                  className="group mt-12 p-8 bg-card rounded-2xl border border-border/60 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    boxShadow: "var(--shadow-soft)",
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                      <item.icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const upcomingProjects = [
  {
    icon: Cpu,
    title: "Java Mini App",
    note: "A small console-based project to practice OOP, classes, and clean logic.",
  },
  {
    icon: Globe,
    title: "Responsive Landing Page",
    note: "A pure HTML/CSS practice site exploring grid, flexbox, and motion.",
  },
  {
    icon: Rocket,
    title: "Surprise Project",
    note: "Something experimental — to be revealed as the semester unfolds.",
  },
];

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      Coming Soon
    </span>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 border-t border-border/60 animate-fade-in [animation-delay:200ms]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Projects</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Things I've built.</h2>
        </div>

        {/* Featured: this site */}
        <article
          className="relative p-10 rounded-2xl bg-card border border-border/60 overflow-hidden group mb-5 hover:-translate-y-1 transition-transform"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Live · Project 01
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">This Portfolio Website</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                The very site you're reading. Designed and built as my first real project — a quiet
                place to introduce myself, track what I'm learning, and practice modern web design.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind", "TanStack"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-105"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="#home"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                You're here <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Coming soon grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {upcomingProjects.map((p) => (
            <article
              key={p.title}
              className="group relative p-8 rounded-2xl border border-dashed border-border bg-background flex flex-col min-h-[260px] hover:border-accent/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                  <p.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <ComingSoonBadge />
              </div>
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
              <div className="mt-auto pt-6 flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:200ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:400ms]" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          More projects shipping soon — stay tuned.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (FORMSPREE_ENDPOINT.includes("your-form-id")) {
      toast.error(
        "Set up your Formspree endpoint first — see FORMSPREE_ENDPOINT in src/routes/index.tsx",
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        toast.success("Message sent — I'll get back to you soon!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please email me directly.");
      }
    } catch {
      toast.error("Network error. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const socialLink =
    "flex items-center gap-3 text-muted-foreground hover:text-accent transition-all hover:translate-x-1";

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-border/60 animate-fade-in [animation-delay:250ms]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">04 — Contact</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Let's talk.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
            Have a tip, a project idea, or just want to say hi to a fellow student? Drop a line —
            I read everything.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <a href={`mailto:${SOCIALS.email}`} className={socialLink}>
              <Mail className="h-4 w-4" /> {SOCIALS.email}
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
            >
              <Github className="h-4 w-4" /> github.com/prushti-patel
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/prushti-patel
            </a>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="md:col-span-7 p-8 md:p-10 bg-card rounded-2xl border border-border/60 space-y-5"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required placeholder="What's this about?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="Write your message..." />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full rounded-full transition-transform hover:scale-[1.02]"
          >
            {loading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 Prushti Patel · Built with curiosity & coffee.</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SOCIALS.email}`}
            className="hover:text-accent transition-transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform hover:scale-110 inline-block"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform hover:scale-110 inline-block"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Learning />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
