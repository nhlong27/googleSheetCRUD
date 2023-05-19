import React from 'react'
import Search from './Search'
import { DenseTable } from './DenseTable'
import { useGetDataQuery } from 'src/queries'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import type { TableDataType } from 'src/types/types'

const queryClient = new QueryClient();

const MainContent = () => {
  const [queryTitle,setQueryTitle] = React.useState('')
  console.log(queryTitle)
  return  (
    <div>
      <Search queryTitle={queryTitle} setQueryTitle={setQueryTitle} />
      <DenseTable queryTitle={queryTitle} />
    </div>
  ) 
}

export default ()=>(
  <QueryClientProvider client={queryClient}>
    <MainContent />
    <ReactQueryDevtools />
  </QueryClientProvider>
)