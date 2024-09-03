import "./MainContent.scss";
import Chart from "../Chart";
import { useApiQuery } from "@/hooks/useApi";
import Image from "../UI/Image";
import HomeContent from "../HomeContent";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";

const MainContent = ({ children }) => {
    const { data: images, isLoading: imagesLoader } = useApiQuery(
        "images",
        "/get-images"
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            if (imagesLoader) {
                console.log("Loading images...");
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [imagesLoader]);
    return (
        <>
            <div className="container addsTable-main-wrapper">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        {imagesLoader ? (
                            <Skeleton
                                width={216}
                                height={500}
                                className="mb-2"
                            />
                        ) : (
                            <Image
                                value={images?.home_left}
                                className="ad-side"
                            />
                        )}
                    </div>
                    <div className="col-lg-8 col-md-8 middle-col">
                        {imagesLoader ? (
                            <Skeleton height={240} className="mb-2" />
                        ) : (
                            <Image value={images?.home_center} />
                        )}
                        {children}
                    </div>
                    <div className="col-lg-2 col-md-4">
                        {imagesLoader ? (
                            <Skeleton
                                width={216}
                                height={500}
                                className="mb-2"
                            />
                        ) : (
                            <Image value={images?.home_right} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
