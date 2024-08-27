import React, { useCallback, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
const GoogleTranslate = () => {
    const googleTranslateRef = useRef(null);
    const [loading, setLoading] = useState(true);

    //! Initialize Google Translate Widget
    const initGoogleTranslate = useCallback(() => {
        if (
            window.google &&
            window.google.translate &&
            window.google.translate.TranslateElement
        ) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "tr",
                    includedLanguages: "en,tr",
                    layout: window.google.translate.TranslateElement
                        .InlineLayout.VERTICAL,
                },
                googleTranslateRef.current
            );
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const addScript = () => {
            const script = document.createElement("script");
            script.src =
                "//translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => setLoading(false);
        };

        //! Check if script already exists to prevent multiple script injections
        const existingScript = document.querySelector(
            `script[src="//translate.google.com/translate_a/element.js?cb=initGoogleTranslate"]`
        );
        if (!existingScript) {
            window.initGoogleTranslate = initGoogleTranslate;
            addScript();
        } else {
            initGoogleTranslate();
            setLoading(false);
        }

        //! Cleanup function
        return () => {
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
            delete window.initGoogleTranslate;
        };
    }, [initGoogleTranslate]);

    return (
        <>
            {loading ? (
                <Skeleton width={250} height={50} enableAnimation={true} />
            ) : (
                <div id="google-translate">
                    <div className="translate-flag">
                        <span>🇺🇸</span>
                        <span>🇹🇷</span>
                    </div>
                    <div
                        className="google-trans-select"
                        ref={googleTranslateRef}
                    ></div>
                </div>
            )}
        </>
    );
};

export default GoogleTranslate;
