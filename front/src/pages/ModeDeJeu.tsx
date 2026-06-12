import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ModeDeJeu = () => {
   return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />

        <main className="container mx-auto px-8 min-h-[calc(100vh-140px)] flex justify-center items-center">
            <section className="">
               <h2 className="text-center">Mode de jeu</h2>

               <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur vestibulum at dictum
                  viverra mi fermentum at pellentesque risus rhoncus.
               </p>

               <form action="#" method="post" className="pt-10">
                    <div className="w-full flex flex-col justify-center items-center gap-2 pb-8">
                        <h4>Choix du mode de jeu</h4>
                        <div className="w-full flex flex-col justify-center items-center gap-2 pb-8">
                            <input className="bouton-mode btn-primary" type="button" id="mode-0" value="Entraînement"/>
                            <input className="bouton-mode btn-primary" type="button" id="mode-1" value="Classique"/>
                            <input className="bouton-mode btn-primary" type="button" id="mode-2" value="Challenge"/>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <h4>Choix de la difficulté</h4>
                        <div className="flex flex-wrap gap-2">
                            <input className="bouton-diff" type="button" id="diff-0" value="Rookie"/>
                            <input className="bouton-diff" type="button" id="diff-1" value="Sophomore"/>
                            <input className="bouton-diff" type="button" id="diff-2" value="Veteran"/>
                        </div>
                    </div>
                    <p className="p-diff">Choix actuel de la difficulté : Moyen</p>
                    <p className="p-mode">Choix actuel du mode de jeu : Classique</p>
                    {/* A faire : passer ce qui a été choisi en paramètre*/}
                    <Link to={{pathname: `/jeu`, search: `?diff=diff-1&mode=mode-1`}}>
                        <input type="submit" className="border-2 border-white text-white bg-green-700 p-1.5 rounded-xl w-30 hover:bg-green-900" value="Jouer"/>
                    </Link>
                </form>
            </section>
         </main>
    
        <Footer />
    </div>

   )
}

export default ModeDeJeu;