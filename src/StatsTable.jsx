import React from "react";

import "./style.css";

function Table(props) {
  return (
    <>
      <hr />
      <table>
        <tBody>
        <tr>
          <td>Class:</td>
          <td>{props.class}</td>
        </tr>
        <tr>
          <td>Subclass</td>
          <td>{props.sub}</td>
        </tr>

        <tr>
          <td>Level:</td>
          <td>{props.lvl}</td>
        </tr>
        <tr>
          <td>HP:</td>
          <td>{props.hp}</td>
        </tr>
        <tr>
          <td>AC:</td>
          <td>{props.ac}</td>
        </tr>
        </tBody>
      </table>
    </>
  );
}

export default Table;
