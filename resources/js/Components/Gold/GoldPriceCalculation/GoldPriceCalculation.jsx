import CurrencyList from '@/Components/CurrencyList';
import { useApiQuery } from '@/hooks/useApi';
import React, { useEffect, useState } from 'react'

const GoldPriceCalculation = ({ ExchangeRates }) => {
    const [goldValue, setGoldValue] = useState('');
    const [currencyValue, setCurrencyValue] = useState('');
    const [selectedGold, setSelectedGold] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const { data: currency_list } = useApiQuery(
        'currency-list',
        'https://www.nosyapi.com/apiv2/service/economy/currency/list',
        {
            apiKey: import.meta.env.VITE_NOSY_TOKEN,
        }
    );

    const fetchCurrencyRate = async (currencyCode) => {
        try {
            const response = await fetch(`https://www.nosyapi.com/apiv2/service/economy/currency/exchange-rate?code=${currencyCode} `, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_NOSY_TOKEN}`
                }
            });
            const data = await response.json();

            console.log("New fetch data", data?.data);
            return data?.data?.[0]?.latest;
        } catch (error) {
            console.error("Failed to fetch currency rate:", error);
        }
    };

    const handleGoldChange = async (e) => {
        const value = e.target.value;
        setGoldValue(value);
        if (value && selectedGold && selectedCurrency) {
            const goldRate = ExchangeRates?.data.find(item => item.code === selectedGold)?.latest;
            console.log(goldRate);

            const currencyRate = await fetchCurrencyRate(selectedCurrency);

            if (goldRate && currencyRate) {
                const convertedCurrency = (value * goldRate) / currencyRate;
                setCurrencyValue(convertedCurrency);
            }
        }
    };

    const handleCurrencyChange = async (e) => {
        const value = e.target.value;
        setCurrencyValue(value);

        if (value && selectedGold && selectedCurrency) {
            const goldRate = ExchangeRates?.data.find(item => item.code === selectedGold)?.latest;
            const currencyRate = await fetchCurrencyRate(selectedCurrency);

            if (goldRate && currencyRate) {
                const convertedGold = (value * currencyRate) / goldRate;
                setGoldValue(convertedGold.toFixed(2));
            }
        }
    };

    const handleGoldSelect = (e) => {
        setSelectedGold(e.target.value);
        setGoldValue('');
        setCurrencyValue('');
    };

    const handleCurrencySelect = (e) => {
        setSelectedCurrency(e.target.value);
        setGoldValue('');
        setCurrencyValue('');
    };



    console.log(currencyValue);
    console.log(goldValue);

    return (
        <div className="mt-4 row">

            <div className="col-lg-7 col-sm-12 black-box-col">
                <div className="black-inn-wrap">
                    <h3 className="black-bg-head">
                        Altin Fiyati Hesaplama
                    </h3>
                    <hr className="blag-bg-hr" />
                    <div className="select-dd-wrap">
                        <div className="drop-down">
                            <input
                                className="selected-val"
                                type="number"
                                value={goldValue}
                                onChange={handleGoldChange}
                                placeholder="Enter gold value" />
                            <select
                                name="gold"
                                onChange={handleGoldSelect}
                                value={selectedGold}
                            >
                                <option value="" disabled>Select Gold Type</option>
                                {ExchangeRates?.data?.map((item, index) => {
                                    return (
                                        <option key={index} value={item?.code}>
                                            {item.FullName}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="drop-down">
                            <input
                                className="selected-val"
                                type="number"
                                value={currencyValue}
                                onChange={handleCurrencyChange}
                                placeholder="Enter currency value" />
                            <select
                                name="currency"
                                onChange={handleCurrencySelect}
                                value={selectedCurrency}
                            >
                                <option value="" disabled>Select Currency</option>
                                {currency_list?.data?.map((current, index) => {
                                    return (
                                        <option value={current?.code} key={index}>
                                            {current?.ShortName}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 col-lg-5 col-sm-12 col-md-6 my-md-0 my-lg-0">
                <h3 className="mb-4 black-bg-head">
                    DOVIZ
                </h3>

                <div className="country-est-list">
                    <ul>
                        <CurrencyList />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GoldPriceCalculation
