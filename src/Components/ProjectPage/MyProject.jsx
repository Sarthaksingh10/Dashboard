import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MyProject() {

 const addnewbox=()=>{
  let box= document.createElement('div')
  box.setAttribute('className','h-[300] w-[200] bg-black relative left-40 bottom-[95%]')
  let maindiv=document.getElementById('maindiv')
  maindiv.appendChild(box)
 }

  return (
    <div className="relative left-[22%] bottom-[95%] text-black" id="maindiv">
      <div>
        <h1 className="text-4xl">MY PROJECTS</h1>
      </div>
      <div className="h-[250px] w-[400px] rounded-lg p-2 bg-white  justify-center items-center flex flex-col">
        <div className="h-[200px] w-[350px] rounded-lg bg-orange-300 justify-center items-center flex">
          <button onClick={addnewbox}>
            <FontAwesomeIcon icon={faSquarePlus} className="text-7xl" />
          </button>
        </div>
        <h4 className="font-bold text-xl">Create a new project</h4>
        <h5>
          or try a <span className="text-orange-300"> sample project</span>
        </h5>
      </div>
    </div>
  );
}
