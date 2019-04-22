import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  PersonalityTrait,
  Ideal,
  Bond,
  Flaw,
  Features
} from './'

const CharacterTraits = styled(({className}) => {
  return (
    <div className={className}>
      <PersonalityTrait />
      <Ideal />
      <Bond />
      <Flaw />
      <Features />
    </div>
  )
})`
  flex-basis: 33%;
  display: flex;
  flex-wrap: wrap;
`

CharacterTraits.propTypes = {

}

/** @component */
export default CharacterTraits
