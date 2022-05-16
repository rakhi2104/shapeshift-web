import { Box, StatArrow, StatNumber, Text } from '@chakra-ui/react'
import { HistoryTimeframe } from '@shapeshiftoss/types'
import { useState } from 'react'
import { Amount } from 'components/Amount/Amount'
import { Card } from 'components/Card/Card'
import { TimeControls } from 'components/Graph/TimeControls'
import { PriceChart } from 'components/PriceChart/PriceChart'
import { RawText } from 'components/Text/Text'

type FoxChartProps = {
  assetId: string
}

export const FoxChart = ({ assetId }: FoxChartProps) => {
  const [timeframe, setTimeframe] = useState(HistoryTimeframe.MONTH)
  const [percentChange, setPercentChange] = useState(0)

  return (
    <Card>
      <Card.Body>
        <Box textAlign='center'>
          <Text color='gray.500' fontWeight='semibold'>
            {'Current Price'}
          </Text>
          <Box fontSize='4xl' lineHeight={1} mb={2}>
            <Amount.Fiat value={'4000'} />
          </Box>
          <StatNumber
            display='flex'
            alignItems='center'
            justifyContent='center'
            color={percentChange > 0 ? 'green.500' : 'red.500'}
          >
            <StatArrow type={percentChange > 0 ? 'increase' : 'decrease'} />
            {isFinite(percentChange) && <RawText>{percentChange}%</RawText>}
          </StatNumber>
        </Box>
        <PriceChart
          assetId={assetId}
          setPercentChange={setPercentChange}
          percentChange={percentChange}
          timeframe={timeframe}
          chartHeight='200px'
          mx={-6}
        />
        <TimeControls
          onChange={setTimeframe}
          defaultTime={timeframe}
          buttonGroupProps={{
            display: 'flex',
            width: 'full',
            justifyContent: 'space-between',
          }}
        />
      </Card.Body>
    </Card>
  )
}
