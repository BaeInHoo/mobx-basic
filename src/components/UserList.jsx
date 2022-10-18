/* eslint-disable react/prop-types */
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export default function UserList ({ getUsers, users }) {
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <div>
      <ul>
        {users.map((user) => (
          // eslint-disable-next-line react/jsx-key
          <li>{user.login}</li>
        ))}
      </ul>
    </div>
  )
}
