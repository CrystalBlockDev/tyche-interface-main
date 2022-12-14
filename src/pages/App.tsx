import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import ErrorBoundary from '../components/ErrorBoundary'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import { FarmListPage } from './Farm/FarmList'
import Farm from './Farm/Farm'

import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects'
import { ThemedBackground } from '../theme'

import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { StakingPage } from './Stake/StakingPage'
import { DisclaimerModal } from 'components/DisclaimerModal'
import { AssetsListPage } from './Assets/AssetsList'

// const AppWrapper = styled.div`
//   background-image: url('../../public/images/background.svg');
//   background-color: black;
//   min-height: 100vh;
//   background-size: cover;
//   background-position: top;
//   background-attachment: fixed;
//   overflow-x: hidden;
// `

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  padding-top: 200px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 6rem;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  padding: 0 20px;
    overflow-x: hidden;
    background: rgba(14, 14, 14, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    position: fixed;
    height: 100%;
    width: 240px;
    left: 0;
    top: 0;
    z-index: 9999;
    transition: 0.4s ease-in-out;
    .top{
      padding: 20px 0;
      display: flex;
      align-items: center;
      span{
          font-family: 'Syncopate', sans-serif;
          font-weight: bold;
          margin-left: 10px;
      }
  }
  .menu-icon{
      padding: 20px 0;
      .collapse-menu-btn{
          background: transparent;
          border: none;
          cursor: pointer;
      }
  }
  .menu-items{
      display: flex;
      flex-direction: column;
      .nav-item{
          display: flex;
          border: none;
          background: transparent;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          span{
              margin-left: 15px;
              text-transform: uppercase;
              color: $text;
              font-weight: 700;
              font-size: 15px;
              line-height: 19px;
              img{
                  margin-left: 15px;
              }
          }
      }
      .nav-link{
          // padding: 10px 20px;
          display: block;
          background: #242628;
          // width: 45px;
          // height: 45px;
          // line-height: 55px;
          padding: 10px;
          text-align: center;
          margin: 10px 0;
          border-radius: 50%;
          img{
              max-width: 20px;
          }
      }
      .active-menu{
          .active{
              .nav-link{
                  position: relative;
                  &::before{
                      content: '';
                      position: absolute;
                      width: 40px;
                      height: 40px;
                      left: 0px;
                      top: 12px;
                      background: linear-gradient(92.13deg, #944DFF 0.33%, #00CBA1 100.07%);
                      filter: blur(12px);
                      z-index: -1;
                  }
              }
              span{
                  color: white;
              }
          }
      }
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <Route component={ApeModeQueryParamReader} />
        <div className="app">
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <ThemedBackground />
            <Popups />
            <Polling />
            <Web3ReactManager>
              <Switch>
                {/* <Route exact strict path="/farm" component={FarmListPage} /> */}
                {/* <Route exact strict path="/farm/:poolId" component={Farm} /> */}

                {/* <Route exact strict path="/assets" component={AssetsListPage} /> */}

                {/* <Route exact strict path="/stake" component={StakingPage} /> */}

                {/* <Route exact strict path="/send" component={RedirectPathToSwapOnly} /> */}
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/swap" component={Swap} />

                {/* <Route exact strict path="/pool/import" component={PoolFinder} /> */}
                {/* <Route exact strict path="/pool/v2" component={PoolV2} /> */}
                {/* ////////////////<Route exact strict path="/pool" component={Pool} /> /////////////////*/}
                {/* <Redirect from="/pool" to="/pool/v2" /> */}
                {/* /////////////<Route exact strict path="/pool/:tokenId" component={PositionPage} ////////////////> */}

                {/* <Route
                  exact
                  strict
                  path="/add/v2/:currencyIdA?/:currencyIdB?"
                  component={RedirectDuplicateTokenIdsV2}
                />

                <Route
                  exact
                  strict
                  path="/add/:currencyIdA?/:currencyIdB?/:feeAmount?"
                  component={RedirectDuplicateTokenIdsV2}
                /> */}

                {/*////////// <Route
                  exact
                  strict
                  path="/increase/:currencyIdA?/:currencyIdB?/:feeAmount?/:tokenId?"
                  component={AddLiquidity}
                /> /////////////////*/}

                {/* <Route exact strict path="/remove/v2/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} /> */}
                {/* ///////////<Route exact strict path="/remove/:tokenId" component={RemoveLiquidityV3} />//////////////// */}

                {/* /////////////<Route exact strict path="/migrate/v2" component={MigrateV2} /> ////////////*/}
                {/* ////////////<Route exact strict path="/migrate/v2/:address" component={MigrateV2Pair} /> ///////////////*/}

                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
          </BodyWrapper>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
