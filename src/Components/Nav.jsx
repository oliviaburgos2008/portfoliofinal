import { useState } from "react"
import { Link } from "react-scroll"
import {FaTimes } from "react-icons/fa"
import {CiMenuFries } from "react-icons/ci"
import img from '../assets/logo.jpg'

const Nav = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home"><li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Inicio</li>
        </Link>
        <Link spy={true} smooth={true} to="About"><li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Acerca de mí</li>
        </Link>
        <Link spy={true} smooth={true} to="Services"><li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects"><li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Proyectos</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact"><li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
        </Link>

      </ul>
    </div>
  </>

  return (
    <nav>
      
      <div className="h-10vh flex justify-between z-50 dark:text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
        <img data-aos="fade-up" src={img} width={80} height={80} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
          <span className="text-3xl font-bold"></span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio</li>
              </Link>
              <Link spy={true} smooth={true} to="About"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Acerca de mi</li>
              </Link>
              <Link spy={true} smooth={true} to="Services"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Servicios</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Proyectos</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
              </Link>
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries /> }
        </button>
      </div>

    </nav>
  )
}
export default Nav