import { TUsers } from '../api/service'

type TValidateUser = {
  data: TUsers[]
  emailValue: string
  passwordValue: string
}

const validateUser = ({
  data,
  emailValue,
  passwordValue
}: TValidateUser): TUsers => {
  const [user] = data.filter(item => item.email === emailValue)

  if (user && user.password === passwordValue) {
    return user
  }
}

export default validateUser
