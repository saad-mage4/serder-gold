import { useState } from "react";
import "./MainContent.scss";
import Chart from "../Chart";
import { useApiQuery } from "@/hooks/useApi";
import CurrencyList from "../CurrencyList";
import Image from "../UI/Image";
import HomeContent from "../HomeContent";


const MainContent = ({ page }) => {
    // const [banners, setBanners] = useState({
    //     CenterAd: "",
    //     LeftAd: "",
    //     RightAd: "",
    //     valLeft: "",
    // });
    const { data: images, isLoading: imagesLoader } = useApiQuery('images', "/get-images");

    // if (loader) return <Loader />;

    return (
        <>
            <div className="container addsTable-main-wrapper">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        {imagesLoader ? "Loading ..." :
                            <Image value={images?.home_left} className="ad-side" />
                        }
                    </div>
                    <div className="col-lg-8 col-md-8 middle-col">
                        {imagesLoader ? "Loading ..." :
                            <Image value={images?.home_center} />
                        }
                        {page == "home_main" ? (
                            <HomeContent />
                        ) : (
                            <Chart />
                        )}
                    </div>
                    <div className="col-lg-2 col-md-4">
                        {imagesLoader ? "Loading ..." :
                            <Image value={images?.home_right} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;
