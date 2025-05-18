import "../../../assets/css/card.css";

export const CardPlan = ({ price, features, buttonText, onButtonClick }) => {
  return (
    <div className="card w-11/12 h-[70vh] flex flex-col items-center justify-center relative">
      <p className="price">{price}</p>
      <ul className="lists">
        {features.map((feature, index) => (
          <li key={index} className="list">
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={onButtonClick} className="action">
        {buttonText}
      </button>
    </div>
  );
};
