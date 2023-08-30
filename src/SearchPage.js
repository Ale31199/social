import logo from './logo.svg';
import './homepage.css';
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
import r5 from './im/R6 .jpg';
import r6 from './im/R7 .jpg';
import r7 from './im/R8.jpg';
import r8 from './im/R9 .jpg';
import r9 from './im/R10.jpg';
import r10 from './im/R11 .jpg';
import hrt from './im/heart.png';
import user from './im/user.png';



export default function App() {
  const [open, setOpen]=useState(false);
  const [cerca, setCerca]=useState(false);



  const trova=()=>{
    if (cerca){
      setCerca(false)
    }else{
      setCerca(true)
    }
  }

  const openHeader=()=>{
    if (open){
      setOpen(false)
    } else{
      setOpen(true)
    }
  }


  const inp = cerca ? {
visibility:'visible'
  }
  :{};

  const homesrc = open ? {
    alignItems:'start',
    width:'370px'
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
    height:'70px',
    borderRadius:'5px',
    marginBottom:'-10px'
    }
    :{};

  const title = open ? {
    visibility:'visible',
    top:'5px',
    left:'15px',
    fontWeight:'bold',
    
    }
    :{};

    const artist = open ? {
      visibility:'visible',
      top:'-5px',
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
              left:'30px',
              }
              :{};

              const libra = open ? {
                left:'75px',
                visibility:'visible',
                top:'-0px',
          
                }
                :{};
              
                const fixed = open ? {
                  flexDirection:'row',
                  display:'inline-flex',
                  left:'18px'
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
                        left:'3px',
                        display:'flex',
                        flexDirection:'column'
                        }
                        :{};

                        
                        const main = open
                        ? {
                            width: '1490px',
                            left: '420px',
                        
                          }
                        : {};
                        

                          const grid1 = open ? {
                           zoom:'82.5%'
                             }
                             :{};
                             const grid2 = open ? {
                              zoom:'82.5%'
                                }
                                :{};

                      
  

  return (
    <div className="App">
     
     
     <div className='homesrc' style={homesrc}>
      
      <img className='home'style={homex} src={home}></img>
      <p className='text' style={text}>Home</p>
      
      <img className='src' onClick={trova} style={srcx} src={src}></img>
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
              <img className='star' src={r1}></img>
              <div className='names'>
               <p className='title'style={title}>Born Villain</p>
               <p className='artist'style={artist}>Marilyn Manson</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r2}></img>
              <div className='names'>
               <p className='title'style={title}>Burn Into The Ground</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r3}></img>
              <div className='names'>
               <p className='title'style={title}>Self Control</p>
               <p className='artist'style={artist}>Laura Branigan</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r4}></img>
              <div className='names'>
               <p className='title'style={title}>Metallica</p>
               <p className='artist'style={artist}>Master Of Puppets</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r5}></img>
              <div className='names'>
               <p className='title'style={title}>Into The Matrix</p>
               <p className='artist'style={artist}>Aurora</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r6}></img>
              <div className='names'>
               <p className='title'style={title}>All Eyes On Me</p>
               <p className='artist'style={artist}>Eminem</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r7}></img>
              <div className='names'>
               <p className='title'style={title}>Because We Can</p>
               <p className='artist'style={artist}>Bon Jovi</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r8}></img>
              <div className='names'>
               <p className='title'style={title}>This Means War</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r9}></img>
              <div className='names'>
               <p className='title'style={title}>Bad </p>
               <p className='artist'style={artist}>Micheal Jackson</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r10}></img>
              <div className='names'>
               <p className='title'style={title}>Best Of Nickelback Volume 1</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>
          </div>
        </div>

        <div className='mainpage' style={main}>

                <div className='bar'>
                <button className='but'>&lt;</button>
                <button className='but2'>&lt;</button>

                <img className='friends' src={friends}></img>
                <img className='user' src={user}></img>

               <div className='theinp' style={inp}>
                <input className='input'
                placeholder='What do you want to listen to?'></input>
                <img className='src2' src={src}></img>
                </div>
                 </div>
            

            <div className='musicbar'>
              
            </div>
          
          
          
          
              </div>
    </div>
  );
}

