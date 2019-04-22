import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {  Checkbox, Label, TextInput } from '../'
import { SavingThrows, Skills } from './'
import * as config from '../config'

const RollChecks = styled(({className, ...props}) => {
  const { setValue, values} = props
  return (
    <aside className={className}>
      <div className='left'>
        <div className='inspiration'>
        <Label htmlFor='character_inspired'>Inspiration:</Label>
          <Checkbox
            name="character_inspired"
            id="character_inspired"
            checked={values.character_inspired || false}
            onChange={setValue('character_inspired')} />
        </div>
        <div className='proficiency'>
          <Label htmlFor='proficiency_bonus'>Proficiency Bonus:</Label>
          <TextInput
            className='proficiency'
            required
            name='proficiency_bonus'
            id='proficiency_bonus'
            type='number'
            defaultValue={values.proficiency_bonus || 0}
            onBlur={setValue('proficiency_bonus')} />
        </div>
        <SavingThrows {...props} />
      </div>
      <div className='right'>
        <Skills {...props} />
      </div>
    </aside>
  )
})`
  margin-bottom: 10px;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .proficiency, .inspiration {
    border: 1px solid #CCC;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-basis: 100%;
    box-sizing: border-box;
    > * {
      padding: 5px;
    }
    label {
      margin-bottom: 0 !important;
      line-height: 36px;
      flex-basis: auto;
    }
    input[type="number"] {
      flex-basis: 60px;
      max-width: 60px;
    }
  }
  .left, .right {
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 5px;
  }
`

RollChecks.propTypes = {
  className: PropTypes.string
}

/** @component */
export default RollChecks
