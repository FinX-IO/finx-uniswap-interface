import styled from 'styled-components'

import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { AutoColumn } from '../../components/Column'
import { SwapPoolTabs } from '../../components/NavigationTabs'

import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const VoteCard = styled(DataCard)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`
  // remove any pairs that also are included in pairs with stake in mining pool
export default function Home() {

  return (
    <>
      <PageWrapper>
        <SwapPoolTabs active={'home'} />
          <VoteCard>
            <CardSection>
              <AutoColumn gap="md">
                <RowBetween>
                  <TYPE.white fontWeight={600}>Decentralized Bond Market</TYPE.white>
                </RowBetween>
                <RowBetween>
                  <TYPE.white fontSize={14}>
                    {`FINX BONDS is a Decentralized Exchange of Corporate Debt. The FINX DeFi protocol allows anyone access to the Corporate Finance Market, and any Corporation can gain instant access to ultra-large low-cost capital pools which are always liquid, 24x7.`}
                  </TYPE.white>
                </RowBetween>
              </AutoColumn>
            </CardSection>
        </VoteCard>
        <VoteCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {`Liquidity providers earn a 0.3% fee on all bond liquidity repayments proportional to their share of the Liquidity staked in the pool. Bond Repayments are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.`}
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {`Service providers are companies such as Ratings Agencies, Insurance Providers, and other institutions which provide services related to individual bonds. Service Providers earn a 0.3% fee on all bond service fee payments proportional to their share of the amount of FINX Tokens staked in the pool. Bond Payments are added to the pool, accrue in real time and are claimed when the bond is discharged. FINX Tokens are sold by Service Providers to Bond Issuers, earn interest when staked in a bond and can then be resold when the tokens are returned.`}
                </TYPE.white>
              </RowBetween>
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                target="_blank"
                href="https://uniswap.org/docs/v2/core-concepts/pools/"
              >
                <TYPE.white fontSize={14}>Read more about providing liquidity to bonds</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </VoteCard>
      </PageWrapper>
    </>
  )
