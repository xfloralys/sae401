import Header from "../../components/Header";
import { NavLink } from "react-router";
import Footer from "../../components/Footer";

const Classique = () => {
   return (
      <>
         <Header />
         <main className="container mx-auto p-4">
            <section className="text-center ">
               <h2>Mode de jeu</h2>

               <p className="">
                  Lorem ipsum dolor sit amet consectetur vestibulum at dictum
                  viverra mi fermentum at pellentesque risus rhoncus.
               </p>

               <div className="flex flex-col gap-2">
                  <NavLink to="/facile" className="text-md italic font-bold bg-red-500 w-80 py-[16px] rounded-sm">Rookie</NavLink>

                  <NavLink to="/moyen" className="text-md italic font-bold bg-red-500 w-80 py-[16px] rounded-sm">Sophomore</NavLink>

                  <NavLink to="/difficile" className="text-md italic font-bold bg-red-500 w-80 py-[16px] rounded-sm">Veteran</NavLink>
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
} 

export default Classique;