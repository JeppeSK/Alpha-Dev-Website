import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, FiShoppingBag, BsPerson} from 'react-icons/ai'
import {useEffect, useState} from 'react'

const NavbarShopping = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor('#ffffff')
          setTextColor('#000000')
        } else {
          setColor('transparent')
          setTextColor('#ffffff')
        }
      }
      window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between 
            items-center p-4 text-white'>

                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Jeppe Skjødt Knudsen</h1>

                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                  <li className="p-4">
                   <Link href="/">Home</Link>
                  </li>
                  <li className="p-4">
                   <div>
                    <FiShoppingBag size={20}/>
                   </div>
                  </li>
                    <div>
                    <BsPerson size={20}/>
                    </div>
                </ul> 

                {/* Mobile Button */}

                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> :
                    <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>

                {/* Mobile Menu */}

                <div className={
                  nav 
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                  }
                >   
                 <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                  <li className="p-4">
                   <Link href="/">Home</Link>
                  </li>
                   <li className="p-4">
                    <div>
                     <FiShoppingBag size={20}/>
                    </div>
                   </li>
                    <div>
                     <BsPerson size={20}/>
                    </div>
                 </ul> 
                </div>
            </div>
        </div>
    )
}

export default NavbarShopping