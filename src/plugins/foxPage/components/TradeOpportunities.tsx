import { Box, Flex } from '@chakra-ui/layout'
import { Text as CText } from '@chakra-ui/react'
import { useTranslate } from 'react-polyglot'
import { fox } from 'test/mocks/assets'
import { AssetIcon } from 'components/AssetIcon'
import { Card } from 'components/Card/Card'
import { Text } from 'components/Text/Text'

export const TradeOpportunities = () => {
  const translate = useTranslate()

  return (
    <Card display='block' width='full'>
      <Card.Header pb={0}>
        <CText fontWeight='bold' color='inherit'>
          {translate('plugins.foxPage.availableToTradeOn')}
        </CText>
      </Card.Header>
      <Card.Body>
        <Box mb={4}>
          <Text translation='DEX' color='gray.500' fontWeight='semibold' mb={4} />
          <Flex flexDirection='row' flexWrap='wrap' m={-2}>
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
          </Flex>
        </Box>
        <Box>
          <Text translation='DEX' color='gray.500' fontWeight='semibold' mb={4} />
          <Flex flexDirection='row' flexWrap='wrap' m={-2}>
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
            <AssetIcon src={fox.icon} boxSize='8' m={2} />
          </Flex>
        </Box>
      </Card.Body>
    </Card>
  )
}
