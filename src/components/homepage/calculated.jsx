import React, { useState } from "react";





export function Calculated(){
const [amount, setamount] = useState(8000);
const [mounth, setmounth] = useState(21);
const [rate, setrate] = useState(15);
const [results, setResults] = useState(null);
const [depozit, setdepozit] = useState(null);
const [total, settotal] = useState(null);

function result(){
     const mountlyRate=rate/12/100;
     const payment= amount*(mountlyRate * Math.pow(1 + mountlyRate, mounth)) /
          (Math.pow(1 + mountlyRate, mounth) - 1);
           setResults(payment.toFixed(2));
           const deposit=50+(amount/500)*5;
           setdepozit(deposit);
           const totals=payment.toFixed(2)*mounth
           settotal(totals);   
}



    return(
        <div className="container-calculated">
            <h3>Kredit kalkulyatoru</h3>
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
                <input type="range" min={5}  max={25} step={1} onChange={e=>setrate(e.target.value)}  />
             </div>
            </div>
            <div className="calc-box">
                <button className="calc-btn" onClick={()=>result()}>Hesabla</button>
            </div>
            
            <div className="total-box">
                <p>Aylıq ödəniş: {results&&(<span>{results} ₼</span>)} </p>
                <p>Depozit: {depozit&&(<span>{depozit} ₼</span>)}</p>
                <p>Toplam məbləğ: {total&&(<span>{total.toFixed(2)} ₼</span>)}</p>
            </div>
        </div>
    )
}