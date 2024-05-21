import './css/controls.css';
import leftArrow from './images/left-arrow.png';
//import { useRef, useEffect } from 'react';
import ZingTouch from 'zingtouch';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';

// var ZingTouch = require('zingtouch');
// introduce your own eventhandler for eac button Here.

function Controls(props) {
    
var {enter,activeItem,activePage} = props;
const {changePageToHomeScreen,changePage,changeActive} = props;

const OkHandle = () =>{
    enter+=1;
    console.log('ok')
    console.log(activeItem)
    changePage(activeItem);
    console.log(activeItem)
}

    const RotateWheel = (event) => {
            
        var containerElement = document.getElementById('wheel');
        containerElement?.addEventListener('mouseover', RotateWheel);
        var activeRegion = new ZingTouch.Region(containerElement);
        var change = 0;
        enter = enter + 1;
        
        if(enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        
                if(newAngle > 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(activePage === 'menu'){
                            if(activeItem === 'coverflow'){
                                    activeItem = "music"
                            }else if(activeItem === 'music'){
                                    activeItem = "games"
                            }else if(activeItem === 'games'){
                                    activeItem = "settings"
                            }else if(activeItem === 'settings'){
                                    activeItem = "coverflow"
                            }
                        }else if(activePage === 'music'){
                            if(activeItem === 'allSongs'){
                                    activeItem = "artists"
                            }else if(activeItem === 'artists'){
                                    activeItem = "albums"
                            }else if(activeItem === 'albums'||activeItem==='music'){
                                  activeItem = "allSongs"
                          }
                        }
                        console.log(activeItem)
                        changeActive(activeItem)
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(activePage === 'menu'){
                            if(activeItem === 'coverflow'){
                                    activeItem = "settings"
                            }else if(activeItem === 'settings'){
                                    activeItem = "games"
                            }else if(activeItem === 'games'){
                                    activeItem = "music"
                            }else if(activeItem === 'music'){
                                    activeItem = "coverflow"
                            }
                        }else if(activePage === 'music'){
                            if(activeItem === 'allSongs'){
                                    activeItem = "albums"
                            }else if(activeItem === 'albums'){
                                    activeItem = "artists"
                            }else if(activeItem === 'artists'||activeItem==='music'){
                                  activeItem = "allSongs"
                            }
                        }
                        console.log(activeItem);
                        changeActive(activeItem);
                    }
                    
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
        
      };
    
const myElement = document.getElementById('wheel'); // Replace with your selector
// Conditional event listener attachment (if element exists)
myElement?.addEventListener('mouseover', RotateWheel);
  
    return (
      <section id="controls" onClick={(e) => {
				e.stopPropagation();
				return;
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				//removeClass("inner-circle", "down");
				return;
			}}
			onMouseDown={(e) => {
				e.stopPropagation();
				return;
			}}>
        <div id="wheel"  onMouseOver={RotateWheel} >
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
             onClick={changePageToHomeScreen}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src={leftArrow} alt="left" 
            style={ {left: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={rightArrow} alt="right" 
            style={ {right: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={bottomArrow} alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          <div id="ok-button" onClick={OkHandle}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }

  export default Controls;
