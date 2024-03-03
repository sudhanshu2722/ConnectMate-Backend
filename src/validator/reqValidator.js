const Joi = require("joi")

const getUserValidator = async (req, res, next) => {
    const { params } = req

    const schema = Joi.object({
        id: Joi.number().required()
    })

    try {
        const { error, value } = schema.validate(params);
        if (error) {
            res.status(400).send({ message: error.message })
            return;
        }
        req.locals = value
        next();
    }
    catch (err) {
        res.status(500).send(ErrorCodes[500])
    }


    next();
}

const creatUserValidator = async (req, res, next) => {
    const { body } = req

    // const schema = Joi.object({
    //     id: Joi.number().required()
    // })

    try {
        //     const { error, value } = schema.validate(params);
        //     if (error) {
        //         res.status(400).send({ message: error.message })
        //         return;
        //     }
        req.locals = body
        next();
    }
    catch (err) {
        res.status(500).send(ErrorCodes[500])
    }


    next();
}

module.exports = { getUserValidator, creatUserValidator }