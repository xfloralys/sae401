import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";


  
const ModeDeJeu = () => {

    // const [selected, setSelected] = useState("gameMode1");
    const [selectedMode, setSelectedMode] = useState("mode-1");
    const [selectedDifficulty, setSelectedDifficulty] = useState("diff-1");

    const gameModes = [
        { id: "mode-0", name: "choix-mode", label: "Entraînement" },
        { id: "mode-1", name: "choix-mode", label: "Classique" },
        { id: "mode-2", name: "choix-mode", label: "Challenge" }
    ];

    const difficultyChoices = [
        { id: "diff-0", name: "choix-diff", label: "Rookie" },
        { id: "diff-1", name: "choix-diff", label: "Sophomore" },
        { id: "diff-2", name: "choix-diff", label: "Veteran" }
    ];

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
                            {gameModes.map((gameMode) => (
                                <div key={gameMode.id}>
                                    <input type="radio" id={gameMode.id} name={gameMode.name} value={gameMode.id} checked={selectedMode === gameMode.id} onChange={(e) => setSelectedMode(e.target.value)} className="hidden" />

                                    <label htmlFor={gameMode.id} className="btn-secondary">
                                        {gameMode.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <h4>Choix de la difficulté</h4>
                       
                        <div className="flex items-center gap-2">
                            {difficultyChoices.map((difficultyChoice) => (
                                <div key={difficultyChoice.id}>
                                    <input
                                        type="radio" id={difficultyChoice.id} name={difficultyChoice.name} value={difficultyChoice.id} checked={selectedDifficulty === difficultyChoice.id} onChange={(e) => setSelectedDifficulty(e.target.value)} className="hidden"
                                    />

                                    <label htmlFor={difficultyChoice.id} className="border-2 border-gray-700 p-1.5 rounded-xl w-30 hover:bg-gray-300">
                                        {difficultyChoice.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>



                    <p className="p-mode">
                        Choix actuel du mode de jeu : {
                            gameModes.find(mode => mode.id === selectedMode)?.label
                        }
                    </p>

                    <p className="p-diff">
                        Choix actuel de la difficulté : {
                            difficultyChoices.find(diff => diff.id === selectedDifficulty)?.label
                        }
                    </p>
                    
                    {/* A faire : passer ce qui a été choisi en paramètre*/}
                    <Link to={{pathname: `/jeu`, search: `?diff=${difficultyChoices.find(diff => diff.id === selectedDifficulty)?.id}&mode=${gameModes.find(mode => mode.id === selectedMode)?.id}`}}>
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