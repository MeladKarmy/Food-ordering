import Banner from "../Components/HomeComponents/Banner";
import SpecialOffers from "../Components/HomeComponents/SpecialOffers";
import TextBannerHome from "../Components/HomeComponents/TextBannerHome";
import MenuHome from "../Components/HomeComponents/MenuHome";
import Spinner from "../Components/Spinner";

export default function Home() {
  return (
    <div className="p-3 w-full mt-36">
      <div className="container mx-auto">
        <header className="md:flex md:justify-between md:items-center ">
          <div className="md:order-2 md:w-1/2 mb-8">
            <Banner />
          </div>
          <div className="md:order-1 md:w-1/2">
            <TextBannerHome />
          </div>
        </header>
        <div className="mt-5">
          <SpecialOffers />
        </div>
        <div className="mt-32">
          <MenuHome />
        </div>
      </div>
    </div>
  );
}
