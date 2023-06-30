import React, { useEffect, useState } from "react";

function PriceModel({ phoneValue }) {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(
      +phoneValue.value_ram +
        +phoneValue.value_storage +
        +phoneValue.value_screen +
        +phoneValue.value_case
    );
  }, []);
  return (
    <div>
      <h1>{price}€</h1>
    </div>
  );
}

export default PriceModel;
