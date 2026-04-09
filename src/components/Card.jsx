import React from "react";
import "./Card.css"; // Import the separate CSS file

export default function Card({ title, description, image }) {
  return (
    <div className="card-container">
      {/* Top Image */}
      <img className="card-image" src={image} alt={title || "Card image"} />

      {/* Content wrapper using Flexbox */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {/* Bottom Button */}
        <button className="card-button" onClick={() => alert(`Clicked ${title}`)}>
          Learn More
        </button>
      </div>
    </div>
  );
}
