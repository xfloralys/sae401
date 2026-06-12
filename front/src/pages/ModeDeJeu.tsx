import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ModeDeJeu = () => {
   return (
         <main className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            <section>
                <form action="#" method="post">
                    <div className="p-2">
                        <label htmlFor="">Choix de la difficulté</label>
                        <div className="flex flex-wrap gap-2">
                            <input className="bouton-diff" type="button" id="diff-0" value="Facile"/>
                            <input className="bouton-diff" type="button" id="diff-1" value="Moyen"/>
                            <input className="bouton-diff" type="button" id="diff-2" value="Difficile"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label htmlFor="">Choix du mode de jeu</label>
                        <div className="flex flex-wrap gap-2">
                            <input className="bouton-mode" type="button" id="mode-0" value="Entraînement"/>
                            <input className="bouton-mode" type="button" id="mode-1" value="Classique"/>
                            <input className="bouton-mode" type="button" id="mode-2" value="Challenge"/>
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
            <Footer />
         </main>
   )
}

export default ModeDeJeu;