import React from "react";
import Table from "../StatsTable";
import "../Embed";
import YoutubeEmbed from "../Embed";

function Allie() {
  return (
    <>
      <Image />
      <Text />
      <Video />
    </>
  );
}

export default Allie;

function Image() {
  return <img id="character" src="img/Allie.png" alt="Allie" />;
}

function Text() {
  return (
    <>
      <div id="info">
        <h1>Allison Garnet</h1>
        <p>
          Allison Garnet is a half elven Moon Druid. Upon first meeting Allie,
          your first impression of her
          <br />
          would leave you confused about how such a disarming and bubbly person,
          could survive as many <br />
          adventures as she had.
        </p>

        <p>
          That charming personality and innate curiousness does however hide
          great power inside. <br />
          During her journey as an adventurer, Allie has been working with her
          friends to release the
          <br />
          the gods from their crystal prisons and along the way, one of those
          gods passed their domain
          <br />
          To Allie. Leaving her in an odd in between state before her ascension.
          She knows her fate, all
          <br />
          that remains to be seen is how, and when she will meet it.
        </p>

        <Table
          class="Druid"
          sub="Circle of the Moon"
          lvl="14"
          hp="125"
          ac="18"
        />
      </div>
    </>
  );
}

function Video() {
  return (
    <>
      {" "}
      <hr></hr>
      <h2>Allie's Song:</h2>
      <YoutubeEmbed embedId="fZRDQLpktFk" />
    </>
  );
}
