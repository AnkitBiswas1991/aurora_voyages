import React from 'react'

const Heading1 = function({heading, headClass}) {
    const style = {
        fontSize: "45px",
    }
  return (
    <h1 className={`mb-6 font-medium ${headClass}`} style={style}>{heading}</h1>
  )
}

export default Heading1
