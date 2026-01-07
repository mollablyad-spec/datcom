import React from "react";
import logo from '../../img/azmanat.png'




export function Footer(){


    return(
        <div className="footer-box">
            <div className="section-container">
                <div className="footer-bottom">
                    <div className="contact">
                        <h3>Əlaqə</h3>
                        <p>Email: <span>info@azmanat.com</span> </p>
                        <p>Ünvan: <span>Bakı şəhəri, Nizami küçəsi 245</span> </p>
                        <p>İş saatları: <span>B.e - Cümə, 09:00 - 18:00</span> </p>
                        <p>Lisenziya: <span>AZ-2018-AZMANAT-QBKT</span> </p>
                    </div>
                </div>
               
            </div>
             <div className="underline-box">
                    <p className="line"></p>
                </div>
               <div className="logo-div">
                <div className="logo-box">
                    <img src={logo} alt="" />
                </div>
                <p className="last">© 2025 AZMANAT. </p>
               </div>
        </div>
    )
}
