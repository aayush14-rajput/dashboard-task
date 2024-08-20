import React, { useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import useStore from '../useStore';
const CWPP = () => {
    const setCheckButton = useStore((state) => state.setCheckButton);
    const cwpp1 = useStore((state) => state.cwpp1);
    const cwpp2 = useStore((state) => state.cwpp2);
    const [checkValue, setCheckValue] = useState(false);

    const toggleSwitch = () => {
        setCheckValue(true);
        setCheckButton(checkValue);
        console.log("button",checkValue)
      };
  return (

    <div>
        <h3 className='font-bold mx-10 my-1'>CWPP Dashboard</h3>
        <div className='box-border md:box-content rounded-md bg-gray-300 mx-8 sm:mx-12 md:mx-16 lg:mx-10 max-w-full flex flex-wrap gap-5 p-2'>
                {
                    cwpp1 === true?(<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]">
                        <h2 className="text-lg font-semibold mb-4">Top 5 Namespace Specific Alerts</h2>
                        <div className="flex items-center justify-center text-center">
                            <div className="flex flex-col items-center py-5">
                                <span><TrendingUpIcon /></span>
                                <span>No Graph Data Available</span>
                            </div>
                        </div>
    
                    </div>):(null)
                }

                {
                    cwpp2 === true ? (<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]">
                        <h2 className="text-lg font-semibold mb-4">Workload Alerts</h2>
                        <div className="flex items-center justify-center text-center">
                            <div className="flex flex-col items-center py-4">
                                <span><TrendingUpIcon /></span>
                                <span>No Graph Data Available</span>
                            </div>
                        </div>
    
                    </div>):(null)
                }

                <div className="bg-white rounded-lg flex items-center justify-center p-4 flex-1 min-w-[200px] md:min-w-[250px]">
                    <button onClick={toggleSwitch} className=" bg-slate-50 rounded-md border-2 border-gray-300 font-bold py-2 px-4">
                        + Add Widget
                    </button>
                </div>

            </div>
    </div>
  )
}

export default CWPP