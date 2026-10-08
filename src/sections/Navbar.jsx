import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
import { profile, navLinks } from "../data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-100 flex-wrap items-center justify-between gap-x-6 px-20 py-3 md:h-16 md:flex-nowrap md:py-0">
        <NavLink to="/" className="font-display font-bold">
          {profile.name}
        </NavLink>
        <nav className="order-last -mx-6 w-full overflow-x-auto px-6 pt-1 md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0 md:pt-0">
          <ul className="m-0 flex list-none gap-1 whitespace-nowrap p-0 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `inline-block rounded-full px-3.5 py-1.5 transition ${isActive ? "bg-ink font-bold text-bg" : "text-mute hover:text-ink"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button to="/kontak" className="!px-5 !py-2">
          Hubungi saya
        </Button>
      </div>
    </header>
  );
}
