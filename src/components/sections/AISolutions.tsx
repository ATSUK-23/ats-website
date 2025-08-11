type Solution = {
  id: string;
  title: string;
  blurb: string;
};

const solutions: Solution[] = [
  {
    id: "your-ai-brain",
    title: "Your AI Brain",
    blurb:
      "Centralize company knowledge into an intelligent system that answers prospects instantly and guides them to the next step 24/7.",
  },
  {
    id: "talking-websites",
    title: "Talking Websites",
    blurb:
      "Enable natural 1-2-1 dialogue so visitors can use their voice to discover how you solve their unique problems.",
  },
  {
    id: "ai-receptionist",
    title: "24/7 Multi-Tasking Receptionist",
    blurb:
      "Handle customer questions, qualification and routing to the right human when needed—on any channel, any time.",
  },
  {
    id: "digital-assistant",
    title: "Intelligent Digital Store Assistance",
    blurb:
      "Hand-hold shoppers through their entire journey pre and post purchase to increase satisfaction and revenue.",
  },
  {
    id: "speed-to-lead",
    title: "Speed To Lead Forms",
    blurb:
      "Convert leads at the moment of highest intent with ultra-fast follow-up before they’re lost forever.",
  },
  {
    id: "maximise-conversions",
    title: "Maximise Conversions",
    blurb:
      "Re-engage prospects at scale and lock in appointments with smart, automated reminders.",
  },
  {
    id: "social-agents",
    title: "Social Agents",
    blurb:
      "Automate next steps for prospects who discover you across social platforms to capture and qualify demand.",
  },
];

export const AISolutions = () => {
  return (
    <section id="ai-solutions" className="container py-16 md:py-24">
      <header className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">AI Solutions</h2>
        <p className="mt-3 text-muted-foreground">
          We help develop your AI strategy, source the best tech partner and manage implementation—so you can focus on clients.
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
