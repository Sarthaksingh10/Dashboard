import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MyProject() {

  

  const addnewbox = () => {
    const box =document.createElement("div");
    let maindiv=document.getElementById('maindiv')
    box.classList.add("mx-3");
    box.classList.add("bg-black");
    box.classList.add("h-[250px]")
    box.classList.add("text-white")
    box.classList.add('w-[400px]')
    box.classList.add('relative')
    box.classList.add('top-6')
    box.classList.add('rounded-lg')
   box.setAttribute('id','boxid')
    box.innerHTML=`
    <div class='text-gray-400 bg-white text-2xl p-2  absolute inset-x-0 bottom-0  w-full h-[40px]'>
          <button class="text-black">
          Edit
          </button>
          <button class="mx-3 text-black" onclick={function remove(){
             let boxid= document.getElementById('boxid')
             console.log("working")
             boxid.remove()
             
          }}>
            Delete
          </button>
      </div>
`;  
maindiv.append(box)
  }
  return (
    <div className="relative left-[22%] bottom-[95%] text-black" >
      <div>
        <h1 className="text-4xl">MY PROJECTS</h1>
      </div>
      <div id="maindiv" className="flex">
      <div className="h-[250px] w-[400px] rounded-lg p-2 bg-white my-6 justify-center items-center flex flex-col">
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
    </div>
  );
}
