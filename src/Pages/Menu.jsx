import HeaderMenu from "../Components/MenuComponents/HeaderMenu";
import Catagory from "../Components/MenuComponents/Catagory";
import CardMenu from "../Components/MenuComponents/CardMenu";
import useFetch from "../Components/hooks/FetchData";
import { useEffect, useState } from "react";
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
        {/* <Catagory /> */}
      </div>
      {isPending && <Spinner />}
      {error && <NotFound />}

      <div className="flex flex-col md:flex-row md:justify-around md:items-stretch md:flex-wrap gap-10">
        {data &&
          data?.map((card, index) => {
            if (filter == "All") {
              return (
                <>
                  <CardMenu key={index} card={card} />
                </>
              );
            }
            if (filter == "Offers" && card.offer) {
              return (
                <>
                  <CardMenu key={index} card={card} />
                </>
              );
            }

            if (card.category.nameEn == filter) {
              return (
                <>
                  <CardMenu key={index} card={card} />
                </>
              );
            } else {
            }
          })}
      </div>
    </div>
  );
}
