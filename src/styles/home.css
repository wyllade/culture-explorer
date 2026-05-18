import { useNavigate } from "react-router-dom";
import "../styles/cards.css";

function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <div
      className="country-card"
      onClick={() => navigate(`/country/${country.name}`)}
    >
      <img
        className="country-image"
        src={country.image}
        alt={country.name}
      />

      <div className="country-info">
        <div className="country-name">{country.name}</div>
      </div>
    </div>
  );
}

export default CountryCard;