import React from 'react'
import { getUser } from '@/lib/dbUtils'

const Manage = async () => {
    let user = await getUser();
    return (
        <div className='min-h-screen'>Managing for {user.name}</div>
    )
}

export default Manage