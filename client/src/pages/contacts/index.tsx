import SEO from "../../../components/SEO";
import ContactsPage from "../../../components/templates/ContactsPage/ContactsPage";

 function Contacts() {
    return (
        <>
            <SEO
                title="Контакты | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель"
                description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
                keywords="недорогие диваны от производителя"
            />
            {/* <SEO {...homeConfig} />  */}
            <ContactsPage />
        </>
    )
}
export default Contacts