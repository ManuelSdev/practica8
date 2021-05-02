//Este módulo centraliza las llamadas a los anuncios

import client from './client'

//Esta ruta es de nodepop-api
const adsBaseUrl = '/api';

export const getAds = () => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.get(url);
};