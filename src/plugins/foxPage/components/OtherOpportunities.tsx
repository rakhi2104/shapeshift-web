import { Box, Flex } from '@chakra-ui/layout'
import { Button, Text as CText } from '@chakra-ui/react'
import { useTranslate } from 'react-polyglot'
import { fox } from 'test/mocks/assets'
import { Amount } from 'components/Amount/Amount'
import { AssetIcon } from 'components/AssetIcon'
import { Card } from 'components/Card/Card'
import { Text } from 'components/Text/Text'

export const MainOpportunity = () => {
  const translate = useTranslate()

  return (
    <Card display='block' width='full'>
      <Card.Header>
        <Flex flexDirection='row' alignItems='center' mb={2}>
          <CText fontWeight='bold' color='inherit'>
            {translate('plugins.foxPage.otherOpportunitiesTitle')}
          </CText>
        </Flex>
        <Text
          translation='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget elit faucibus, vestibulum mauris sed, cursus nulla. Nunc tempor leo sit amet velit gravida lacinia. In sit amet luctus lectus. Pellentesque dapibus, justo vel iaculis ullamcorper, mi purus tristique libero, et laoreet nisi neque ut justo.'
          color='gray.500'
        />
      </Card.Header>
      <Card.Body>
        <Flex justifyContent='space-between' flexDirection={{ base: 'column', md: 'row' }}>
          <Flex flexDirection='row' alignItems='center'>
            <AssetIcon src={fox.icon} boxSize='6' mr={2} />
            <CText color='inherit'>{'Uniswap'}</CText>
          </Flex>
          <Box>
            <Text translation='plugins.foxPage.currentApy' color='gray.500' mb={1} />
            <Amount.Fiat
              color='inherit'
              fontSize={'xl'}
              fontWeight='semibold'
              value={tvl.toString()}
            />
          </Box>
          <Box alignSelf='center'>
            <Button onClick={onClick} colorScheme={'blue'}>
              <CText>{translate('plugins.foxPage.getStarted')}</CText>
            </Button>
          </Box>
        </Flex>
      </Card.Body>
    </Card>
  )
}
