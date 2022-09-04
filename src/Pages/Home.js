import "../App.css";
import Navbar from '../components/Navbar';
import user from '../images/user.jpg';
import vote from '../images/vote.jpg';
import feuille from '../images/feuille.jpg';
import service from '../images/service.png';
import activite from '../images/activite.jpg';
import settings from '../images/settings.jpg';
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import wife from '../images/wife.jpg';
import Parametre from "./Parametre";
function Home(){
    return(
        <div className="Home">
<Navbar />
<div class="flex relative">
<div class="w-full object-cover h-72 bg-blue-400 relative"><img src={wife} alt="" class="h-72 w-72 opacity-36 absolute py-4 right-72"/></div>
<h3 class="absolute text-white text-5xl py-2 ml-12">GESCARD</h3>
<p class="absolute  p-4 justify-between text-gray-200 text-2xl py-16">Une  gestion innovante</p><br></br>
<p class="absolute p-4 justify-between text-gray-200 text-2xl py-28  ">et automatique de vos associations.</p>
<div class="py-48 absolute"><button type="submit" class=" bg-white rounded-xl text-blue-400 h-12 px-3 font-bold  ml-12 border-6 border-white">GET STARTED</button>
</div></div>
<br></br><br></br>
   
  <div class="flex space-y-4">
  <div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[365px]">
<img src={user} alt="" class="ml-28 h-36 w-36"/>
<h3 class="font-bold text-center text-2xl">UTILISATEUR</h3>
<p class="p-4 text-left ">un menbre est identifié et authentifié auprès du système.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>

  <div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[350px]">
<img src={vote} alt="" class="ml-28 h-36 w-36"/>
<h3 class="font-bold text-center text-2xl">ELECTION</h3>
<p class="p-4 text-left "> Une nouvelle experience de voting via Smarphones.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>

<div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[350px]">
<img src={feuille} alt="" class="ml-36 h-36 w-36 rounded-full"/>
<h3 class="font-bold text-center text-2xl">COTISATION</h3>
<p class="p-4 text-left ">correspond à un montant versé périodiquement par les membres.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>

    </div> 
    <div class="flex space-y-4">
  <div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[365px]">
<img src={service} alt="" class="ml-28 py-4 h-36 w-36"/>
<h3 class="font-bold ml-28 text-2xl">SERVICE</h3>
<p class="p-4 text-left ">Le systeme offre une panoplie de service pour l'association.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>

  <div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[350px] sm:max-w-[348px]">
<img src={activite} alt="" class="ml-28 h-36 w-36"/>
<h3 class="font-bold text-center text-2xl">ACTIVITE</h3>
<p class="p-4 text-left "> Les activites sont programmes de manniere reguliere et supervise.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>

<div class=" py-54 ml-12 shadow-lg shadow-gray-600 rounded-lg h-[350px] sm:max-w-[725px]">
<img src={settings} alt="" class="ml-36 h-36 w-36 rounded-full"/>
<h3 class="font-bold text-center text-2xl">PARAMETRE</h3>
<p class="p-4 text-left ">Gerer le compte Administrateur,une meilleure securite du systeme.</p>
<p class="text-blue-500 text-center py-4">En savoir plus+</p>
</div>
</div><br></br>
<Contact class="right-12"/><br></br>
<Footer/>
</div>
    );
}
export default Home;