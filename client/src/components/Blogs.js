import React, { useEffect } from 'react';

function Blogs(props) {
    


    useEffect(() => {
        console.log('use effect running');
    }, []);


    return (
        <div>
            <h1>Blog Page</h1>
        </div>
    );
}

export default Blogs;