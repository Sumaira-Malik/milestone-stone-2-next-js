import Link from "next/link";

const Nav = () =>{
    return(
        <div className="nav">
        
      <div className="logo">
      <h1>Portfolio</h1>

      </div>
      <div className="navbar">
      <ul>
        <li>
          <Link href="/">
          Home</Link>
          </li>
          <li>
          <Link href="/About">
          About</Link>
          </li>
          <li>
          <Link href="/contact">
          Contact</Link>
          </li>
      </ul>
      </div>
      </div>
    )
}
export default Nav;
