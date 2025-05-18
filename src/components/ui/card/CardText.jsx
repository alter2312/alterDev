import "../../../assets/css/card.css";

export function CardText({ textCard, titleCard }) {
  return (
    <div className="h-3/4 w-1/3  rounded-2xl bg-gradient-to-br from-violet-900 to-neutral-950 text-neutral-300 font-nunito p-10 flex flex-col justify-between gap-4 shadow-xl shadow-violet-950 backdrop-blur-md">
      <div>
        <h1 className="text-2xl font-bold">{titleCard}</h1>
        <p className="text-sm mt-2">{textCard}</p>
      </div>
      <div className="flex justify-center">
        <button className="px-10 py-2 border border-violet-600 rounded-full flex items-center gap-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-800 hover:shadow-md hover:shadow-violet-700 transition-all duration-300">
          <p>Button</p>
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
