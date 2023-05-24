import './assets/style/scss/style.scss'
import {useEffect, useState} from "react";
import MarketData from "./components/MarketData.tsx";
import Ping from "./components/Ping.tsx";
import * as GeckoAPI from "./services/coinGeckoAPI.ts";

function App() {
    const [pingStatus, setPingStatus] = useState<PingStatus | null>(null)
    const [marketData, setMarketData] = useState<MarketData[] | null>(null)

    const onPing = async () => {
            const res = await GeckoAPI.ping()
            setPingStatus(res.data)
    }

    const onMarketData = async () => {
        const res = await GeckoAPI.getMarketData()
        setMarketData(res.data)
    }

    useEffect(() => {
        onPing()
        onMarketData()
    }, [])

    return (
        <div>
            <h1>Crypto Currencies</h1>
            {marketData && <MarketData data={marketData}/>}

            {pingStatus && <Ping data={pingStatus}/>}
        </div>
    )
}

export default App