import React from 'react';

const Loading = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;