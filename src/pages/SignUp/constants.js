import { isValidEmail, isValidName, isEmpty } from 'utils/validation'

export const inputsMap = {
  name: {
    label: 'full name',
    validate: isValidName,
    type: 'text',
  },
  email: {
    label: 'email',
    validate: isValidEmail,
    type: 'text',
  },
  password: {
    label: 'password',
    validate: (value) => {
      return !isEmpty(value) && (value && value.length >= 6)
        ? undefined
        : 'Your password must be at least 6 characters'
    },
    type: 'password',
  },
  reEnteredPassword: {
    label: 're-enter password',
    validate: (value, { password }) => {
      return value === password
        ? undefined
        : 'Passwords do not match'
    },
    type: 'password',
  },
}
