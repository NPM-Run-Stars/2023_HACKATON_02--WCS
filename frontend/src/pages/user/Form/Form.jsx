import React, { useState } from "react";
import PageEtape1 from "../PageEtape1/PageEtape1";
import PageEtape2 from "../PageEtape2/PageEtape2";
import PageEtape3 from "../PageEtape3/PageEtape3";
import PageEtape4 from "../PageEtape4/PageEtape4";
import ImeiInformations from "../PageEtape2/PageIMEI";

import "./Form.scss";

function Form() {
  const [page, setPage] = useState(1);
  const [way, setWay] = useState("");

  const [phone, setPhone] = useState({
    id: null,
    brand: "",
    model: "",
  });

  const [phoneValue, setPhoneValue] = useState({
    value_ram: 0,
    value_storage: 0,
    value_screen: 0,
    value_case: 0,
  });

  const handlePhone = (name, value) => {
    setPhone({ ...phone, [name]: value });
  };

  const handleValue = (name, value) => {
    setPhoneValue({ ...phoneValue, [name]: value });
  };

  const pageDisplay = () => {
    if (page === 1) {
      return <PageEtape1 setWay={setWay} />;
    }
    if (page === 2 && way === "model") {
      return <PageEtape2 handlePhone={handlePhone} handleValue={handleValue} />;
    }
    if (page === 2 && way === "imei") {
      return (
        <ImeiInformations handlePhone={handlePhone} handleValue={handleValue} />
      );
    }
    if (page === 3) {
      return (
        <PageEtape3
          phone={phone}
          phoneValue={phoneValue}
          handleValue={handleValue}
        />
      );
    }
    return <PageEtape4 phoneValue={phoneValue} />;
  };
  return (
    <div className="form">
      <div className="bouton-container">
        <div className="main-container">{pageDisplay()} </div>
        <div className="button-container">
          {way && (
            <>
              {" "}
              <button
                type="button"
                className="main-btn smallbtn"
                disabled={page === 1}
                onClick={() => setPage(() => page - 1)}
              >
                Prev
              </button>
              <button
                type="button"
                className="main-btn smallbtn"
                disabled={page === 4}
                onClick={() => setPage(() => page + 1)}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
