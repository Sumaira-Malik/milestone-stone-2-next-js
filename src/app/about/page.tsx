"use client";

import Nav from "../components/Navbar";
import { useRouter } from "next/navigation";
import Foot from "../components/Footer";

const about = () => {
  const router = useRouter();

  return (
    <div>

      <Nav />
      <section className="section">

        <section id="home">
          <div id="profile">
            <img
              src="https://i.pinimg.com/originals/17/ae/06/17ae0642f41606d5510047e217e55eb0.jpg"
              alt=""
            />
            
          </div>
          <div id="heading">
            <h1>
              Hello! Its
              <span>Sumaira Malik</span>
            </h1>
            <p>
              I am a dedicated Frontend developer with a solid foundation in web
              technologies. I completed a frontend development course from
              TECHFORCE PAKISTAN, where I gained proficiency in HTML5, CSS3,
              JavaScript. I have to learn also TypeScript Currently, I am
              further enhancing my skills by learning React and Next.js through
              the KAMRAN KHAN TESSORI WEB 3.0 AI. This advanced training allows
              me to stay at the forefront of web development, equipping me to
              build dynamic and responsive Websites using the latest
              frameworks..
            </p>
            
            <button id="btn" onClick={() => router.push("/contact")}>
              Contact me
            </button>
          </div>
        </section>
      </section>
      <Foot />
    </div>
  );
};
export default about;
