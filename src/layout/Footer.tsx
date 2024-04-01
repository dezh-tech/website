import { Logo, MessageIcon } from "assets/icons";
import SocialMediaLinks from "components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container py-[56px] border-t space-y-10">
      <section className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-12 ">
        <div className="flex flex-col lg:text-start items-center lg:items-start text-center gap-y-[10px] py-2 lg:py-0">
          <a draggable={false} href="/">
            <Logo className="text-secondary" />
          </a>
          <h5 className="title-3">
            Building the future of decentralized generation of WEB
          </h5>
        </div>
        <div>
          <SocialMediaLinks />
        </div>
      </section>
      <section className="flex  flex-col md:flex-row text-center md:text-start items-center gap-[10px] text-base leading-4 justify-between py-[14px] px-5 bg-secondary text-white">
        <div className="flex items-center gap-[10px]">
          <MessageIcon />
          <a draggable={false} href="mailto:hi@dezh.tech">
            hi@dezh.tech
          </a>
        </div>
        <span>© {year} Dezh.tech, All Rights Reserved</span>
      </section>
    </footer>
  );
}
