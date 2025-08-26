type Solution = {
  id: string;
  title: string;
  blurb: string;
};

const solutions: Solution[] = [
  {
    id: "agents",
    title: "Agents",
    blurb:
      "Deploy text and voice agents that qualify, assist and route customers 24/7 to boost conversions and satisfaction.",
  },
  {
    id: "voice",
    title: "Voice",
    blurb:
      "Add natural, conversational voice experiences across web and phone to answer questions and guide next steps.",
  },
  {
    id: "audits",
    title: "Audits",
    blurb:
      "Assess your current stack and workflows to uncover high‑impact automation opportunities and quick wins.",
  },
  {
    id: "workshops",
    title: "Workshops",
    blurb:
      "Hands‑on sessions with your team to define AI strategy, prioritize use cases and align success metrics.",
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    blurb:
      "Rapid prototyping to bring ideas to life, validate assumptions and iterate toward the ideal customer experience.",
  },
];

export const AISolutions = () => {
  return (
    <section id="ai-solutions" className="container py-16 md:py-24">
      <header className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">AI Solutions</h2>
        <p className="mt-3 text-muted-foreground">
          We help develop your AI strategy, source the best tech partner and manage implementation so you can focus on clients.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <article
            id={s.id}
            key={s.id}
            className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md focus-within:shadow-md"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
              Discuss this solution
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AISolutions;
