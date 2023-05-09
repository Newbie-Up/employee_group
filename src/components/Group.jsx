import React from 'react'
import './style.css'

const Group = ({ users }) => {
	return (
		<div className='group'>
			{users?.map(user => (
				<div key={user?.id}>{user?.name}</div>
			))}
		</div>
	)
}

export default Group
