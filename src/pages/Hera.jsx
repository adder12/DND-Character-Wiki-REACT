import React from "react";
import Table from "../StatsTable";
import "../Embed";
import YoutubeEmbed from "../Embed";

function Hera() {
  return (
    <>
      <Image />
      <Text />
      <Video />
    </>
  );
}

export default Hera;

function Image() {
  return <img id="character" src="img/Hera.png" alt="Hera" />;
}

function Text() {
  return (
    <>
      <div id="info">
        <h1>Hera Khan(L'dara)</h1>
        <p>
          Hera L'dara is an Air Genasi Chronurgy Wizard. <br />
          Originally born on the moon to the ruling family
          <br />
          Just over a year ago Hera's twin sister D'vana disappeared without
          <br />
          a trace. With even magical Divination proving fruitless in finding the
          missing twin
          <br />
          Hera came to the planet to study at the academy in Zejra in order to
          try and gain the <br />
          skills to find her sister; affecting the pseudonym last name of Khan
          in order to
          <br />
          hide her noble heritage
        </p>

        <p>
          Hearing rumours of missing children Hera struck out to investigate in
          the vague hope that
          <br />
          there might be some connection to her sisters own disappearance. Her
          hopes did not come to
          <br />
          fruition, however she did meet some other adventurers and got herself
          involved in fighting to
          <br />
          prevent an Ancient Elven Nightmare from returning and turning the
          world to darkness and misery
        </p>
        <Table class="Wizard" sub="Chronurgist" lvl="6" hp="44" ac="13" />
      </div>
    </>
  );
}

function Video() {
  return (
    <>
      {" "}
      <hr></hr>
      <h2>Marrisa's Song:</h2>
      <YoutubeEmbed embedId="9n3A_-HRFfc" />
    </>
  );
}
