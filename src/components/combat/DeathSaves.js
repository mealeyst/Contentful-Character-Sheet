import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label, Checkbox } from '../html'

class BaseDeathSaves extends React.Component {
  checkSave = (element) => {
    const { target } = element
    const { setValue } = this.props
    console.log(target.name, target.checked)
    setValue(target.name)({target: {value: target.checked} })
  }
  render () {
    const { className, values } = this.props
    const success_name = 'character_death_save_success'
    const failure_name = 'character_death_save_failure'
    // const saves = Object.keys(values).filter((key) => key.includes(success_name)).map((key) => values[key])
    // console.log(saves)
    return (
      <div className={className}>
        <div>
          <h4>Death Saves:</h4>
          <div>
            <Label>Successes:</Label>
            <Checkbox name={`${success_name}_first`} checked={values[`${success_name}_first`]} onClick={this.checkSave}/>
            <Checkbox name={`${success_name}_second`} checked={values[`${success_name}_second`]} onClick={this.checkSave}/>
            <Checkbox name={`${success_name}_third`} checked={values[`${success_name}_third`]} onClick={this.checkSave}/>
          </div>
          <div>
            <Label>Failures:</Label>
            <Checkbox name={`${failure_name}_first`} value={values[`${failure_name}_first`]} onClick={this.checkSave}/>
            <Checkbox name={`${failure_name}_second`} value={values[`${failure_name}_second`]} onClick={this.checkSave}/>
            <Checkbox name={`${failure_name}_third`} value={values[`${failure_name}_third`]} onClick={this.checkSave}/>
          </div>
        </div>
      </div>
    )
  }
}

const DeathSaves = styled(BaseDeathSaves)`
  display: flex;
  flex-basis: 50%;
  flex-wrap: wrap;
  padding: 5px;
  box-sizing: border-box;
  padding: 10px
  > div {
    border: 1px solid #CCC;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    > * {
      flex-basis: 100%;
      display: flex;
      align-items: center;
      margin: 5px;
    }
    ${Label} {
      margin-bottom: 0;
    }
  }
`

DeathSaves.propTypes = {

}

/** @component */
export default DeathSaves
