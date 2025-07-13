import React from 'react'

const Heading1 = function({heading, headClass}) {
  return (
    <h1 className={`mb-6 font-medium text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] ${headClass}`}>{heading}</h1>
  )
}

export default Heading1
