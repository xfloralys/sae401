type Props = {
    difficultyChoices: {id: string, name: string, label: string}[],
    selectedDifficulty: string,
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>
}
  
const ChoixDifficulte = ({difficultyChoices, selectedDifficulty, setSelectedDifficulty}: Props) => {
   return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-2 pb-8">
                <h4 className="pb-1">Choix de la difficulté</h4>
                
                <div className="flex items-center gap-2">
                    {difficultyChoices.map((difficultyChoice) => (
                        <div key={difficultyChoice.id}>
                            <input
                                type="radio" id={difficultyChoice.id} name={difficultyChoice.name} value={difficultyChoice.id} checked={selectedDifficulty === difficultyChoice.id} onChange={(e) => setSelectedDifficulty(e.target.value)} className="hidden"
                            />

                            <label htmlFor={difficultyChoice.id} className={selectedDifficulty === difficultyChoice.id ? "btn-difficulty-selected" : "btn-difficulty"}>
                                {difficultyChoice.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
   )
}

export default ChoixDifficulte;