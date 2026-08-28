"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border/50">
      <div className="wrap flex items-center justify-between h-[56px] md:h-[64px]">
        <Link href="#top" className="md:pl-2 shrink-0">
          <span className="text-[15px] md:text-[17px] font-extrabold tracking-[-0.01em] text-navy">
            EXCEED CAREER
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium tracking-[0.02em] text-navy hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#career"
            className="group bg-navy text-white text-[12px] font-medium tracking-[0.02em] px-5 py-2.5 whitespace-nowrap"
          >
            キャリアを探す{" "}
            <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
              →
            </span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-end gap-[5px] w-9 h-9"
        >
          <span className="block h-[2px] w-7 bg-navy" />
          <span className="block h-[2px] w-5 bg-navy" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-white">
          <nav className="wrap py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] font-semibold tracking-[0.04em] text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#career"
              onClick={() => setOpen(false)}
              className="bg-navy text-white text-[13px] font-semibold text-center px-6 py-3"
            >
              キャリアを探す →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
