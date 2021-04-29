import { data } from '../../../data'


const AdsList = ({ ads }) => {
    //const ads = getAds();

    const foto = ads[1].photo;
    console.log(ads)
    return (
        <div className="adsPage">HOLI <img alt="jola" src={foto}></img></div >
    )

}

export default AdsList