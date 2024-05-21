import React from 'react';
import './css/screen.css';
import SideMenu from "./SideMenu";
import Games from './Games';
import Music from './Music';
import Coverflow from './Coverflow';
import Settings from './Settings';

class Screen extends React.Component{
  setActivePage(activePage,activeItem){
    if(activePage==='menu'){
      return(<SideMenu activeItem={activeItem}/>)
    }
    else if(activePage==='coverflow'){
      return(<Coverflow/>)
    }
    else if(activePage==='music'){
      return(<Music activeItemInMenu={activeItem} musicMenu={true} allSongs={false} artists={false} albums={false} />)//{
    }
    else if(activePage==='games'){
      return(<Games/>)
    }
    else if(activePage==='settings'){
      return(<Settings/>)
    }
  // }

  // setMusicPage(activePage,activeItem){
    else if(activePage==='albums'){
      return(<Music activeItemInMenu={activeItem} musicMenu={false} allSongs={false} artists={false} albums={true} />)
    }else if(activePage==='artists'){
      return(<Music activeItemInMenu={activeItem} musicMenu={false} allSongs={false} artists={true} albums={false} />)
    }else if(activePage==='allSongs'){
      return(<Music activeItemInMenu={activeItem} musicMenu={false} allSongs={true} artists={false} albums={false} />)
    }
  }
// Display the sidemenu, coverflow, games,Music etc here
  render(){
    const {activeItem,activePage} = this.props;
    return (
      <>
      
      <div id="screen">
        <div id='top-bar'>
          <span id='battery'></span>
        </div>
        {this.setActivePage(activePage,activeItem)}
        {/* {activePage==='music'?:null} */}
      </div>
      </>
    );
  }

}

export default Screen;