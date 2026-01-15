import FreshCart from "../../assets/Fresh_Cart.png";
import Mealify from "../../assets/Mealify.png";
import CRUD_system from "../../assets/CRUD system.png";
import Yummy from "../../assets/Yumy App.png";
import DevFolio from "../../assets/DevFolio.png";
import Weather_App from "../../assets/Weather App.png";
import PowerGym from "../../assets/PowerGym.png";
import Eventsy from "../../assets/Eventsy.png";
import Carditem from "../../Components/Carditem/Carditem";
import Najjar from "../../assets/Najjar.png";

import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="flex flex-wrap justify-center gap-4 p-4 mb-16">
        <Carditem
          title="Najjar"
          image={Najjar}
          link="https://najjar-north-riyadh.vercel.app/"
          tools={[
            "🚀 React ,Vite",
            "✨ AOS  ",
            "🎨 Tailwind CSS",
            "🖼️ Lucide React Icons",
            "🧠 React Helmet",
          ]}
        />
        <Carditem
          title="FreshCart "
          image={FreshCart}
          link="https://fresh-cart-lake-mu.vercel.app/"
          tools={[
            "🚀 React ,Vite",
            "🎭 FontAwesome ",
            "🎨 Tailwind CSS",
            "Formik ",
            "🧠 React Helmet",
          ]}
        />
        <Carditem
          title="PowerGym"
          image={PowerGym}
          link="https://power-gym-five.vercel.app/"
          tools={[
            "🚀 React | Vite | 🧠 React Helmet | AOS",
            " 🎨 Tailwind CSS |⚡ React Fast Marquee |Framer Motion",
          ]}
        />
        <Carditem
          title="Eventsy"
          image={Eventsy}
          link="https://atc-01151326229.vercel.app/Home"
          tools={[
            "🚀 React | Vite",
            "🎨 Tailwind CSS",
            "🔄 React Router",
            "🗄️ local storage",
          ]}
        />

        <Carditem
          title="CRUD_system"
          image={CRUD_system}
          link="https://kerolessiha.github.io/CRUD_operations_system/"
          tools={["HTML", " CSS", "JavaScript", "Bootstrap", "FontAwesome"]}
        />
        <Carditem
          title="Yummy"
          image={Yummy}
          link="https://kerolessiha.github.io/Yummy/"
          tools={[
            "🌐 HTML",
            "🎨 CSS",
            "⚙️ JavaScript",
            "🧱 Bootstrap",
            "⭐ FontAwesome",
            "🔌 API",
          ]}
        />
        <Carditem
          title="Weather_App"
          image={Weather_App}
          link="https://kerolessiha.github.io/Weather_App/"
          tools={[
            "🌐 HTML",
            "🎨 CSS",
            "⚙️ JavaScript",
            "🧱 Bootstrap",
            "⭐ FontAwesome",
            "🔌 API",
          ]}
        />
        <Carditem
          title="DevFolio"
          image={DevFolio}
          link="https://kerolessiha.github.io/DevFolio/"
          tools={["🌐 HTML", "🎨 CSS", "🧱 Bootstrap"]}
        />
        <Carditem
          title="Mealify"
          image={Mealify}
          link="https://kerolessiha.github.io/Mealify/"
          tools={["🌐 HTML", "🎨 CSS", "🌑 Dark Mode"]}
        />
      </div>
    </>
  );
}
