
module.export = {
    log: log
}

function log(requestParams, response, context, ee, next) {
    cosnole.log(requestParams)
    console.log(ee)
    console.log(response)
    console.log(next)
    console.log(context)
    return next()
}