import { useQuery } from "@tanstack/react-query";

const useAllInstructor = () =>{
    const{ isLoading, refetch, data: allInstructors=[] } = useQuery({
        queryKey: ['all_instructors'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/all_instructors')
            return res.json()
        }
    })
    return [allInstructors, refetch, isLoading]
}

export default useAllInstructor;