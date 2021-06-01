import React from 'react';


const CBox=(props)=>{
        return(
            <div className='CBox' style={{size:`${props.size}`}}>
                {props.children}
            </div>
        );
}

export default CBox;