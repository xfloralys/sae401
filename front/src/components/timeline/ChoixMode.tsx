type Props = {
    gameModes: {id: string, name: string, label: string}[],
    selectedMode: string,
    setSelectedMode: React.Dispatch<React.SetStateAction<string>>
}

const ChoixMode = ({gameModes, selectedMode, setSelectedMode}: Props) => {
   return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-2 pb-8">
                <h4>Choix du mode de jeu</h4>
                
                <div className="w-full flex flex-col justify-center items-center gap-2 pb-8">
                    {gameModes.map((gameMode) => (
                        <div key={gameMode.id}>
                            <input type="radio" id={gameMode.id} name={gameMode.name} value={gameMode.id} checked={selectedMode === gameMode.id} onChange={(e) => setSelectedMode(e.target.value)} className="hidden" />

                            <label htmlFor={gameMode.id} className="btn-secondary">
                                {gameMode.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
   )
}

export default ChoixMode;