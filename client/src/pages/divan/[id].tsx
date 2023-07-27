import { useRouter } from "next/router"

export default function DivanPage() {
    const router =  useRouter()
    
    return (
        <h1>ДИВАН {router.query.id}</h1>
    )
}