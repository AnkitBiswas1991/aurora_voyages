import React from 'react'

const Heading3 = function({heading, headClass}) {
  return (
    <h3 className={`mb-4 font-medium text-[22px] lg:text-[26px] xl:text-[30px] ${headClass}`}>{heading}</h3>
  )
}

export default Heading3
