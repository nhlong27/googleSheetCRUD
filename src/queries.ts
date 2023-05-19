import axios from 'axios'
import { TableData } from './types/types'
import { useQuery } from '@tanstack/react-query'

export const getData = async () => {
  return TableData.parse((await axios.get(`https://sheetdb.io/api/v1/iw8wluarb0vfd`)).data)
}

export const useGetDataQuery = () => {
  const {data, error, isLoading} = useQuery({queryKey:['tableData'], queryFn: getData, staleTime:Infinity, refetchOnMount: false, refetchOnReconnect: false, refetchOnWindowFocus: false})
  return {data, error, isLoading}
}