import React from "react";

function InfoBox({ title, content }) {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function MainFlowBox({ items }) {
  return (
    <div className="main-flow-box">
      <h2>Fluxo Principal</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function HomePage() {
  const infoData = [
    { title: "Informação 1", content: "Conteúdo da Informação 1" },
    { title: "Informação 2", content: "Conteúdo da Informação 2" },
  ];

  const mainFlowItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="home-page">
      <h1>Página Inicial</h1>
      <div className="info-boxes">
        {infoData.map((info, index) => (
          <InfoBox key={index} title={info.title} content={info.content} />
        ))}
      </div>
      <MainFlowBox items={mainFlowItems} />
    </div>
  );
}

export default HomePage;
