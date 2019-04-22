import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Attack } from './'

const Attacks = styled(({className, ...props}) => {
  return (
    <div className={className}>
      <h3>Attacks and Spell Casting:</h3>
      <Attack
        name={'Shortsword'}
        damage={'1d6'}
        type={'piercing'}
        attributes={['attr_str', 'attr_dex']}
        {...props} />
    </div>
  )
})`
  flex-basis: 100%;
  border: 1px solid #CCC;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  h3 {
    margin: 5px;
  }
`

Attacks.propTypes = {

}

/** @component */
export default Attacks
