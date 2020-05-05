import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">404 Page Not Found</h1>
            <h3 className='mt-5'>(>'o')> Oh no! It seems the resource you are looking for does not exist.</h3>
            <div className="list-group">
                <Link to="/" className="bg-q color-w text-decoration-none list-group-item hover-shrink">Return Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;