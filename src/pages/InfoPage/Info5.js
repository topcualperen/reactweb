import React from "react";
import "./Info5.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

const Info5 = () => {
     const navigate = useNavigate();
  return (
    <div class="main">
      <img src="/img/Page5.svg"></img>

      <p>
        <h1>Kısaca Ethereum (ETH) Nedir?</h1>
        Ethereum blockchain sistemi üzerine kurulu akıllı sözleşme
        işlevselliğine sahip, açık kaynak kodlu ve blok tabanlı dağıtılmış
        işletim sistemidir.
        <br />
        <br />
        Ethereum, 2015 yılında piyasaya sürülmüştür ve Bitcoin'den sonra en
        fazla piyasa değerine sahip dijital para birimidir.
      </p>
      <div class="InfoMainButton">
      <Button type="primary" onClick={() => navigate("/")}>
            Ana Sayfa
          </Button>
      </div>
    </div>
  );
};

export default Info5;
