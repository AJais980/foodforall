import React from 'react'
import { getUser } from '@/lib/dbUtils'
import ManageCards from '../../../components/ManageCards'

const Manage = async () => {
    let user = await getUser();
    return (
        <div className='min-h-screen'>
            <ManageCards />
        </div>
    )
}

export default Manage