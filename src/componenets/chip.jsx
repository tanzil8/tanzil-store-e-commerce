function Chip({ categories ,isChosen,onClick}) {


  
    return (
      <>
        <button
         onClick={onClick}
          className={`  ${isChosen? 'bg-indigo-600 text-white' : 'bg-white text-black'} pl-1 pr-1 py-1 pb-1  m-3 relative h-16 w-28 overflow-hidden border border-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80`}
        >
          <span className="relative z-10">{categories.name}</span>
        </button>
      </>
    );
  }
  
  export default Chip;
 