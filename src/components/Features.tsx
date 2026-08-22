import { features } from "@/config/site";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="mb-14 text-center md:mb-20">
        <h2 className="mb-4 font-display text-3xl font-extrabold md:text-4xl">
          كل شيء يحتاجه منيو مطعمك
        </h2>
        <div className="mx-auto h-1 w-12 bg-accent" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {features.map((feature, i) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-colors hover:border-accent/30"
          >
            <div className="mb-6 font-display text-sm font-extrabold text-accent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-3 text-xl font-extrabold">{feature.title}</h3>
            <p className="leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
