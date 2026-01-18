import { Helmet } from "react-helmet";
import Heroimage from "../../assets/Portfolio-photo.png";
import Marquee from "react-fast-marquee";

const skills = [
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-bootstrap-plain colored",
  "devicon-javascript-plain colored",
  "devicon-jquery-plain-wordmark colored",
  "devicon-git-plain colored",
  "devicon-github-original colored",
  "devicon-tailwindcss-plain colored",
  "devicon-react-original colored",
  "devicon-typescript-plain colored",
  "devicon-redux-original colored",
  "devicon-sass-original colored",
  "devicon-nextjs-line-wordmark colored",
  "devicon-materialui-plain colored",
  "devicon-wordpress-plain-wordmark colored",
];
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl -mt-5">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-[#001f3f]">
                Hey 👋 I am Keroles Siha <br className="block sm:hidden" />
                {/* <span className="block sm:inline">Keroles Siha</span> */}
              </h2>
              <p className="max-w-lg mt-3 my-5  text-xl leading-relaxed  md:mt-8">
                I am a front-end developer
              </p>
              <div className="mt-15 flex flex-col items-center space-y-5">
                {/* Social Media Icons */}
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="keroles:kerolessiha999@gmail.com"
                      className="group flex items-center justify-center w-14 h-14 border-4 border-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-600 hover:border-transparent hover:shadow-lg"
                    >
                      <i className="fa-solid fa-envelope text-3xl text-indigo-600 transition-colors duration-300 group-hover:text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kerolessiha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 border-4 border-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-600 hover:border-transparent hover:shadow-lg"
                    >
                      <i className="fa-brands fa-github text-3xl text-indigo-600 transition-colors duration-300 group-hover:text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/keroles-siha-8537ab229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 border-4 border-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-600 hover:border-transparent hover:shadow-lg"
                    >
                      <i className="fa-brands fa-linkedin-in text-3xl text-indigo-600 transition-colors duration-300 group-hover:text-white"></i>
                    </a>
                  </li>
                </ul>

                {/* Download CV Button */}
                <a
                  href="/Keroles-Siha-Saad-CV.pdf"
                  download="Keroles-Siha-Saad-CV.pdf"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 -bottom-10 -mb-5 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-40 mb-20 px-4 ">
          <div className="w-full  rounded-[10px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
              About Me <i className="fa-solid fa-person"></i>
            </h3>
            <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
            <p className="text-gray-400 mb-10 text-base leading-relaxed">
              Passionate and detail-oriented Front-End Developer with hands-on
              experience building responsive, userfriendly web interfaces using
              HTML, CSS, JavaScript, React, and Tailwind CSS. Strong background
              in translating UI/UX designs into clean, maintainable code, with
              real-world experience managing and enhancing WordPress/WooCommerce
              websites. Complemented by practical exposure to workflow
              automation and AI-powered integrations, supporting business and
              marketing systems. Continuously improving technical skills and
              eager to contribute to collaborative, agile teams delivering
              high-quality digital solutions.
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 py-30 mb-24">
          {/* First Marquee - Left to Right */}
          <Marquee
            speed={50}
            pauseOnHover={false}
            gradient={true}
            gradientColor={[245, 245, 245]}
          >
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-4 px-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg
               flex items-center justify-center
               transition-transform duration-300 hover:scale-110"
                >
                  <i className={`${skill} text-5xl md:text-6xl`} />
                </div>
              ))}
            </div>
          </Marquee>

          {/* Second Marquee - Right to Left */}
          <Marquee
            speed={50}
            direction="right"
            pauseOnHover={false}
            gradient={true}
            gradientColor={[245, 245, 245]}
          >
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-3 mb-6 px-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg
               flex items-center justify-center
               transition-transform duration-300 hover:scale-110"
                >
                  <i className={`${skill} text-5xl md:text-6xl`} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
