//Este módulo centraliza las llamadas a los anuncios

import client from './client'
const advertsPath = '/api/v1/adverts';
//Esta ruta es de nodepop-api
const adsBaseUrl = '/api';

export const getAds = () => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.get(url);
};

export const getTags = () => {
    const url = `${adsBaseUrl}/v1/adverts/tags`;
    //console.log(client.get(url))
    return client.get(url);
};

export const createAd = adDetails => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.post(url, adDetails);
};

