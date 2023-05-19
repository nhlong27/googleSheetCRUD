import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { TableDataType } from 'src/types/types';
import React from 'react';
import { useGetDataQuery } from 'src/queries';

interface DenseTableProps {
  queryTitle: string;
}
export const DenseTable: React.FC<DenseTableProps> = (props) => {
  const {queryTitle} = props;
  const {data, error, isLoading} = useGetDataQuery()

  const [filteredList,setFilteredList] = React.useState<TableDataType | undefined>(undefined)
  console.log(filteredList)


  React.useEffect(()=>{
    setFilteredList(data?.filter(row=>queryTitle!=='' ? row['Tên hàng ']?.toLowerCase().includes(queryTitle.toLowerCase()) : true))
  }, [queryTitle, data])

  return data ? (
    <>
    {filteredList && ( filteredList?.length?? 0 > 0) ? 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200, borderSpacing: 0 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {Object.keys(filteredList[0] as {}).map((title, index)=>{
              return <TableCell align="right" key={index}>{title}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredList.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, minWidth:30 }}
              
            >
              <TableCell size='small' padding='none' component="th" scope="row">
                {row['Tên hàng ']}
              </TableCell>
              <TableCell size='small' padding='none' align="right">{row['Thùng sỉ']}</TableCell>
              <TableCell size='small' padding='none' align="right">{row['Thùng lẻ']}</TableCell>
              <TableCell size='small' padding='none' align="right">{row['Lốc']}</TableCell>
              <TableCell size='small' padding='none' align="right">{row['Lon/chai lẻ']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : <div>Not found</div>
    }
    </>
  ) : error instanceof Error ? <div>Error..</div> : <div>Loading..</div>
}