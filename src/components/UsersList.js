import React from 'react';
import ContentLoader from 'react-content-loader'
import UserCard from './UserCard'

const UsersList = ({ users, loading, showUser, hideOverview = false }) => {
    const cardLoader = (
        <ContentLoader
            height={475}
            width={400}
            speed={10}
        >
            <rect x="1" y="-6" rx="0" ry="0" width="400" height="312" />
            <rect x="80" y="325.05" rx="0" ry="0" width="240" height="20" />
            <rect x="0" y="450" rx="0" ry="0" width="150" height="20" />
            <rect x="250" y="450" rx="0" ry="0" width="150" height="20" />
            <rect x="0" y="370" rx="0" ry="0" width="400" height="10" />
            <rect x="0" y="390" rx="0" ry="0" width="400" height="10" />
            <rect x="0" y="410" rx="0" ry="0" width="401" height="10" />
            <rect x="320" y="420" rx="0" ry="0" width="0" height="10" />
        </ContentLoader>
    )

    const usersList = () => {
        return users.map(user => (
            <div className='col-12' style={{paddingBottom: 10}} key={user.email}>
                {
                    loading  ?
                        cardLoader :
                        <UserCard showUser={showUser}  user={ user } hideOverview={ hideOverview }/>
                }
            </div>
        ))
    }

    return (
        <div className="row align-items-start">
            { usersList() }
        </div>
    )
}

export default UsersList