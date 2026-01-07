import React from "react";
import { useNavigate } from "react-router";






export function Contract(){
const now = new Date();
const day= now.getDate();
const mounth=now.getMonth() + 1;
const year=now.getFullYear();
const naviagate=useNavigate();

const{name,fincode,username,mobile}=JSON.parse(localStorage.getItem("information")) || {};;
const{depozit,money,mounts,rates,ratmoney,resultat,totaals}=JSON.parse(localStorage.getItem("person")) || {};;


    return(
        <div className="section">
            <div className="contract-body">
              <div className="c-header">
                <h3>AZMANAT MMC</h3>
                <p>kredit xidməti</p>
              </div>
              <p className="line"></p>
              <div className="title-one">
                <h3>KREDIT MUQAVİLƏSİ</h3>
                <p>Tarix: {day}.{mounth}.{year} </p>
              </div>

              <div className="user-information">
                <h3>Müştəri məlumatları</h3>
                <p>Ad: {name}</p>
                <p>Soyad: {username}</p>
                <p>Fin: {fincode}</p>
                <p>Mobil nömrə: {mobile}</p>
              </div>

              <div className="credit-information">
                <h3>Kredit məlumatı</h3>
                <p>Kredit məbləği: {money} azn</p>
                <p> kredit müddəti: {mounts} ay</p>
                <p>İllik faiz dərəcəsi: {rates}%</p>
                <p>Yekun faiz məbləği: {ratmoney.toFixed(2)} azn</p>
                <p>Aylıq ödəniş: {resultat} azn</p>
                <p>Toplam məbləğ: {totaals} azn</p>
                <p>Depozit məbləği: {depozit} azn</p>
              </div>
               <div className="muqavile">
              <h3>Müqavilə şərtləri</h3>
              <p>1. Kredit məbləği müştərinin göstərdiyi kart nömrəsinə köçürüləcək.</p>
              <p>2. Aylıq ödənişlər hər ayın 1-də həyata keçirilməlidir.</p>
              <p>3. Gecikmiş ödənişlərə görə hər gün üçün 0.1% məbləğində cərimə tətbiq olunacaq.</p>
              <p>4. Kredit vaxtından əvvəl tam və ya qismən ödənilə bilər, əlavə ödəniş tələb olunmur.</p>
              <p>5. Müqavilə imzalandığı andan etibarən qüvvəyə minir.</p>
            </div>

            <div className="varning">
              <p><span>QEYD</span>: Bu müqavilə Azərbaycan Respublikası qanunvericiliyinə uyğun tərtib edilmişdir. Müştəri bu müqaviləni qəbul etməklə yuxarıda göstərilən bütün şərtləri qəbul etdiyini təsdiq edir.</p>
            </div>
            </div>
             <div className="activate-box">
              <button onClick={()=>naviagate('/depozit')}>Müqaviləni aktivləşdir</button>
             </div>
           

        </div>
    )
}