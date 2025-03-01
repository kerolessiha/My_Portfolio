// CartItem.js

// eslint-disable-next-line react/prop-types
const Carditem = ({ title, image, link }) => {
  return (
    <div className="h-[16em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex flex-col justify-between items-center gap-[0.75em] backdrop-blur-[12px] transition-transform transform hover:scale-105 duration-300">
      <div className="flex flex-col items-center">
        <h1 className="text-[2em] font-medium">{title}</h1>
        <img src={image} alt={title} className="w-full h-28 object-cover" />
      </div>
      <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          <i className="fa-solid fa-arrow-right mr-3"></i>
          Demo
        </a>
      </button>
    </div>
  );
};

export default Carditem;
