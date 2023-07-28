import SEO from "../../../components/SEO"
import { shippingConfig } from "@/utils/config"
import CatalogPage from "../../../components/templates/CatalogPage/CatalogPage"
import { IQueryParams } from "../../../types/catalog"
import { useStore } from "effector-react"
import { $divan, setDivan } from "../../../context/divan"
import { getDivanFx } from "../../../app/api/divans"
import { toast } from "react-toastify"
import { setDivans } from "../../../context/divans"
import { useEffect } from "react"

function DivanPage({ query }: { query: IQueryParams }) {

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
      <h1>{divan.name}</h1>
    </>
  )
}

export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } }
  }
}

export default DivanPage