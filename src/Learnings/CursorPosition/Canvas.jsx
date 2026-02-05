import React, { useEffect, useState } from 'react'
import { usePointerPosition } from './CustomHooks/usePointerPostion'
import CursorDot from './CursorDot';

const Canvas = () => {
    const useDelayedValue = (value, delay) => {
        const [delayedValue, setDelayedValue] = useState(value);

        useEffect(() => {
            setTimeout(() => {
                setDelayedValue(value);
            }, delay);
        }, [value, delay]);
        return delayedValue;
    }

    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 150);
    const pos4 = useDelayedValue(pos3, 200);
    const pos5 = useDelayedValue(pos4, 250);
    const pos6 = useDelayedValue(pos5, 50);

    const handleError = () => {
        throw new Error("Something went wrong");
    }
    const handleError2 = () => {
        throw new Error("Something went wrong 2");
    }
    return (
        <>
            {/* <CursorDot position={pos1} opacity={1} />
            <CursorDot position={pos2} opacity={0.8} />
            <CursorDot position={pos3} opacity={0.6} />
            <CursorDot position={pos4} opacity={0.4} />
            <CursorDot position={pos5} opacity={0.2} />
            <CursorDot position={pos6} opacity={0.15} /> */}
            <button onClick={handleError}>Click Me</button>
            <button onClick={handleError2}>Click Me2</button>
        </>
    )
}

export default Canvas
