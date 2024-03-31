import { DiscordIcon } from "assets/icons";
import Link from "components/ui/Link";

export default function JoinCommunity() {
  return (
    <section id="community" className="lg:py-[94px] py-8 container">
      <div className=" flex  flex-col lg:flex-row  text-center lg:text-start gap-[58px]  items-center px-10 py-[82px] border">
        <div className="flex flex-col lg:flex-row items-center gap-6 flex-1">
          <DiscordIcon />
          <div className="max-w-[750px] space-y-2">
            <h3 className=" text-[2rem] font-extrabold leading-[53px]">
              Join our friendly community
            </h3>
            <p className="text-lg leading-[25px]">
              The latest news about our product, testing and discussion of
              updates. A quick and convenient exchange of information with
              colleagues.
            </p>
          </div>
        </div>
        <Link
          href="https://discord.com/invite/gCKGkkzRyx"
          target="_blank"
          variant="primary"
        >
          Join Dezh on Discord
        </Link>
      </div>
    </section>
  );
}
