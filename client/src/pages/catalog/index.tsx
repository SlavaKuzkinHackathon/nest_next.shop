import SEO from "../../../components/SEO"
import { homeConfig } from "@/utils/config"
import useRedirectByUserCheck from "../../../hooks/useRedirectByUserCheck"
import CatalogPage from "../../../components/templates/CatalogPage/CatalogPage"
import { IQueryParams } from "../../../types/catalog"

function Catalog({query} : {query: IQueryParams}) {
  const { shouldLoadContent } = useRedirectByUserCheck(true)

return (
    <>
      <SEO
                title="Каталог | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель"
                description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
                keywords="недорогие диваны от производителя"
            />
      {/* <SEO {...homeConfig} />  */}

      <CatalogPage query = {query} />
    </>
  )
}

export async function getServerSideProps(context: {query : IQueryParams}) {
  return {
    props: { query: {...context.query}}
  }
}

export default Catalog