import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, Textarea } from '../'
const Proficiencies = styled(({className, setValue, values}) => {
  const name = 'character_proficiencies'
  const defaultValue = values[name]
  return (
    <div className={className}>
      <Label htmlFor='character_proficiencies'>Proficiencies:</Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        onBlur={setValue('character_proficiencies')} />
    </div>
  )
})`
  flex-basis: 100%;
  border: 1px solid #CCC;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  ${Textarea} {
    display: flex;
    width: 100%;
    height: 100px;
  }
`

Proficiencies.propTypes = {
  className: PropTypes.string
}

/** @component */
export default Proficiencies
