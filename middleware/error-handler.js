const errorHandlerMiddleware = (err, req,resp,next)=>{
    return resp.status(500).json({msg:err})
}

module.exports = errorHandlerMiddleware