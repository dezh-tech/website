import { PointerIcon } from "assets/icons";
import companiesData from "../../../data/companies.json";

const Companies = () => {
  return (
    <div className="bg-secondary text-white space-y-[56px] xl:py-[175px] lg:py-24 py-16 px-6 xl:px-[130px]">
      <div className="flex justify-end">
        <div className="space-y-2 max-w-[542px] " style={{ direction: "rtl" }}>
          <PointerIcon />
          <h3 className="text-[56px] leading-[53px]">Our Partners</h3>
          <p className="text-lg">
            We are working with industry leading projects over the crypto world
            together to boost the process of our mission in decentralized
            culture
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  gap-16 justify-center lg:justify-between">
        {companiesData.map((company) => (
          <a href={company.website} key={company.name}>
            <span className="sr-only">{company.name}</span>
            <img src={company.logo} alt={company.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Companies;
