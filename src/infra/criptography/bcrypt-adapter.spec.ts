import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => { resolve('hash') })
  },

  async compare (): Promise<boolean> {
    return await Promise.resolve(true)
  }
}))
const salt = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call hash with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a valid hash on hash success', async () => {
    const sut = makeSut()
    const hash = await sut.hash('any_value')
    expect(hash).toBe('hash')
  })

  test('Should throw if bcrypt throws', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash') as unknown as jest.Mock<
    ReturnType<(key: Error) => Promise<Error>>,
    Parameters<(key: Error) => Promise<Error>>
    >
    hashSpy.mockReturnValueOnce(
      new Promise((resolve, reject) => { reject(new Error()) })
    )
    const promise = sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })

  test('Should call compare with correct values', async () => {
    const sut = makeSut()
    const comparerSpy = jest.spyOn(bcrypt, 'compare')
    await sut.compare({
      value: 'any_value',
      hash: 'any_hash'
    })
    expect(comparerSpy).toHaveBeenCalledWith('any_value', 'any_hash')
  })
})
