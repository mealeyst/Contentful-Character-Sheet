import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextInput, Label } from '../html'

const Hitpoints = styled(({className, setValue, values}) => {
  const total = 'character_hit_point_total'
  const current = 'character_current_hit_point'
  const temp = 'character_temp_hit_points'
  return (
    <div className={className}>
      <div>
        <Label htmlFor={total}>Hit Point Maximum:</Label>
        <TextInput
          name={total}
          id={total}
          defaultValue={values[total] | 0}
          onChange={setValue(total)} />
      </div>
      <div>
        <Label htmlFor={current}>Current Hit Points:</Label>
        <TextInput
          name={current}
          id={current}
          defaultValue={values[current] | 0}
          onChange={setValue(current)} />
      </div>
      <div>
        <Label htmlFor={temp}>Temporary Hit Points:</Label>
        <TextInput
          name={temp}
          id={temp}
          defaultValue={values[temp] | 0}
          onChange={setValue(temp)} />
      </div>
    </div>
  )
})`
  display: flex;
  padding: 5px;
  flex-basis: 100%;
  > div {
    border: 1px solid #CCC;
    border-radius: 5px;
    flex-basis: 33%;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 10px;
  }
  ${Label} {
    flex-basis: 100%;
    width: 100%;
  }
  ${TextInput} {
    flex-basis: 60px;
    width: 60px;
  }
`

Hitpoints.propTypes = {

}

/** @component */
export default Hitpoints
