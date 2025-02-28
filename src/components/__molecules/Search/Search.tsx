import SearchCategories from "../SearchCategories/SearchCategories";

interface SearchProps {
  selectedCategory: string[] | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[] | null>>;
}

function Search({ selectedCategory, setSelectedCategory }: SearchProps) {
  console.log(selectedCategory);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {selectedCategory && selectedCategory.length > 0 && (
        <div className="top-[116px] gap-[12px] px-[36px] items-center max-w-[1110px] rounded-[10px] w-full min-h-[74px] h-auto bg-white absolute left-auto right-auto flex p-4">
          <SearchCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <p
            className="text-[#5CA5A5] !ml-auto cursor-pointer font-leagueSpartan font-bold text-[16px] leading-[24px] tracking-[-0.12px] text-right hover:underline decoration-solid decoration-1"
            onClick={() => {
              setSelectedCategory(null);
            }}
          >
            Clear
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
