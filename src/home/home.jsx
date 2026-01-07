import React from "react";
import { Header } from "../components/homepage/header";
import { Main } from "../components/homepage/main";
import { Footer } from "../components/homepage/footer";
import { Outlet } from "react-router-dom";



export function Home(){
    

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
     
    )
}