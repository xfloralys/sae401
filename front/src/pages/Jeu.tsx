import ListCards from "../components/card/ListCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCardStore } from "../stores/card/useCardStore";
import type { Card } from "../types/card";

const Jeu = () => {
   const {cards} = useCardStore();
   const randomCards: Card[] = randomizeCards(cards, 5).filter((key, value) => value != undefined) as Card[];

   return (
      <>
         <Header/>
         <main className="container mx-auto p-4">
            <section>
               <h2>À vous de jouer - Placez les cartes dans l'ordre correct !</h2>
               <ListCards
                  cards={randomCards}
               ></ListCards>
            </section>
         </main>
         <Footer/>
      </>
   )
} 

// Choix aléatoire des cartes
function randomizeCards(cards: Card[], nbCards: number) {
   const randomCards = [];
   for (let i = 0; i < nbCards; i++) {
      randomCards[i] = cards.at(Math.ceil(Math.random() * (cards.length - 1)))
   }
   return randomCards;
}

export default Jeu;