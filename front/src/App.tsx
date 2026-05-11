import Admin from "./pages/Admin";
import ExpoComposer from "./pages/ExpoComposer";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import MyExpo from "./pages/MyExpo";
import Page404 from "./pages/Page404";

import { useArtworkActions, useArtworksStatus } from "./stores/artwork/useArtworkStore";
import { useEffect } from "react";

const App = () => {
  const {loadArtworks} = useArtworkActions();
  const artworksStatus = useArtworksStatus();

  useEffect(() => {
    loadArtworks();
  }, [loadArtworks]);

  if (artworksStatus === "loading" || artworksStatus === "idle") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Chargement...</p>
      </div>
    );
  };

  if (artworksStatus === "error") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Erreur lors du chargement des œuvres. Recommencez ultérieurement</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
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

