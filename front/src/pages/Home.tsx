import ListCards from "../components/card/ListCards";
import Header from "../components/Header";
import { useCardStore } from "../stores/card/useCardStore";


const Home = () => {
  const {cards} = useCardStore();
  // console.log("--- Vérif des données dans Home.tsx ---");
  // console.log(cards);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h2>Explorez notre collection d'œuvres</h2>
          <ListCards
            cards={cards}
          ></ListCards>
        </section>
      </main>
    </>
  );
}

export default Home;
