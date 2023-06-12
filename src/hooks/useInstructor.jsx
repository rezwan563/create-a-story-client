import { useQuery } from '@tanstack/react-query'
const useInstructor = () =>{
    const { isLoading, refetch, data: instructors = []} = useQuery({
        queryKey: ['instructors'],
        queryFn: async ()=>{
            const res = await fetch('https://assignment-12-capture-a-story-server.vercel.app/instructors')
            return res.json()
        }
    })
    return [instructors, refetch, isLoading]
}

export default useInstructor;