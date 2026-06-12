type Props = {
    difficultyChoices: {id: string, name: string, label: string}[],
    selectedDifficulty: string,
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>
}
  
const ChoixDifficulte = ({difficultyChoices, selectedDifficulty, setSelectedDifficulty}: Props) => {
   return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <h4>Choix de la difficulté</h4>
                
                <div className="flex items-center gap-2">
                    {difficultyChoices.map((difficultyChoice) => (
                        <div key={difficultyChoice.id}>
                            <input
                                type="radio" id={difficultyChoice.id} name={difficultyChoice.name} value={difficultyChoice.id} checked={selectedDifficulty === difficultyChoice.id} onChange={(e) => setSelectedDifficulty(e.target.value)} className="hidden"
                            />

                            <label htmlFor={difficultyChoice.id} className="border-2 border-gray-700 p-1.5 rounded-xl w-30 hover:bg-gray-300">
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