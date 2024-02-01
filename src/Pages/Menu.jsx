import HeaderMenu from "../Components/MenuComponents/HeaderMenu";
import CardMenu from "../Components/MenuComponents/CardMenu";
import useFetch from "../Components/hooks/FetchData";
import { useState } from "react";
import CategoryDetails from "../Components/MenuComponents/CategoryDetails";
import Spinner from "../Components/Spinner";
import Error from "../Components/Error";
import { toast } from "react-toastify";

export default function Menu() {
  let [filter, setFillter] = useState("All");
  let { data, isPending, error } = useFetch(`pizza`);
  return (
    <div className="mt-36 p-4 container mx-auto">
      <HeaderMenu />
      <div className="my-12">
        <CategoryDetails handelFilter={setFillter} />
      </div>

      <div className="flex flex-col md:flex-row md:justify-around md:items-stretch md:flex-wrap gap-10">
        {error && <Error error={error} />}
        {error && toast.error(error)}
        {isPending && <Spinner />}
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
