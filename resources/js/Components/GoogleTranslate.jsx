// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//     useEffect(() => {
//         const addTranslateScript = () => {
//             const script = document.createElement('script');
//             script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//             script.async = true;
//             document.body.appendChild(script);
//         };

//         addTranslateScript();

//         return () => {
//             const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
//             if (script) {
//                 document.body.removeChild(script);
//             }
//         };
//     }, []);




//     return (
//         <div id="google_translate_element"></div>
//     );
// };

// export default GoogleTranslate;


import React, { useEffect } from 'react';

const TranslateWidget = () => {
    // useEffect(() => {
    //     const googleTranslateScript = document.createElement('script');
    //     googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    //     googleTranslateScript.async = true;
    //     document.body.appendChild(googleTranslateScript);

    //     window.googleTranslateElementInit = () => {
    //         new window.google.translate.TranslateElement(
    //             {
    //                 pageLanguage: 'tr',
    //                 includedLanguages: 'tr,en',
    //                 autoDisplay: false
    //             },
    //             'google_translate_element'
    //         );
    //     };
    //     // Cleanup function
    //     return () => {
    //         document.body.removeChild(googleTranslateScript);
    //         delete window.googleTranslateElementInit;
    //     };
    // }, []);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'tr',
                includedLanguages: 'tr,en',
                autoDisplay: false
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        // Cleanup function
        return () => {
            document.body.removeChild(addScript);
            delete window.googleTranslateElementInit;
        };
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default TranslateWidget;







