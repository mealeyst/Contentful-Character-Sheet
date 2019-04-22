import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label, TextInput } from './html'
const CharacterName = styled(({className, setValue, defaultValue}) => {
  return (
    <div className={className}>
      <div>
        <TextInput
          required
          name='character_name'
          id='character_name'
          onBlur={setValue('character_name')}
          defaultValue={defaultValue} />
        <Label htmlFor='character_name'>Character Name</Label>
      </div>
    </div>
  )
})`
  flex-basis: 100%;
  align-content: center;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
    > div {
      border: 1px solid #CCC;
      padding: 10px;
      display: flex;
      border-radius: 5px;
      flex-basis: 100%;
      height: 100%;
      align-items: center;
      box-sizing: border-box;
      ${TextInput} {
        margin-right: 10px;
      }
      ${Label} {
        line-height: 34px;
        text-align: center;
      }
  }
  @media (min-width: 769px) {
    flex-basis: 33%;
    align-items: center;
  }
`

CharacterName.propTypes = {

}

/** @component */
export default CharacterName
