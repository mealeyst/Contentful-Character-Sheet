import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading } from '@contentful/forma-36-react-components'

import RollCheck from './RollCheck'
import * as config from '../config'

const Skills = styled(({className, values, ...props}) => {
  return (
    <div className={className}>
      <Heading element='h3'>Skills:</Heading>
      {config.skills.map((skill) => {
        const value = values[
          Object.keys(config.attributes)[skill.attribute]
        ]
        const modifier = (value && value.modifier) || 0
        const proficientChecked = values[`skill_${skill.name.toLowerCase()}_proficient`] || false
        return (
          <RollCheck
            key={skill.name}
            name={`skill_${skill.name.toLowerCase()}`}
            label={skill.name}
            info={config.getAttribute(skill.attribute)}
            attribute={skill.attribute}
            modifier={parseInt(modifier)}
            proficiency={parseInt(values.proficiency_bonus) || 0}
            proficientChecked={proficientChecked}
            {...props} />
          )
        }
      )}
    </div>
  )
})`
  flex-basis: 100%;
`

Skills.propTypes = {

}

/** @component */
export default Skills
