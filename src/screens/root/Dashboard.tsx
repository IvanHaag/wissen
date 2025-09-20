import { RouteCard } from '@/common/Card/RouteCard'
import { Card } from '@/common/Card/Card'
import { Text } from '@/common/Text/Text'
import { CircleContainer } from '@/common/CircleContainer/CircleContainer'
import { CURRENCIES } from '@/common/const'
import { accounts, Transaction } from '@/common/TestData'
import { PatternFormat } from 'react-number-format'
import { MoneyText } from '@/common/Text/MoneyText'
import { Button } from '@/common/Button/Button'
import { Table } from '@/common/Table/Table'
import { transactions } from '@/common/TestData'
import { createColumnHelper } from '@tanstack/react-table'
import { BigButton } from '@/common/Button/BigButton'
import { ArrowDownLeft, ArrowUpRight, Plus } from 'react-feather'

export const Dashboard = () => {
  const columnHelper = createColumnHelper<Transaction>()

  const getColumns = () => [
    // First column (icons) – width auto
    columnHelper.display({
      id: 'icons',
      header: () => null,
      size: 32,
      minSize: 32,
      maxSize: 32,
      cell: (info) => {
        const amount = info.row.original.amount
        return (
          <div className={`flex justify-center items-center rounded-xl w-11 ${amount < 0 ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
            {amount < 0 ? (
              <ArrowUpRight color="darkred" className="w-8 h-8" />
            ) : (
              <ArrowDownLeft color="darkgreen" className="w-8 h-8" />
            )}
          </div>
        )
      },
    }),

    // Middle column (description + date) – grows
    columnHelper.display({
      id: 'descriptionDate',
      header: () => null,
      cell: (info) => {
        const { description, date } = info.row.original
        return (
          <div className="flex flex-col justify-start flex-grow pl-10">
            <Text size="lg" weight="medium" className="truncate">
              {description}
            </Text>
            <Text size="sm" weight="light" color="gray" className="truncate">
              {new Date(date).toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </Text>
          </div>
        )
      },
    }),

    // Last column (amount) – width auto
    columnHelper.accessor('amount', {
      header: () => null,
      size: 120,
      minSize: 120,
      maxSize: 120,
      cell: (info) => {
        const amount = info.getValue<number>()
        return (
          <div className="flex justify-end p-2">
            <MoneyText
              className={`${amount > 0 ? 'text-green-500' : 'text-red-500'}`}
            >
              {amount}
            </MoneyText>
          </div>
        )
      },
    }),
  ]

  return (
    <RouteCard>
      <div>
         <div className='flex justify-between items-center'>

          <Text size={'4xl'} weight={'bold'}>
            Cuenta Principal
          </Text>
          <Button color={'gradient'}><Plus color='white' className='mr-2'/>Nueva transferencia</Button>
          </div>
        <div className="">
          <Card className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 drop-shadow-lg">
            <div className="flex items-center">
              <CircleContainer className="flex flex-col items-center">
                <Text size={'3xl'} weight={'extrabold'} color={'white'}>
                  C A
                </Text>
                <Text size={'3xl'} weight={'black'} color={'white'}>
                  {CURRENCIES.ARS}
                </Text>
              </CircleContainer>
              <div className="flex-grow mx-8 ">
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
                className="flex self-end mr-4 text-md h-12"
                color="white-orange"
              >
                DETALLES
              </Button>
            </div>
          </Card>
          <div className="flex pb-4">
            <BigButton className="w-1/3 p-4">
              <div className="p-2 mr-4 bg-green-200/60 rounded-xl">
                <ArrowDownLeft size={44} color="darkgreen" />
              </div>
              <Text weight={'medium'} size={'2xl'}>
                Ingresar Dinero
              </Text>
            </BigButton>
            <BigButton className="w-1/3 p-4 mx-6">
              <div className="p-2 mr-4 bg-blue-200/60 rounded-xl">
                <ArrowUpRight size={44} color="darkblue" />
              </div>
              <Text weight={'medium'} size={'2xl'}>
                Enviar Dinero
              </Text>
            </BigButton>
            <BigButton className="w-1/3 p-4">
              <div className="p-2 mr-4 bg-purple-200/60 rounded-xl">
                <Plus size={44} color="purple" />
              </div>
              <Text weight={'medium'} size={'2xl'}>
                Enviar Dinero
              </Text>
            </BigButton>
          </div>
          <div className="p-4 border-2 border-gray-200 rounded-2xl bg-white/70">
            <Text weight={'medium'} size={'xl'} className="pb-4 pl-2">
              Actividad Reciente
            </Text>
            <Table
              data={transactions || []}
              columns={getColumns()}
              emptyDataText="No hay transacciones en esta cuenta"
              hideHeaders={true}
            />
          </div>
        </div>
      </div>
    </RouteCard>
  )
}
