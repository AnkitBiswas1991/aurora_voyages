import React from 'react'

const Heading4 = function({heading, headClass}) {
    const style = {
        fontSize: "25px",
    }
  return (
    <h4 className={`mb-3 font-medium ${headClass}`} style={style}>{heading}</h4>
  )
}

export default Heading4
