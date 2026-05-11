import Header from "../components/Header";
import { useArtworksCount } from "../stores/artwork/useArtworkStore";

const Admin = () => {
  const artworkCount = useArtworksCount();

  return (
    <>
      <Header />

      <main className="container mx-auto p-4 flex gap-6">
        <section className="flex-1 min-w-0">
          <h2>Gestion de { artworkCount } œuvres</h2>
        </section>
      </main>
    </>
  );
};

export default Admin;
