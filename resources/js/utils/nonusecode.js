// useEffect(() => {
//     axios
//         .get("/get-images")
//         .then((res) => {
//             setBanners({
//                 CenterAd: res.data.home_center,
//                 LeftAd: res.data.home_left,
//                 RightAd: res.data.home_right,
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });

//     if (images) {
//         setBanners({
//             CenterAd: images?.home_center,
//             LeftAd: images?.home_left,
//             RightAd: images?.home_right,
//         });
//     }

//     const Cur_Response = async () => {
//         try {
//             const response = await axios.get(
//                 "https://www.nosyapi.com/apiv2/service/economy/live-exchange-rates",
//                 {
//                     params: {
//                         apiKey: import.meta.env.VITE_NOSY_TOKEN,
//                     },
//                 }
//             );
//             setCurrency(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const Historical_ = async () => {
//         try {
//             const response = await axios.get(
//                 "https://www.nosyapi.com/apiv2/service/economy/historical-data/exchange-rates",
//                 {
//                     params: {
//                         target: "USD",
//                         source: "TRY",
//                         startDate: "2024-01-19",
//                         endDate: "2024-07-01",
//                         apiKey: import.meta.env.VITE_NOSY_TOKEN,
//                     },
//                 }
//             );
//             // console.log(response.data.data.histories);
//             setHistorical(response.data.data.histories);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     Historical_();
//     // const timerH = setTimeout(() => {
//     // }, 5000);
//     const timer = setTimeout(() => {
//         Cur_Response();
//     }, 15000);
//     return () => clearTimeout(timer);
// }, [Currency]);


// My code



// useEffect(() => {
//     if (images) {
//         setBanners({
//             CenterAd: images?.home_center,
//             LeftAd: images?.home_left,
//             RightAd: images?.home_right,
//         });
//     }
// }, [])
