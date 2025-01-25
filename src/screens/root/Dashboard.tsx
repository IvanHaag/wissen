import { RouteCard } from '@/common/Card/RouteCard'
import { Text } from '@/common/Text/Text'
import { SquareContainer } from '@/common/SquareContainer/SquareContainer'
import { CURRENCIES } from '@/common/const'
import { accounts, Transaction } from '@/common/TestData'
import { PatternFormat } from 'react-number-format'
import { MoneyText } from '@/common/Text/MoneyText'
import { Button } from '@/common/Button/Button'
import { Table } from '@/common/Table/Table'
import { transactions } from '@/common/TestData'
import { createColumnHelper } from '@tanstack/react-table'

export const Dashboard = () => {
  const columnHelper = createColumnHelper<Transaction>()

  const getColumns = () => [
    columnHelper.accessor('date', {
      header: 'Fecha',
      cell: (info) => (
        <div className="flex justify-center">
          <Text className="whitespace-normal line-clamp-2">
            {info.getValue()}
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor('description', {
      header: 'Descripción',
      cell: (info) => (
        <div className="flex justify-start min-w-80">
          <Text className="whitespace-normal line-clamp-2">
            {info.getValue()}
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor('amount', {
      header: 'Monto',
      cell: (info) => (
        <div className="flex justify-end">
          <MoneyText className="whitespace-normal line-clamp-2">
            {info.getValue()}
          </MoneyText>
        </div>
      ),
    }),
  ]

  return (
    <RouteCard>
      <div>
        <Text size={'4xl'} weight={'bold'}>
          Cuenta Principal
        </Text>
        <div className="inline-block">
          <RouteCard fullSize={false} className="">
            <div className="flex items-center">
              <SquareContainer className="flex flex-col items-center">
                <Text size={'3xl'} weight={'extrabold'} color={'white'}>
                  C A
                </Text>
                <Text size={'3xl'} weight={'black'} color={'white'}>
                  {CURRENCIES.ARS}
                </Text>
              </SquareContainer>
              <div className="mx-8">
                <Text size={'2xl'} weight={'bold'}>
                  <MoneyText>{accounts[0].amount}</MoneyText>
                </Text>
                <Text weight={'light'} color={'gray'}>
                  Caja de ahorro en pesos{' '}
                  <PatternFormat
                    format="######-####"
                    value={accounts[0].id}
                    displayType="text"
                  />
                </Text>
              </div>
              <Button
                color="yellow"
                onClick={() => {}}
                className="flex self-end"
              >
                Detalles
              </Button>
            </div>
          </RouteCard>
          <Table
            data={transactions || []}
            columns={getColumns()}
            emptyDataText="No hay transacciones en esta cuenta"
          />
        </div>
      </div>
    </RouteCard>
  )
}
