import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Dropdown,
  DropdownList,
  DropdownListItem,
  FormLabel,
  Icon
} from  '@contentful/forma-36-react-components';

export class ComplexDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonText: props.defaultValue || props.values[0],
      isOpen: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.selectValue = this.selectValue.bind(this)
  }

  toggleDropdown () {
    const { isOpen } = this.state
    this.setState({isOpen: !isOpen})
  }

  selectValue (element) {
    const { name, setValue } = this.props
    const value = element.target.innerText
    this.setState({buttonText: value})
    setValue(name)({target: {value: value} })
    this.toggleDropdown()
  }

  render () {
    const { buttonText, isOpen } = this.state
    const { labelText, className, maxHeight, values, name } = this.props
    return (
      <div>
      <FormLabel htmlFor={name}>{labelText}</FormLabel>
      <Dropdown
        className={className}
        isOpen={isOpen}
        name={name}
        id={name}
        toggleElement={
          <Button
            onClick={() => this.toggleDropdown('character_class')}
            buttonType='muted'>
            {buttonText} <Icon icon='ArrowDown' />
          </Button>
        }>
        <DropdownList maxHeight={maxHeight}>
          {values.map((value) => {
            return (
              <DropdownListItem
                key={value}
                onClick={this.selectValue}>
                {value}
              </DropdownListItem>
            )
          })}
        </DropdownList>
      </Dropdown>
      </div>
    )
  }
}

ComplexDropdown.propTypes = {
  labelText: PropTypes.string,
  maxHeight: PropTypes.number,
  values: PropTypes.array
}

export default styled(ComplexDropdown)`
  display: flex;
  > button {
    flex-basis: 100%;
    span {
      display: flex;
      span {
        display: flex;
        flex-basis: 100%;
        align-content: center;
        justify-content: space-between;
      }
    }
`
