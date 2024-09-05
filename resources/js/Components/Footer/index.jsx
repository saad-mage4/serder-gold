import { LogoWhite, Sabah, Obilet, Spotify, appStore } from "@/images";
import { useApiQuery } from "@/hooks/useApi";
import Image from "../UI/Image";
import "./Footer.scss";

function Footer() {
    const { data: images } = useApiQuery("images", "/get-images");
    const { data: footer } = useApiQuery(
        "admin-get-footer",
        "/admin/get-footer"
    );
    const { data: social_links } = useApiQuery(
        "admin-get-social-link",
        "/admin/get-social-link"
    );

    const { data: footerlinks } = useApiQuery(
        "admin-get-footer-links",
        "/admin/get-footer-links"
    );

    const formatUrl = (url) => {
        if (!url) return "#"; // Return a placeholder URL if none is provided

        // Check if the URL starts with 'http' or 'https'
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return `http://${url}`; // Prepend 'http://' if missing
        }
        return url;
    };
    const baseUrl = import.meta.env.VITE_APP_URL;
    const getFullUrl = (url) => {
        // Check if the URL starts with 'http' or 'https'
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        }
        return `${baseUrl}${url}`;
    };

    return (
        <>
            <div className="container-fluid footer-main-wrapper">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-12 foot-logo mb-5">
                            <Image
                                value={`../${images?.logo_footer}`}
                                alt="footer-logo"
                                defaultSrc="https://dummyimage.com/192x44/fff/000"
                            />
                            <div className="foot-icons-wrap">
                                {social_links?.map((links) => {
                                    return (
                                        <a
                                            key={links?.id}
                                            href={formatUrl(links?.link)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                value={`../${links.icon}`}
                                                alt="Social Images"
                                                width={40}
                                                height={40}
                                            />
                                        </a>
                                    );
                                })}
                                <a href="#">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </a>
                                {/* <a href="">
                                    <i className="fa-brands fa-telegram"></i>
                                </a> */}
                                {/* <a href="">
                                    <i className="fa-brands fa-discord"></i>
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
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">
                                {footer?.first_column}
                            </h2>
                            <ul className="foot-links">
                                {footerlinks?.column1Links?.map((link) => {
                                    return (
                                        <li key={link?.id}>
                                            <a href={getFullUrl(link?.link)}>
                                                {link?.title}
                                            </a>
                                        </li>
                                    );
                                })}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">
                                {footer?.second_column}
                            </h2>
                            <ul className="foot-links">
                                {footerlinks?.column2Links?.map((link) => {
                                    return (
                                        <li key={link?.id}>
                                            <a href={getFullUrl(link?.link)}>
                                                {link?.title}
                                            </a>
                                        </li>
                                    );
                                })}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 foot-links-col">
                            <h2 className="foot-head">
                                {footer?.third_column}
                            </h2>
                            <ul className="foot-links">
                                {footerlinks?.column3Links?.map((link) => {
                                    return (
                                        <li key={link?.id}>
                                            <a href={getFullUrl(link?.link)}>
                                                {link?.title}
                                            </a>
                                        </li>
                                    );
                                })}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="col-lg-2 col-md-6 col-6 foot-links-col">
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
                        </div> */}
                    </div>
                    <div className="row footer-form-section">
                        <div className="col-lg-7 col-md-6 col-sm-12 mb-4 mb-md-0 mb-lg-0">
                            <h3 className="footer-app-head">
                                {footer?.image_title}
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
                                {footer?.copyright}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
