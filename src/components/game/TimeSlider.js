import React from 'react';
import { Input } from 'semantic-ui-react';


const TimeSlider = ({ speed, setSpeed }) => {

    const handleChange = (e, { name, value }) => {
       setSpeed(parseFloat(value));
    }



    return (
        <Input
            label={`Speed: ${speed}ms `}
            min={10}
            max={5000}
            name='speed'
            onChange={handleChange}
            step={10}
            type='range'
            value={speed}
        />
    )
}


export default TimeSlider;