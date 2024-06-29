import React, { useState } from 'react';
import './BookOpen.css'; // Import your CSS for styling

const BookOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className={`book ${isOpen ? 'open' : ''}`}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div className="book__cover" style={{ backgroundImage: `url("./Homepage/book cover.png")` }}></div>
            <div className="book__page"></div>
        </div>
    );
};

export default BookOpen;
