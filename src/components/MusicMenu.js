import React, { useEffect } from 'react';


function MusicMenu(props) {
    const {activeItemInMenu} = props;

    return (
      <table id="music-menu">
        <tbody>
        <tr>
            <th className="table-heading">Music <i className="fas fa-music"></i></th>
        </tr>
        <tr data-option="allSongs">
            <td className={activeItemInMenu==="allSongs"||activeItemInMenu==="music"?"table-item active":"table-item"} >All Songs<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="artists">
            <td className={activeItemInMenu==="artists"?"table-item active":"table-item"} >Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums">
            <td className={activeItemInMenu==="albums"?"table-item active":"table-item"}>Albums<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
    );
  }
  
  export default MusicMenu;
  