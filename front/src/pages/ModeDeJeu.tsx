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
                <h2 className="text-center pb-8">Mode de jeu</h2>
                <p className="text-lg text-center pb-4">Tu as le choix entre trois modes de jeu :</p>
                <ul className="pb-2">
                    <li><p className="pb-2 m-w-80 text-center"><u>Le mode entraînement</u> : tu peux tenter de placer les cartes correctement autant de fois que tu veux sans recevoir de punition en cas d’erreur.</p></li>
                    <li><p className="pb-2 m-w-80 text-center"><u>Le mode classique</u> : à chaque erreur, tu reçois une carte supplémentaire. Le but est toujours de se débarrasser de toutes les cartes que tu as en main.</p></li>
                    <li><p className="pb-2 m-w-80 text-center"><u>Le mode challenge</u> : à chaque fois que tu places une carte, tu en recevras une nouvelle. Le but est d’atteindre le meilleur score avant de faire une erreur.</p></li>
                </ul>

                <form action="#" method="post" className="pt-10 flex flex-col items-center">
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

                    <Link to={`/jeu?mode=${selectedMode}&diff=${selectedDifficulty}`}>
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