let msg ={
    serverError: {
        code: 500,
        error: true,
        msg: 'Internal Server Error'
    },
    badRequest: {
        code: 400,
        error: true,
        msg: 'Data Error'
    },
    fieldsRequired: {
        code: 400,
        error: true,
        msg: 'Please enter all fields'
    },
    authFailed: {
        code: 401,
        error: true,
        msg: 'Auth failed'
    }
}
module.exports = msg