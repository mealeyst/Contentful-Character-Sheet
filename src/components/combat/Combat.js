import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Armor,
  Attacks,
  DeathSaves,
  Equipment,
  Hitdice,
  Hitpoints,
  Initiative,
  Speed
} from './'

const Combat = styled(({className, ...props}) => {
  return (
    <div className={className}>
      <Armor {...props} />
      <Initiative {...props} />
      <Speed {...props} />
      <Hitpoints {...props} />
      <Hitdice {...props} />
      <DeathSaves {...props} />
    </div>
  )
})`
  flex-basis: 33%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

Combat.propTypes = {

}

/** @component */
export default Combat
