import { RouteCard } from '@/common/Card/RouteCard'
import { Card } from '@/common/Card/Card'
import { Text } from '@/common/Text/Text'
import { CircleContainer} from '@/common/CircleContainer/CircleContainer'
import { CURRENCIES } from '@/common/const'
import { accounts, Transaction } from '@/common/TestData'
import { PatternFormat } from 'react-number-format'
import { MoneyText } from '@/common/Text/MoneyText'
import { Button } from '@/common/Button/Button'
import { Table } from '@/common/Table/Table'
import { transactions } from '@/common/TestData'
import { createColumnHelper } from '@tanstack/react-table'
import { BigButton } from '@/common/Button/BigButton'


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
        <div className="">
          <Card className="bg-gradient-to-r from-yellow-400/90 to-yellow-500/90 drop-shadow-lg">
            <div className="flex items-center">
              <CircleContainer className="flex flex-col items-center">
                <Text size={'3xl'} weight={'extrabold'} color={'white'}>
                  C A
                </Text>
                <Text size={'3xl'} weight={'black'} color={'white'}>
                  {CURRENCIES.ARS}
                </Text>
              </CircleContainer>
              <div className="mx-8 flex-grow ">
                <Text size={'3xl'} weight={'extrabold'} color={'white'}>
                  <MoneyText>{accounts[0].amount}</MoneyText>
                </Text>
                <Text size={'lg'} weight={'light'} color={'white'}>
                  Caja de ahorro en pesos{' '}
                  <PatternFormat
                    format="######-####"
                    value={accounts[0].id}
                    displayType="text"
                  />
                </Text>
              </div>
              <Button
                onClick={() => {}}
                className="flex self-end borde-4 border-white text-yellow-500 hover:bg-yellow-100 hover:text-yellow-600 mr-4 text-xl"
                color="white"
              >
                Detalles
              </Button>
            </div>
          </Card>
          <BigButton><></></BigButton>
          <BigButton></BigButton>
          <BigButton></BigButton>
          <div>
            <Table
              data={transactions || []}
              columns={getColumns()}
              emptyDataText="No hay transacciones en esta cuenta"
            />
          </div>
        </div>
      </div>
    </RouteCard>
  )
}
