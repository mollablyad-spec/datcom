import React, { useState } from "react";
import { useNavigate } from 'react-router';




export function LastCalc(){
const navigate=useNavigate();
const [amount, setamount] = useState(8000);
const [mounth, setmounth] = useState(21);
const [rate, setrate] = useState(15);
const [results, setResults] = useState(null);
const [depozit, setdepozit] = useState(null);
const [total, settotal] = useState(null);
const [number, setnumber] = useState(null);
const [sendObj, setsendObj] = useState(null);
const [error, seterror] = useState({
    first:'',
    second:""
});
function result(){
     const mountlyRate=rate/12/100;
     const payment= amount*(mountlyRate * Math.pow(1 + mountlyRate, mounth)) /
          (Math.pow(1 + mountlyRate, mounth) - 1);
           setResults(payment.toFixed(2));
           const deposit=50+(amount/500)*5;
           setdepozit(deposit);
           const totals=payment.toFixed(2)*mounth
           settotal(totals);
           const redusrate=totals-amount   
           const obj={
            money:amount,
            mounts:mounth,
            depozit:deposit,
            rates:15,
            totaals:totals,
            resultat:payment.toFixed(2),
            ratmoney:redusrate
           }; 
           setsendObj(obj);
}

function handleClick(){
seterror({first:'',second:''})

if ((number&&number.length===19)&&sendObj) {
  const newobj={...sendObj,cart:number}
  console.log(newobj);
  
   localStorage.setItem("person", JSON.stringify(newobj));
   navigate('/kredit-muqavile')
    
}else{
    if (!sendObj) {
      seterror((prew)=>({...prew,first:'*Zəhmət olmasa kredit məbləğini seçin'}))  
    }
    if (!number||number.length<19) {
        seterror((prew)=>({...prew,second:'*Zəhmət olmasa kartınızı daxil edin'})) 
    }
}

}



    return(
        <div className="container-calculated">
            <h3>Kredit məbləğini təstiqlə</h3>
            <div className="calc-input-box">
             <div className="box-still">
                <p className="small">kredit məbləği</p>
                <p>{amount}₼</p>   
                <input type="range" min={500}  max={50000} step={500} onChange={e=>setamount(e.target.value)}  />
             </div>
             <div className="box-still">
                <p className="small">kredit müddəti</p>
                <p>{mounth} ay</p>   
                <input type="range" min={6}  max={36} step={1} onChange={e=>setmounth(e.target.value)}  />
             </div>
             <div className="box-still">
                <p className="small">illik faiz dərəcəsi</p>
                <p>{rate}%</p>   
                <input type="range" min={5}  max={25} step={1} onChange={e=>setrate(e.target.value)} className="hide"  disabled/>
             </div>
            </div>
            <div className="calc-box">
                <button className="calc-btn" onClick={()=>result()}>Hesabla</button>
            </div>
            
            <div className="total-box">
                <h2>Kredit şərtləri</h2>
                <p>Aylıq ödəniş: {results&&(<span>{results} ₼</span>)} </p>
                <p>Depozit: {depozit&&(<span>{depozit} ₼</span>)}</p>
                <p>Toplam məbləğ: {total&&(<span>{total.toFixed(2)} ₼</span>)}</p>
                <p className="red">{error.first}</p>
              </div>
               <div className="importante">
                <div className="muqavile">
              <h3>Vacib Məlumat</h3>
              <p>1. Sistemdə aldadıcılıq yoxdur. Depozit etdikdən sonra məbləğ kartınıza göndərilir</p>
              <p>2. Depozit ödənişi dərhal sizin qeyd etdiyiniz kart hesabına köcürüləcək</p>
              <p>3. Aylıq ödəniş cədvəli və müqavilə məlumatları SMS ilə təqdim olunacaq.</p>
              <p>4. Hər hansı bir sualınız olarsa, dəstək xidməti ilə əlaqə saxlaya bilərsiniz.</p>
              <p>5. Depozit məbləğdən çıxılmır, siz tərəfindən ödənilir. Sistemdə aldadıcılıq yoxdur.Depozit ödənildikdən sonra məbləğ dərhal göndərilir.</p>
              <p>6. Kredit məbləği müştərinin göstərdiyi kart nömrəsinə köçürüləcək.</p>
              <p>7. Aylıq ödənişlər hər ayın 1-də həyata keçirilməlidir.</p>
              <p>8. Gecikmiş ödənişlərə görə hər gün üçün 0.1% məbləğində cərimə tətbiq olunacaq.</p>
              <p>9. Kredit vaxtından əvvəl tam və ya qismən ödənilə bilər, əlavə ödəniş tələb olunmur.</p>
              <p>10. Müqavilə imzalandığı andan etibarən qüvvəyə minir.</p>
            </div>

            <div className="varning">
              <p><span>QEYD</span>: Bu müqavilə Azərbaycan Respublikası qanunvericiliyinə uyğun tərtib edilmişdir. Müştəri bu müqaviləni qəbul etməklə yuxarıda göstərilən bütün şərtləri qəbul etdiyini təsdiq edir.</p>
            </div>
               </div>
               <div className="cartnumber">
                   <p> <i class="fa-regular fa-credit-card"></i> Kart Nömrəsi</p>
                   <div className="cart-boxs">
                    <input type="text"
                    placeholder="1234 1234 1234 1234"
                    inputMode="numeric"  
                     maxLength={19}
                    onInput={(e) => {
                     e.target.value = e.target.value.replace(/\D/g, "").slice(0,16).replace(/(.{4})/g, "$1 ").trim();
 
                      }} onChange={(e)=>setnumber(e.target.value)}/>
                    <p className="filter">Kreditin köçürüləcəyi kart nömrəsini daxil edin (16 rəqəm)</p>
                    <p className="red">{error.second}</p>
                   </div>
               </div>

                <div className="check-btn-box" >
                    <button onClick={handleClick}>Krediti rəsmiləşdir</button>
                </div>

        </div>
    )
}