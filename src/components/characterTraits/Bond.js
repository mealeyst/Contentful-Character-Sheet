import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Textarea } from '../'

const Bond = styled(({className}) => {
  return (
    <div className={className}>
      <Textarea />
    </div>
  )
})`

`

Bond.propTypes = {

}

/** @component */
export default Bond
