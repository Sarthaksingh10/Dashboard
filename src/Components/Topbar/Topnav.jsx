import propTypes from 'prop-types'
import '../../App.css'
import myimage from '../../assets/Ellipse 1.jpg'



function Topnav({classname}) {

  return (
    <div className={`${classname} h-20 overflow-hidden flex justify-end bg-white`}>
      <div className="flex flex-col">
        <div className="flex relative right-6 top-4">
          <h3 className=" text-3xl">Free trial | </h3>
          <h4 className="text-xl">2 days left</h4>
        </div>
        <div>
          <h5 className="text-orange-400 relative top-4 right-3">Extend free trial</h5>
        </div>
      </div>
      <div className='flex'>
        <div className='h-12 w-12 rounded-full bg-black relative top-4'>
          <img src={myimage} alt="profile image" className='h-12 w-12 rounded-full bg-cover bg-no-repeat'/>
        </div>
        
        <select name="Option" id="Signup" className='outline-none relative top-2 left-2'>
          <option value="Drop"> &#x25BC;</option>
          <option value="signup">Sign Up</option>
          <option value="Login">Login</option>
        </select>
        
      </div>
    </div>
  );
}

Topnav.propTypes={
    classname:propTypes.string
 }
export default Topnav;
