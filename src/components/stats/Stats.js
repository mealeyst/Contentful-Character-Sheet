import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Attributes,
  Languages,
  PassivePerception,
  Proficiencies,
  RollChecks,
} from './'


const Stats  = styled(({className, ...props}) => {
  return (
    <aside className={className}>
      <Attributes {...props} />
      <RollChecks {...props} />
      <PassivePerception {...props} />
      <Languages {...props} />
      <Proficiencies {...props} />
    </aside>
  )
})`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
`

Stats.propTypes = {

}

/** @component */
export default Stats
