import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router";

const Connexion = () => {
   return (
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
         <Header />

         <main className="container-sm mx-auto px-8 min-h-[calc(100vh-140px)] flex justify-center items-center">
            
            <section className="w-full flex flex-col justify-center items-center gap-4">
               <h2>Se connecter</h2>
               
               <form action="#" method="post" className="w-full p-4 border-2 rounded-md flex flex-col justify-center gap-4">

                  <div className="w-full flex flex-col gap-1">
                     <label htmlFor="user-pseudo" className="font-bold">Votre pseudo</label>
                     <input type="text" name="user-pseudo" id="user-pseudo" placeholder="Pseudo" className="text-lg border-2 rounded-lg p-4 outline-none" required/>
                  </div>

                  <div className="w-full flex flex-col gap-1">
                     <label htmlFor="user-password" className="font-bold">Votre mot de passe</label>
                     <input type="password" name="user-password" id="user-password" placeholder="Mot de passe" className="text-lg border-2 rounded-lg p-4 outline-none" required/>
                  </div>

                  <input type="submit" value="Connexion" className="btn-primary w-full" />

               </form>
               <p>Vous n'avez pas encore de compte ? <NavLink to="/inscription" className="text-gray-400 font-bold">S'inscrire</NavLink>.</p>
            </section>
         </main>

         <Footer />
      </div>
   )
}

export default Connexion;