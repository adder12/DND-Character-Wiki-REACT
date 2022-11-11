import React from 'react';
import Table from '../StatsTable';
import '../Embed';
import YoutubeEmbed from '../Embed';


function Allie() {
    return (
        <>



        <Image />
        <Text/>
<Video/>
        
        </>
    );
}

export default Allie;


function Image()  {
    return (
        <img id="character" src="img/Allie.png"/>
    )
}

function Text(){
  
  return(
  <>
    <div id="info">
    
    <h1>Allison Garnet</h1>
<p>Allison Garnet is a half elven Moon Druid. Upon first meeting Allie, your first impression of her<br/>
     would leave you confused about how such a disarming and bubbly person, could survive as many <br/>
     adventures as she had.</p>

     <p>That charming personality and innate curiousness does however hide great power inside. </p>

    <Table class ="Druid" sub="Circle of the Moon" lvl ="14" hp="125" ac="18"/>
</div>
</>
  )
}

function Video(){
    return (
<>    <hr></hr>
        <h2>Allie's Song:</h2>
        <YoutubeEmbed embedId='fZRDQLpktFk'/>
            
        </>

    )
}

