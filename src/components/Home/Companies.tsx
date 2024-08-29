import { PointerIcon } from "assets/icons";
import companiesData from "../../../data/companies.json";

const Companies = () => {
  return (
    <section
      id="our-Partners"
      className="flex flex-col-reverse md:flex-row gap-[58px] items-center bg-secondary noisy-bg text-white xl:py-sp10 lg:py-sp11 py-sp9 px-sp7 xl:px-[150px]"
    >
      <div className="flex flex-wrap  gap-16 justify-evenly flex-1">
        {companiesData.map((company) => (
          <a
            draggable={false}
            target="_blank"
            href={company.website}
            key={company.name}
          >
            <span className="sr-only">{company.name}</span>
            <img
              width={230}
              height={80}
              draggable={false}
              src={company.logo}
              alt={company.name}
            />
          </a>
        ))}
      </div>
      <div className="flex justify-end flex-1">
        <div className="space-y-2 max-w-[542px] " style={{ direction: "rtl" }}>
          <PointerIcon />
          <h3 className="heading-2">Our Partners</h3>
          <p className="text-lg -tracking-tighter">
            We are working with leading tech team and companies worldwide to boost
            our mission in open society!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
