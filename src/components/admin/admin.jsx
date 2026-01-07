import React, { useEffect, useState } from "react";
import { Admin } from './admin';
import { useData, useUpdate } from "../../hook/hook";




export function Admins(){
const [mobil, setTitle] = useState(null);
const{data,refetch}=useData();
const { mutate: updateItem, isPending } = useUpdate();
const [nomre, setnomre] = useState(null);  
useEffect(()=>{
    if (data) {
        console.log(data,'data');
          
        setnomre(data[0])
    }
},[data]); 

const handleUpdate = () => {
    updateItem(
      { id: nomre?.id, data: { mobil } },
      {
        onSuccess: () => {
            alert("✅ Başarıyla güncellendi!")
            refetch()
        },
        onError: (err) => {
          console.error(err);
          alert("❌ Güncelleme hatası!");
        },
      }
    );
  };

    return(<>
    <div className="admin-box">
        <p>hazirki nomre:{nomre?.mobil}</p>
        <div className="input-box">
            <input type="number"
            value={mobil}
           onChange={(e) => setTitle(e.target.value)}
                 placeholder="nomreni yaz"
            />
        </div>
        <div className="button-box">
            <button onClick={handleUpdate} disabled={isPending}>
        {isPending ? "Yenilenir..." : "Yenile"}
      </button>
        </div>

    </div>
    </>)
}