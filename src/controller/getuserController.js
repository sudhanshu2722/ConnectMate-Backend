module.exports = async (req, res, next) => {
    const { params } = req
    if (!(Number(params.id))) {
        res.status(404).send({ message: "invalid id" })
        return
    }
    next();
}