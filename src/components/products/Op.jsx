export default ({text}) => {
    return (
        <a href="#" className="group relative py-10 group">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className="absolute buttom-0 left-0 block h-3 w-full scale-x-100 transition-all duration-100 group-hover:-scale-x-100 group-hover:bg-orange-primary"></span>
        </a>

    );
};