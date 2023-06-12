import { useQuery } from '@tanstack/react-query'
const useClass = () =>{

    const { isLoading,refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () =>{
            const res = await fetch('https://assignment-12-capture-a-story-server.vercel.app/classes')
            return res.json()
        }
      })
      return [classes, isLoading, refetch]
}

export default useClass;