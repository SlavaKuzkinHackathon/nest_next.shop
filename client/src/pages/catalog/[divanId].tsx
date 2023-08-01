import SEO from "../../../components/SEO"
import { IQueryParams } from "../../../types/catalog"
import { useStore } from "effector-react"
import { $divan, setDivan } from "../../../context/divan"
import { getDivanFx } from "../../../app/api/divans"
import { toast } from "react-toastify"
import { setDivans } from "../../../context/divans"
import { useEffect } from "react"
import DivanPage from "../../../components/templates/DivanPage/DivanPage"

function CatalogDivanPage({ query }: { query: IQueryParams }) {

  const divan = useStore($divan)

  useEffect(() => {
    loadDivan()
  },[])

  const loadDivan = async () => {
    try {
      const data = await getDivanFx(`/divans/find/${query.divanId}`)

      setDivan(data)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <>
       <SEO
       title={`ВАША МЕБЕЛЬ | ${divan.name}`}
        /* title="Каталог | МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ Ваша Мебель" */
        description="Интернет-магазин диванов в городе Новосибирске Ваша Мебель"
        keywords="недорогие диваны от производителя"
      />
      {/* <SEO {...shippingConfig} /> */}

       {/* <DivanPage query={query} /> */}
       <DivanPage />
    </>
  )
}

export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } }
  }
}

export default CatalogDivanPage