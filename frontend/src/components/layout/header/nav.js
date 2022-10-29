
import Link from "next/link";
import { useState } from 'react';

const Nav = ({ header, headerMenus }) => {
    const [isMenuVisible, setMenuVisibility] = useState(0);

    if (Object.entries(headerMenus).length === 0) {
        return null;
    }


    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            onClick={() => {
                                return (
                                    setMenuVisibility(!isMenuVisible),
                                    console.log("hi")
                                )
                            }}
                            type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block  w-20 lg:hidden mr-4" src={header?.siteLogoUrl} alt="Your Company" />
                            <img className="hidden w-20 lg:block" src={header?.siteLogoUrl} alt="Your Company" />
                            {/* <span className="text-gray-300 font-semibold text-xl tracking-tight">{header?.siteTitle}</span> */}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            {headerMenus?.length ? (
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    {headerMenus?.map(menu => (
                                        <Link key={menu?.node?.id} href={menu?.node?.path}>
                                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                {menu?.node?.label}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isMenuVisible ? 'block' : 'hidden'}`} id="mobile-menu">
                {headerMenus?.length ? (
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {headerMenus?.map(menu => (
                            <Link key={menu?.node?.id} href={menu?.node?.path}>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    {menu?.node?.label}
                                </a>
                            </Link>
                        ))}

                    </div>
                ) : null}
            </div>
        </nav >

    );
}

export default Nav;