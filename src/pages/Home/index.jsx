import React from 'react';
import { useUser } from '../../contexts/User'


export default function Home() {
    const { user } = useUser()
    return(
        <div>
            {user}
        </div>
    )
}
