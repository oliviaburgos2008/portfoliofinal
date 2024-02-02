import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import img from '../assets/logo.jpg'


const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase"></span>
                <img data-aos="fade-up" src={img} width={80} height={80} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
                <p className="text-[16px] my-4">Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.</p>
            </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Diseño Web</li>
                        <li className="my-2">Desarrollo Web</li>
                        {/* <li className="my-2">SEO</li> */}
                        <li className="my-2">Comercio Electronico</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact me</h2>
                    <p className="text-[16px] my-4">Correo: oliviaburgosblanco@gmail.com </p>
                    <p className="text-[16px] my-4">Telefono: +507 317 266 4882</p>                    
                </div>
               <div>
               {/* <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2> */}
                <div className="flex space-x-4">
                    <a href="https://github.com/oliviaburgos2008" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/olivia-burgos-blanco-b41476209/" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaLinkedin />
                    </a>

                    <a href="https://twitter.com/BurgosBlancoOli" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaTwitter />
                    </a>

                    <a href="https://www.instagram.com/oliviaburgosblanco/"  className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaInstagram />
                    </a>
                </div>
               </div>
        </div>
    </footer>
  )
}
export default Footer