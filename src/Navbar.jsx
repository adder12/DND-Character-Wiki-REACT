import React from "react";
import {Link} from "react-router-dom";
import "./style.css";






function Navbar(){
return (
    <div id="navDiv">
<nav>

    <ul className="navbar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Blaze">Blaze Everhearth</Link>
        </li>
        <li>
            <Link to="/Allie">Allison Garnet</Link>
        </li>
        <li>
            <Link to="/Marissa">Marissa Whitethistle</Link>
        </li>
        <li>
            <Link to="/Hera">Hera Khan</Link>
        </li>

    </ul>
</nav>
</div>
);


}

export default Navbar;