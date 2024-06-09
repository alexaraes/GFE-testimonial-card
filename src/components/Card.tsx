import React, { ReactNode } from 'react';

interface CardProps {
    avatar: string;
    body: string;
    username: string;
    name: string;
    width?: number;
}

interface IdentityHeaderProps {
    avatar: string;
    username: string;
    name: string;
}

const IdentityHeader = ({ avatar, username, name}: IdentityHeaderProps) => {
    return (
        <>
            <div className="flex flex-row items-center space-x-3.5">
                <div className="w-12">
                    <img src={avatar} />
                </div>
                <div>
                    <p className="text-lg font-semibold">{name}</p>
                    <p>@{username}</p>
                </div>
            </div>
        </>
    )
}

const Card = ({
    avatar,
    body,
    username,
    name,
    width = 340
}: CardProps) => {
    return (
        <div
            className="flex flex-col justify-center align-center m-auto p-5 shadow-md rounded-lg text-sm bg-white"
            style={{ width }}    
        >
            <div>
                <IdentityHeader
                    avatar={avatar}
                    username={username}
                    name={name}
                />
            </div>
            <div className='py-2'>{body}</div>
        </div>
    );
}

export default Card;