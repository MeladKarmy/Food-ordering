import Banner from "../Components/BlogComponents/Banner";
import DetailsBlog from "../Components/BlogComponents/DetailsBlog";
import BtnBlog from "../Components/BlogComponents/BtnBlog";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cart/Cart";
import { useTranslation } from "react-i18next";
import useFetch from "../Components/hooks/FetchData";
import { Suspense } from "react";
import Spinner from "../Components/Spinner";

export default function Blog() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  let cart = useSelector((state) => state.cart.products);
  let { data, isPending, error } = useFetch(`pizza/${id}`);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const addProduct = () => {
    let currentProduct = cart.find(
      (currentProduct) => currentProduct._id == data._id
    );
    if (currentProduct) {
      navigateTo("/cart");
    } else {
      navigateTo("/cart");
      dispatch(addToCart(data));
    }
  };
  return (
    <div className="container mx-auto ">
      <div className="mt-16 flex flex-col md:flex-row justify-center items-start gap-x-4 p-10  ">
        {isPending && <Spinner />}
        {error && <h3 className="text-red-500">{error}</h3>}
        <div className="w-full md:w-1/2">
          <Banner image={data?.image} name={data?.nameEn} />
        </div>
        <div className="w-full md:w-1/2">
          <DetailsBlog
            title={{ ar: data?.nameAr, en: data?.nameEn }}
            category={data?.category}
            price={data?.size}
            desc={{
              en: data?.descriptionEn,
              ar: data?.descriptionAr,
            }}
            product={data}
          />
          <div className="p-6 md:flex md:justify-around md:items-center gap-4">
            <BtnBlog
              handelClick={() => {
                dispatch(addToCart(data));
              }}
            >
              {t("base-button.add-to-cart")}
            </BtnBlog>
            <BtnBlog handelClick={addProduct}>
              {t("base-button.order-now")}
            </BtnBlog>
          </div>
        </div>
      </div>
    </div>
  );
}
