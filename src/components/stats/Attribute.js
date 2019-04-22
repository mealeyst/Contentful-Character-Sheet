import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, Label } from '../'
import styled from 'styled-components'

export class Attribute extends React.Component {
  constructor (props) {
    super(props)
    const { name: inputName, values } = props
    this.state = {
      modifier: (values && values[inputName]) ? values[inputName].modifier : '-5'
    }
    this.setModifier = this.setModifier.bind(this)
  }
  setModifier (event) {
    const { name, setValue } = this.props
    const { target: { value } } = event
    const inValue = parseInt(value) || 0
    const modifier = Math.floor((inValue - 10) / 2)
    this.setState({modifier: modifier})
    setValue(name)({
      target: {
        value: {
          value: inValue,
          modifier: modifier
        }
      }
    })
  }
  render () {
    const {
      attribute: {
        name: attributeName
      },
      className,
      name: inputName,
      setValue,
      values
    } = this.props
    const defaultValue = (values && values[inputName]) ? values[inputName].value : '0'
    const { modifier } = this.state
    return (
      <div className={className} key={`attribute-${attributeName.toLowerCase()}`}>
        <div>
          <Label htmlFor={attributeName}>{attributeName}</Label>
          <TextInput
            required
            aria-label={`${attributeName} Attribute`}
            name={inputName}
            id={inputName}
            max='30'
            type='number'
            defaultValue={defaultValue}
            onBlur={this.setModifier}/>
          <Label className='subLabel' htmlFor={`${attributeName}_mod`}>Modifier</Label>
          <TextInput
            aria-label={`${attributeName} Attribute Modifier`}
            name={`${attributeName}_mod`}
            id={`${attributeName}_mod`}
            type='number'
            value={modifier}
            disabled />
          </div>
      </div>
    )
  }
}

export default styled(Attribute)`
  flex-basis: 100%;
  padding: 10px;
  display: flex;
  box-sizing: border-box;
  > div {
    border: 1px solid #CCC;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 410px) {
    flex-basis: 33%;
    > div {
      flex-direction: column;
    }
  }
  @media (min-width: 592px) {
    flex-basis: 33%;

  }

  ${TextInput} {
    display: flex;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  ${TextInput}:first-of-type {
    height: 60px;
    width: 60px;
    font-size: 35px;
  }
  ${TextInput}:last-of-type {
    height: 30px;
    width: 30px;
    font-size: 16px;
  }
  .subLabel {
    font-size: 12px;
    margin-bottom: 0;
  }
`
