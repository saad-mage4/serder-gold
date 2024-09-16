import { client, slot } from "@/utils/googleAds";
import React, { useEffect } from "react";

const ManualAd = ({ isAdBlocked, isAdConfigValid }) => {
    useEffect(() => {
        if (!isAdBlocked && isAdConfigValid) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default ManualAd;
