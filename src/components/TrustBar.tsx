import { trustItems } from "@/config/site";

export function TrustBar() {
  return (
    <div className="border-y border-border bg-surface py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center justify-center gap-3">
              <div className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-sm font-semibold tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
