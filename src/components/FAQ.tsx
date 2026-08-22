import { faqs } from "@/config/site";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:px-6 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="mb-4 font-display text-3xl font-extrabold">
          الأسئلة الشائعة
        </h2>
        <div className="mx-auto h-1 w-12 bg-accent" />
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-border bg-card p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
              <span>{faq.question}</span>
              <span className="text-xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
