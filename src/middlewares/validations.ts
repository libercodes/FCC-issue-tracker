import { body, validationResult } from 'express-validator'
import { RequestHandler } from 'express'
import { IError } from '../utils/types'

export const CheckValidations: RequestHandler =( req, res, next ) => {
    try {
        let errores = validationResult(req)
        let poseeErrores = !errores.isEmpty()

        if(poseeErrores){
            const error: IError = new Error('Error de validacion')
            error.data = errores.array()
            error.statusCode = 422
            throw error
        }
        next()
    } catch(error){
        next(error)
    }
}

export const ValidarAgregarIssue = [
    body('title').isString(),
    body('text').isString(),
    body('created_by').isString(),
    body('assigned_to').isString(),
    body('status_text').isString(),
    body('open').isString(),
    body('project').isString()
]

export const ValidarModificarIssue = [
    body('title').isString(),
    body('text').isString(),
    body('created_by').isString(),
    body('assigned_to').isString(),
    body('status_text').isString(),
    body('open').isString(),
    body('id').isString()
]
