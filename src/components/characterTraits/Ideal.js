import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../'

const Ideal = styled(({className}) => {
  return (
    <div className={className}>
      <Textarea />
    </div>
  )
})`

`

Ideal.propTypes = {

}

/** @component */
export default Ideal
