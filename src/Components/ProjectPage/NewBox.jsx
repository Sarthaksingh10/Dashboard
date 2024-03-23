/* Created the file to add new box project */

import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewBox() {
  return (
    <div className="h-[350px] w-[300px] bg-black flex justify-end relative left-30 bottom-60">
      
        <div className="text-white text-4xl p-2 flex justify-center w-full h-[100px]">
          <button>
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
          <button className="mx-3">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        
      </div>
    </div>
  );
}
