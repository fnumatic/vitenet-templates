import { NavItem } from "./ui/NavItem";

export const NavBar = () => (
  <nav className='px-4 pb-5 pt-7 shadow-sm'>
    <div className='mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl'>
      <div className='flex items-center gap-2 sm:gap-4'>
        <NavItem className='text-xl font-semibold text-gray-800' to='/'> MyProject </NavItem>
      </div>
      <div className='flex items-center gap-4 sm:gap-8'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/test'>Test</NavItem>
      </div>
    </div>
  </nav>
);
