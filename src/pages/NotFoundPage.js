import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            404 - Not found <Link to="/">go home</Link>
        </div>
    )
}

export default NotFoundPage