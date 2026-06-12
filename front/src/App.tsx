import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";

// Page d'Accueil
import Home from "./pages/Home";
import Accueil from "./pages/Accueil";

// Page Inscription et Connexion
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";

// Mode de jeu
import Selection from "./pages/Selection";
import Entrainement from "./pages/Entrainement";
import Classique from "./pages/mode-de-jeu/Classique";
import Challenge from "./pages/Difficulte";

import ChoixDifficulte from "./pages/ChoixDifficulte";

import ChoixDifficulte from "./pages/ChoixDifficulte";

// Difficultés
import Facile from "./pages/difficultes/Facile";
import Moyen from "./pages/difficultes/Moyen";
import Difficile from "./pages/difficultes/Difficile";

// Jeu 
import Jeu from "./pages/Jeu"

// Profil utilisateur
import Profil from "./pages/Profil"

// Anciens components
import Admin from "./pages/Admin";
import ExpoComposer from "./pages/ExpoComposer";
import MyExpo from "./pages/MyExpo";
import Page404 from "./pages/Page404";

import { useCardActions, useCardsStatus } from "./stores/card/card.selectors";
import { useEffect } from "react";

const App = () => {
  const {loadCards} = useCardActions();
  const cardsStatus = useCardsStatus();

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  if (cardsStatus === "loading" || cardsStatus === "idle") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Chargement...</p>
      </div>
    );
  };

  if (cardsStatus === "error") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Erreur lors du chargement des œuvres. Recommencez ultérieurement</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        // Accueil
        <Route path="/" element={<Home/>}></Route>
        <Route path="/accueil" element={<Accueil/>}></Route>

        // Inscription & Connexion 
        <Route path="/inscription" element={<Inscription/>}></Route>
        <Route path="/connexion" element={<Connexion/>}></Route>

        // Mode de jeu
        <Route path="/selection" element={<Selection/>}></Route>
        <Route path="/entrainement" element={<Entrainement/>}></Route>
        <Route path="/classique" element={<Classique/>}></Route>
        <Route path="/challenge" element={<Challenge/>}></Route>
        <Route path="/choix-difficulte" element={<ChoixDifficulte/>}></Route>

        // Difficultés
        <Route path="/facile" element={<Facile/>}></Route>
        <Route path="/moyen" element={<Moyen/>}></Route>
        <Route path="/difficile" element={<Difficile/>}></Route>

        // Jeu
        <Route path="/jeu" element={<Jeu/>}></Route>

        // Profil
        <Route path="/profil" element={<Profil/>}></Route>

        //----------------------------------------------------------- ancienne route
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/prepare-expo" element={<ExpoComposer/>}></Route>
        <Route path="/my-expo" element={<MyExpo/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App

// bon faut utiliser useEffect quelque part 

