"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const path = usePathname();

    // For "/" use exact match, for others use startsWith
    const isActive = href === "/" ? path === "/" : path.startsWith(href);

    return (
        <Link 
            className={`${isActive ? 'text-primary font-semibold text-base' : 'text-gray-700'}`} 
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLink;