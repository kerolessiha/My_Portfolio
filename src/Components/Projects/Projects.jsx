import FreshCart from "../../assets/Fresh_Cart.png";
import Mealify from "../../assets/Mealify.png";
import CRUD_system from "../../assets/CRUD system.png";
import Yummy from "../../assets/Yumy App.png";
import DevFolio from "../../assets/DevFolio.png";
import Weather_App from "../../assets/Weather App.png";
import Carditem from "../Carditem/Carditem";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="flex flex-wrap justify-center gap-4 p-4 mb-16">
        <Carditem
          title="FreshCart "
          image={FreshCart}
          link="https://fresh-cart-lake-mu.vercel.app/"
        />
        <Carditem
          title="Mealify"
          image={Mealify}
          link="https://kerolessiha.github.io/Mealify/"
        />
        <Carditem
          title="CRUD_system"
          image={CRUD_system}
          link="https://kerolessiha.github.io/CRUD_operations_system/"
        />
        <Carditem
          title="Yummy"
          image={Yummy}
          link="https://kerolessiha.github.io/Yummy/"
        />
        <Carditem
          title="Weather_App"
          image={Weather_App}
          link="https://kerolessiha.github.io/Weather_App/"
        />
        <Carditem
          title="DevFolio"
          image={DevFolio}
          link="https://kerolessiha.github.io/DevFolio/"
        />
      </div>
    </>
  );
}
