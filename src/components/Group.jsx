import React from 'react'

import './style.css'

const Group = ({ users, groupName }) => {
	return (
		<div className='group'>
			<div className='title'>{groupName}</div>
			{users?.map(user => (
				<div key={user?.id}>{user?.name}</div>
			))}
		</div>
	)
}

export default Group
