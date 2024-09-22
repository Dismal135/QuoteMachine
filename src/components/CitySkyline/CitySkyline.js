import './CitySkyline.css';
import DayCitySkyline from "./DayCitySkyline";
import NightCitySkyline from "./NightCitySkyline";

const CitySkyline = ({isDay}) => {
    console.log(isDay);
    return (
        <>
            <DayCitySkyline />
        </>
    )
}

export default CitySkyline;