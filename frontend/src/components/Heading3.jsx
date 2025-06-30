import React from 'react'

const Heading3 = function({heading, headClass}) {
    const style = {
        fontSize: "30px",
    }
  return (
    <h3 className={`mb-4 font-medium ${headClass}`} style={style}>{heading}</h3>
  )
}

export default Heading3
