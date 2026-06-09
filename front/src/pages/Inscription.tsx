import Footer from "../components/Footer";
import Header from "../components/Header";

const Inscription = () => {
   return (
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
         <Header />

         <main>
            <form action="#" method="post">

               <div>
                  <label htmlFor="">Votre pseudo</label>
                  <input type="text" name="" id="" placeholder="Pseudo" required/>
               </div>

               <div>
                  <label htmlFor="">Créer votre mot de passe</label>
                  <input type="password" name="" id="" placeholder="Mot de passe" required/>
               </div>

               <input type="submit" value="Inscription" />

            </form>
         </main>

         <Footer />
      </body>
   )
} 

export default Inscription;