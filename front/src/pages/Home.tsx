import ListArtworks from "../components/artwork/ListArtworks";
import Header from "../components/Header";
import { useArtworkStore } from "../stores/artwork/useArtworkStore";


const Home = () => {
  const {artworks} = useArtworkStore();

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h2>Explorez notre collection d'œuvres</h2>
          <ListArtworks
            artworks={artworks}
          ></ListArtworks>
        </section>
      </main>
    </>
  );
}

export default Home;
