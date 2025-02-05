export default ({ text }) => {
    return (
      <a href="#" className="group relative py-10">
        <span className="group-hover:text-orange-primary">{text}</span>
        <span className="absolute bottom-[-2px] left-0 block w-full h-1 bg-transparent scale-x-100 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-orange-primary"></span>
      </a>
    );
  };
  