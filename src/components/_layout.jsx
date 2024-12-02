import React from "react";

const _layout = ({children}) => {

    return (
        <div className= 'h-auto w-auto md:flex-auto bg-white rounded-2xl mx-4 my-1'>
            <div className= 'grow overflow-y-auto'>
                {children}
            </div>
        </div>
    );
};

export default _layout;