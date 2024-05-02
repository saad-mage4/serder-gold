import { useEffect, useState } from "react";
import "./Footer.scss";
import { LogoWhite, Sabah, Obilet, Spotify, appStore } from "@/images";
import axios from "axios";

function Footer() {
    const [footerLogo, setFooterLogo] = useState("");
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/get-images")
            .then((res) => {
                console.log(res.data);
                setFooterLogo(res.data.logo_footer);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <div className="container-fluid footer-main-wrapper">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-12 foot-logo mb-5">
                            {footerLogo != null ? (
                                <img src={footerLogo} alt="footer-logo" />
                            ) : (
                                <img
                                    src="https://dummyimage.com/192x44/fff/000"
                                    alt="footer-logo"
                                />
                            )}

                            <div className="foot-icons-wrap">
                                <a href="">
                                    <i className="fa-brands fa-discord"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-discord"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-discord"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a href="">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">Hakkimizda</h2>
                            <ul className="foot-links">
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                                <li>
                                    <a href="">Announcements</a>
                                </li>
                                <li>
                                    <a href="">News</a>
                                </li>
                                <li>
                                    <a href="">Press</a>
                                </li>
                                <li>
                                    <a href="">Legal</a>
                                </li>
                                <li>
                                    <a href="">Terms</a>
                                </li>
                                <li>
                                    <a href="">Privacy</a>
                                </li>
                                <li>
                                    <a href="">Building Trust</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Community</a>
                                </li>
                                <li>
                                    <a href="">Sitemap</a>
                                </li>
                                <li>
                                    <a href="">Risk Warning</a>
                                </li>
                                <li>
                                    <a href="">Notices</a>
                                </li>
                                <li>
                                    <a href="">Downloads</a>
                                </li>
                                <li>
                                    <a href="">Desktop Application</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">Sayfalar</h2>
                            <ul className="foot-links">
                                <li>
                                    <a href="">Altin fiyatlari</a>
                                </li>
                                <li>
                                    <a href="">Haberler</a>
                                </li>
                                <li>
                                    <a href="">Haberler</a>
                                </li>
                                <li>
                                    <a href="">Doviz</a>
                                </li>
                                <li>
                                    <a href="">Kripto</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">Bilgi</h2>
                            <ul className="foot-links">
                                <li>
                                    <a href="">Hesaplama</a>
                                </li>
                                <li>
                                    <a href="">Altin tahminleri</a>
                                </li>
                                <li>
                                    <a href="">Çeyrek altin fiyati</a>
                                </li>
                                <li>
                                    <a href="">Gram altin ne kadar?</a>
                                </li>
                                <li>
                                    <a href="">Dolar ne kadar?</a>
                                </li>
                                <li>
                                    <a href="">Mazot, benzin fiyati</a>
                                </li>
                                <li>
                                    <a href="">Euro kaç lira?</a>
                                </li>
                                <li>
                                    <a href="">En çok kazandiran hisseler</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">Bilgi</h2>
                            <ul className="foot-links">
                                <li>
                                    <a href="">Hesaplama</a>
                                </li>
                                <li>
                                    <a href="">Altin tahminleri</a>
                                </li>
                                <li>
                                    <a href="">Çeyrek altin fiyati</a>
                                </li>
                                <li>
                                    <a href="">Gram altin ne kadar?</a>
                                </li>
                                <li>
                                    <a href="">Dolar ne kadar?</a>
                                </li>
                                <li>
                                    <a href="">Mazot, benzin fiyati</a>
                                </li>
                                <li>
                                    <a href="">Euro kaç lira?</a>
                                </li>
                                <li>
                                    <a href="">En çok kazandiran hisseler</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-form-section">
                        <div className="col-lg-7 col-md-6 col-sm-12 mb-4 mb-md-0 mb-lg-0">
                            <h3 className="footer-app-head">
                                Diğer projelerimiz
                            </h3>
                            <div className="footer-apps">
                                <img src={Sabah} alt="" />
                                <img src={Obilet} alt="" />
                                <img src={Spotify} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 foot-form d-flex justify-content-end ">
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Email/Phone number"
                                />
                                <button
                                    className="btn btn-warning bg-warning"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </form>
                            <div className="form-footer">
                                <i className="fa-solid fa-gift"></i>
                                <p className="form-footer-para">
                                    Sign up now and get upto 100USDT in rewards.
                                </p>
                            </div>
                        </div>
                        <hr className="footer-hr" />
                    </div>
                    <div className="row footer-apps-wrap d-flex align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={appStore} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p className="footer-copyright">
                                Copyright © 2024 Her Hakki Saklidir. Noktacom
                                Medya İnternet Hiz. San. ve Tic. A.Ş.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
