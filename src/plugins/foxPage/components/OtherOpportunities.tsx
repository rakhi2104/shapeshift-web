import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Box, Flex } from '@chakra-ui/layout'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Link,
  Text as CText,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslate } from 'react-polyglot'
import { fox } from 'test/mocks/assets'
import { AssetIcon } from 'components/AssetIcon'
import { Card } from 'components/Card/Card'
import { Text } from 'components/Text/Text'

export const OtherOpportunities = () => {
  const translate = useTranslate()
  const borderColor = useColorModeValue('gray.150', 'gray.700')

  return (
    <Card display='block' width='full'>
      <Card.Header pb={0}>
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
      <Card.Body pb={0}>
        <Accordion mx={-6} allowToggle defaultIndex={0}>
          <AccordionItem borderColor={borderColor}>
            <AccordionButton px={6} py={4}>
              <Box flex='1' textAlign='left' fontWeight='semibold'>
                {'Liquidity Pools'}
              </Box>
              <Flex>
                <Badge
                  colorScheme='blue'
                  display='flex'
                  alignItems='center'
                  px={2}
                  py={'2px'}
                  borderRadius='md'
                  mr={4}
                >
                  {'3'}
                </Badge>
                <AccordionIcon color='gray.500' />
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4} px={6} my={-4}>
              <Flex
                justifyContent='space-between'
                flexDirection={{ base: 'column', md: 'row' }}
                my={8}
              >
                <Flex flexDirection='row' alignItems='center'>
                  <AssetIcon src={fox.icon} boxSize='8' mr={2} />
                  <CText color='inherit' fontWeight='semibold'>
                    {'Uniswap'}
                  </CText>
                </Flex>
                <Box ml={{ base: 0, md: '5rem' }}>
                  <Text translation='plugins.foxPage.currentApy' color='gray.500' mb={1} />
                  <CText color='green.400' fontSize={'xl'} lineHeight='1'>
                    {'11.61%'}
                  </CText>
                </Box>
                <Box alignSelf='center'>
                  <Button variant='link' colorScheme='blue' as={Link} href='#' isExternal>
                    <CText mr={2}>{translate('plugins.foxPage.getStarted')}</CText>
                    <ExternalLinkIcon />
                  </Button>
                </Box>
              </Flex>
              <Flex
                justifyContent='space-between'
                flexDirection={{ base: 'column', md: 'row' }}
                my={8}
              >
                <Flex flexDirection='row' alignItems='center'>
                  <AssetIcon src={fox.icon} boxSize='8' mr={2} />
                  <CText color='inherit' fontWeight='semibold'>
                    {'Uniswap'}
                  </CText>
                </Flex>
                <Box ml={{ base: 0, md: '5rem' }}>
                  <Text translation='plugins.foxPage.currentApy' color='gray.500' mb={1} />
                  <CText color='green.400' fontSize={'xl'} lineHeight='1'>
                    {'11.61%'}
                  </CText>
                </Box>
                <Box alignSelf='center'>
                  <Button variant='link' colorScheme='blue' as={Link} href='#' isExternal>
                    <CText mr={2}>{translate('plugins.foxPage.getStarted')}</CText>
                    <ExternalLinkIcon />
                  </Button>
                </Box>
              </Flex>
              <Flex
                justifyContent='space-between'
                flexDirection={{ base: 'column', md: 'row' }}
                my={8}
              >
                <Flex flexDirection='row' alignItems='center'>
                  <AssetIcon src={fox.icon} boxSize='8' mr={2} />
                  <CText color='inherit' fontWeight='semibold'>
                    {'Uniswap'}
                  </CText>
                </Flex>
                <Box ml={{ base: 0, md: '5rem' }}>
                  <Text translation='plugins.foxPage.currentApy' color='gray.500' mb={1} />
                  <CText color='green.400' fontSize={'xl'} lineHeight='1'>
                    {'11.61%'}
                  </CText>
                </Box>
                <Box alignSelf='center'>
                  <Button variant='link' colorScheme='blue' as={Link} href='#' isExternal>
                    <CText mr={2}>{translate('plugins.foxPage.getStarted')}</CText>
                    <ExternalLinkIcon />
                  </Button>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem borderColor={borderColor}>
            <AccordionButton px={6} py={4}>
              <Box flex='1' textAlign='left' fontWeight='semibold'>
                {'Farming'}
              </Box>
              <Flex>
                <Badge
                  colorScheme='blue'
                  display='flex'
                  alignItems='center'
                  px={2}
                  py={'2px'}
                  borderRadius='md'
                  mr={4}
                >
                  {'1'}
                </Badge>
                <AccordionIcon color='gray.500' />
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4} px={6}>
              <Flex
                justifyContent='space-between'
                flexDirection={{ base: 'column', md: 'row' }}
                my={8}
              >
                <Flex flexDirection='row' alignItems='center'>
                  <AssetIcon src={fox.icon} boxSize='8' />
                  <AssetIcon src={fox.icon} boxSize='8' ml={'-3.5'} mr={2} />
                  <CText color='inherit' fontWeight='semibold'>
                    {'Uniswap'}
                  </CText>
                </Flex>
                <Box ml={{ base: 0, md: '5rem' }}>
                  <Text translation='plugins.foxPage.currentApy' color='gray.500' mb={1} />
                  <CText color='green.400' fontSize={'xl'} lineHeight='1'>
                    {'11.61%'}
                  </CText>
                </Box>
                <Box alignSelf='center'>
                  <Button variant='link' colorScheme='blue' as={Link} href='#' isExternal>
                    <CText mr={2}>{translate('plugins.foxPage.getStarted')}</CText>
                    <ExternalLinkIcon />
                  </Button>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem _last={{ borderBottomWidth: 0 }} borderColor={borderColor}>
            <AccordionButton px={6} py={4}>
              <Box flex='1' textAlign='left' fontWeight='semibold'>
                {'Borrowing & Lending'}
              </Box>
              <Flex>
                <Badge
                  colorScheme='blue'
                  display='flex'
                  alignItems='center'
                  px={2}
                  py={'2px'}
                  borderRadius='md'
                  mr={4}
                >
                  {'0'}
                </Badge>
                <AccordionIcon color='gray.500' />
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4} px={6}>
              Lorem ipsum sit dolor amet
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
