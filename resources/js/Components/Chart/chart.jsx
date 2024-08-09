import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useGet from "@/hooks/useGet";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const { data: response, error } = useGet(
        "https://www.nosyapi.com/apiv2/service/economy/historical-data/currency-conversion?apiKey=LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF&date=2023-07-30&code=TRY"
    );

    let labels = [];
    let exchangeRates = [];

    let checkTheme_ = document
        .querySelector("body")
        .classList.contains("dark_theme");

    if (response?.data?.currencyConversion) {
        Object.entries(response?.data?.currencyConversion)?.map(
            ([key, item]) => {
                Object.entries(item)?.map(([key, value]) => {
                    labels.push(key);
                    exchangeRates.push(value?.reverseExchangeRate);
                });
            }
        );
    }

    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / exchangeRates.length;

    const previousY = (ctx) =>
        ctx.index === 0
            ? ctx.chart.scales.y.getPixelForValue(100)
            : ctx.chart
                  .getDatasetMeta(ctx.datasetIndex)
                  .data[ctx.index - 1].getProps(["y"], true).y;

    const data = {
        labels,
        datasets: [
            {
                label: "Exchange Rate",
                data: exchangeRates,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Rate: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: false,
                    text: "Date",
                },
                ticks: {
                    color: checkTheme_ ? "#fff" : "#000",
                },
            },
            y: {
                title: {
                    display: false,
                    text: "Exchange Rate",
                },
                ticks: {
                    color: checkTheme_ ? "#fff" : "#000",
                },
            },
        },
        animation: {
            x: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: NaN,
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.xStarted) {
                        return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * delayBetweenPoints;
                },
            },
            y: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.yStarted) {
                        return 0;
                    }
                    ctx.yStarted = true;
                    return ctx.index * delayBetweenPoints;
                },
            },
        },
    };

    return (
        <div className="chartjs-wrapper">
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;
