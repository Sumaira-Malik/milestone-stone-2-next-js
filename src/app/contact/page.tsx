"use client";
import Nav from "../components/Navbar";
import Foot from "../components/Footer";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <div>
      <Nav />

      <section className="section">
        <div id="contact">
          <h1>Contact Me</h1>

          <div className="form">
            <form action="">
              Full Name:
              <br />
              <input
                type="text"
                name="Full Name"
                id=""
                placeholder="Full Name"
              />
              <br />
              Email:
              <br />
              <input
                type="email"
                name="Your Enail"
                placeholder="Enter Your Email"
              />
              <br />
              Password:
              <br />
              <input
                type="password"
                name="Password"
                placeholder="Enter Your Password"
              />
              <br />
              Message:
              <br />
              <textarea placeholder="Your Feedback.."></textarea>
              <button
                id="button"
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/sumaira-malik-3a46372b5/"
                  )
                }
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Foot />
    </div>
  );
};
export default Contact;
