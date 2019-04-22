import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextInput, Label } from '../html'

const Armor = styled(({className, setValue, values}) => {
  const name = 'character_armor_class'
  const defaultValue = values[name] || values['attr_dex'].modifier
  return (
    <div className={className}>
      <div>
        <Label htmlFor={name}>Armor Class:</Label>
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
  display: flex;
  justify-content: center;
  padding: 10px;
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

Armor.propTypes = {

}

/** @component */
export default Armor
