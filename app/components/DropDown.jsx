import React, { useState } from 'react'

function DropDown({ menuItems, setSelectedTab, selectedTab }) {

    const [open, setOpen] = useState(false)
    return (
        <div className="w-full flex justify-end ">

            <div className="relative inline-block text-left ">
                <div onClick={() => setOpen(!open)}>
                    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {selectedTab ? selectedTab : 'Filter'}
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {open ? (

                    <div className="absolute right-0 z-10 mt-2 w-full min-w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            {menuItems.map((item, index) => (
                                <a key={index} onClick={() => { setSelectedTab(item), setOpen(!open) }} className="text-gray-300 cursor-pointer block px-4 py-2 text-sm hover:bg-gray-800 hover:text-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">{item}</a>
                            ))}
                        </div>

                    </div>
                ) : null}

            </div>
        </div>

    )
}

export default DropDown