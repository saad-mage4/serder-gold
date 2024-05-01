import { ForeksNews } from './News.config'
import './NewsSection.scss'

function NewsSection() {
    return (
        <>
            <div className="container new-container-main">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 className="news-head">ALTIN FIYATLARI HABERLERI</h2>
                    </div>
                    {ForeksNews.map((item, index) => (
                        <div className="col-md-6 col-lg-3 col-sm-12 mb-5" key={index}>
                            <div className="news-inner-wrap">
                                <img src={item.icon} alt={item.title} />
                                <div>
                                    <h2 className="news-title">{item.title}</h2>
                                    <a href={item.link} target='_blank' className='post-link'>Gundem</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12 col-sm-12 col-md-12  d-flex justify-content-center mt-4">
                        <a href="#" className="more-news">TUM HABERLER</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSection