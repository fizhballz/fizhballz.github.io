// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          {/* Placeholder logo / avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <nav className="flex gap-4 text-sm">
            <Link href="#about" className="font-semibold">
              about.
            </Link>
            <Link href="#projects">projects.</Link>
            <Link href="#experience">experience.</Link>
            <Link href="#contact">contact.</Link>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="flex-1 grid md:grid-cols-2 items-center px-8 md:px-16">
        {/* Left text */}
        <div className="space-y-6">
          <p className="text-3xl md:text-4xl text-gray-300 leading-tight">
            hello,
            <br />
            my name is Stella
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-red-600">your</span>{" "}
            <span className="text-red-600">name.</span>
          </h1>
          <p className="max-w-md text-sm md:text-base text-gray-600">
            I&apos;m a mechanical engineer with a strong passion and background
            background in software engineering. I enjoy building data pipelines, 
            and intuitive interfaces that bridge hardware and software.
          </p>
        </div>

        {/* Right illustration placeholder */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 border-4 border-gray-200 rounded-full flex items-center justify-center">
            {/* Later replace with an SVG / image of you or a character */}
            <span className="text-gray-400 text-sm">your illustration here</span>
          </div>
        </div>
      </section>

      {/* Anchor sections for the nav links */}
      <section id="about" className="px-8 md:px-16 py-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="max-w-2xl text-gray-700">
          Short bio goes here. Highlight mechanical projects, software tools
          you use, and what roles you are targeting.
        </p>
      </section>

      <section id="projects" className="px-8 md:px-16 py-20 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {/* Replace with a grid of project cards later */}
        <p className="text-gray-700">Project list coming soon.</p>
      </section>

      <section id="experience" className="px-8 md:px-16 py-20">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-700">
          Brief timeline of internships, research, and software work.
        </p>
      </section>

      <section id="contact" className="px-8 md:px-16 py-20 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">
          Add email, GitHub, LinkedIn and a short call-to-action.
        </p>
      </section>
    </main>
  );
}
