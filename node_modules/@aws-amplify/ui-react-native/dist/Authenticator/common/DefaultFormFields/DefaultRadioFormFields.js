import React from 'react';
import { censorContactMethod } from '@aws-amplify/ui';
import { Radio, RadioGroup } from '../../../primitives';
const attributeMap = {
    email: 'Email',
    phone_number: 'Phone Number',
};
const DefaultRadioFormFields = ({ fields, fieldContainerStyle, fieldLabelStyle, isPending, style, }) => {
    return (<RadioGroup disabled={isPending} style={style}>
      {(fields ?? []).map(({ name, value, ...props }) => {
            const attributeType = attributeMap[name];
            return (<Radio {...props} key={value} 
            // value has to be name, because Auth is only interested in the
            // string "email" or "phone_number", not the actual value
            value={name} label={censorContactMethod(attributeType, value)} labelStyle={fieldLabelStyle} style={fieldContainerStyle}/>);
        })}
    </RadioGroup>);
};
DefaultRadioFormFields.displayName = 'FormFields';
export default DefaultRadioFormFields;
