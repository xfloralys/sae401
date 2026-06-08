import Header from "../../components/Header";
import { NavLink } from "react-router";
import Footer from "../../components/Footer";


const Selection = () => {
   return (
      <>
         <Header />
         <main className="container mx-auto p-4">
            <section className="text-center">
               <h2>Mode de jeu</h2>

               <p className="">
                  Lorem ipsum dolor sit amet consectetur vestibulum at dictum
                  viverra mi fermentum at pellentesque risus rhoncus.
               </p>

               <div className="w-full flex flex-col justify-center gap-2">
                  <NavLink to="/entrainement" className="inline-block text-md italic bg-red-500 w-[280px] py-[16px] rounded-sm">Entrainement</NavLink>

                  <NavLink to="/classique" className="inline-block text-md italic bg-red-500 w-[280px] py-[16px] rounded-sm">Classique</NavLink>

                  <NavLink to="/challenge" className="inline-block text-md italic bg-red-500 w-[280px] py-[16px] rounded-sm">Challenge</NavLink>
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default Selection;