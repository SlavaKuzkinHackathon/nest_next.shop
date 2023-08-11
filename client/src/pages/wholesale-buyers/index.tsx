import SEO from "../../../components/SEO";
import ContactsPage from "../../../components/templates/ContactsPage/ContactsPage";

function WholesaleBuyers() {
    return (
        <>
            <SEO
                title="Контакты | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель"
                description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
                keywords="недорогие диваны от производителя"
            />
            {/* <SEO {...homeConfig} />  */}
            {/* <Breadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator}
            /> */}
            <ContactsPage isWholesaleBuyersPage={true} />
            <div className="overlay" />
        </>
    )
}
export default WholesaleBuyers