import  React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextInput, Label } from '../'

const PassivePerception = styled(({className, setValue, values}) => {
  const name = 'character_passive_perception'
  const defaultValue = values.attr_wis.modifier + 10
  return (
    <div className={className}>
      <Label htmlFor='character_passive_perception'>Passive Perception:</Label>
      <TextInput
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={setValue(name)} />
    </div>
  )
})`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  border: 1px solid #CCC;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  ${Label} {
    padding: 10px;
    line-height: 36px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  ${TextInput} {
    margin-bottom: 0;
    flex-basis: 36px;
  }
  // > *:first-child {
  //   padding: 10px;
  //   line-height: 36px;
  // }
  // > *:last-of-type {
  //   margin-bottom: 0;
  //   flex-basis: 36px;
  // }
`

PassivePerception.propTypes = {

}

/** @component */
export default PassivePerception
