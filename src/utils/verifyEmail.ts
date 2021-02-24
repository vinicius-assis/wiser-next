const verifyEmail = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[a-zA-z0-9\.-]+@[a-zA-z0-9]+\.[a-zA-z0-9]+\.?[a-zA-Z0-9]+$/
  return !emailRegex.test(email)
}

export default verifyEmail
