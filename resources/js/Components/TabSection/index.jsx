import "./TabsSection.scss";
import { arrow_green, arrow_red } from "@/images";
import { useEffect } from "react";
import tabs_data from "./TabSection.config";
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
  }, []);
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

  return (
    <>
      <div className="tabs-wrapper bg-custom-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-links d-flex gap-5 pb-2">
                <a href="#!" className="active">
                  Ana sayfa
                </a>
                <a href="#!">Altin fiyatlari</a>
                <a href="#!">Altin cevirici</a>
                <a href="#!">Haberler</a>
                <a href="#!">Doviz</a>
                <a href="#!">Uzman yorumlari</a>
                <a href="#!">Community</a>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="tabs-content d-grid gap-5">
                {/* items start */}
                {show_itmes}
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