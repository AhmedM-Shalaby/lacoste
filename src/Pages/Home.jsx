import BackToSchool from "../Components/Home/BackToSchool";
import SectionHeading from "../Components/Home/SectionHeading";
import TrendingCategories from "../Components/Home/TrendingCategories";
import LacosteWorld from "../Components/Home/LacosteWorld";
import Slider from "../Components/Slider/Slider";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [welcome, setWelcome] = useState(false);
  useEffect(() => {
    setWelcome(true);
  }, [isAuth]);

  return (
    <>
      <BackToSchool />
      <SectionHeading nameHeading="Trending Categories">
        <TrendingCategories />
      </SectionHeading>
      <SectionHeading nameHeading="The Lacoste World">
        <LacosteWorld />
      </SectionHeading>
      <SectionHeading nameHeading="Best sellers">
        <Slider />
      </SectionHeading>
    </>
  );
}
