import Header from "../components/Header";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
// import ListArtworks from "../components/artwork/ListArtworks";
// import { useArtworkStore } from "../stores/artwork/useArtworkStore";


const Accueil = () => {
  // const {artworks} = useArtworkStore();

  return (
    <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="container mx-auto p-4">
        <section className="flex flex-col justify-center items-center text-center">
          <h2 className="font-ztnature font-bold text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          
          <p className="">
            Lorem ipsum dolor sit amet consectetur vestibulum at dictum 
            viverra mi fermentum at pellentesque risus rhoncus.
          </p>
            
          <NavLink to="/selection" className="inline-block font-crimson-pro font-bold text-xl italic bg-red-500 w-[280px] py-[16px] rounded-sm">Commencer</NavLink>

          {/* <ListArtworks
            artworks={artworks}
          ></ListArtworks> */}
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Accueil;
