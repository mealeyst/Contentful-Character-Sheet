import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../'

const PersonalityTrait = styled(({className}) => {
  return (
    <div className={className}>
      <Textarea />
    </div>
  )
})`

`

PersonalityTrait.propTypes = {

}

/** @component */
export default PersonalityTrait
