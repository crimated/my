const items = [
  { w: "w-20", d: "w-32", price: "١٥,٠٠٠ د.ع" },
  { w: "w-24", d: "w-28", price: "١٢,٥٠٠ د.ع" },
  { w: "w-16", d: "w-36", price: "٩,٠٠٠ د.ع" },
  { w: "w-24", d: "w-24", price: "٧,٥٠٠ د.ع" },
];

export function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="h-[520px] w-[260px] rounded-[3rem] bg-foreground p-3 shadow-2xl ring-8 ring-border md:h-[580px] md:w-[280px]"
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-card">
        <div className="flex h-6 w-full items-center justify-center bg-surface">
          <div className="h-1 w-12 rounded-full bg-border-strong" />
        </div>
        <div className="flex-1 p-4">
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent-soft font-display text-xl font-extrabold text-accent">
            ذ
          </div>
          <div className="mb-2 h-4 w-3/4 rounded bg-surface" />
          <div className="mb-6 h-3 w-1/2 rounded bg-surface/70" />
          <div className="mb-6 flex gap-2 overflow-hidden">
            <div className="rounded-full bg-accent px-3 py-1 text-[10px] text-accent-foreground">
              الأكثر طلباً
            </div>
            <div className="rounded-full bg-surface px-3 py-1 text-[10px] text-muted-foreground">
              المقبلات
            </div>
            <div className="rounded-full bg-surface px-3 py-1 text-[10px] text-muted-foreground">
              المشروبات
            </div>
          </div>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-border p-3"
              >
                <div>
                  <div className={`mb-1 h-3 rounded bg-surface ${item.w}`} />
                  <div className={`h-2 rounded bg-surface/70 ${item.d}`} />
                </div>
                <div className="whitespace-nowrap text-xs font-bold text-accent">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
