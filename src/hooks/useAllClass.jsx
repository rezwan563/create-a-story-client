import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { AuthContext } from '../pages/provider/AuthProvider'
const useAllClass = () =>{
    const {user} = useContext(AuthContext)
    // const handleAppliedClass =()=>{
    //     setIsClicked(true)
    // }
    

    const { isLoading, refetch, data: allClasses = []} = useQuery({
        queryKey: ['all_classses', user?.email ],
        queryFn: async () =>{
            const res = await fetch('https://assignment-12-capture-a-story-server.vercel.app/all_classes')
            refetch()
            return res.json()
        }

    })
    return [allClasses, refetch, isLoading, ]
}
export default useAllClass;