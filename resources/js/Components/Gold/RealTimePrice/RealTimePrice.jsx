import React from 'react'
import {
    euro_flag,
    gold_coin_2,
    usd_dollar,
    gold_coin, arrow_3
} from "@/images";


const RealTimePrice = () => {
    return (
        <div className="col-12">
            <div className="gap-5 tabs-content second-tab d-grid">
                {/* items start */}
                {/* {show_itmes_2} */}
                {/* items end */}
                <div className="item">
                    <div className="text">
                        <h3>
                            Find the real time prices of gold
                            anytime .
                        </h3>
                        <p>
                            Monitor capitalization, price, daily
                            volume, and price changes of any
                            gold in real time!
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="grid-three d-grid">
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a className="gold-link" href="#!">
                                <span>Gram Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Ceyrek Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Yarim Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Tam Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Gram Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Ceyrek Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Yarim Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Tam Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Gram Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Ceyrek Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <div className="coin-img">
                                <img
                                    src={gold_coin}
                                    alt="gold-coin"
                                />
                            </div>
                            <a href="#!" className="gold-link">
                                <span>Yarim Altin</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 list">
                            <a href="#!">
                                Tum altinlar
                                <img src={arrow_3} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item prices">
                    <div className="price gold">
                        <div className="icon-text">
                            <div className="coin-img">
                                <img src={gold_coin_2} alt="" />
                            </div>
                            <span>Gold</span>
                        </div>
                        <div className="price_value">
                            <h5 className="mb-0">2.492,87</h5>
                        </div>
                        <div className="change-ratio green">
                            <span>11,27</span>
                        </div>
                    </div>
                    <div className="price euro">
                        <div className="icon-text">
                            <div className="coin-img">
                                <img src={euro_flag} alt="" />
                            </div>
                            <span>Euro</span>
                        </div>
                        <div className="price_value">
                            <h5 className="mb-0">2.492,87</h5>
                        </div>
                        <div className="change-ratio green">
                            <span>11,27</span>
                        </div>
                    </div>
                    <div className="price dollar">
                        <div className="icon-text">
                            <div className="coin-img">
                                <img src={usd_dollar} alt="" />
                            </div>
                            <span>Dollar</span>
                        </div>
                        <div className="price_value">
                            <h5 className="mb-0">2.492,87</h5>
                        </div>
                        <div className="change-ratio red">
                            <span>11,27</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealTimePrice
