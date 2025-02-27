import { useEffect, useState } from "react";
import data from "../../../data.json";
import FirstLine from "../FirstLine/FirslLine";
import Position from "../../__atoms/Position/Position";
import ThirdLine from "../ThirdLine/ThirdLine";
import RightSide from "../RightSide/RightSide";
function Job() {
  const [categories, setCategories] = useState<string[][]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>(
    null
  );
  useEffect(() => {
    const currentCategories: string[][] = data.map((job) => {
      const jobCategories: string[] = [];

      if (job.role) jobCategories.push(job.role);
      if (job.level) jobCategories.push(job.level);
      if (job.languages && Array.isArray(job.languages)) {
        jobCategories.push(...job.languages);
      }

      return jobCategories;
    });

    setCategories(currentCategories);
  }, []);

  console.log(categories);
  const addCategory = (category: string) => {
    setSelectedCategory((prevSelectedCategories) => {
      if (prevSelectedCategories === null) {
        return [category];
      }

      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories;
      }

      return [...prevSelectedCategories, category];
    });
  };
  console.log(selectedCategory);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-[20px] !mt-[80px]">
        {data.map((job, key) => (
          <div
            key={key}
            className={`${
              job.featured ? "border-l-4 border-l-[#5CA5A5]" : ""
            } rounded-[10px] flex max-w-[1110px] w-full h-[152px] bg-white p-[32px] items-center justify-between`}
          >
            <div className="flex">
              <div className="w-[88px] h-[88px] rounded-[50%] bg-red-500"></div>
              <div className="!mt-[20/px]">
                <img src={job.logo} alt="" />
                <div className="!ml-[24px]">
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
            <RightSide
              addCategory={addCategory}
              role={job.role}
              level={job.level}
              languages={job.languages}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Job;
