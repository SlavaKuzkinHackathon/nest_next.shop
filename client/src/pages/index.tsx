import SEO from "../../components/SEO"
import { homeConfig } from "@/utils/config"
import DashboardPage from "../../components/templates/DashboardPage/DashboardPage"
import useRedirectByUserCheck from "../../hooks/useRedirectByUserCheck"

export default function Home() {
  const { shouldLoadContent } = useRedirectByUserCheck(true)

return (
    <>
   
      <SEO {...homeConfig} /> 
      
     {shouldLoadContent && <DashboardPage/>}
    </>
  )
}