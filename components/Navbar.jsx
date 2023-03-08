import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const hackerEffect = (event) => {

  let iterations = 0;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const interval = setInterval(() => { 
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 3;
  }, 30)
}

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between 
            items-center p-4 text-white'>

                <h1 data-value="Jeppe Skjødt Knudsen" className='font-bold text-4xl' onMouseOver={hackerEffect}>Jeppe Skjødt Knudsen</h1>

                <ul className='hidden sm:flex'>
                  <li className="p-4">
                   <Link href="/">Home</Link>
                  </li>
                  <li className="p-4">
                   <Link href="/#gallery">Gallery</Link>
                  </li>
                  <li className="p-4">
                   <Link href="/Portfolio">Work</Link>
                  </li>
                  <li className="p-4">
                   <Link href="/Contact">Contact</Link>
                  </li>
                </ul> 

                {/* Mobile Button */}

                <div className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Menu */}

                <div className={
                nav ? 
                'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
                :
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }
                >
                  <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                      <Link href="/">Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                      <Link href="/#gallery">Gallery</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                      <Link href="/Portfolio">Work</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                      <Link href="/Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
    

            </div>
        </div>
    )
}

export default Navbar