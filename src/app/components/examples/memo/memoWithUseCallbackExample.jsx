import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemorizedLogOutButton = React.memo(
    LogOutButton,
    (prevProps, nestProps) => {
        if (prevProps === nestProps) return true;
        return false;
    }
);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate re-render
            </button>
            <MemorizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
