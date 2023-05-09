import { useState, useCallback, createContext } from 'react'
import './App.css'
import Group from './components/Group'

export const userContext = createContext({})

const data = {
	users: [
		{ id: 1, name: 'Ben', group: ['HR', 'FINANCE'] },
		{ id: 2, name: 'Keerthana', group: ['HR', 'FINANCE', 'IT'] },
		{ id: 3, name: 'Dom', group: ['IT'] },
		{ id: 4, name: 'Kris', group: ['HR'] },
	],
	groups: ['HR', 'FINANCE', 'IT'],
	// { name: 'HR', id: '1' },
	// { name: 'FINANCE', id: '2' },
	// { name: 'IT', id: '3' },
}

function App() {
	const [userData, setUserData] = useState(data)

	const filteruser = useCallback(groupIndex => {
		return userData.users.filter(user => {
			//check if current group exist in user's group array
			const bool = user.group.some(group => group.includes(userData.groups[groupIndex]))

			//if so, return the user
			if (bool) return user
		})
	}, [])

	return (
		<userContext.Provider value={data}>
			<div className='container'>
				{userData.groups.map((group, i) => (
					<Group key={i} users={filteruser(i)} groupName={group} />
				))}
			</div>
		</userContext.Provider>
	)
}

export default App
