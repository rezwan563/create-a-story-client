import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnrollClass = ()=>{
    const { user, loading} = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()
    const {data: enrolledClass = [], isLoading, refetch} = useQuery({
        queryKey:['enroll_classes', user?.email],
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
            const res = await axiosSecure(`/enroll_classes?email=${user?.email}`)
            console.log("from res ", res)
            return res.data;
        }
    })
    return [enrolledClass, refetch, isLoading]
}
export default useEnrollClass;