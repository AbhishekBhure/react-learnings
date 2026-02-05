import { useEffect, useState } from "react";

export function usePointerPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // const test = 0

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        // test = 1;
        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, [])

    return position
}
