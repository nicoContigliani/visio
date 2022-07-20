const userModel = require('./authModel')
const userDto = require('./authDto');

const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const userCreate = req.body
    // console.log(userCreate)

    const users = await userModel.login(userCreate);

    const dataResult = [...users.flat()]
    if (dataResult[0].error === undefined) {
        // console.log("no tiene error")

        const userRow = await userDto.login(users)

        const token = userRow;

        res.header('auth-token', token).json({
            error: null,
            data: { token }
        })
    } else {
        res.json({
            error: 401,
            data: users
        })
    }

    // res.status(200).json(userRow);
};


const register = async (req, res) => {
    const { fullname, password, email, id_rol } = req.body
    const userCreate = req.body
    const user = await userModel.register(userCreate);
    const userRow = await userDto.register(user)
    res.status(200).json(userRow);
};


const gets = async (req, res) => {
    const user = await userModel.getUser();
    const userRow = await userDto.singles(user)
    res.status(200).json(userRow);
};

module.exports = {
    register,
    login,
    gets
}