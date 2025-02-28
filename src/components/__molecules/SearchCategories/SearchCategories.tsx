import deleteicon from "../../../assets/images/icon-remove.svg";

interface SearchCategoriesProps {
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[] | null>>;
}

function SearchCategories({
  selectedCategory,
  setSelectedCategory,
}: SearchCategoriesProps) {
  const Delete = (index: number) => {
    const updatedCategories = selectedCategory.filter((_, i) => i !== index);
    setSelectedCategory(updatedCategories);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {selectedCategory.map((selected, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <div className="h-[32px] flex items-center cursor-pointer px-[8px] bg-[rgba(92,165,165,0.2)] text-[#5CA5A5] font-leagueSpartan font-bold text-[16px] leading-[24px] tracking-[-0.12px]">
            {selected}
          </div>
          <div
            onClick={() => Delete(index)}
            className="bg-[#5CA5A5] hover:bg-[#2B3939] transition duration-1000 !ml-[-10px] cursor-pointer w-8 h-8 rounded-tr-[4px] rounded-br-[4px] flex items-center justify-center"
          >
            <img src={deleteicon} alt="Delete" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchCategories;
