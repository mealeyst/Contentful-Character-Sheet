import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Attribute } from './'
import { attributes } from '../config'
export const Attributes = ({ className, ...props }) => {
  return (
    <aside
      className={className}
      id='character_attributes'
      aria-label='Character attributes'>
      {Object.keys(attributes).map((key) => {
        return (
          <Attribute
            key={key}
            name={key}
            attribute={attributes[key]}
            {...props} />
        )
      })}
    </aside>
  )
}

export default styled(Attributes)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-basis: 100%;
  @media (min-width: 1440px) {
    border: 1px solid blue;
    flex-basis: 25%;
  }
`
