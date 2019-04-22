import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../'

const Flaw = styled(({className}) => {
  return (
    <div className={className}>
      <Textarea />
    </div>
  )
})`

`

Flaw.propTypes = {

}

/** @component */
export default Flaw
