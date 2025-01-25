import { RouteCard } from '@/common/Card/RouteCard'
import { Text } from '@/common/Text/Text'
import { SquareContainer } from '@/common/SquareContainer/SquareContainer'
import { CURRENCIES } from '@/common/const'
import { accounts } from '@/common/TestData'
import { PatternFormat } from 'react-number-format'
import { MoneyText } from '@/common/Text/MoneyText'
import { Button } from '@/common/Button/Button'

export const Dashboard = () => {
  return (
    <RouteCard>
      <div>
        <Text size={'4xl'} weight={'bold'}>
          Cuenta Principal
        </Text>
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
                $ <MoneyText>{accounts[0].amount}</MoneyText>
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
            <Button color="yellow" onClick={() => {}} className="flex self-end">
              Detalles
            </Button>
          </div>
        </RouteCard>
      </div>
    </RouteCard>
  )
}
