import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function ImageGallery() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=6")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching image data:", error));
  }, []);

  return (
    <div className=" flex flex-wrap ">
      {imageData.map((image) => (
        <div
          key={image.id}
          className=" h-[300px] w-[350px] m-4 p-0  cursor-pointer bg-black"
        >
          <img
            src={image.download_url}
            alt={image.author}
            className="h-[250px] w-full flex"
          />
          <div className="text-white text-4xl p-2 flex justify-center ">
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
      ))}
    </div>
  );
}

export default ImageGallery;
