import React, { useEffect, useState } from "react";
import azmanat from '../../img/azmanatbody.png'
import { mainData } from "../hook/data";
import { Calculated } from "./calculated";
import { WhoIAm } from "./whoiam";
import { useNavigate } from "react-router";


export function Main(){
const [main, setMain] = useState([]);
const navigate=useNavigate();
useEffect(()=>{
if (mainData.length>0) {
    setMain([...mainData])
}
},[])


    return(
        <div className="section-container">
            <div className="main-image">
                <img src={azmanat} alt="azmanat" />
            </div>
            <div className="main-title">
                <h1>AZManat - Sürətli və Etibarlı Kredit</h1>
                <p>Sizin gündəlik xərclərinizi qarşılamaq üçün, "AzMan services BOKT" tərəfindən yaradılmış Mobil Kredit səhifəsidir.

                 Tətbiqdən istifadə edərək 500-50000 AZN məbləğində Pulu Tez əldə edə bilərsiniz! Bunun üçün, sadəcə Şəxsiyyət vəsiqəniz kifayətdir.</p>
            </div>
            <div className="main-btn-box">
                <button className="main-btn" onClick={()=>navigate('/muraciet')}>
                    KREDITƏ MÜRACİƏT ET
                </button>
            </div>

            <div className="why-me">

                <div className="why-title">
                    <h1>Niyə AzManat?</h1>
                    </div>
                    <div className="why-body">
                        {main&&main.map(el=>(
                           <div className="why-box">
                            <h1>{el.title}</h1>
                            <p>{el.main}</p>
                           </div> 
                        ))}
                    </div>
            </div>
            <Calculated/>
              <WhoIAm/>
        </div>
    )
}