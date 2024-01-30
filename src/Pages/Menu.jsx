import HeaderMenu from "../Components/MenuComponents/HeaderMenu";
import Catagory from "../Components/MenuComponents/Catagory";
import CardMenu from "../Components/MenuComponents/CardMenu";
import useFetch from "../Components/hooks/FetchData";
import { useState } from "react";
import CategoryDetails from "../Components/MenuComponents/CategoryDetails";
import Spinner from "../Components/Spinner";
import NotFound from "../Components/NotFound";

export default function Menu() {
  let [filter, setFillter] = useState("All");
  let { data, isPending, error } = useFetch(`pizza`);
  let [category, setCategory] = useState([]);
  return (
    <div className="mt-36 p-4 container mx-auto">
      <HeaderMenu />
      <div className="my-12">
        <CategoryDetails handelFilter={setFillter} />
      </div>
      {isPending && <Spinner />}
      {error && <NotFound error={error} />}

      <div className="flex flex-col md:flex-row md:justify-around md:items-stretch md:flex-wrap gap-10">
        {data &&
          data?.map((card) => {
            if (
              filter === "All" ||
              (filter === "Offers" && card.offer) ||
              card.category.nameEn === filter
            ) {
              return <CardMenu key={card._id} card={card} />;
            }
          })}
      </div>
    </div>
  );
}
