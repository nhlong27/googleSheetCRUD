import {z} from 'zod'

const TableData = z.array(
  z.object({
    "Tên hàng ": z.string().optional(),
    "Thùng sỉ": z.string().optional(),
    "Thùng lẻ": z.string().optional(),
    "Lốc": z.string().optional(),
    "Lon/chai lẻ": z.string().optional(),
  })
)

type TableDataType = z.infer<typeof TableData>

export {TableData, TableDataType}