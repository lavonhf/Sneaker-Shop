import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [nav, setNav] = useState(false)
    function handleNav(){
        setNav(!nav)
    }
    let navbar = "nav flex flex-col md:flex-row items-center md:bg-transparent bg-zinc-700 h-screen w-screen md:h-auto md:w-auto pt-10 md:pt-0 "
    return <div className="flex fixed h-16 w-screen z-20">
        <Link to='/' className="text-xl font-bold mx-8 p-3 items-center flex link">Logo</Link>
        <div className={nav ? navbar + "translate-x-10 md:translate-x-0" : navbar + "md:translate-x-0 translate-x-56"}>
            <p>Men</p>
            <p>Women</p>
            <p>Customize</p>
        </div>
        <i onClick={handleNav}
        className="fi fi-rr-apps flex-1 text-right z-20 p-3 md:hidden flex"></i>
    </div>
}