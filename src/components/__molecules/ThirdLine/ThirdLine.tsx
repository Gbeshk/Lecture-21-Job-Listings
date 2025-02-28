interface ThirdLineProps {
  postedAt: string;
  contract: string;
  location: string;
}

function ThirdLine({ postedAt, contract, location }: ThirdLineProps) {
  return (
    <div className="flex items-center">
      <p className="font-leagueSpartan font-medium sm:text-[18px] text-[16px] leading-[24px] tracking-[-0.14px] text-[#7C8F8F]">
        {postedAt}
      </p>
      <div className=" !m-[16px] w-[4px] h-[4px] bg-[#B7C4C4] rounded-[50%]"></div>
      <p className="font-leagueSpartan font-medium sm:text-[18px] text-[16px] leading-[24px] tracking-[-0.14px] text-[#7C8F8F]">
        {contract}
      </p>
      <div className=" !m-[16px] w-[4px] h-[4px] bg-[#B7C4C4] rounded-[50%]"></div>
      <p className="font-leagueSpartan font-mediumsm:text-[18px] text-[16px] leading-[24px] tracking-[-0.14px] text-[#7C8F8F]">
        {location}
      </p>
    </div>
  );
}

export default ThirdLine;
