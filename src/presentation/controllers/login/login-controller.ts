import { Authentication, Controller, HttpRequest, HttpResponse, Validation } from '.'
import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/http-helper'

export class LoginController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = this.validation.validate(httpRequest.body)
      if (result.isLeft()) {
        return badRequest(result.value)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({ email, password })
      if (accessToken.isLeft()) {
        return unauthorized(accessToken.value)
      }
      return ok({ accessToken: accessToken.value })
    } catch (error: any) {
      return serverError(error)
    }
  }
}
