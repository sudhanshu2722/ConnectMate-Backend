const userService = require('../service/userService')

module.exports = async (req, res, next) => {
    try {
        const UserService = new userService();
        const { value } = req.locals
        const result = await UserService.getUser(value)
        return res.status(200).send(result)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: 'Internan Server error' })
    }
}