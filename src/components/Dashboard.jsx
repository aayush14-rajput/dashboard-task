import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Container from './Container';
import Widget from '../Widget/Widget';

const Dashboard = () => {
    return (
        <div className='h-screen w-full bg-gray-200 flex flex-col'>
            <div className='flex items-start justify-between px-3 py-4 sm:px-10 md:px-20 lg:px-40 bg-gray-200'>
                <div className='flex items-center'>
                    <span className='text-left font-bold text-lg md:text-xl lg:text-2xl'>CNAPP Dashboard</span>
                </div>
                <div className='flex flex-wrap space-x-4'>
                    <div className='box-border md:box-content bg-slate-50 rounded-md border-2 border-gray-300'>
                        <button className='px-2 flex items-center space-x-1'>
                            <span className='text-sm md:text-base lg:text-lg'>Add Widget</span>
                            <AddIcon />
                        </button>
                    </div>
                    <div className="border-2 border-gray-300 flex items-center justify-center rounded bg-slate-50">
                        <span className='text-sm md:text-base lg:text-lg'><CachedIcon /></span>
                    </div>
                    <div className="border-2 border-gray-300 flex items-center justify-center rounded bg-slate-50">
                        <span className='text-sm md:text-base lg:text-lg'><MoreVertIcon /></span>
                    </div>
                    <div className="flex items-center bg-slate-50 rounded grid-cols-2 divide-x-2 divide-blue-700 border-2 border-blue-700">
                        <span className='text-sm md:text-base lg:text-lg'><WatchLaterIcon /></span>
                        <span className='px-2 text-blue-700 flex items-center text-sm md:text-base lg:text-lg'>
                            Last 2 days <ArrowDropDownIcon />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex-grow'>
                <Container />
                <Widget />
            </div>
        </div>
    )
}

export default Dashboard