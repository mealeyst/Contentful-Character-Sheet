import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, TextInput } from '../html'
const Coins = styled(({className, denomination}) => {
  const label = denomination.split('_').map((word) => word[0].toUpperCase()).join('')
  return (
    <div className={className}>
      <Label>{label}</Label>
      <TextInput />
    </div>
  )
})`
  border: 1px solid #CCC;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px;
  > * {
    margin: 5px;
  }
  ${TextInput} {
    width: 50px;
  }
  ${Label} {
    margin-bottom: 0;
  }
`

Coins.propTypes = {

}

/** @component */
export default Coins
