import { useEffect, useRef } from "react";
import resim from "../../img/azmanat.png"
import { useNavigate } from "react-router";
import jingle from '../../img/jingle.mp3';


export function Header(){
const navigate=useNavigate();
  const audioRef = useRef(null);

  // useEffect(() => {
  //   const handleFirstClick = () => {
  //     audioRef.current?.play();
  //     document.removeEventListener("click", handleFirstClick);
  //   };

  //   document.addEventListener("click", handleFirstClick);

  //   return () => {
  //     document.removeEventListener("click", handleFirstClick);
  //   };
  // }, []);
return(<>
<header>
    <nav>
        <div className="header-container">
            <div className="logo-box" onClick={()=>navigate('/')}>
                <img src={resim} alt="tezpul" />
            </div>
            <div className="calculate-box">
               <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>
    <audio ref={audioRef} loop>
    <source src={jingle} type="audio/mpeg"/>
    </audio>
</header>
</>)

}