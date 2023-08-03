import SEO from "../../../components/SEO"
import OrderPage from "../../../components/templates/OrderPage/OrderPage"

function Order() {

    return (
        <>
            <SEO
                title="Оформление заказа | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель"
                description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
                keywords="недорогие диваны от производителя"
            />
            {/* <SEO {...homeConfig} />  */}
            <OrderPage />
        </>
    )
}

export default Order