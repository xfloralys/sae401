import Header from "../components/Header";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
// import ListArtworks from "../components/artwork/ListArtworks";
// import { useArtworkStore } from "../stores/artwork/useArtworkStore";


const Home = () => {
  // const {artworks} = useArtworkStore();

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center ">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          
          <p className="">
            Lorem ipsum dolor sit amet consectetur vestibulum at dictum 
            viverra mi fermentum at pellentesque risus rhoncus.
          </p>


            
          <NavLink to="/selection" className="inline-block text-md italic bg-red-500 w-[280px] py-[16px] rounded-sm">Commencer</NavLink>

          {/* <ListArtworks
            artworks={artworks}
          ></ListArtworks> */}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
