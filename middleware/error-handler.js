const errorHandlerMiddleware = (err, req,resp,next)=>{
    console.log(err)
    return resp.status(err.status).json({msg:err.message})
}

module.exports = errorHandlerMiddleware