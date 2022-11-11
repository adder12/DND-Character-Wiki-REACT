import React from 'react';
import Table from '../StatsTable';
import '../Embed';
import YoutubeEmbed from '../Embed';

function Hera() {
    return (
        <>



        <Image />
        <Text/>
<Video/>
        
        </>
    );
}

export default Hera;


function Image()  {
    return (
        <img id="character" src="img/Hera.png"/>
    )
}

function Text(){
  
  return(
  <>
    <div id="info">
    
    <h1>Hera Khan(L'dara)</h1>
<p>Hera L'dara is an Air Genasi Chronurgy Wizard. <br/>
Originally born on the moon to the ruling family<br/>
 Hera came to the planet to study at the academy in Zejra,<br/>
  in order to try and gain the skills to find her sister;<br/> 
  affecting the pseudonym last name of Khan in order to<br/> hide her noble heritage</p>


    <Table class ="Wizard" sub="Chronurgist" lvl ="6" hp="44" ac="13"/>
</div>
</>
  )
}

function Video(){
    return (
<>    <hr></hr>
        <h2>Marrisa's Song:</h2>
        <YoutubeEmbed embedId='9n3A_-HRFfc'/>
            
        </>

    )
}