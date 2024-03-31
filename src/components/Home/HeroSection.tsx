import { PointerIcon } from "assets/icons";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-end border-b container">
      <div className="flex-[1.7]  lg:pb-16 pb-8 mt-12 lg:mt-0 space-y-2  lg:px-10">
        <PointerIcon />
        <div className="space-y-6 lg:py-6">
          <h1 className="lg:text-[86px] text-[46px] leading-[47px] md:text-[56px] md:leading-[55px]  lg:leading-[91px]">
            Building the future of decentralized generation of WEB
          </h1>
          <h6 className="text-lg pb-2">
            We are working for a more decentralized web and internet in future
            for everyone.
          </h6>
        </div>
      </div>
      <div className="lg:pl-7 lg:border-l border-t lg:border-t-0 pb-16 flex-1 pt-8 lg:pt-[168px] space-y-12 flex flex-col items-center">
        <h6 className="text-lg">
          At Dezh Technologies, we are building tools, apps, services and infras
          that make decentralized web happens.
        </h6>
        <img
          draggable={false}
          src="/ConnectedCubes.svg"
          alt="Connected cubes"
        />
      </div>
    </section>
  );
}
