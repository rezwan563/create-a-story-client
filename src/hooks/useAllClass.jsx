import { useQuery } from '@tanstack/react-query'
const useAllClass = () =>{
    const { isLoading, refetch, data: allClasses = []} = useQuery({
        queryKey: ['all_classses'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/all_classes')
            return res.json()
        }

    })
    return [allClasses, refetch, isLoading]
}
export default useAllClass;