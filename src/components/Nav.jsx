import { useEffect, useState } from "react";
import { NAV, SECTION_TO_NAV } from "../data.js";
import logo from "../assets/logo Header.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActive(SECTION_TO_NAV[e.target.id]),
        ),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.keys(SECTION_TO_NAV).forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-[14px] border-b border-ln" : ""
      }`}
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-xl font-bold"
          aria-label="PicoPine home"
        >
          <img src={logo} alt="PicoPine" className="h-8 w-auto" />
        </a>

        <div
          className={
            open
              ? "fixed left-0 right-0 top-[72px] grid gap-1 border-b border-ln bg-bg/95 px-6 pb-8 pt-5 md:static md:flex md:gap-1.5 md:border-0 md:bg-transparent md:p-0"
              : "hidden gap-1.5 md:flex"
          }
        >
          {NAV.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3.5 py-2 text-[.95rem] transition-all max-md:py-3.5 max-md:text-xl hover:bg-vi/15 hover:text-tx ${
                active === l.id
                  ? "bg-vi/20 text-tx shadow-[inset_0_0_0_1px_rgba(124,77,255,.45)]"
                  : "text-mu"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a className="btn btn-p max-md:hidden" href="#ecosystem">
          Explore PicoPine
        </a>
        <button
          className="mb relative hidden h-11 w-11 cursor-pointer rounded-xl border border-ln bg-transparent max-md:block"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i />
          <i />
        </button>
      </div>
    </nav>
  );
}
