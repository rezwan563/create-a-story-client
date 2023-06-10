import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../pages/provider/AuthProvider";

const useSelectClass = ()=>{
    const { user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const {data: selectedClasses = [], isLoading, refetch} = useQuery({
        queryKey:['select_classes', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/select_classes?email=${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })
    return [selectedClasses, refetch, isLoading]
}
export default useSelectClass;