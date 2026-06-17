import { useSearchParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCardActions } from "../stores/card/card.selectors";
import { useCardStore } from "../stores/card/useCardStore";
import { useCardOrderActions, useCardsBySlot } from '../stores/cardOrder/cardOrder.selectors';
import DraggableCard from "../components/timeline/DraggableCard";
import DroppableZoneGame from "../components/timeline/DroppableZoneGame";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import type { Card } from "../types/card";

const Jeu = () => {
   const {cards} = useCardStore();
   const cardsBySlot = useCardsBySlot();
   const {generatePlayerCards, setNbCardsFromDifficulty} = useCardActions();
   const {generateCardOrder, initTimeline, setCardAt} = useCardOrderActions();
   const [searchParams, setSearchParams] = useSearchParams();

   // Récupération des paramètres de l'URL
   const getParamValue = (key: string) => {
      const str = searchParams.get(key) as string;
      return Number.parseInt(str.charAt(5));
   }

   // Initialisation du jeu
   generateCardOrder(cards);
   const generatedCards = generatePlayerCards(setNbCardsFromDifficulty(getParamValue("diff")));
   // initTimeline();


   // Gestion Drag and Drop
   const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
   const backend = isTouchDevice ? TouchBackend : HTML5Backend;
   const handleDropCard = (
      card: Card,
      slotIndex: number
   ) => {
      setCardAt(card, slotIndex);
   };

   return (
      <DndProvider backend={backend}>
         <Header/>
         <main className="container mx-auto p-4">
            <section>
               <h2>À vous de jouer - Placez les cartes dans l'ordre correct !</h2>

               {/* Cartes à placer */}
               <div className="grid grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] gap-4">
                  {generatedCards.map((c, idx) => (
                     <DraggableCard key={idx} card={c}
                  />))}
               </div>

               {/* Timeline */}
               <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
                  <p>Paragraphe test</p>
                  {cardsBySlot.map((c, idx) => (
                     <DroppableZoneGame
                        key={idx}
                        slotIndex={idx}
                        card={c}
                        onDropCard={handleDropCard}
                     />
                  ))}
               </div>
            </section>
         </main>
         <Footer/>
      </DndProvider>
   )
} 

export default Jeu;