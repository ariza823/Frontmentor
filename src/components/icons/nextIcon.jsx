export default (props) => {
    return(
        <svg {...props} width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="m2 1 8 8-8 8" 
                stroke="#1D2026" 
                strokeWidth="3"  // Cambié "stroke-width" por "strokeWidth"
                fill="none" 
                fillRule="evenodd"  // Cambié "fill-rule" por "fillRule"
            />
        </svg>
    );
};
