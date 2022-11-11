import React from 'react';
import Table from '../StatsTable';
import '../Embed';
import YoutubeEmbed from '../Embed';


function Marissa() {
    return (
        <>



        <Image />
        <Text/>
<Video/>
        
        </>
    );
}

export default Marissa;







function Image()  {
    return (
        <img id="character" src="img/Marissa.png"/>
    )
}

function Text(){
  
  return(
  <>
    <div id="info">
    
    <h1>Marissa Whitethistle</h1>
<p>Marissa Whitethistle is a Moon elf Gloomstalker Ranger. Orphaned at a young age<br/>
    Marissa grew up in an orphanage in Hivale. Reaching adulthood, they quickly fell into<br/>
the thieves guild, pickpocketing and stealing to keep herself fed</p>


    <Table class ="Ranger/Rogue" sub="Gloomstalker/n.a" lvl ="5/2" hp="52" ac="16"/>
</div>
</>
  )
}

function Video(){
    return (
<>    <hr></hr>
        <h2>Marrisa's Song:</h2>
        <YoutubeEmbed embedId='Fq4MoUMKOTE'/>
            
        </>

    )
}