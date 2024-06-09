import React, { ReactNode } from 'react';

interface CardProps {
    body: string;
    width?: number;
}

const Card = ({ body, width = 340 }: CardProps) => {
    return (
        <div
            className="flex flex-col justify-center align-center m-auto p-3 space-y-8 shadow-md"
            style={{ width }}    
        >
            <div>This is my card.</div>
            <div>{body}</div>
        </div>
    );
}

export default Card;