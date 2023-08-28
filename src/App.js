import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import home from './im/home.png';
import src from './im/search.png';
import devices from './im/devices.png';
import friends from './im/friends.png';
import library from './im/library.png';
import medium from './im/medium-volume.png';
import mic from './im/microphone.png';
import library2 from './im/music-album.png';
import mute from './im/mute.png';
import pause from './im/pause.png';
import play from './im/play-button-arrowhead.png';
import prev from './im/previous.png';
import queue from './im/queue.png';
import repeat from './im/repeat.png';
import shuffle from './im/shuffle.png'; 
import star from './im/star2 - Copy.jpg';
import r1 from './im/R2.jpg';
import r2 from './im/R3.jpg';
import r3 from './im/R4.jpg';
import r4 from './im/R5.jpg';
//import r5 from './im/R6.jpg';
//import r6 from './im/R7.jpg';
//import r7 from './im/R8.jpg';
//import r8 from './im/R9.jpg';
import r9 from './im/R10.jpg';
//import r10 from './im/R11.jpg';


export default function App() {
  const [open, setOpen]=useState(false);


  const openHeader=()=>{
    if (open){
      setOpen(false)
    } else{
      setOpen(true)
    }
  }

  const homesrc = open ? {
    alignItems:'start'
    }
    :{};

  const libraryy = open ? {
  width:'400px',
  alignItems:'start'
  }
  :{};

  const song = open ? {
    display:'flex',
    flexDirection:'row',
    height:'64px'
    }
    :{};

  const title = open ? {
    visibility:'visible',
    top:'-15px',
    left:'15px',
    fontWeight:'bold',
    
    }
    :{};

    const artist = open ? {
      visibility:'visible',
      top:'-25px',
    left:'14px',
    color:'grey'
      }
      :{};

        const text = open ? {
          visibility:'visible',
          }
          :{};

          const find = open ? {
            visibility:'visible',
            }
            :{};

            const libr = open ? {
              left:'25px',
              }
              :{};

              const libra = open ? {
                left:'80px',
                visibility:'visible',
                top:'-40px'
                }
                :{};
              
                const fixed = open ? {
                  flexDirection:'row',
                  }
                  :{};

                  const homex = open ? {
                    left:'14px',
                    }
                    :{};

                    const srcx = open ? {
                      left:'14px',
                      }
                      :{};

                      const back = open ? {
                        width:'370px',
                        display:'flex',
                        flexDirection:'column'
                        }
                        :{};

                        const main = open ? {
                          width:'530px',
                          left:'420px',
                          ...(!open && {
                            '@media(max-width:1000px)': {
                              width: '100px'
                            }
                          })
                          }
                          :{};

                        
    
  

  return (
    <div className="App">
     
     
     <div className='homesrc' style={homesrc}>
      
      <img className='home'style={homex} src={home}></img>
      <p className='text' style={text}>Home</p>
      
      <img className='src' style={srcx} src={src}></img>
      <p className='textt' style={find}>Search</p>

     </div>



       <div className='library' style={libraryy}>
         <div className='fixed' style={fixed}>
           <img  onClick={openHeader} style={libr} className='lib' src={library}></img>
           <p className='libra' style={libra}>Your Library</p>
         </div>

          <div className='backg' style={back}>
            <div className='song'style={song}>
              <img className='star' src={star}></img>
              <div className='names'>
               <p className='title'style={title}>Starfield Official Theme</p>
               <p className='artist'style={artist}>Bethesda Games Studio</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r9}></img>
              <div className='names'>
               <p className='title'style={title}>UnderWorld</p>
               <p className='artist'style={artist}>Killinf</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r2}></img>
              <div className='names'>
               <p className='title'style={title}>Damnn</p>
               <p className='artist'style={artist}>Snorlax</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r1}></img>
              <div className='names'>
               <p className='title'style={title}>Somewhere In The World</p>
               <p className='artist'style={artist}>BravoSix</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r4}></img>
              <div className='names'>
               <p className='title'style={title}>Starlight</p>
               <p className='artist'style={artist}>RoadFireNine</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r3}></img>
              <div className='names'>
               <p className='title'style={title}>Robotized</p>
               <p className='artist'style={artist}>Cyber Space</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r9}></img>
              <div className='names'>
               <p className='title'style={title}>Thinking About Hell</p>
               <p className='artist'style={artist}>YouNotMe</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r1}></img>
              <div className='names'>
               <p className='title'style={title}>They Got Something On Their Mind</p>
               <p className='artist'style={artist}>Liquid Dragon</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r4}></img>
              <div className='names'>
               <p className='title'style={title}>Red Moon Blue Sun</p>
               <p className='artist'style={artist}>Hellspikes</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r3}></img>
              <div className='names'>
               <p className='title'style={title}>Chipping In</p>
               <p className='artist'style={artist}>Samurai Warrior</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r2}></img>
              <div className='names'>
               <p className='title'style={title}>Glass Upon You</p>
               <p className='artist'style={artist}>Smoke Guns</p>
              </div> 
            </div>
          </div>
        </div>

        <div className='mainpage' style={main}>
              <h1 className='hi'>Good afternoon</h1>


              <div className='gridbenv'>
                <div className='liked'></div>
                <div className='liked'></div>
                <div className='liked'></div>
              </div>
              </div>

      
    </div>
  );
}

