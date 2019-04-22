import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Checkbox, TextInput, Label } from '../'


export class RollCheck extends React.Component {
  constructor (props) {
    super(props)
    console.log()
    this.state = {
      checked: props.proficientChecked,
      value: 0
    }
  }

  toggleChange = () => {
    const { checked } = this.state
    const { name, setValue } = this.props
    setValue(`${name}_proficient`)({target: {value: !checked}})
    this.setState({checked: !checked})
  }

  updateValue = () => {
    const { checked, value: prevVal } = this.state
    const { proficiency, modifier, name, setValue } = this.props
    const value = checked ? (modifier + proficiency) : modifier
    if (prevVal !== value) {
      this.setState({value: value})
      setValue(name)({target: {value: value}})
    }
  }

  componentDidMount () {
    this.updateValue()
  }
  componentDidUpdate () {
    this.updateValue()
  }

  render () {
    const { checked, value } = this.state
    const { className, name, info, label } = this.props
    return (
      <div className={className} key={name}>
        <Checkbox
          id={`${name}_prof`}
          name={`${name}_prof`}
          checked={checked}
          onChange={this.toggleChange} />
        <TextInput
          disabled
          type='number'
          id={name}
          name={name}
          value={value} />
        <Label htmlFor={name}>
          {label}
          {info &&
            <span>({info.substring(0, 3)})</span>
          }
        </Label>
      </div>
    )
  }
}

export default styled(RollCheck)`
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  ${Checkbox}, ${TextInput} {
    display: flex;
  }
  ${Checkbox}, ${Label}, ${TextInput} {
    height: 30px;
    padding: 5px;
  }
  ${TextInput}, ${Checkbox} {
    width: 30px;
    text-align: center;
  }
  ${Label} {
    text-align: center;
    line-height: 20px;
    span {
      color: #CCC;
      margin-left: 5px;
    }
  }
`
