
// Import style
import './assets/style/scss/style.scss'
import { ping } from "./services/coinGeckoAPI.ts";

function App() {
    const onPing = async () => {
        const res = await ping()
        console.log(res.status)
        console.log(res.data.gecko_says)
    }

  return (
    <div>
      <h1>Crypto Currencies</h1>
        <button onClick={onPing}>ping</button>
    </div>
  )
}
export default App