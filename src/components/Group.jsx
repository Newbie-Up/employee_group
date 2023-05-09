import React, { useContext } from 'react'
import { userContext } from '../App'
import './style.css'

const Group = ({ users, groupName }) => {
	const user = useContext(userContext)
	console.log(user)
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
