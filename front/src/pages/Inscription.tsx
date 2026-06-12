import { NavLink } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Inscription = () => {
   return (
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
         <Header />

         <main className="container-sm mx-auto px-8 min-h-[calc(100vh-140px)] flex justify-center items-center">
            
            <section className="w-full flex flex-col justify-center items-center gap-4">
               <h2>S'inscrire</h2>
               
               <form action="#" method="post" className="w-full p-4 border-2 rounded-md flex flex-col justify-center gap-2">

                  <div className="w-full flex flex-col gap-1">
                     <label htmlFor="user-pseudo" className="font-bold">Votre pseudo</label>
                     <input type="text" name="user-pseudo" id="user-pseudo" placeholder="Pseudo" className="text-lg border-2 rounded-lg p-4 outline-none" required/>
                  </div>

                  <div className="w-full flex flex-col gap-1">
                     <label htmlFor="user-password" className="font-bold">Créer votre mot de passe</label>
                     <input type="password" name="user-password" id="user-password" placeholder="Mot de passe" className="text-lg border-2 rounded-lg p-4 outline-none" required/>
                  </div>

                  <input type="submit" value="Inscription" className="items-center text-xl text-black font-bold italic text-lg px-[24px] py-[16px] bg-white rounded-sm cursor-pointer" />

               </form>

               <p>Vous avez déjà un compte ? <NavLink to="/connexion" className="text-gray-400 font-bold">Se connecter</NavLink>.</p>
            </section>
         </main>

         <Footer />
      </div>
   )
} 

export default Inscription;