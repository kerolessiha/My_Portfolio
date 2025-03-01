import Marquee from "react-fast-marquee";
import HtmlImage from "../../assets/HtmlImage.png";
import CssImage from "../../assets/CssImage.png";
import JavaImage from "../../assets/JavaImage.png";
import BootstrabImage from "../../assets/BootstrabImage.png";
import JqueryImage from "../../assets/JqueryImage.png";
import GitImage from "../../assets/GitImage.png";
import TailwindImage from "../../assets/TailwindImage.png";
import ReactImage from "../../assets/ReactImage.png";
import TypescriptImage from "../../assets/TypescriptImage.png";
import ReduxImage from "../../assets/ReduxImage.png";
import SassImage from "../../assets/SassImage.png";
import NextImage from "../../assets/NextImage.png";
import MUIImage from "../../assets/MUIImage.png";
import { Helmet } from "react-helmet";

const skills = [
  HtmlImage,
  CssImage,
  BootstrabImage,
  JavaImage,
  JqueryImage,
  GitImage,
  TailwindImage,
  ReactImage,
  TypescriptImage,
  ReduxImage,
  SassImage,
  NextImage,
  MUIImage,
];

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills </title>
      </Helmet>
      <div className="w-full bg-gray-100 py-15">
        {/* First Marquee - Left to Right */}
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[245, 245, 245]}
        >
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-4">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill}
                alt={`Skill ${index}`}
                className="w-32 sm:w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 shadow-lg rounded-lg"
              />
            ))}
          </div>
        </Marquee>

        {/* Second Marquee - Right to Left */}
        <Marquee
          speed={50}
          direction="right"
          pauseOnHover={true}
          gradient={true}
          gradientColor={[245, 245, 245]}
        >
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-3 mb-6">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill}
                alt={`Skill ${index}`}
                className="w-32 sm:w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 shadow-lg rounded-lg"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
