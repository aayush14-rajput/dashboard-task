import React, { useState } from 'react'
import Widget from '../Widget/Widget'
import useStore from "../useStore";

const CSPM = () => {

    const setCheckButton = useStore((state) => state.setCheckButton);
    const cspm1 = useStore((state) => state.cspm1);
    const cspm2 = useStore((state) => state.cspm2);
    const [checkValue, setCheckValue] = useState(false);

    const toggleSwitch = () => {
        setCheckValue(true);
        setCheckButton(checkValue);
        console.log("button", checkValue)
    };


    return (
        <div>
            <h3 className='font-bold mx-10 my-1'>CSPM Executive Dashboard</h3>
            <div className='box-border md:box-content rounded-md bg-gray-300 mx-8 sm:mx-12 md:mx-16 lg:mx-10 max-w-full flex flex-wrap gap-5 p-2 '>
                {
                    cspm1 === true ? (<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]">
                        <h2 className="text-lg font-semibold mb-4">Cloud Accounts</h2>
                        <div className="flex items-center">
                            <div class="relative w-24 h-24">
                                <div class="absolute inset-0 rounded-full border-8 border-gray-300"></div>
                                <div class="absolute inset-0 rounded-full border-8 border-b-blue-600 border-l-blue-600 transform rotate-45"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-sm font-semibold">2 total</span>
                                </div>
                            </div>


                            <div className="ml-4">
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                                    <span>Connected (2)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-200 mr-2"></div>
                                    <span>Not Connected (2)</span>
                                </div>
                            </div>
                        </div>
                    </div>) : (null)
                }

                {
                    cspm2 === true ? (<div className="bg-white rounded-lg p-4 flex-1 min-w-[200px] md:min-w-[250px]">
                        <h2 className="text-lg font-semibold mb-4">Cloud Account Risk Assessment</h2>
                        <div className="flex items-center">
                            <div class="relative w-24 h-24">
                                <div class="absolute inset-0 rounded-full border-8 border-gray-300"></div>

                                {/* <!-- Yellow Segment --> */}
                                <div class="absolute inset-0 rounded-full border-8 border-t-yellow-500 border-l-transparent border-b-transparent border-r-transparent transform rotate-90"></div>

                                {/* <!-- Green Segment --> */}
                                <div class="absolute inset-0 rounded-full border-8 border-t-green-500 border-l-transparent border-b-transparent border-r-transparent transform rotate-180"></div>

                                {/* <!-- Red Segment --> */}
                                <div class="absolute inset-0 rounded-full border-8 border-t-red-500 border-l-transparent border-b-transparent border-r-transparent transform rotate-270"></div>

                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-sm font-semibold">9659 total</span>
                                </div>
                            </div>




                            <div className="ml-4">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                    <span>Failed (1689)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                                    <span>Warning (681)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                                    <span>Not Available (36)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                    <span>Passed (7253)</span>
                                </div>

                            </div>
                        </div>
                    </div>) : (null)
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

export default CSPM