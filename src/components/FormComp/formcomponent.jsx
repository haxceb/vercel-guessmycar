import React from "react";
import "./formcomponent.css";
import Person from "../../images/person-24px.svg";
import Mail from "../../images/mail-image.svg";

const FormComp = (props) => {
  return (
    <div className="mt-4">
      <h5 className="ml-4 ">INSCHRIJVEN VOOR DE NIEUWSBRIEF</h5>
      <div className="form-group m-4 btndiv">
        <input
          type="text"
          className="form-control feilds"
          placeholder="Voor- en achternaam"
          id="NewsEmailName"
          name="NewsEmailName"
        />
        <span className="feild2">
          <img src={Person} className="image" />
        </span>

        <input
          type="text"
          className="form-control feilds"
          placeholder="E-mailadres"
          id="NewsEmailName"
          name="NewsEmailName"
        />
        <span className="feild2">
          <img src={Mail} className="image" />
        </span>

        <button className="btn mybtnclass">AANMELDEN</button>
      </div>
    </div>
  );
};

export default FormComp;
