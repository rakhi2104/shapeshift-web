import { Stack } from '@chakra-ui/react'

import { FoxChart } from './components/FoxChart'

export enum FoxPageTab {
  Fox = 'Fox',
  Foxy = 'Foxy',
  OneFox = 'OneFox',
}

export const FoxPage = (props: any) => {
  // TODO remove console log when implementing tabs
  // eslint-disable-next-line no-console
  console.log(props)
  return (
    <Stack alignItems='flex-start' spacing={4} mx='auto' direction={{ base: 'column', xl: 'row' }}>
      <Stack spacing={4} flex='1 1 0%' width='full'></Stack>

      <Stack flex='1 1 0%' width='full' maxWidth={{ base: 'full', xl: 'sm' }} spacing={4}>
        <FoxChart assetId={'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d'} />
      </Stack>
    </Stack>
  )
}
