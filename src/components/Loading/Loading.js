import React from 'react';
import './Loading.css';
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";

const Loading = () => {
    return (
        <div className="loading">
            <TwinSpin color="#FF0000" width="100px" height="100px" duration="3s"/>
        </div>
    );
};

export default Loading;