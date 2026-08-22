import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="rounded-3xl border border-border bg-surface px-6 py-14 text-center md:px-16 md:py-20">
        <h2 className="mx-auto mb-5 max-w-2xl text-balance font-display text-3xl font-extrabold md:text-5xl">
          جاهز تخلي منيو مطعمك أرتب وأسهل؟
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-muted-foreground md:text-lg">
          اطلب منيو مطعمك من {site.brandAr} وخلي الباقي علينا.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-9 py-4 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
          >
            <WhatsappIcon className="size-5" />
            اطلب المنيو الآن
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <InstagramIcon className="size-4" />
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
