import { useEffect, useState } from "react";
import "./MainContent.scss";
import { AdsBig, AdsLarge } from "@/images";
import axios from "axios";
import useGet from "@/hooks/useGet";

function MainContent({ page }) {
    const [CenterAd, setCenterAd] = useState("");
    const [LeftAd, setLeftAd] = useState("");
    const [RightAd, setRightAd] = useState("");
    const [valLeft, setvalLeft] = useState("");
    const [valRight, setvalRight] = useState("");
    const [banners, setBanners] = useState({
        CenterAd: "",
        LeftAd: "",
        RightAd: "",
        valLeft: ""
    });
    const [Currency, setCurrency] = useState([]);
    const [historical, setHistorical] = useState([]);
    const [Label, setLabel] = useState([]);
    const [ExchangeRates, setExchangeRates] = useState([]);


    // const {data} = useGet('https://www.nosyapi.com/apiv2/service/economy/live-exchange-rates?apiKey=LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF');

    const {data: taha123, loader, error} = useGet('https://www.nosyapi.com/apiv2/service/economy/live-exchange-rates?apiKey=LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF');

    console.log("Saad Bhai", taha123);



    useEffect(() => {
        axios
            .get("/get-images")
            .then((res) => {
                console.log(res.data);
                // setCenterAd();
                // setLeftAd(res.data.home_left);
                // setRightAd(res.data.home_right);
                setBanners({
                    CenterAd: res.data.home_center,
                    LeftAd: res.data.home_left,
                    RightAd: res.data.home_right
                });
            })
            .catch((err) => {
                console.log(err);
            });

        const Cur_Response = async () => {
            try {
                const response = await axios.get(
                    "https://www.nosyapi.com/apiv2/service/economy/live-exchange-rates",
                    {
                        params: {
                            apiKey: "LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF",
                        },
                    }
                );
                setCurrency(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const Historical_ = async () => {
            try {
                const response = await axios.get(
                    "https://www.nosyapi.com/apiv2/service/economy/historical-data/exchange-rates",
                    {
                        params: {
                            target: "USD",
                            source: "TRY",
                            startDate: "2024-01-19",
                            endDate: "2024-07-01",
                            apiKey: "LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF",
                        },
                    }
                );
                console.log("taha", response?.data?.data?.histories);
                // console.log(response.data.data.histories);
                setHistorical(response.data.data.histories);
            } catch (error) {
                console.log(error);
            }
        };
        Historical_();
        const timer = setTimeout(() => {
            Cur_Response();
        }, 15000);
        return () => clearTimeout(timer);
    }, [Currency]);

    const taha = Object.entries(historical)?.map(([key, value])=>{
        return value?.date 
    });

    const showChangeRight = () => {
        var valueRight = document.getElementById("val-right").value;
        setvalRight(valueRight);
    };

    const showChange = () => {
        var valueLeft = document.getElementById("val-left").value;
        setvalLeft(valueLeft);
    };

    const default_list = (
        <>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
            <li>
                <div class="est-left">
                    <span class="country">USDTRY</span>
                    <span class="currency">TRY</span>
                </div>
                <div class="est-right">
                    <span class="rate-disabled">00.00</span>
                    <span class="rate-current">00.00</span>
                    <span class="rate-percentage rate-green">%-0.00</span>
                </div>
            </li>
        </>
    );

    const showCurrency = Currency?.data?.slice(0, 6)?.map((item, index) => {
        let random = Math.floor(Math.random() * 10);
        console.log(random);
        return (
            <>
                <li key={index}>
                    <div className="est-left">
                        <span className="country">{item?.currencyCode}</span>
                        <span className="currency">
                            {item?.targetCurrencyCode}
                        </span>
                    </div>
                    <div className="est-right">
                        <span className="rate-disabled">{item?.dayHigh}</span>
                        <span className="rate-current">{item?.dayLow}</span>
                        <span
                            className={`rate-percentage ${
                                random <= 5 ? "rate-green" : "rate-red"
                            }`}
                        >
                            %{item?.changeRate}
                        </span>
                    </div>
                </li>
            </>
        );
    });
    if(loader) return <h1>tahahaaa</h1>

    return (
        <>
            <div className="container addsTable-main-wrapper">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                    <img src={banners?.LeftAd ?? "https://dummyimage.com/216x500/000/f0b90b"} alt="" className="ad-side" />
                    </div>
                    <div className="col-lg-8 col-md-8 middle-col">
                    <img src={banners?.CenterAd ?? "https://dummyimage.com/936x240/000/f0b90b"} alt="" />
                        {page == "home_main" ? (
                            <>
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
                                            <td data-label="Acilis">
                                                2459, 265 TL
                                            </td>
                                            <td data-label="Alis">
                                                2459, 265 TL
                                            </td>
                                            <td data-label="Satris">
                                                2459, 265 TL
                                            </td>
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
                                                        onChange={
                                                            showChangeRight
                                                        }
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
                                        <h3 className="black-bg-head mb-4">
                                            DOVIZ
                                        </h3>

                                        <div className="country-est-list">
                                            <ul>
                                                {Currency?.length == 0
                                                    ? default_list
                                                    : showCurrency}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>Chart</>
                        )}
                    </div>
                    <div className="col-lg-2 col-md-4">
                        {banners?.RightAd != null ? (
                            <img src={banners?.RightAd} alt="" className="ad-side" />
                        ) : (
                            <img
                                src="https://dummyimage.com/216x500/000/f0b90b"
                                alt="left-img"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;
