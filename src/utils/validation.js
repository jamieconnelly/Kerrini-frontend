
export const isValidName = (name) => {
  const tester = /[;<>≤≥`~§±!@#$%^&*_=+≠{}|"?÷]/
  if (!isEmpty(name) && !tester.test(name)) {
    return undefined
  }
  return 'Please enter a valid name'
}

export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(email)) {
    return undefined
  }
  return 'Please enter a valid email'
}

export const isEmpty = (text) => (
  !text || (typeof text === 'string' && (
    text === '' || text.replace(/<br ?\/?>/gi, '').replace(/<\/?p>/gi, '') === ''
  ))
)
