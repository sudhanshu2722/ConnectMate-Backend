const userService = require('../service/userService')

module.exports = async (req, res, next) => {
    try {
        const UserService = new userService();
        const { locals } = req.locals
        const result = await UserService.getUser(locals)
        return res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: 'Internan Server error' })
    }
}