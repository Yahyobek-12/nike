import logo from '../assets/images/header-logo.svg';
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={logo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map(item => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-orange-500 font-medium'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
                <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
