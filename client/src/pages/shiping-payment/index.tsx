import SEO from "../../../components/SEO"
import ShipingPayment from "../../../components/templates/ShipingPayment/ShipingPayment"

function ShipingPaymentPage() {

    return (
        <>
            <SEO
                title="Доставка и оплата | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель"
                description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
                keywords="недорогие диваны от производителя"
            />
            {/* <SEO {...homeConfig} />  */}
            <ShipingPayment />
        </>
    )
}

export default ShipingPaymentPage