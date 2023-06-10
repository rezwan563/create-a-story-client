import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../pages/provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClass = ()=>{
    const { user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()
    const {data: selectedClasses = [], isLoading, refetch} = useQuery({
        queryKey:['select_classes', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure(`/select_classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data
        }
    })
    return [selectedClasses, refetch, isLoading]
}
export default useSelectClass;