import ListCards from "../components/card/ListCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCardActions } from "../stores/card/card.selectors";
import { useCardStore } from "../stores/card/useCardStore";
import { useCardOrderActions } from "../stores/cardOrder/cardOrder.selectors";

const Jeu = () => {
   const {cards} = useCardStore();
   const {generatePlayerCards, setNbCardsFromDifficulty} = useCardActions();
   const {generateCardOrder} = useCardOrderActions();
   const diff = 0; // A éventuellement replacer par un paramètre dans l'URL (Route)
   
   generateCardOrder(cards);

   return (
      <>
         <Header/>
         <main className="container mx-auto p-4">
            <section>
               <h2>À vous de jouer - Placez les cartes dans l'ordre correct !</h2>
               <ListCards
                  cards={generatePlayerCards(setNbCardsFromDifficulty(diff))}
               ></ListCards>
            </section>
         </main>
         <Footer/>
      </>
   )
} 

export default Jeu;