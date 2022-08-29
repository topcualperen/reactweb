import React from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div class="main">
      <div class="ContactMainText">
        <p>
        Daha Detaylı Bilgi Ve
        <br />
        Destek Hizmetleri İçin
        <br />
        <br />
        <br />
        +90 5**7894561
        <br />
        <br />
        destek@cryptocean.com
      </p>
      </div>
      
      <img src="/img/phone.svg"></img>

      <div class="ContactMainButton">
        <Button type="primary" onClick={() => navigate("/")}>
          Ana Sayfa
        </Button>
      </div>
    </div>
  );
};

export default Contact;
