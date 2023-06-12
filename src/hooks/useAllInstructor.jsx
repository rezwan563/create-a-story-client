import { useQuery } from "@tanstack/react-query";

const useAllInstructor = () =>{
    const{ isLoading, refetch, data: allInstructors=[] } = useQuery({
        queryKey: ['all_instructors'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-12-capture-a-story-server.vercel.app/all_instructors')
            return res.json()
        }
    })
    return [allInstructors, refetch, isLoading]
}

export default useAllInstructor;