"use client"
import Image from "next/image";
import Nav from "../app/components/Navbar";
import Foot from "../app/components/Footer";

import {useRouter} from "next/navigation"


export default function Home() {
 const router = useRouter();
  return (
    <div >
      <Nav />
      <section className="section">

<div className="main-div">
  <h1 className="head">Welcome to My Portfolio</h1>
      <h2>Hi! This Is SUMAIRA MALIK</h2>
      <p id="para">I'm a frontend web developer with 1 year of experience.</p>
      <button id="main-btn" onClick={()=>router.push("/about")}>About me</button>
  </div>
      


      </section>
      <Foot />
      
      </div>
    
  );
}

  

