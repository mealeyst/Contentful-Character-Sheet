import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextInput = styled((props) => <input type='text' {...props}/>)`
  border: 1px solid #CCC;
  background: #f0f0ff;
  border-radius: 5px;
  font-size: 20px;
  height: 38px;
`

TextInput.propTypes = {

}

/** @component */
export default TextInput
