import { useQuery } from '@tanstack/react-query'
const useClass = () =>{

    const { isLoading,refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
      })
      return [classes, isLoading, refetch]
}

export default useClass;