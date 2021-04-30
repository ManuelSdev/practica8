

const Ad = ({ ad }) => {
    //const ads = getAds();

    const foto = "casa.jpg";
    //console.log(ad)
    return (
        <div className="Ad">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={foto} alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">

                        <div className="media-content">
                            <p className="title is-4">{ad.price}</p>
                            <p className="title is-4">ad.name</p>
                        </div>
                    </div>

                    <div className="content">
                        {ad.tags}
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Ad