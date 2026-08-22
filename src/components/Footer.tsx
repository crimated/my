import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المميزات", href: "#features" },
  { label: "الباقات", href: "#pricing" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-foreground px-5 py-16 text-background md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-5 font-display text-2xl font-extrabold text-accent">
              {site.brandAr}
            </div>
            <p className="mb-8 max-w-sm text-background/60">{site.tagline}</p>
            <div className="flex gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستغرام"
                className="flex size-10 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-accent"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="flex size-10 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-accent"
              >
                <WhatsappIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-extrabold">روابط سريعة</h3>
            <ul className="space-y-3.5 text-sm text-background/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-extrabold">تواصل معنا</h3>
            <ul className="space-y-3.5 text-sm text-background/60">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Instagram: {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-8 text-xs text-background/40 sm:flex-row">
          <span>{site.copyright}</span>
          <span className="text-[10px] uppercase tracking-widest">
            Premium Digital Menus
          </span>
        </div>
      </div>
    </footer>
  );
}
