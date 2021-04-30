
import { getAds } from '../../../api/ads'
import './AdsPage.css'
import { data } from '../../../data'
import AdsGrid from './AdsGrid'
const AdsPage = () => {
    //const ads = getAds();

    const foto = data[1].photo;
    //console.log(foto)
    const ads = data;
    //console.log(ads)
    return (
        <AdsGrid ads={ads} />
    )

}

export default AdsPage