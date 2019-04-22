import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../'

const Features = styled(({className}) => {
  return (
    <div className={className}>
      <Textarea />
    </div>
  )
})`

`

Features.propTypes = {

}

/** @component */
export default Features
