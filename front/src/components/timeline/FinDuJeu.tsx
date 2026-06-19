import { Link } from "react-router";

type Props = {
    getParamValue: (gamemode: string) => number,
    score: number,
    nbErrors: number
}
  
const FinDuJeu = ({getParamValue, score, nbErrors}: Props) => {
   return (
        <>
            <h2 className="w-full text-center">Vous avez terminé le jeu</h2>
            {getParamValue("mode") === 1 && <p className="w-full text-center">Avec un total {nbErrors} erreurs</p>}
            {getParamValue("mode") === 2 && <p className="w-full text-center">Avec un score de {score}</p>}
            <Link to={`/mode-de-jeu`}>
                <input type="button" className="border-2 border-white text-white bg-green-700 p-1.5 rounded-xl w-30 hover:bg-green-900" value="Rejouer"/>
            </Link>
        </>
   )
}

export default FinDuJeu;