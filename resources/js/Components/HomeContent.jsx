import { Chart } from '.'
import { GoldPriceCalculation, Table } from './Gold';
import { useApiQuery } from '@/hooks/useApi';

const HomeContent = () => {
    const { data: ExchangeRates } = useApiQuery(
        'currency-exchange-rate',
        "https://www.nosyapi.com/apiv2/service/economy/currency/exchange-rate",
        {
            type: "gold",
            apiKey: import.meta.env.VITE_NOSY_TOKEN,
        }
    );
    return (
        <>
            <div className="my-3">
                <Chart />
            </div>
            <GoldPriceCalculation ExchangeRates={ExchangeRates} />
            <Table ExchangeRates={ExchangeRates} />

        </>
    )
}

export default HomeContent
