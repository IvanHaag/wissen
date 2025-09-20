import { useEffect, useState } from 'react'
import type { ColumnDef, Row } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { cx } from 'class-variance-authority'

export type TableCalumn<DataType> = ColumnDef<DataType, string> & {
  className?: string
}

export interface TableProps<DataType> {
  data: DataType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<DataType, any>[]
  onRowClick?: (data: DataType) => void
  disableRowFunction?: (row: Row<DataType>) => boolean
  emptyDataText: string
  attendanceSpecialColumns?: boolean
  hideHeaders?: boolean
}

const Tr = ({
  children,
  onClick,
}: {
  children?: React.ReactNode
  onClick?: () => void
}) => (
  <tr
    className={cx('', onClick ? 'cursor-pointer hover:bg-slate-100/20' : '')}
    onClick={onClick}
  >
    {children}
  </tr>
)

const Td = ({
  colSpan,
  children,
  disabled,
  style,
  isFirstColumn,
}: {
  colSpan?: number
  children?: React.ReactNode
  disabled?: boolean
  style?: React.CSSProperties
  isFirstColumn?: boolean
}) => (
  <td
    className={cx(
      'h-8 py-1 border-b-2 border-b-gray-300',
      isFirstColumn ? 'px-0' : 'px-4',
      disabled ? 'text-gray-400' : ''
    )}
    colSpan={colSpan}
    style={style}
  >
    {children}
  </td>
)

export const Table = <DataType,>(props: TableProps<DataType>) => {
  const [data, setData] = useState(props.data)

  useEffect(() => {
    if (props.data) setData(props.data)
  }, [props.data])

  const table = useReactTable({
    columns: props.columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    enablePinning: true,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
  })

  const renderBody = () => {
    const rows = table.getRowModel().rows

    if (rows.length === 0) {
      return (
        <Tr>
          <Td colSpan={props.columns.length}>{props.emptyDataText}</Td>
        </Tr>
      )
    }
    return rows.map((row) => {
      const disabled = props.disableRowFunction
        ? props.disableRowFunction(row)
        : false
      return (
        <Tr
          key={row.id}
          onClick={
            props.onRowClick && !disabled
              ? () => props.onRowClick && props.onRowClick(row.original)
              : undefined
          }
        >
          {row.getVisibleCells().map((cell, index) => (
            <Td 
              key={cell.id} 
              disabled={disabled} 
              isFirstColumn={index === 0}
              style={index === 0 ? { width: '1%', minWidth: '32px', maxWidth: '32px' } : { width: cell.column.getSize() }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Td>
          ))}
        </Tr>
      )
    })
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="table w-full">
        <table className="w-full border-separate border-spacing-0 table-fixed">
          {!props.hideHeaders && (
            <thead className="box-shadow-sm">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <th
                        key={header.id}
                        className={cx(
                          'py-2 bg-slate-100 text-slate-700',
                          'border border-r-1 first:border-l-1 border-slate-300 first:rounded-tl-3xl last:rounded-tr-3xl',
                          'whitespace-nowrap',
                          index === 0 ? 'px-0' : 'px-4'
                        )}
                        style={index === 0 ? { width: '1%', minWidth: '32px', maxWidth: '32px' } : { width: header.getSize() }}
                        // style={{ width: header.getSize() }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
          )}
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </div>
  )
}
