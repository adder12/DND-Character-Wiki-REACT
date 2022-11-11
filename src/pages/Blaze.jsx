import React from 'react';
import Table from '../StatsTable';
function Blaze() {
    return (
        <>



        <Image />
        <Text/>
<Video/>
        
        </>
    );
}

function Image()  {
    return (
        <img id="character" src="img/Blaze.png"/>
    )
}

function Text(){
  
  return(
  <>
    <div id="info">
    
    <h1>Blaze Everhearth</h1>
    <p>Blaze Everhearth is a Fire Genasi blood hunter.
    There are many words that could be used to describe Blaze:<br/> Charismatic,
    cocky, occassionally hot-headed(pun not intended), but the thing that is     
    most important is their <br/>willingness to fight to defend those who need it.</p>

    <p>Blaze had been taught from a young age how to defend herself in combat and to protect those who need it most</p>
    <Table class ="Blood Hunter" sub="Order of the Mutant" lvl ="7" hp="70" ac="17"/>
</div>
</>
  )
}

function Video(){
    return (
<>    <hr></hr>
        <h2>Blaze's Song:</h2>
        <video src="vid/Blaze.mp4" width="320" height="240" controls>
            </video>
        </>

    )
}

export default Blaze;