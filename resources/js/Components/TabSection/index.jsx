import "./TabsSection.scss";
import { arrow_green, arrow_red } from "@/images";
import { useEffect } from "react";
import { tabs_data, tabs_data_2 } from "./TabSection.config";
import axios from "axios";
const TabsSection = () => {
    useEffect(() => {
        // var myHeaders = new Headers();
        // myHeaders.append("x-access-token", "goldapi-126tslvgu39sh-io");
        // myHeaders.append("Content-Type", "application/json");
        // var requestOptions = {
        //   method: "GET",
        //   headers: myHeaders,
        //   redirect: "follow",
        // };
        // fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
        //   .then((response) => response.text())
        //   .then((result) => )
        //   .catch((error) => console.log("error", error));
        axios
            .get("https://dummyjson.com/users", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        const links = document.querySelectorAll(".tabs-links a");
        const tabs = document.querySelectorAll(".stock-tabs .col-12");

        links.forEach((link, index) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();

                const id = this.getAttribute("data-id");

                tabs.forEach((tab, tabIndex) => {
                    if (tabIndex === index) {
                        tab.classList.remove("d-none");
                    } else {
                        tab.classList.add("d-none");
                    }
                });

                links.forEach((link) => {
                    link.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    }, []);
    // const getval = (e) => {
    //     const index = e.target.getAttribute("data-id");
    //     const tabs_ = document.querySelector(
    //         `.stock-tabs .col-12:nth-child(${index})`
    //     );
    //     tabs_.classList.remove('d-none');
    //     console.log(tabs_);
    // };
    const show_itmes = tabs_data.map((value, index) => {
        return (
            <div
                key={index}
                className="item d-flex align-items-center justify-content-center"
            >
                <div className="content d-flex flex-column gap-2">
                    <span className="title">{value.title}</span>
                    <span className="value">{value.rates}</span>
                    <div
                        className={`ratio__ ${
                            value.status == "up" ? "green" : "red"
                        } d-flex align-items-center gap-2`}
                    >
                        <img
                            src={value.status == "up" ? arrow_green : arrow_red}
                            alt={"arrow-" + value.status}
                        />
                        <span className="percent__">{value.percent}</span>
                        <span className="number__">{value.number}</span>
                    </div>
                </div>
            </div>
        );
    });

    const show_itmes_2 = tabs_data_2.map((value, index) => {
        return (
            <div
                key={index}
                className="item d-flex align-items-center justify-content-center"
            >
                <div className="content d-flex flex-column gap-2">
                    <span className="title">{value.title}</span>
                    <span className="value">{value.rates}</span>
                    <div
                        className={`ratio__ ${
                            value.status == "up" ? "green" : "red"
                        } d-flex align-items-center gap-2`}
                    >
                        <img
                            src={value.status == "up" ? arrow_green : arrow_red}
                            alt={"arrow-" + value.status}
                        />
                        <span className="percent__">{value.percent}</span>
                        <span className="number__">{value.number}</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="tabs-wrapper bg-custom-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs-links d-flex gap-5 pb-2">
                                <a data-id="1" href="#!" className="active">
                                    Ana sayfa
                                </a>
                                <a data-id="2" href="#!">
                                    Altin fiyatlari
                                </a>
                                <a data-id="3" href="#!">
                                    Altin cevirici
                                </a>
                                <a data-id="4" href="#!">
                                    Haberler
                                </a>
                                <a data-id="5" href="#!">
                                    Doviz
                                </a>
                                <a data-id="6" href="#!">
                                    Uzman yorumlari
                                </a>
                                <a data-id="7" href="#!">
                                    Community
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 stock-tabs">
                        <div className="col-12">
                            <div className="tabs-content d-grid gap-5">
                                {/* items start */}
                                {show_itmes}
                                {/* items end */}
                            </div>
                        </div>
                        <div className="col-12 d-none">
                            <div className="tabs-content d-grid gap-5">
                                {/* items start */}
                                {show_itmes_2}
                                {/* items end */}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="left-info d-flex align-items-center gap-5">
                                <h5 className="info-title">SON HABERLER</h5>
                                <p>JPMorgan gelirlerini yüzde 9 artirdi</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right-info">
                            <a href="#!" className="all-news">
                                Tüm Haberler
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsSection;
