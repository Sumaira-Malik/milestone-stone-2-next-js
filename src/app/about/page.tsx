"use client";
import Image from "next/image";
import Nav from "../components/Navbar";
import { useRouter } from "next/navigation";
import Foot from "../components/Footer";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <section className="section">
        <section id="home">
          <div id="profile">
            <Image
              src="/img.jpg"
              alt="profile"
              width={250}
              height={250}
              className="profile-img"
            />
          </div>
          <div id="heading">
            <h1>
              Hello! It's
              <span> Sumaira Malik</span>
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
              frameworks.
            </p>
            <button id="btn" onClick={() => router.push("/Contact")}>
              Contact me
            </button>
          </div>
        </section>
      </section>
      <Foot />
    </div>
  );
};

export default About;
