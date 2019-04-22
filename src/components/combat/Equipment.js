import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../html'
import { Coins } from './'
import { currencyDenominations } from '../config'

const Equipment = styled(({className}) => {
  return (
    <div className={className}>
      <aside className='currency'>
        {
          currencyDenominations.map((denomination) => {
            return (<Coins denomination={denomination} />)
          })
        }
      </aside>
      <aside className='equipment'>
        <h3>Equipment</h3>
        <div><Textarea /></div>
      </aside>
    </div>
  )
})`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  > aside {
    flex: 1 1 auto;
  }
  .currency {
    flex: 0 0 10%;
  }
  .equipment {
    flex-basis: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: flex-start;
    padding: 5px;
    margin: 5px;
    border: 1px solid #CCC;
    border-radius: 5px;
    > * {
      margin: 5px;
    }
    div {
      flex: 1 1 100%;
      height: 100%;
      padding: 5px;

    }
    ${Textarea} {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
`

Equipment.propTypes = {

}

/** @component */
export default Equipment
