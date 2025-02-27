interface FirstLineProps {
  company: string;
  new?: boolean;
  featured?: boolean;
}

function FirstLine({ company, new: isNew, featured }: FirstLineProps) {
  return (
    <>
      <div className="flex items-center">
        <h1 className="font-leagueSpartan font-bold text-[18px] leading-[16.56px] tracking-[0px] text-[#5CA5A5]">
          {company}
        </h1>
        {isNew && (
          <div className="pt-[3px] !ml-[16px] flex items-center justify-center w-[51px] h-[24px] rounded-[12px] bg-[#5CA5A5] text-white  font-leagueSpartan font-bold text-[14px] leading-[14px] tracking-[-0.11px]">
            NEW!
          </div>
        )}
        {featured && (
          <div className="pt-[3px] !ml-[8px] flex items-center justify-center w-[79px] h-[24px] rounded-[12px] bg-[#2B3939] text-white  font-leagueSpartan font-bold text-[14px] leading-[14px] tracking-[-0.11px]">
            FEATURED
          </div>
        )}
      </div>
    </>
  );
}

export default FirstLine;
