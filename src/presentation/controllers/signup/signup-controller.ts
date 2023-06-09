import { AddAccount, Controller, HttpRequest, HttpResponse, Validation } from '.'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validation = this.validation.validate(httpRequest.body)
      if (validation.isLeft()) {
        return badRequest(validation.value)
      }
      const { name, email, password } = httpRequest.body
      const accessToken = await this.addAccount.add({ name, email, password })
      if (accessToken.isLeft()) {
        return badRequest(accessToken.value)
      }
      return ok({ accessToken: accessToken.value })
    } catch (error: any) {
      return serverError(error)
    }
  }
}
