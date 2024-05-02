import { useEffect, useState } from "react";
import "./MainContent.scss";
import { AdsBig, AdsLarge } from "@/images";
import axios from "axios";

function MainContent() {
    const [CenterAd, setCenterAd] = useState("");
    const [LeftAd, setLeftAd] = useState("");
    const [RightAd, setRightAd] = useState("");
    const [valLeft, setvalLeft] = useState("");
    const [valRight, setvalRight] = useState("");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/get-images")
            .then((res) => {
                console.log(res.data);
                setCenterAd(res.data.home_center);
                setLeftAd(res.data.home_left);
                setRightAd(res.data.home_right);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const showChangeRight = () => {
        var valueRight = document.getElementById("val-right").value;
        setvalRight(valueRight);
    };

    const showChange = () => {
        var valueLeft = document.getElementById("val-left").value;
        setvalLeft(valueLeft);
    };

    return (
        <>
            <div className="container addsTable-main-wrapper">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <img src={LeftAd} alt="" className="ad-side" />
                    </div>
                    <div className="col-lg-8 col-md-8 middle-col">
                        <img src={CenterAd} alt="" />

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Brim</th>
                                    <th scope="col">Acilis</th>
                                    <th scope="col">Alis</th>
                                    <th scope="col">Satris</th>
                                    <th scope="col">Degisim</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-danger-bg">
                                    <th scope="row">
                                        <i className="fa-solid fa-arrow-down-long"></i>
                                    </th>
                                    <td
                                        data-label="Brim"
                                        className="content-tab"
                                    >
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Gram Altin</h4>
                                            <p>Gram Altin</p>
                                        </span>
                                    </td>
                                    <td data-label="Acilis">2459, 265 TL</td>
                                    <td data-label="Alis">2459, 265 TL</td>
                                    <td data-label="Satris">2459, 265 TL</td>
                                    <td data-label="Degisim">%0,9</td>
                                </tr>
                                <tr className="table-danger-bg">
                                    <th scope="row">
                                        <i className="fa-solid fa-arrow-down-long"></i>
                                    </th>
                                    <td className="content-tab">
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Gram Altin</h4>
                                            <p>Gram Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i className="fa-solid fa-minus"></i>
                                    </th>
                                    <td className="content-tab">
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Yarim Altin</h4>
                                            <p>Yarim Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i className="fa-solid fa-minus"></i>
                                    </th>
                                    <td className="content-tab">
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Tam Altin</h4>
                                            <p>Tam Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr className="table-success-bg">
                                    <th scope="row">
                                        <i className="fa-solid fa-arrow-up-long"></i>
                                    </th>
                                    <td className="content-tab">
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Gremese Altin</h4>
                                            <p>Gremese Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i className="fa-solid fa-arrow-down-long"></i>
                                    </th>
                                    <td className="content-tab">
                                        <span className="coin-bg"></span>
                                        <span>
                                            <h4>Onis Altin</h4>
                                            <p>Onis Altin</p>
                                        </span>
                                    </td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>2459, 265 TL</td>
                                    <td>%0,9</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="row mt-4">
                            <div className="col-lg-7 col-sm-6 col-sm-12 black-box-col">
                                <div className="black-inn-wrap">
                                    <h3 className="black-bg-head">
                                        Altin Fiyati Hesaplama
                                    </h3>
                                    <hr className="blag-bg-hr" />
                                    <div className="select-dd-wrap">
                                        <div className="drop-down">
                                            <span
                                                className="selected-val"
                                                id="selected-val-left"
                                            >
                                                {valLeft}
                                            </span>
                                            <select
                                                name=""
                                                id="val-left"
                                                onChange={showChange}
                                            >
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram">
                                                    Gram
                                                </option>
                                                <option value="lsdjf">
                                                    lsdjf
                                                </option>
                                                <option value="lskdjfiowe">
                                                    lskdjfiowe
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                            </select>
                                        </div>
                                        <div className="drop-down">
                                            <span
                                                className="selected-val"
                                                id="selected-val-right"
                                            >
                                                {valRight}
                                            </span>
                                            <select
                                                name=""
                                                id="val-right"
                                                onChange={showChangeRight}
                                            >
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Turk Lirasi">
                                                    Turk Lirasi
                                                </option>
                                                <option value="Altin">
                                                    Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                                <option value="Gram Altin">
                                                    Gram Altin
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-md-6 my-5 my-md-0 my-lg-0">
                                <h3 className="black-bg-head mb-4">DOVIZ</h3>

                                <div className="country-est-list">
                                    <ul>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    32.3312
                                                </span>
                                                <span className="rate-current">
                                                    32.3769
                                                </span>
                                                <span className="rate-percentage rate-red">
                                                    %0.22
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    34.4441
                                                </span>
                                                <span className="rate-current">
                                                    34.5040
                                                </span>
                                                <span className="rate-percentage rate-green">
                                                    %-0.62
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    40.3762
                                                </span>
                                                <span className="rate-current rate-green">
                                                    40.5786
                                                </span>
                                                <span className="rate-percentage rate-green">
                                                    %-0.76
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    23.5420
                                                </span>
                                                <span className="rate-current rate-green">
                                                    23.6600
                                                </span>
                                                <span className="rate-percentage rate-green">
                                                    %0.24
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    35.4354
                                                </span>
                                                <span className="rate-current">
                                                    35.4971
                                                </span>
                                                <span className="rate-percentage  rate-green">
                                                    %-0.85
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="est-left">
                                                <span className="country">
                                                    USD
                                                </span>
                                                <span className="currency">
                                                    DOLAR
                                                </span>
                                            </div>
                                            <div className="est-right">
                                                <span className="rate-disabled">
                                                    0.3461
                                                </span>
                                                <span className="rate-current">
                                                    0.3462
                                                </span>
                                                <span className="rate-percentage rate-red">
                                                    %-0.20
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <img src={RightAd} alt="" className="ad-side" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;
