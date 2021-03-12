import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} { ...otherProps } />
        {
            // Check to see if there's something in the label prop
            label ?
            // If so, then render a label
            // In terms of the classname add 'shrink' css class selector when user start typing
            (<lable className={ `${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
                {label}
            </lable>)
            // Otherwise just move on
            : null
        }
    </div>
);

export default FormInput;