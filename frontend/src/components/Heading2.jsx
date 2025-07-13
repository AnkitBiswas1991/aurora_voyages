import React from 'react'

const Heading2 = function({heading, headClass}) {
  return (
    <h2 className={`mb-4 lg:mb-6 font-medium text-[26px] md:text-[30px] lg:text-[35px] xl:text-[40px] ${headClass}`}>{heading}</h2>
  )
}

export default Heading2
