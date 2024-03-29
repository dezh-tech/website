import { PointerIcon } from "assets/icons";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-end border-b container">
      <div className="flex-[1.7]  lg:pb-16 pb-8 mt-12 lg:mt-0 space-y-2  lg:px-10">
        <PointerIcon />
        <div className="space-y-6 lg:py-6">
          <h1 className="lg:text-[86px] text-[46px] leading-[47px] md:text-[56px] md:leading-[55px]  lg:leading-[91px]">
            Building Bridges to Blockchain's Distributed Ecosystem
          </h1>
          <h6 className="text-lg pb-2">
            The Dezh team provides blockchain-based tools for developing and
            running programs and services across various industries in a simple
            and scalable manner.
          </h6>
        </div>
      </div>
      <div className="lg:pl-7 lg:border-l border-t lg:border-t-0 pb-16 flex-1 pt-8 lg:pt-[168px] space-y-12">
        <h6 className="text-lg">
          Dezh team projects allow developers to easily develop and manage
          distributed applications (DApps) and blockchain-based services,
          facilitating the adoption of blockchain in different industries.
        </h6>
        <img src="/ConnectedCubes.svg" alt="Connected cubes" />
      </div>
    </section>
  );
}
