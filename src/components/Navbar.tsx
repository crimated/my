import { useState } from "react";
import { navLinks, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight text-accent"
        >
          {site.brandAr}
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`إنستغرام ${site.instagramHandle}`}
            className="hidden size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-sm transition-colors duration-300 hover:bg-accent"
          >
            {site.ctaPrimary}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-foreground transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-[5px] h-0.5 rounded-full bg-foreground transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-[10px] h-0.5 rounded-full bg-foreground transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm font-medium last:border-0 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 text-sm font-medium text-muted-foreground hover:text-accent"
            >
              إنستغرام {site.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
