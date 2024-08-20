import React from 'react'

import CSPM from './CSPM';
import CWPP from './CWPP';
import RegistryScan from './RegistryScan';


const Container = ({onAddWidget}) => {
    return (
        <div className='md:container md:mx-auto'>
            
            <CSPM/>
            
            <CWPP/>
            
            <RegistryScan/>
        </div>

    )
}

export default Container