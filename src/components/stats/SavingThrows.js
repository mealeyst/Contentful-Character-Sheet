import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading } from '@contentful/forma-36-react-components'

import RollCheck from './RollCheck'
import { attributes } from '../config'

const SavingThrows = styled(({className, values, ...props}) => {
  return (
    <div className={className}>
      <Heading element='h3'>Saving Throws:</Heading>
      {Object.keys(attributes).map((key) => {
        const modifier = (values[key] && values[key].modifier) || 0
        const proficientChecked = values[`${attributes[key].name.toLowerCase()}_save_proficient`] || false
        return (
          <RollCheck
            key={key}
            name={`${attributes[key].name.toLowerCase()}_save`}
            label={attributes[key].name}
            attribute={attributes[key].name}
            modifier={parseInt(modifier)}
            proficiency={parseInt(values.proficiency_bonus) || 0}
            proficientChecked={proficientChecked}
            {...props} />
        )
      })}
    </div>
  )
})`
  flex-basis: 100%;
`

SavingThrows.propTypes = {
  className: PropTypes.string
}

/** @component */
export default SavingThrows
