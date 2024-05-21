import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls';

class App extends React.Component{
  constructor(){
    super();
  this.state = {
    activeItem : 'coverflow',
    activePage : 'menu',
    enter : 0,
    play : true
  };
}
  // Handle the rotate event fired from the control component
 
  // If ok button is clicked,  open the selected component
 
  // If menu button is clicked, go back to the menu screen


  changeActive = (active)=>{
      this.setState({
          activeItem : active,
      })
}

  changePage = (active) => {
    
        this.setState({
            activeItem : active,
            activePage : active
        })
    
    console.log('in page')
    
  }
  
  changePageToHomeScreen = () => {
  
    if(this.state.activeItem === 'allSongs' || this.state.activeItem === 'artists' || this.state.activeItem === 'albums'){
        this.setState({
            activeItem : 'music',
            activePage : 'music'
        })
    }else{
        this.setState({
            activeItem : this.state.activeItem,
            activePage : 'menu'
        })
    }
    
  }
  

  render(){
    const {enter,activeItem,activePage} = this.state;
    return (
      <>
      <Screen activePage={activePage} activeItem={activeItem}/>
      <Controls changeActive={this.changeActive} activeItem={activeItem} activePage={activePage} enter={enter}
                 rotateWheel={this.rotateWheel} changePage={this.changePage} changePageToHomeScreen={this.changePageToHomeScreen}/>
      </>
    );
  }

}

export default App;
