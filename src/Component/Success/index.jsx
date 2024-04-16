import { Link } from "react-router-dom"
import ProductDetail from "../../Context"
const whatappApiUrl = `https://api.whatsapp.com/send/?phone=919019590310&text=Place+Order%0AName%20%3A%20Thamim%0A%0Aasdf%0Aasdf%0A&type=phone_number&app_absent=0`

const Success = () => {
    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { cartList } = value
                    console.log(cartList)


                    return (
                        <div className="succes">
                            <a href={whatappApiUrl}>click</a>
                        </div>
                    )
                }
            }
        </ProductDetail.Consumer>
    )
}
export default Success