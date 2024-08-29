import { PointerIcon } from "assets/icons";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-end border-b container xl:min-h[856px]  lg:min-h-[616px]">
      <div className="lg:border-r xl:border-r-0 flex-[1.7] lg:pt-[128px]  lg:pb-sp11 pb-sp8 mt-12 lg:mt-0 space-y-2  lg:px-10 h-full">
        <PointerIcon />
        <div className="space-y-6 lg:py-6">
          <h1 className="lg:heading-1  md:heading-2 heading-3">
            Together we stand, Independent we fall.
          </h1>
          <h6 className="text-lg -tracking-tighter pb-2">
            At Dezh Technologies, we are building tools, apps, services and infrastructures
            that makes a decentralized and open society happen.
          </h6>
        </div>
      </div>
      <div className="lg:pl-7  border-t lg:pt-[168px]  xl:border-l lg:border-t-0 pb-sp11 flex-1 pt-sp8  space-y-12 flex flex-col items-center">
        <h6 className="text-lg -tracking-tighter">
          "Our Code is free for all to use, worldwide. We don't much care if you
          don't approve of the software we write. We know that software can't be destroyed
          and that a widely dispersed system can't be shut down."

          <br />
          <br />
          - Eric Hughes, 9 March 1993
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
