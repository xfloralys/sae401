import Header from "../components/Header";
import { NavLink } from "react-router";
import Footer from "../components/Footer";

const Challenge = () => {
   return (
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
         <Header />
         <main className="container mx-auto px-8 min-h-[calc(100vh-140px)] flex justify-center items-center">
            <section className="">
               <h2 className="text-center">Choix de la difficulté</h2>

               <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur vestibulum at dictum
                  viverra mi fermentum at pellentesque risus rhoncus.
               </p>

               <div className="w-full flex flex-col justify-center items-center gap-2">
                  <NavLink to="/entrainement" className="btn-primary">Rookie</NavLink>

                  <NavLink to="/classique" className="btn-primary">Sophomore</NavLink>

                  <NavLink to="/challenge" className="btn-primary">Veteran</NavLink>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   )
} 

export default Challenge;