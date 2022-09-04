import {Link} from 'react-router-dom';
import setting from '../images/icon/setting.png'
function Navbar(){
    return(
        <div className='nav'>
       <nav class=" flex  bg-blue-400 w-full h-16 py-2">
       <div class="flex"><Link to={'Parametre'}>  <h1 class="text-white font-extrabol ml-2">GESCARD</h1></Link><img src={setting} alt="" class="h-2 w-2 "/></div>
           <div class="absolute right-4 flex font-bold space-x-8 ">
      <Link to={'/'} ><h3 class="text-white border-b-2 border-blue-400 hover:border-white">Home</h3></Link>
      <Link to={'Utilisateur'}><h3 class="text-white border-b-2 border-blue-400 hover:border-white">Utilisateur</h3></Link>
      <Link to={'Activite'}><h3 class="text-white border-b-2 border-blue-400 hover:border-white">Activite</h3></Link>
      <Link to={'Cotisation'}><h3 class="text-white border-b-2 border-blue-400 hover:border-white">Cotisation</h3></Link>
      <Link to={'Election'}> <h3 class="text-white border-b-2 border-blue-400 hover:border-white">Election</h3></Link>
      <Link to={'Service'}> <h3 class="text-white border-b-2 border-blue-400 hover:border-white">Service</h3></Link>
         <button type="submit" class="bg-white h-8 px-3 rounded-lg border-white border-6 text-blue-400">Connexion</button>
         <button type="submit" class="bg-white h-8 px-3 rounded-lg border-white border-6 text-blue-400">S'inscrire</button>
         </div>  </nav></div>
           );
         }
         
         
 
    
 export default Navbar;
 