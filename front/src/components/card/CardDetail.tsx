import { useEffect, useRef } from "react";
import type { Card } from "../..//types/card";

type Props = {
  card: Card;
  onClose: () => void;
}

const CardDetail = ({ card, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === dialog) {
        dialog.close();
        onClose();
      }
    };

    dialog.addEventListener("click", handleClickOutside);

    return () => {
      dialog.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="fixed top-1/2 left-1/2 -translate-1/2 rounded-lg p-0 bg-transparent backdrop:bg-black/95 max-w-4xl w-full border-none shadow-xl "
      aria-labelledby="popup-title"
    >
      <div className="bg-white w-full p-6 relative overflow-auto max-h-screen">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Fermer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-4">
          <h2 id="popup-title" className="text-2xl font-semibold text-gray-800 text-center">
            {card.playerFirstName} {card.playerLastName}
          </h2>
          <p className="text-lg text-gray-600 text-center">Par: {card.team}</p>
          <div className="flex justify-center mb-4">
            <img src={card.image} alt={card.altText} className="xl:h-140object-contain rounded-lg" />
          </div>
          <p className="text-sm text-gray-700">{card.season}</p>
          <p className="text-sm font-semibold text-gray-800">Année de création: {card.pointsPerGame}</p>
        </div>
      </div>
    </dialog>
  );
};

export default CardDetail;
