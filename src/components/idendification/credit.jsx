import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';

export function Credits(){
  const navigate=useNavigate();
const{register,handleSubmit,formState:{errors}}=useForm()

const giveData= async(data)=>{
  Swal.fire({
      title: "Məlumatlar yoxlanılır...",
      text: "Zəhmət olmasa gözləyin",
      allowOutsideClick: false, 
      didOpen: () => {
        Swal.showLoading(); 
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 10000));

    Swal.fire({
      icon: "success",
      title: "Kredit uğurla təstiqləndi",
      text:'Kredit Müraciətiniz uğurla təstiqləndi'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('information',JSON.stringify(data))
        navigate("/kredit-limiti"); 
      }
    });;

    



}
    return(<div className="form-box">
           
           <form  className="form" onSubmit={handleSubmit(giveData)}>
            <h2 className="hd2f">Kredit müraciəti</h2>
             <div className="input-boxs">
                 <input type="text" {...register('name',{
                 required:'*Ad xanasi boş ola bilməz',
                 minLength:{
                    value:2,
                    message:'*Adınızı doğru daxil edin'
                 }
              })} placeholder="Adınızı daxil edin"/>
              {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
             </div>
             <div className="input-boxs">
                 <input type="text" {...register('username',{
                 required:'*soyadınızı daxil edin',
                  minLength:{
                    value:4,
                    message:'*Soyadınızı doğru daxil edin'
                 }
              })} placeholder="Soyadınızı daxil edin"/>
              {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
             </div>
             <div className="input-boxs">
                 <input type="text" {...register('fincode',{
                 required:'*Finkodunuzu daxil edin',
                  minLength:{
                    value:7,
                    message:'*Finkodunuz minimum 7 simvoldan ibarətdir'
                 }
              })} placeholder="Fin kodunuzu daxil edin"/>
              {errors.fincode && <p style={{ color: "red" }}>{errors.fincode.message}</p>}
             </div>
             <div className="input-boxs">
                 <input type="text" {...register('serial',{
                 required:'*ŞV nömrəsini daxil edin',
                   minLength:{
                    value:9,
                    message:'*Seriya nömrəsi minimum 9 simvoldan ibarətdir'
                 }
              })} placeholder="Ş/V seriya nömrəsini daxil edin"/>
              {errors.serial && <p style={{ color: "red" }}>{errors.serial.message}</p>}
             </div>
             <div className="input-boxs">
                 <input type="number" {...register('mobile',{
                 required:'*Mobil nömrənizi daxil edin',
              })} placeholder="Mobil nömrənizi daxil edin"/>
              {errors.mobile && <p style={{ color: "red" }}>{errors.mobile.message}</p>}
             </div>
               
               <button type="submit" className="formbtn">Müraciət et</button>
           </form>
    </div>)
}