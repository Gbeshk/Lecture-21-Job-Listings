import Job from "../../__molecules/Job/Job";
import Header from "../../__atoms/Header/Header";
import Search from "../../__molecules/Search/Search";
import { useState } from "react";
function JobCattegories() {
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>(
    null
  );
  return (
    <>
      <Search
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Header />
      <Job
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}
export default JobCattegories;
