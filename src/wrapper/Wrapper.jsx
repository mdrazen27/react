import React from 'react';
import './Wrapper.css';

const Wrapper = ({children}) => {

    return <div className='wrapper row'>
                <div className={"col-9"}>{children}
                </div>
           </div>

}

export default Wrapper;