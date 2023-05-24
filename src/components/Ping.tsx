import React from "react";
import CoinGecko from '../../public/coingecko.svg'

interface IProp {
    data: PingStatus
}

const Ping: React.FC<IProp> = ({data}) => {
    return (
        <div id="ping">
            <a href="https://apiguide.coingecko.com/getting-started/introduction">
                <img src={CoinGecko} alt="CoinGecko" width="32px"/>
                <p>
                    {data.gecko_says}
                    <span>Data provided by CoinGecko Public API</span>
                </p>
            </a>
        </div>

    )
}
export default Ping