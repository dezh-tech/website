import Link from "components/ui/Link";
import { links } from "./links";
import { Logo } from "assets/icons";

export function Header() {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="container mx-auto px-10  border-b border-secondary py-6">
      <nav className="flex justify-between items-center">
        <a draggable={false} href="/">
          <Logo className="text-primary" />
        </a>
        <ul className="list-disc gap-9 md:flex hidden">
          {links.map((link, key) => (
            <li key={key}>
              <button
                onClick={() => handleClickScroll(link.link)}
                className="text-xl"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <Link className="text-xl" variant="primary" href="mailto:hi@dezh.tech">
          Contact us
        </Link>
      </nav>
    </header>
  );
}
