import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { AuthContext } from '../pages/provider/AuthProvider'
const useAllClass = () =>{
    const {user} = useContext(AuthContext)
    const [isClicked, setIsClicked] = useState(false)
    // const handleAppliedClass =()=>{
    //     setIsClicked(true)
    // }
    

    const { isLoading, refetch, data: allClasses = []} = useQuery({
        queryKey: ['all_classses', user?.email, isClicked, ],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/all_classes')
            refetch()
            return res.json()
        }

    })
    return [allClasses, refetch, isLoading, ]
}
export default useAllClass;