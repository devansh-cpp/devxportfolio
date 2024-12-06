import React from 'react'
import { ExpandableCardDemo } from './grid-card'

function Projects() {
  return (
   <>
   <div id='projects' className='p-4 sm:py-12'>
     <h1 className='text-center sm:mb-14 md:text-5xl text-2xl text-[#DAC5A7] font-bold p-4'>My Creations</h1>
    <ExpandableCardDemo/>
    </div>
   </>
  )
}

export default Projects