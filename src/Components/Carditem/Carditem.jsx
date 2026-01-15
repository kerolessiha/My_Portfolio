// export default Carditem;
// eslint-disable-next-line react/prop-types
const Carditem = ({ title, image, link, tools }) => {
  return (
    <div className="h-[20em] w-[20em] border-2 border-[rgba(117, 58, 136, 0.3)] rounded-[1.5em] bg-gradient-to-br from-[rgba(117, 58, 136, 1)] to-[rgba(117, 58, 136, 0.01)] text-[#7f5af0] font-nunito p-[1em] flex flex-col justify-between items-center gap-[0.75em] backdrop-blur-[12px] transition-transform transform hover:scale-105 duration-300 shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-[1.5em] font-semibold text-center mb-2 relative">
          {title}
          <span className="block h-[2px] w-1/2 bg-gradient-to-r from-[#7f5af0] to-[#ff6b6b] absolute bottom-[-5px] left-1/4"></span>
        </h1>
        <img
          src={image}
          alt={title}
          className="w-full h-28 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="bg-white text-black rounded-full px-2 py-1 text-xs font-semibold transition-transform duration-200 hover:scale-105"
          >
            {tool}
          </span>
        ))}
      </div>

      <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] border-[#7f5af0] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:bg-[#7f5af0] hover:text-white transition-colors duration-200">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center"
        >
          <i className="fa-solid fa-arrow-right mr-2"></i>
          Demo
        </a>
      </button>
    </div>
  );
};

export default Carditem;
