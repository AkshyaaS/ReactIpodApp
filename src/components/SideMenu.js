import React, { useEffect } from 'react';
import "./css/controls.css"

function SideMenu(props) {
// write logic for changing the selected item in the side menu
const {activeItem} = props;

  return (
    <table id="side-menu">
        <tbody>
        <tr>
            <th className="table-heading">iPod <i className="fas fa-home"></i></th>
        </tr>
        <tr data-option="coverflow" >
            <td className={activeItem==="coverflow"?"table-item active":"table-item"} >Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music">
            <td className={activeItem==="music"?"table-item active":"table-item"} >Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games">
            <td className={activeItem==="games"?"table-item active":"table-item"}>Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings">
            <td className={activeItem==="settings"?"table-item active":"table-item"} >Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
  );
}

export default SideMenu;
