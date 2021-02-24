import axios from 'axios'

export type TFetchUser = {
  data: TUsers[]
}

export type TUsers = {
  id: string
  firstname: string
  lastname: string
  email: string
  password: string
}

export const fetchUsers = async (): Promise<TFetchUser> => {
  const response = await axios.get<TUsers[]>(
    'https://60353a686496b9001749e96a.mockapi.io/api/v1/users'
  )

  return {
    data: response.data
  }
}
