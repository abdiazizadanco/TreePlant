import { useNavigate } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import SignUp from "./SignUp";
import forest from "../../assets/images/forest.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import dd from "../../assets/images/deciduous.jpg"
import planting from "../../assets/images/planting-vector.avif"


const PlantActivity = () => {
    const navigate = useNavigate ()

    const toggle2 = () => {
        document.querySelector('.step-2').classList.toggle('active')
    }

    return ( 
        <div className="planting">
            <MobileHeader navigate = {navigate} toggle2 = {toggle2} />
            <div className="mobile">
                
                <div className="step-2">
                    <img src={forest} alt="forest" className="forest"/>
                    <img src={dd} alt="dd-tree" className="dd-tree" />

                    <h2>Plant deciduous tree</h2>
                    <p>In botany and horticulture, deciduous plants, including trees are those that lose all their leaves for part of the year.</p>
                    <button>Continue <FontAwesomeIcon icon={faArrowRightLong} className="btn-icon"/></button>
                </div>
            </div>
            

            <div className="desktop">
                <img src={planting} alt="" />
            </div>
            <SignUp toggle2 = {toggle2} />
            
        </div>
     );
}
 
export default PlantActivity;