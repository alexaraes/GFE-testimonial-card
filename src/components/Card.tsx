import React, { ReactNode } from 'react';

interface CardProps {
    body: string;
}

const Card = ({ body }: CardProps) => {
    return (
        <div className="flex">
            This is my card.
            {body}
        </div>
    );
}

export default Card;