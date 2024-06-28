export const errorHandler = (statuesCode, message) => {
    const error = new Error()
    error.statuesCode = statuesCode
    error.message = message
    return error
}