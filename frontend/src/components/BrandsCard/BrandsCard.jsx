import React from "react";
import { Link } from "react-router-dom";
import "./BrandsCard.scss";

function BrandsCard({ brand }) {
  return (
    <Link to={`/admin/brands/${brand.id}`}>
      <div className="brandCard">
        <h3>{brand.brand}</h3>
      </div>
    </Link>
  );
}

export default BrandsCard;
