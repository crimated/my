import { plans } from "@/config/site";
import { planWhatsappUrl } from "@/lib/whatsapp";

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-display text-3xl font-extrabold md:text-4xl">
            اختر الباقة المناسبة لمطعمك
          </h2>
          <div className="mx-auto h-1 w-12 bg-accent" />
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) =>
            plan.featured ? (
              <div
                key={plan.id}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-foreground bg-foreground p-8 shadow-2xl md:p-10 lg:-translate-y-4"
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-accent" />
                <div className="mb-8">
                  <div className="mb-4 inline-block rounded bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                    {plan.badge}
                  </div>
                  <h3 className="mb-2 text-xl font-extrabold text-background">
                    {plan.name}
                  </h3>
                  <div className="mb-1 font-display text-3xl font-extrabold text-accent">
                    {plan.price}
                  </div>
                  <div className="text-xs text-background/50">{plan.period}</div>
                </div>
                <ul className="mb-10 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-background/80"
                    >
                      <div className="size-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={planWhatsappUrl(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-accent py-4 text-center font-bold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  {plan.cta}
                </a>
              </div>
            ) : (
              <div
                key={plan.id}
                className="flex flex-col rounded-3xl border border-border bg-background p-8 shadow-sm md:p-10"
              >
                <div className="mb-8">
                  <h3 className="mb-2 text-xl font-extrabold">{plan.name}</h3>
                  <div className="mb-1 font-display text-3xl font-extrabold text-accent">
                    {plan.price}
                  </div>
                  <div className="text-xs text-muted-foreground">{plan.period}</div>
                </div>
                <ul className="mb-10 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="size-1.5 shrink-0 rounded-full bg-border-strong" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={planWhatsappUrl(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl border border-foreground py-4 text-center font-bold transition-colors hover:bg-foreground hover:text-background"
                >
                  {plan.cta}
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
