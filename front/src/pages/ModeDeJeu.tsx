import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import ChoixDifficulte from "../components/timeline/ChoixDifficulte";
import ChoixMode from "../components/timeline/ChoixMode";
  
const ModeDeJeu = () => {
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
                        <ChoixMode
                            gameModes={gameModes}
                            selectedMode={selectedMode}
                            setSelectedMode={setSelectedMode}
                        />
                        <ChoixDifficulte
                            difficultyChoices={difficultyChoices}
                            selectedDifficulty={selectedDifficulty}
                            setSelectedDifficulty={setSelectedDifficulty}
                        />
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