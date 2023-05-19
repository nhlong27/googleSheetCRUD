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
    setFilteredList(data?.filter(row=>queryTitle!=='' ? row['Tên hàng ']?.includes(queryTitle) : true))
  }, [queryTitle, data])

  return data && filteredList && ( filteredList?.length?? 0 > 0) ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row['Tên hàng ']}
              </TableCell>
              <TableCell align="right">{row['Thùng sỉ']}</TableCell>
              <TableCell align="right">{row['Thùng lẻ']}</TableCell>
              <TableCell align="right">{row['Lốc']}</TableCell>
              <TableCell align="right">{row['Lon/chai lẻ']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : error instanceof Error ? <div>Error..</div> : <div>Loading..</div>
}