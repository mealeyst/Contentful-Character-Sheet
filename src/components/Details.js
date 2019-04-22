import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextInput, Label } from './html'
import Dropdown from './Dropdown';
import * as config from './config'

const Details = styled(({className, values, setValue}) => {
  const defaultValues = {
    character_alignment: (values && values.character_alignment) ? values.character_alignment : undefined,
    character_background: (values && values.character_background) ? values.character_background : undefined,
    character_class: (values && values.character_class) ? values.character_class : undefined,
    character_level: (values && values.character_level) ? values.character_level : '',
    character_race: (values && values.character_race) ? values.character_race : undefined,
    player_name: (values && values.player_name) ? values.player_name : ''
  }
  return (
    <aside className={className} id='character_details' aria-label='Character Details'>
      <div>
        <Dropdown
          labelText='Class:'
          maxHeight={150}
          name='character_class'
          values={config.classes}
          defaultValue={defaultValues.character_class}
          setValue={setValue} />
        <Dropdown
          labelText='Background:'
          maxHeight={200}
          name='character_background'
          values={config.backgrounds}
          defaultValue={defaultValues.character_background}
          setValue={setValue} />
        <div>
        <Label htmlFor='player_name'>Player Name:</Label>
          <TextInput
            required
            name='player_name'
            id='player_name'
            defaultValue={defaultValues.player_name}
            onBlur={setValue('player_name')} />
        </div>
        <Dropdown
          labelText='Race:'
          maxHeight={200}
          name='character_race'
          values={config.races}
          defaultValue={defaultValues.character_race}
          setValue={setValue} />
        <Dropdown
          labelText='Alignment:'
          maxHeight={200}
          name='character_alignment'
          values={config.alignment}
          defaultValue={defaultValues.character_alignment}
          setValue={setValue} />
          <div>
            <Label htmlFor='player_name'>Level:</Label>
            <TextInput
              required
              name='character_level'
              id='character_level'
              defaultValue={defaultValues.character_level}
              onBlur={setValue('character_level')} />

          </div>
        </div>
    </aside>
  )
})`
  padding: 10px;
  box-sizing: border-box;
  flex-basis: 100%;
  > div {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #CCC;
    border-radius: 5px;
    > * {
      flex-basis: 33%;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      > * {
        flex-basis: 100%;
      }
    }
  }
`

Details.propTypes = {

}

export default Details
