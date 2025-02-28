import data from "../../../data.json";
import FirstLine from "../FirstLine/FirslLine";
import Position from "../../__atoms/Position/Position";
import ThirdLine from "../ThirdLine/ThirdLine";
import RightSide from "../RightSide/RightSide";

interface JobProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[] | null>>;
  selectedCategory: string[] | null;
}

function Job({ selectedCategory, setSelectedCategory }: JobProps) {
  const addCategory = (category: string) => {
    setSelectedCategory((prevSelectedCategories: string[] | null) => {
      if (prevSelectedCategories === null) {
        return [category];
      }

      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories;
      }

      return [...prevSelectedCategories, category];
    });
  };

  let currentJobs;

  if (selectedCategory && selectedCategory.length > 0) {
    currentJobs = data.filter((job) => {
      const jobCategories = [job.role, job.level, ...job.languages];

      for (let i = 0; i < selectedCategory.length; i++) {
        if (jobCategories.includes(selectedCategory[i])) {
          return true;
        }
      }
      return false;
    });
  } else {
    currentJobs = data;
  }

  return (
    <div className="w-full h-full flex flex-col items-center sm:gap-[20px] gap-[32px] sm:!mt-[80px] !mt-[110px]">
      {currentJobs.map((job, key) => (
        <div
          key={key}
          className={`${
            job.featured ? "border-l-4 border-l-[#5CA5A5]" : ""
          } rounded-[10px] flex max-w-[1110px] flex-wrap w-full min-h-[152px] h-auto bg-white p-[32px] items-center  justify-between`}
        >
          <div className="flex flex-wrap relative">
            <img
              className="sm:w-[88px] w-[48px] h-[48px] sm:h-[88px] sm:static absolute top-[-56px] "
              src={job.logo}
              alt=""
            />
            <div className="">
              <div className="sm:!ml-[24px] ">
                <FirstLine
                  company={job.company}
                  new={job.new}
                  featured={job.featured}
                />
                <Position position={job.position} />
                <ThirdLine
                  postedAt={job.postedAt}
                  contract={job.contract}
                  location={job.location}
                />
              </div>
            </div>
          </div>
          <div className="w-full  !mt-[12px] h-[1px] bg-[#B7C4C4] sm:hidden"></div>
          <div className="w-full  h-[16px] sm:hidden "></div>

          <RightSide
            addCategory={addCategory}
            role={job.role}
            level={job.level}
            languages={job.languages}
          />
        </div>
      ))}
    </div>
  );
}

export default Job;
