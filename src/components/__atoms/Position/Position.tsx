interface PositionProps {
  position: string;
}

function Position({ position }: PositionProps) {
  return (
    <p className="!mt-[12px] font-leagueSpartan font-bold text-[22px] leading-[24px] tracking-[0px] text-[#2B3939]">
      {position}
    </p>
  );
}

export default Position;
