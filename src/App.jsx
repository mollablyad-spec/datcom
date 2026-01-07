import React from 'react';
import './App.scss';
import { Routes, Route} from "react-router-dom";
import { Home } from './home/home';
import { FormPage } from './components/idendification/formpage';
import { Confirmated } from './components/competed/thirt';
import { ContractPage } from './components/contract/contractpage';
import { Send } from './components/whatsapp/send';
import { Admins } from './components/admin/admin';
import { Main } from './components/homepage/main';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/muraciet' element={<FormPage/>}/>
        <Route path='/kredit-limiti' element={<Confirmated/>}/>
        <Route path='/kredit-muqavile' element={<ContractPage/>}/>
        <Route path='/depozit' element={<Send/>}/>
        <Route path='/admin123456' element={<Admins/>}/>
       </Route>
       
    </Routes>
    </>  
  );
}

export default App;
