import React from "react";


interface IProp {
    data: MarketData[]
}

const MarketData: React.FC<IProp> = ({data}) => {
    return (
        <div id="marketData">
            <table>
                <thead>
                <tr>
                    <th>Valuta</th>
                    <th>Värde</th>
                    <th>utv. 24h</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item =>
                    <tr key={item.id}>
                        <td><img src={item.image} alt={item.name} width="16px"/> { item.name}</td>
                        <td> {item.current_price.toLocaleString()} sek</td>
                        <td>{item.price_change_percentage_24h.toLocaleString()}%</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default MarketData