import React from 'react';
import { getAds } from '../../../api/ads'
import './AdsPage.css'
import { data } from '../../../data'
import AdsGrid from './AdsGrid'
import Layout from '../../layout/Layout'
const AdsPage = () => {
    const [ads, setAds] = React.useState([]);

    React.useEffect(() => {
        getAds().then(setAds);
    }, []);




    //const foto = data[1].photo;
    //console.log(foto)
    //const ads = data;
    //console.log(ads)
    return (
        <div className="AdsPage">
            <Layout>
                <AdsGrid ads={ads} />
            </Layout>

        </div>

    )

}

export default AdsPage