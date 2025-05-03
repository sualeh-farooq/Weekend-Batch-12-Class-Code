import { useRouter } from "next/router";

export default function ProductViewPage(){

    const router = useRouter()

    return (
        <>
        The Product is {router.query.slug}
        </>
    )
}