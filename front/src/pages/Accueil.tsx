import Header from "../components/Header";
import { NavLink } from "react-router";
import Footer from "../components/Footer";



const Accueil = () => {

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="container mx-auto px-10 min-h-[calc(100vh-140px)] flex justify-center items-center">
        <section className="flex flex-col justify-center items-center text-center">
          <h1 className="pb-6">Timeline</h1>

          <p className="text-lg pb-10 max-w-[600px]">
            Saurez-vous replacer chaque MVP des Finales NBA à la bonne année ? Testez vos connaissances et reconstruisez l'histoire de la NBA, une carte à la fois.
          </p>

          <h2 className="pb-6">Comment jouer ?</h2>

          <p className="text-lg pb-10 m-w-80">
            Timeline est un jeu dans lequel tu disposes de plusieurs cartes (de 5 à 9 en fonction de la difficulté choisie), 
            le but étant de les placer dans l’ordre chronologique en fonction de ce qu’elles représentent sans se tromper.
          </p>

          {/* <p className="text-lg pb-10 m-w-80">Tu as le choix entre trois modes de jeu :</p>
          <ul className="pb-8">
            <li><p className="text-lg pb-2 m-w-80"><u>Le mode entraînement</u> : tu peux tenter de placer les cartes correctement autant de fois que tu veux sans recevoir de punition en cas d’erreur.</p></li>
            <li><p className="text-lg pb-2 m-w-80"><u>Le mode classique</u> : à chaque erreur, tu reçois une carte supplémentaire. Le but est toujours de se débarrasser de toutes les cartes que tu as en main.</p></li>
            <li><p className="text-lg pb-2 m-w-80"><u>Le mode challenge</u> : à chaque fois que tu places une carte, tu en recevras une nouvelle. Le but est d’atteindre le meilleur score avant de faire une erreur.</p></li>
          </ul>

          <p className="text-lg pb-10 m-w-80">Tu as également le choix entre 3 difficultés, ce qui va faire varier le nombre de cartes à jouer comme il suit :</p>
          <ul className="pb-8">
            <li><p className="text-lg pb-2 m-w-80">Facile : 5 cartes.</p></li>
            <li><p className="text-lg pb-2 m-w-80">Normal : 7 cartes.</p></li>
            <li><p className="text-lg pb-2 m-w-80">Difficile : 9 cartes.</p></li>
          </ul> */}
            
          <NavLink to="/mode-de-jeu" className="btn-primary">Commencer</NavLink>


        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
