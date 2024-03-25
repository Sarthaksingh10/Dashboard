import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleQuestion, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'

import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
function Sidenav({ classname }) {

    const reference= useRef(null)

   const collapse=()=>{
    
    if (reference.hasAttribute==='className') {
      reference.setAttribute('className', 'hidden')
    }
   }

  return (
    <div className={` ${classname} overflow-hidden `} >
      <div className="flex flex-col justify-between " ref={reference}>
        <div className="flex justify-center h-20 text-2xl items-center">
          <h1 className=" font-bold">Necleo</h1>
        </div>
        <hr />
        <div className="flex flex-col justify-start  text-lg p-6 relative left-10 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         `
            }
          >
            <FontAwesomeIcon icon={faDatabase} /> My Projects
          </NavLink>
          <NavLink
            to="/Sample_project"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         my-5`
            }
          >
            <FontAwesomeIcon icon={faUpDownLeftRight} /> Sample Projects
          </NavLink>
        </div>
        <hr />
        <div className="flex flex-col justify-start text-lg p-6 relative left-10">
          <NavLink
            to="/projectapp"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         `
            }
          >
            <FontAwesomeIcon icon={faTableCellsLarge} /> Apps
          </NavLink>
          <NavLink
            to="/IntroToNucleo"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         my-5`
            }
          >
            <FontAwesomeIcon icon={faCirclePlay} /> Intro to Nucleo
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-start  relative top-1/4 left-16 text-xl">
      <NavLink
            to="/HelpSupport"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         my-5`
            }
          >
            <FontAwesomeIcon icon={faCircleQuestion} /> Help & Support
          </NavLink>
      <NavLink
            to="/Feedback"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-500 opacity-50"}
         my-3`
            }
          >
            <FontAwesomeIcon icon={faMessage} /> Feedback
          </NavLink>
      <button
     
      onClick={collapse}
            className= {`font-bold relative flex justify-start  left-2 top-2 text-2xl`
          }
          >
            <FontAwesomeIcon icon={faArrowLeft}  className="relative top-1 right-2 text-2xl"/> Collapse
          </button>
      </div>
    </div>
  );
}

Sidenav.propTypes = {
  classname: propTypes.string,
};
export default Sidenav;
