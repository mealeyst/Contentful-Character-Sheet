import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextInput, Label } from '../html'

const Hitdice = styled(({className, values, setValue}) => {
  const total = 'character_hit_dice_total'
  const current = 'character_hit_dice_current'
  return (
    <div className={className}>
      <div>
      <Label htmlFor={total}>Hit Dice:</Label>
      <TextInput name={total} id={total} onChange={setValue(total)} defaultValue={values[total] || 0} />
        <Label htmlFor={current}>Total:</Label>
        <TextInput name={current} id={current} onChange={setValue(current)} defaultValue={values[current] || 0} />
      </div>
    </div>
  )
})`
  display: flex;
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 10px;
  > div {
    border-radius: 5px;
    border: 1px solid #CCC;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    > * {
       flex: 0 0 auto;
       box-sizing: border-box;
       width: 100%;
       margin-top: 10px;
    }
  }
`

Hitdice.propTypes = {

}

/** @component */
export default Hitdice
