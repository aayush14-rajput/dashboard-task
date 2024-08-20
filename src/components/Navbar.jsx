import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (


        <div className="bg-slate-50 container mx-auto flex flex-col px-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-2">
                {/* <!-- Navigation Links --> */}
                <div className='flex items-center space-x-2 mb-4 md:mb-0'>
                    <a href="/home" className='opacity-30 hover:opacity-100 transition-opacity'>Home</a>
                    <KeyboardArrowRightIcon className='opacity-25' />
                    <a href="/dashboard" className='hover:text-blue-700 hover:font-bold hover:text-base'>Dashboard V2</a>
                </div>

                <div class="flex items-center justify-center">
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><SearchIcon /></svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    </label>
                </div>

            </div>
        </div>




    )
}

export default Navbar