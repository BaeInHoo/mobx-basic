import { inject, observer } from 'mobx-react'
import { useCallback } from 'react'
import UserList from '../components/UserList'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const UserListContainer = ({ userStore }) => {
  const getUsers = useCallback(async () => {
    try {
      // eslint-disable-next-line react/prop-types
      userStore.pending()
      const response = await axios.get('https://api.github.com/users')
      // eslint-disable-next-line react/prop-types
      userStore.success(response.data)
    } catch (error) {
      // eslint-disable-next-line react/prop-types
      userStore.fail(error)
    }
  }, [userStore])

  // eslint-disable-next-line react/prop-types
  const users = userStore.state.users

  return (
    <UserList getUsers={getUsers} users={users}/>
  )
}

export default inject('userStore')(observer(UserListContainer))
