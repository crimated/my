import { steps } from "@/config/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24"
    >
      <div className="mb-14 text-center md:mb-20">
        <h2 className="mb-4 font-display text-3xl font-extrabold md:text-4xl">
          من الطلب إلى المنيو بثلاث خطوات
        </h2>
        <div className="mx-auto h-1 w-12 bg-accent" />
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mb-[-1.5rem] select-none font-display text-7xl font-extrabold text-surface">
              {step.number}
            </div>
            <h3 className="relative mb-4 text-2xl font-extrabold">{step.title}</h3>
            <p className="px-4 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
