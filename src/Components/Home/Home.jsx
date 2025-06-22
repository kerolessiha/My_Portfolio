import { Helmet } from "react-helmet";
import Heroimage from "../../assets/Hero.png";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-[#001f3f]">
                Hey 👋 I am <br className="block sm:hidden" />
                <span className="block sm:inline">Keroles Siha</span>
              </h2>
              <p className="max-w-lg mt-3 mb-5 text-xl leading-relaxed  md:mt-8">
                I am a front-end developer
              </p>
              <div className="my-5 flex flex-col items-center space-y-5">
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
                  href="/Keroles-Siha-frontend-CV.pdf"
                  download="Keroles-Siha-frontend-CV.pdf"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-40 -translate-x-1/2 left-1/2"
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
      </section>
    </>
  );
}
