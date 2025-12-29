function Notes() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-slate-200">
      <h1 className="mb-6 text-3xl font-semibold">Welcome 👋</h1>

      <p className="mb-4 text-base leading-relaxed">
        This portfolio is intentionally designed to resemble
        <span className="font-semibold text-slate-100">
          Visual Studio Code (VS Code)
        </span>
        &nbsp;— a popular code editor used by developers.
      </p>

      <p className="mb-10 text-base leading-relaxed">
        If you are not from a technical background, no worries 🙂 <br />
        This layout is used to clearly organize real-world projects, skills, and
        experience in a structured and transparent way.
      </p>

      <h2 className="mb-4 text-xl font-semibold">
        Why this portfolio looks different
      </h2>

      <p className="mb-4 text-base leading-relaxed">
        Instead of a traditional single-page portfolio, this site uses a VS
        Code–style layout to:
      </p>

      <ul className="mb-10 list-inside list-disc space-y-2 text-base">
        <li>Showcase how I organize real projects</li>
        <li>Reflect my day-to-day working environment as a developer</li>
        <li>Allow you to explore sections at your own pace</li>
      </ul>

      <p className="mb-10 text-base italic leading-relaxed text-slate-400">
        Think of this as a workspace, not a website.
      </p>

      <h2 className="mb-4 text-xl font-semibold">
        How to navigate this portfolio
      </h2>

      <ol className="mb-10 list-inside list-decimal space-y-4 text-base">
        <li>
          <span className="font-medium text-slate-100">Left Sidebar</span>
          <br />
          Acts like a menu. Click any file or folder to open a section (for
          example: about, professional, personal).
        </li>

        <li>
          <span className="font-medium text-slate-100">
            Main Panel (Center)
          </span>
          <br />
          Displays the content of the selected section.
        </li>

        <li>
          <span className="font-medium text-slate-100">Tabs at the Top</span>
          <br />
          Each opened section appears as a tab — you can switch between them
          anytime.
        </li>
      </ol>

      <p className="mb-10 text-sm text-slate-400">
        💡 Tip: You can safely click around — nothing here will break.
      </p>

      <h2 className="mb-4 text-xl font-semibold">Recommended starting point</h2>

      <ol className="mb-10 list-inside list-decimal space-y-3 text-base">
        <li>
          <span className="font-medium text-slate-100">📄 professional.js</span>{" "}
          — My professional experience
        </li>
        <li>
          <span className="font-medium text-slate-100">📄 personal.js</span> —
          Real-world applications I’ve built
        </li>
        <li>
          <span className="font-medium text-slate-100">📄 about.html</span> —
          Some details about me
        </li>
        {/* <li>
          <span className="font-medium text-slate-100">🛠 skills.md</span> —
          Tools and technologies I work with
        </li> */}
      </ol>

      <p className="mb-10 text-base leading-relaxed">Each project includes:</p>

      <ul className="mb-10 list-inside list-disc space-y-2 text-base">
        <li>What the project does</li>
        <li>My role and responsibilities</li>
        <li>Key features and challenges</li>
      </ul>

      {/* Disclaimer */}
      <h2 className="mb-4 text-xl font-semibold">A quick note</h2>

      <p className="text-base leading-relaxed text-slate-300">
        This portfolio prioritizes clarity, transparency, and real
        implementation work over visual animations or marketing-style layouts.
      </p>

      {/* <p className="mt-4 text-base leading-relaxed text-slate-300">
        If you prefer a traditional résumé-style view, all information here
        directly maps to my CV and LinkedIn profile.
      </p> */}
    </div>
  );
}

export default Notes;
