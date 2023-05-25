import './assets/style/scss/style.scss'
import {useEffect, useState} from "react";
import MarketData from "./components/MarketData.tsx";
import Ping from "./components/Ping.tsx";
import * as GeckoAPI from "./services/coinGeckoAPI.ts";
import BitCoin from '../public/crypto.svg'
import Alert from "./components/Alert.tsx";

function App() {
    const [pingStatus, setPingStatus] = useState<PingStatus | null>(null)
    const [marketData, setMarketData] = useState<MarketData[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState('')

    const onPing = async () => {
        const res = await GeckoAPI.ping()
        setPingStatus(res.data)
    }

    const onMarketData = async () => {
        setLoading(true)
        try {
            const res = await GeckoAPI.getMarketData()
            setMarketData(res.data)
        } catch (err: any) {
            console.log(err)
            setAlert(`${err}`)
        }
        setLoading(false)
    }

    useEffect(() => {
        onPing()
        onMarketData()
        setAlert('')
    }, [])

    return (
        <div>
            <h1>Crypto Currencies</h1>
            {loading && <img src={BitCoin} alt="Loading..." width="50px" height="50px" className="loading"/>}
            {alert && <Alert data={alert}/>}
            {marketData && <MarketData data={marketData}/>}
            {pingStatus && <Ping data={pingStatus}/>}
            <footer>
                <div>
                    <a href="https://www.jonasnilsson.dev">© 2023 Jonas Nilsson</a>
                </div>
            </footer>
        </div>
    )
}

export default App