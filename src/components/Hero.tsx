import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <header
      id="home"
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <h1 className="mb-6 text-balance font-display text-[2.5rem] leading-[1.15] font-extrabold md:mb-8 md:text-6xl lg:text-7xl lg:leading-[1.1]">
            منيو مطعمك…{" "}
            <span className="text-accent">بطابع يليق بذوقك.</span>
          </h1>
          <p className="mb-9 max-w-[34ch] text-lg leading-relaxed text-muted-foreground md:mb-12 md:text-xl">
            {`نحوّل منيو مطعمك إلى تجربة رقمية أنيقة وسريعة، سهلة المشاركة عبر الرابط وQR Code.`}
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-accent px-7 py-4 font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02] md:px-8"
            >
              اطلب منيو مطعمك
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-border-strong px-7 py-4 font-semibold transition-colors hover:bg-surface md:px-8"
            >
              شوف الباقات
            </a>
          </div>
        </div>

        <div className="relative flex animate-fade-up justify-center [animation-delay:200ms]">
          <PhoneMockup />
          <div className="absolute -top-10 -right-10 -z-10 size-40 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 -z-10 size-60 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </div>
      <p className="sr-only">
        {site.brandEn} — {site.tagline}
      </p>
    </header>
  );
}
