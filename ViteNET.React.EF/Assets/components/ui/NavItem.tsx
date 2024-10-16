import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem = ({to,className, children}: NavItemProps) => <Link
  className={`text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white ${className}`}
  to={to}
>
  {children}
</Link>;