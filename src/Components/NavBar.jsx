import React from 'react'


export default function NavBar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>Marketplace.com !</a>
        <ul>
            <li>
               <a href='/products'>Products</a>
               </li>
               <li>
               <a href='/about'>Sale</a> 
            </li>
            <li>
               <a href='/'>About</a> 
            </li>
        </ul>
    </nav>
  )
}
