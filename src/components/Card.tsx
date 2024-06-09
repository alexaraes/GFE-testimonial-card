import React, { ReactNode } from 'react';

interface CardProps {
    body: string;
}

const Card = ({ body }: CardProps) => {
    return (
        <div className="flex flex-col p-3 space-y-8 shadow-md">
            <div>This is my card.</div>
            <div>{body}</div>
        </div>
    );
}

export default Card;