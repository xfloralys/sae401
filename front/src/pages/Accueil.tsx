import Header from "../components/Header";
import { NavLink } from "react-router";
import Footer from "../components/Footer";



const Accueil = () => {

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="container mx-auto px-10 min-h-[calc(100vh-140px)] flex justify-center items-center">
        <section className="flex flex-col justify-center items-center text-center">
          <h1 className="pb-6">Lorem ipsum dolor sit amet.</h1>

          <p className="text-lg pb-10 m-w-80">
            Saurez-vous replacer chaque MVP des Finales NBA à la bonne année ? Testez vos connaissances et reconstruisez l'histoire de la NBA, une carte à la fois.
          </p>
            
          <NavLink to="/mode-de-jeu" className="btn-primary">Commencer</NavLink>


        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
