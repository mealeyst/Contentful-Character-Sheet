import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Attack = styled(({
  attributes,
  className,
  damage,
  name,
  range,
  type,
  values
}) => {
  let modifier = 0
  attributes.map((attribute) => {
    if(values[attribute] && values[attribute].modifier > modifier) {
      modifier = values[attribute].modifier
    }
  })
  let proficiency_bonus = values.proficiency_bonus ? parseInt(values.proficiency_bonus) : 0
  const bonus = (modifier + proficiency_bonus)
  return (
    <div className={className}>{name} | +{bonus} | {damage} {type}{range && ` ${range}`}</div>
  )
})`
  margin: 5px;
`

Attack.propTypes = {
  bonus: PropTypes.string,
  className: PropTypes.string,
  damage: PropTypes.string,
  range: PropTypes.string,
  type: PropTypes.string
}

/** @component */
export default Attack
