import '../../../Style/Pages/Landing/Style.css';

import About from "../../Component/About/Index";



import FullSlide from "../../Component/FullSlide/Index";
import Navigation from '../../../Routes/Index';
import Services from "../../Component/Services/Index";






function Landing() {
  return (
    <div>




     <Navigation/>
      <div><FullSlide /></div>
      <div> <About /></div>
      <div className="lservices"><Services /></div>
      <div className="footer">  <Navigation /></div>


    </div>
  );
}

export default Landing;
