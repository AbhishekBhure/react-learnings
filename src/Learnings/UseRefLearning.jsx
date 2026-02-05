import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    memo,
    useEffect
} from "react";

/**
 * Child component
 * React.memo prevents re-render unless props change
 */
const CounterButton = memo(({ onIncrement }) => {
    console.log("🔁 CounterButton re-rendered");
    return (
        <button onClick={onIncrement}>
            {/* {count} */}
            click
        </button>
    );
});

const UseRefLearning = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);
    console.log("🔁 Parent re-rendered");
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    /**
     * useCallback
     * Keeps the SAME function reference between renders
     */
    const handleCount = useCallback(() => {
        countRef.current += 1;
        setCount(countRef.current);
    }, []);

    /**
     * useMemo
     * Memoizes an expensive calculation
     */
    const doubledValue = useMemo(() => {
        console.log("🧮 Expensive calculation running");
        return count * 2;
    }, [count]);

    return (
        <div>
            <CounterButton
                onIncrement={handleCount}
            />
            <p>Doubled value: {doubledValue}</p>
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default UseRefLearning;