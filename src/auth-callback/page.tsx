import { trpc } from "@/app/_trpc/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router"

const page = async() => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");

    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success}) => {
            if(success){
                //use is synced to db
                router.push(origin ? `/${origin}` : "/dashboard")
            }
        }
    });
}

export default page