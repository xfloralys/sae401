import ListCards from "../components/card/ListCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCardActions } from "../stores/card/card.selectors";

const Jeu = () => {
   const {randomizeCards} = useCardActions();

   return (
      <>
         <Header/>
         <main className="container mx-auto p-4">
            <section>
               <h2>À vous de jouer - Placez les cartes dans l'ordre correct !</h2>
               <ListCards
                  cards={randomizeCards(5)}
               ></ListCards>
            </section>
         </main>
         <Footer/>
      </>
   )
} 

export default Jeu;