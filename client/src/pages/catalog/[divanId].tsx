import SEO from "../../../components/SEO"
import { IQueryParams } from "../../../types/catalog"
import { useStore } from "effector-react"
import { $divan, setDivan } from "../../../context/divan"
import { getDivanFx } from "../../../app/api/divans"
import { toast } from "react-toastify"
import { setDivans } from "../../../context/divans"
import { useEffect, useState } from "react"
import DivanPage from "../../../components/templates/DivanPage/DivanPage"
import { useRouter } from "next/router"
import Custom404 from "../404"

function CatalogDivanPage({ query }: { query: IQueryParams }) {

  const divan = useStore($divan)
  const router = useRouter()
  const [error, setError] = useState(false)

  useEffect(() => {
    loadDivan()
  }, [router.asPath])

  const loadDivan = async () => {
    try {
      const data = await getDivanFx(`/divans/find/${query.divanId}`)

      if (!data) {
        setError(true)
        return
      }

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
      {error ? (
        <Custom404 />
      ) : (<DivanPage />)}

    </>
  )
}

export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } }
  }
}

export default CatalogDivanPage