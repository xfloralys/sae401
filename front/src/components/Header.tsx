import { NavLink } from "react-router";

// const navItems = [
//     { to: "/", label: "Accueil", bgColor: "bg-slate-600" },
//     { to: "/prepare-expo", label: "Préparer mon expo", bgColor: "bg-emerald-600" },
//     { to: "/my-expo", label: "Voir mon expo", bgColor: "bg-indigo-600" },
//     { to: "/admin", label: "Administrer", bgColor: "bg-rose-600" },
// ];


const Header=()=> {
    return (
        <header className="flex justify-center items-center p-4">
            {/* Logo */}
            <NavLink to="/">
                <h1 className="text-xl text-white font-bold text-gray-900 mb-4">NBA Finals</h1>
            </NavLink>

            {/* <nav className="" aria-label="Navigation principale">


                {navItems.map((item) =>(
                    <NavLink key={item.to} to={item.to} className={({isActive}) => `text-white px-4 py-2 rounded-lg ${item.bgColor} ${isActive ? "shadow-lg shadow-black/50" : ""}`}>{item.label}</NavLink>
                ))}

                <div>
                    <NavLink to="/connexion" className="text-xl text-black font-bold italic text-lg px-[24px] py-[16px] bg-white rounded-sm mr-4">Se connecter</NavLink>
                    <NavLink to="/inscription" className="text-xl text-black font-bold italic text-lg px-[24px] py-[16px] bg-white rounded-sm">S'incrire</NavLink>
                </div>
                
            </nav> */}

        </header>
    );
}
export default Header;
