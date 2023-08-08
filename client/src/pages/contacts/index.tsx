import Router from "next/router";
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

            {/* <div>
                <ul>
                    <li >
                        <p >Телефон:</p>
                        <a href="tel:+79139135547" >
                            +7(913) 913-55-47
                        </a>
                    </li>
                    <li >
                        <p >Адрес:</p>
                        <p >г.Новосибирск, ТЦ Большая медведица ул.Светлановская, 50 цокольный этаж</p>
                    </li>
                    <li >
                        <p >E-mail:</p>
                        <a href="mailto:mebel-petrova@mail.ru">
                            mebel-petrova@mail.ru
                        </a>
                    </li>
                    <li >
                        <p >Время работы:</p>
                        <p > 10:00-20:00</p>
                    </li>
                </ul>
            </div>
            <div><button onClick={() => Router.push('/')}>На главную</button></div> */}
        </>
    )
}
export default Contacts