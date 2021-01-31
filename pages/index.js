import Head from "next/head";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategoriesContainer from "../components/ShopCategories/ShopCategories.container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ShopCategoriesContainer />
      <FeaturedProducts />
    </div>
  );
}
