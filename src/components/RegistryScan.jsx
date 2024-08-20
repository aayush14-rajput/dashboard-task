import React, { useState } from 'react'
import useStore from '../useStore';

const RegistryScan = () => {
    const setCheckButton = useStore((state) => state.setCheckButton);
    const registry1 = useStore((state) => state.registry1);
    const registry2 = useStore((state) => state.registry2);
    const [checkValue, setCheckValue] = useState(false);

    const toggleSwitch = () => {
        setCheckValue(true);
        setCheckButton(checkValue);
        console.log("button",checkValue)
      };
  return (
    <div>
        <h3 className='font-bold mx-10 my-1'>Registry Scan</h3>
        <div className='box-border md:box-content rounded-md bg-gray-300 mx-8 sm:mx-12 md:mx-16 lg:mx-10 max-w-full flex flex-wrap gap-5 p-2'>
                {
                    registry1 === true ?(<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]" >
                        <h2 className="text-lg font-semibold mb-2">Image Risk Assessment</h2>
                        <div className="flex items-center mb-2">
                            <span className="text-lg font-bold mr-2">1470</span>
                            <span>Total Vulnerabilities</span>
                        </div>
    
                        <div className="bg-gray-200 h-4 rounded-full">
                            <div className="bg-red-500 h-full rounded-l-full" style={{ width: '10%' }} />
                        </div>
    
                        <div className="flex justify-between mt-2">
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                <span>Critical (9)</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <span>High (150)</span>
                            </div>
                        </div>
                    </div>):(null)
                }

                {
                    registry2 === true ? (<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]" >
                        <h2 className="text-lg font-semibold mb-2">Image Security Issues</h2>
                        <div className="flex items-center mb-2">
                            <span className="text-lg font-bold mr-2">2</span>
                            <span>Total Images</span>
                        </div>
    
                        <div className=" relative bg-gray-200 h-4 rounded-full" style={{ width: '100%' }}>
                            <div className="absolute top-0 left-0 h-full bg-red-800  rounded-full" style={{ width: '30%' }}></div>
                        </div>
    
    
    
                        <div className="flex justify-between mt-2">
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                <span>Critical (9)</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <span>High (150)</span>
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

export default RegistryScan