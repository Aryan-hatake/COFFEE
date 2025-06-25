import React from 'react'

const Footer = () => {
 const currentyear=new Date().getFullYear()
  return (
    <div className='h-[10vh] items-center bg-gradient-to-tl from-neutral-800 to-purple-900 text-white flex justify-center px-6' >
     Get Aryan a coffee -  All copyrights Reserved &copy; {currentyear}
    </div>
  )
}

export default Footer
