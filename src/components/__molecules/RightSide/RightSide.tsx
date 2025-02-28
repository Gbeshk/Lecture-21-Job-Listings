interface RightSideProps {
  addCategory: (category: string) => void;
  role: string;
  level: string;
  languages: string[];
}

function RightSide({ addCategory, role, level, languages }: RightSideProps) {
  return (
    <div className="flex gap-[16px] flex-wrap ">
      <div
        onClick={() => addCategory(role)}
        className="hover:bg-[#5CA5A5] hover:text-white transition duration-1000 cursor-pointer h-[32px] flex items-center px-[8px] bg-[rgba(92,165,165,0.2)] text-[#5CA5A5] font-leagueSpartan font-bold text-[16px] leading-[24px] tracking-[-0.12px]"
      >
        {role}
      </div>

      <div
        onClick={() => addCategory(level)}
        className="hover:bg-[#5CA5A5] hover:text-white transition duration-1000 cursor-pointer h-[32px] flex items-center px-[8px] bg-[rgba(92,165,165,0.2)] text-[#5CA5A5] font-leagueSpartan font-bold text-[16px] leading-[24px] tracking-[-0.12px]"
      >
        {level}
      </div>

      {languages.map((language, key) => (
        <div
          key={key}
          onClick={() => addCategory(language)}
          className=" hover:bg-[#5CA5A5] hover:text-white transition duration-1000 cursor-pointer h-[32px] flex items-center px-[8px] bg-[rgba(92,165,165,0.2)] text-[#5CA5A5] font-leagueSpartan font-bold text-[16px] leading-[24px] tracking-[-0.12px]"
        >
          {language}
        </div>
      ))}
    </div>
  );
}

export default RightSide;
