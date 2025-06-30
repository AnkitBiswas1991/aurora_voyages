import React from 'react'

const Heading2 = function({heading, headClass}) {
    const style = {
        fontSize: "40px",
    }
  return (
    <h2 className={`mb-6 font-medium ${headClass}`} style={style}>{heading}</h2>
  )
}

export default Heading2
