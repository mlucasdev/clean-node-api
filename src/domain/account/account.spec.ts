import { left } from '../../shared/either'
import { InvalidNameError } from '../errors/invalid-name-error'
import { AddAccountModel } from '../usecases/add-account'
import { Account } from './account'
import { Email } from './value-objects/email'
import { Name } from './value-objects/name'

const makeFakeAccountData = (): AddAccountModel => ({
  name: 'any name',
  email: 'any_email@mail.com',
  password: 'password1234'
})

describe('Account', () => {
  test('Should call Name with correct values', () => {
    const createNameSpy = jest.spyOn(Name, 'create')
    Account.create(makeFakeAccountData())
    expect(createNameSpy).toHaveBeenCalledWith('any name')
  })

  test('Should return InvalidNameError if Name return InvalidNameError', () => {
    jest.spyOn(Name, 'create').mockReturnValueOnce(
      left(new InvalidNameError('invalid name'))
    )
    const sut = Account.create(makeFakeAccountData())
    expect(sut.value).toEqual(new InvalidNameError('invalid name'))
  })

  test('Should call Email with correct value', () => {
    const createEmailSpy = jest.spyOn(Email, 'create')
    Account.create(makeFakeAccountData())
    expect(createEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
