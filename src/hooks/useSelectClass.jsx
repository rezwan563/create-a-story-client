import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectClass = ()=>{
    const { user, loading} = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()
    const {data: selectedClasses = [], isLoading, refetch} = useQuery({
        queryKey:['select_classes', user?.email],
        enabled: !loading,
        // queryFn: async()=>{
        //     const res = await fetch(`http://localhost:5000/select_classes?email=${user?.email}`, {
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn: async()=>{
            const res = await axiosSecure(`/select_classes?email=${user?.email}`)
            console.log("from res ", res)
            return res.data;
        }
    })
    return [selectedClasses, refetch, isLoading]
}
export default useSelectClass;