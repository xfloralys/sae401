import ListArtworks from "../components/artwork/ListArtworks";
import Header from "../components/Header";
import { useArtworksExpo } from "../stores/expo/expo.selectors";


const MyExpo = () => {
  const exposedSlots = useArtworksExpo();

  return (
    <>
      <Header />

      <main className="container mx-auto p-4">
        <section>
          <h2>Mes œuvres préférées</h2>
          <ListArtworks
            artworks={exposedSlots}
          ></ListArtworks>
        </section>
      </main>
    </>
  );
};

export default MyExpo;
