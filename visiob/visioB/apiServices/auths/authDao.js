const pool = require('../../services/database');
const bcrypt = require('bcrypt')



const getUser = async () => {

    const response = await pool.query('SELECT * FROM public.users;');
    const users = response.rows;
    return users
};
const getUserR = async (data) => {

    //    const {email,fullname}=data;
    const response = await pool.query("SELECT * FROM public.users where email ='" + data + "'");
    const users = response.rows;
    return users
};

const registerGet = async () => {
    const response = await pool.query('SELECT * FROM public.users;');
    user = response.rows
    return user
}
const LoginGet = async () => {
    const response = await pool.query('SELECT * FROM public.users;');
    user = response.rows
    return user
}
const RegisterPost = async (newUsers) => {
    const password = newUsers.hashedPassword;
    const fullname = newUsers.fullname;
    const email = newUsers.email;
    const id_rol = newUsers.id_rol;
    try {
        const response = await pool.query('INSERT INTO public.users (fullname, password,email,id_rol) VALUES ($1, $2,$3,$4)', [fullname, password, email, id_rol]);
        return user
    } catch (error) {
        console.log(error)

    }
    return user
}


module.exports = {
    RegisterPost,
    registerGet,
    getUserR,
    getUser,
    LoginGet
}