import "./goldPricesNews.scss";
import { side_banner } from "@/images";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
const GoldPricesNews = () => {
//   const [RightImg, SetRightImg] = useState("");
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/Banners")
//       .then((res) => {
//         SetRightImg(res.data.bottom_img);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  function displayTime() {
    var currentTime = new Date();
    var hrs = currentTime.getHours();
    var min =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

    document.querySelector(".hour").innerHTML = hrs;
    document.querySelector(".mints").innerHTML = min;
  }
  setInterval(displayTime, 1000);

  const getIndex = (event) => {
    const index = event.target.getAttribute("data-index");
    const tabs = document.querySelectorAll(".tabs .tab");
    tabs.forEach((tab) => tab.classList.remove("active"));

    event.target.classList.add("active");

    const contentDivs = document.querySelectorAll(".table-container .content");
    contentDivs.forEach((content) => content.classList.add("hide"));

    const contentToShow = document.querySelector(
      `.table-container .content:nth-child(${index})`
    );
    if (contentToShow) {
      contentToShow.classList.remove("hide");
    }
  };

  return (
    <>
      <div className="container mt-5 goldPricesNews">
        <div className="row">
          <div className="col-12 mb-3">
            <h4>ALTIN FIYATLARI HABERLERI</h4>
          </div>
          <div className="col-12 col-lg-8">
            <div className="calendar-wrapper">
              <div className="row mb-4">
                <div className="col-6">
                  <h3 className="title">Takvimler</h3>
                </div>
                <div className="col-6">
                  <div className="date-time">
                    <span>Saat:</span>
                    <div className="time">
                      <span className="hour"></span>:
                      <span className="mints"></span>
                    </div>
                    <span className="gmt">(GMT +3:00)</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="tabs">
                    <a
                      onClick={getIndex}
                      data-index="1"
                      className="tab active"
                      href="#!"
                    >
                      Ekonomik
                    </a>
                    <a
                      onClick={getIndex}
                      data-index="2"
                      className="tab"
                      href="#!"
                    >
                      Kazançlar
                    </a>
                  </div>
                </div>
                <div className="col-12 mt-3 table-container">
                  <div className="content">
                    <h5>Beklenen Önemli Ekonomik Olaylar</h5>
                    <div className="table-responsive">
                      <table className="table table-borderless table-responsive">
                        <thead>
                          <tr>
                            <th>Zaman</th>
                            <th>Döviz</th>
                            <th>Olay</th>
                            <th>Önem</th>
                            <th>Açıklanan</th>
                            <th className="tar">Beklenti</th>
                            <th className="tar">Önceki</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Zaman">10d</td>
                            <td data-label="Döviz">🇪🇺 EUR</td>
                            <td data-label="Olay">
                              AMB'den Lane Konuşma Yapacak
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,20%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,10%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">20s 40d</td>
                            <td data-label="Döviz">🇨🇭 CHF</td>
                            <td data-label="Olay">
                              Üretici Fiyat Endeksi (ÜFE)
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,51%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,20%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">10d</td>
                            <td data-label="Döviz">🇪🇺 EUR</td>
                            <td data-label="Olay">
                              AMB'den Lane Konuşma Yapacak
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,20%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,10%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">20s 40d</td>
                            <td data-label="Döviz">🇨🇭 CHF</td>
                            <td data-label="Olay">
                              Üretici Fiyat Endeksi (ÜFE)
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,51%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,20%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">10d</td>
                            <td data-label="Döviz">🇪🇺 EUR</td>
                            <td data-label="Olay">
                              AMB'den Lane Konuşma Yapacak
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,20%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,10%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">20s 40d</td>
                            <td data-label="Döviz">🇨🇭 CHF</td>
                            <td data-label="Olay">
                              Üretici Fiyat Endeksi (ÜFE)
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,51%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,20%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">10d</td>
                            <td data-label="Döviz">🇪🇺 EUR</td>
                            <td data-label="Olay">
                              AMB'den Lane Konuşma Yapacak
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,20%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,10%
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Zaman">20s 40d</td>
                            <td data-label="Döviz">🇨🇭 CHF</td>
                            <td data-label="Olay">
                              Üretici Fiyat Endeksi (ÜFE)
                            </td>
                            <td data-label="Önem">
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td data-label="Açıklanan">&nbsp;</td>
                            <td data-label="Beklenti" className="tar">
                              0,51%
                            </td>
                            <td data-label="Önceki" className="tar">
                              0,20%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="content hide">
                    <h5>2nd Tab Content will be here</h5>
                    <div className="table-responsive">
                      <table className="table table-borderless table-responsive">
                        <thead>
                          <tr>
                            <th>Zaman</th>
                            <th>Döviz</th>
                            <th>Olay</th>
                            <th>Önem</th>
                            <th>Açıklanan</th>
                            <th className="tar">Beklenti</th>
                            <th className="tar">Önceki</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>10d</td>
                            <td>🇪🇺 EUR</td>
                            <td>AMB'den Lane Konuşma Yapacak</td>
                            <td>
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td></td>
                            <td className="tar">0,20%</td>
                            <td className="tar">0,10%</td>
                          </tr>
                          <tr>
                            <td>20s 40d</td>
                            <td>🇨🇭 CHF</td>
                            <td>Üretici Fiyat Endeksi (ÜFE)</td>
                            <td>
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td></td>
                            <td className="tar">0,51%</td>
                            <td className="tar">0,20%</td>
                          </tr>
                          <tr>
                            <td>10d</td>
                            <td>🇪🇺 EUR</td>
                            <td>AMB'den Lane Konuşma Yapacak</td>
                            <td>
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td></td>
                            <td className="tar">0,20%</td>
                            <td className="tar">0,10%</td>
                          </tr>
                          <tr>
                            <td>20s 40d</td>
                            <td>🇨🇭 CHF</td>
                            <td>Üretici Fiyat Endeksi (ÜFE)</td>
                            <td>
                              <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star light"></i>
                              </div>
                            </td>
                            <td></td>
                            <td className="tar">0,51%</td>
                            <td className="tar">0,20%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-12 bottom-sec">
                  <a href="#!">Tüm Olayları Göster</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img src={side_banner} alt="side-banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldPricesNews;
