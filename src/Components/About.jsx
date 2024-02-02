 
import img from '../assets/aboutme.png'

const About = () => {
  return (
   
      
      <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={img} width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt="" />           
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center dark:text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">Acerca de mí</h1>
                <p data-aos="fade-left">Me he formado en desarrollo web y backend y estoy altamente preparada para aplicar mis conocimientos en el campo laboral. 
            Tengo un alto conocimiento en HTML, CSS3, JAVASCRIPT, REACT, JAVA, C++, PHP, NODEJS, gracias a mi formacion academica.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 dark:text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    
  )
}
export default About