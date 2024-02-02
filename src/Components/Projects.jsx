import img1 from '../assets/rickandmorty.png'
import img2 from '../assets/pokedex.png'
import img3 from '../assets/carrito.png'
import img4 from '../assets/phrases.png'
import { useEffect } from 'react'
import Aos from 'aos'



const Projects = () => {

    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])
  return (
    <div id='Projects' className="p-20 flex flex-col items-center justify-center ">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Proyectos</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-up" height={250} width={250} className="text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt=""/>
            <img data-aos="fade-down" height={250} width={250} className="text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt=""/>
            <img data-aos="fade-up" height={250} width={250} className="text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt=""/>
            <img data-aos="fade-down" height={250} width={250} className="text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt=""/>
        </div>
    </div>
  )
}
export default Projects