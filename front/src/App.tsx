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
import ModeDeJeu from "./pages/ModeDeJeu";


// Difficultés


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

        <Route path="/mode-de-jeu" element={<ModeDeJeu/>}></Route>

        // Difficultés


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

