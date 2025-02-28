interface PositionProps {
  position: string;
}

function Position({ position }: PositionProps) {
  return (
    <p className="hover:text-[#5CA5A5] transition duration-1000 cursor-pointer !mt-[12px] font-leagueSpartan font-bold text-[15px] sm:text-[22px] leading-[24px] tracking-[0px] text-[#2B3939]">
      {position}
    </p>
  );
}

export default Position;
