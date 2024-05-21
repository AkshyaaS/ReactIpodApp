import MusicMenu from './MusicMenu';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';


function Music(props) {
  const activeItemInMenu = props.activeItemInMenu;
  const {musicMenu, allSongs, artists, albums} = props;
    return (
      <div className="display">
        {
          !musicMenu
            ?allSongs
              ?<AllSongs />
              :artists
                ?<Artists />
                :<Albums />
            :<MusicMenu activeItemInMenu={activeItemInMenu}/>
        }
      </div>
    );
  }
  
  export default Music;
  