
import { getAds } from '../../../api/ads'
import './AdsPage.css'
import { data } from '../../../data'
import AdsList from './AdsList'
const AdsPage = () => {
    //const ads = getAds();

    const foto = data[1].photo;
    //console.log(foto)
    const ads = data;
    //console.log(ads)
    return (
        <AdsList ads={ads} />
    )

}

export default AdsPage