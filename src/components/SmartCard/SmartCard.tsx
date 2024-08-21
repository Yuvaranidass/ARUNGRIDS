import React from "react";
import "./SmartCard.css";
import { useNavigate } from "react-router-dom";

const SmartCard = ({ ImageShowItem, width }) => {
  const navigate = useNavigate();
  return (
    <div className="columns is-multiline smart-mobile-view">
      {ImageShowItem.map((item: any) => (
        <div key={item.id} className={`column is-${width}`}>
          <div className="card smart-card" onClick={() => navigate(item.link)}>
            <div className="card-image">
              <figure className="image is-square">
                <img
                  src={item.image}
                  alt={`CardImage-${item.id}`}
                  className="home-image"
                />
              </figure>
            </div>
            <div className="card-content has-text-centered">
              <p className="subtitle is-6 is-size-7-mobile">{item.subtitle}</p>
            </div>
            <div className="card-content smart-card-details">
              {item.description &&
                item.description.map((line: string, index: number) => (
                  <p
                    key={index}
                    className="subtitle is-6 is-size-7-mobile has-text-black has-text-weight-semibold"
                  >
                    {line}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmartCard;
