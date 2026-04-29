import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "On its way",
      description: "Your AI Marketing Foundation Checklist is heading to your inbox.",
    });
    setEmail("");
  };

  return (
    <section className="py-32 md:py-44 border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="label-eyebrow mb-6">— Free Resource</p>
          <h2 className="display-serif text-4xl md:text-5xl mb-6">
            The AI Marketing Foundation <span className="display-italic">Checklist.</span>
          </h2>
          <p className="text-foreground/85 text-base md:text-lg leading-relaxed max-w-md">
            A simple checklist to help you see where your AI setup is weak, what is
            missing, and what to build first.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-surface border border-hairline rounded-full px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground rounded-full py-4 label-mono hover:bg-pink-soft transition-colors"
          >
            Download →
          </button>
          <p className="label-mono text-center text-foreground/50">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
};

export default LeadMagnet;
