import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username required'
    }),
    email: z.string({
        required_error: 'email is required'
    }).email({
        message: 'email is not valid'
    }),
    password: z.string({
        required_error: 'The password is required'
    }).min(6, {
        message: 'password must be al least 6 characters'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'email is required'
    }).email({
        message: 'email is not valid'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(6, {
        message: 'password must be least 6 characters'
    })
})