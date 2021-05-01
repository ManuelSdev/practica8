
import { getAds } from '../../../api/ads'
import './AdsPage.css'
import { data } from '../../../data'
import AdsGrid from './AdsGrid'
import Layout from '../../layout/Header'
const AdsPage = () => {
    //const ads = getAds();

    const foto = data[1].photo;
    //console.log(foto)
    const ads = data;
    //console.log(ads)
    return (
        <div className="AdsPage">
            <Layout></Layout>
            <AdsGrid ads={ads} />
        </div>

    )

}

export default AdsPage