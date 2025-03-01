import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="flex items-center justify-center mt-16 mb-20 px-4">
        <div className="w-full max-w-[570px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px]">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            About Me <i className="fa-solid fa-person"></i>
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            Passionate front-end developer seeking a challenging role to apply
            skills in creating responsive web designs. Gained experience through
            training at Route Academy and personal projects. Continuously
            striving to enhance technical abilities and contribute to innovative
            software solutions in a collaborative environment.
          </p>
        </div>
      </div>
    </>
  );
}
