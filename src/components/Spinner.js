import React from 'react';
import { ClipLoader } from 'react-spinners';

import "../styles/Spinner.sass"

const Spinner = ({show}) => {
    return (
        <div className={`dimScreen ${show ? "" : "disabled"}`}>
            <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#201158'}
                loading={show}
            />
        </div>
    )
};

export default Spinner

