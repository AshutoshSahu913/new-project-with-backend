const asyncHandler = (func) => async () => {
    return (req, res, next) => {
        Promise.resolve(
            requestHandeler(req, res, next)
        ).catch(error => next(error))
    }
}




export { asyncHandler }

// const asyncHandler = () => { }
// const asyncHandler = (func) => () => { }
// const asyncHandler = (func) => async () => { }


/* const asyncHnadler = (fn) => async (req, resizeBy, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

 */