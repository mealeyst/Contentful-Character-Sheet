import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextInput, Label } from '../html'

const Initiative = styled(({className, setValue, values}) => {
  const name = 'character_initiative'
  const defaultValue = values['attr_dex'].modifier
  return (
    <div className={className}>
      <div>
        <Label htmlFor={name}>Initiative:</Label>
        <TextInput
          name={name}
          id={name}
          defaultValue={defaultValue}
          onChange={setValue(name)} />
      </div>
    </div>
  )
})`
flex: 0 0 33%;
box-sizing: border-box;
padding: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
> div {
  border: 1px solid #CCC;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  alignment-items: center;
  padding: 10px;
  flex-basis: 100%;
}
${Label} {
  display: inline;
  margin-left: auto;
  margin-right: auto;
  flex-basis: 100%;
  text-align: center;
}
${TextInput} {
  display: block;
  box-sizing: border-box;
  width: 38px;
  margin: 0 auto;
}
`

Initiative.propTypes = {

}

/** @component */
export default Initiative
