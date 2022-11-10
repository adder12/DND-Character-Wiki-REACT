import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

function Navbar(){
return (
<nav>

    <ul>
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

);


}

export default Navbar;