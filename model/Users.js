import {
    connection
} from '../config/index.js'
import {
    generateToken
} from '../middleware/userAuthentication.js'
import {
    hash,
    compare
} from 'bcrypt'

class Users {
    // fetch all users
    fetchUsers(req, res) {
        const dbQry = `
        SELECT userID, username, firstName, lastName,
        gender, userRole, userEmail, userPwd
        FROM Users;
        `
        connection.query(dbQry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }
    // fetch a single user
    fetchUser(req, res) {
        const dbQry = `
        SELECT userID, username, firstName, lastName,
        gender, userRole, userEmail, userPwd
        FROM Users
        WHERE userID = ${req.params.id};
        `
        connection.query(dbQry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result
            })
        })
    }

    // create new user
    async createUser(req, res) {
        // Payload
        let data = req.body
        data.userPwd = await hash(data?.userPwd, 10)
        let user = {
            userEmail: data.userEmail,
            userPwd: data.userPwd
        }
        const dbQry = `
        INSERT INTO Users
        SET ?;
        `
        connection.query(dbQry, [data], (error) => {
            if (error) {
                res.json({
                    status: res.errorCode,
                    message: 'An account already exists with this email. Please login.'
                })
            } else {
                // generate a token
                let token = generateToken(user)
                res.json({
                    status: res.errorCode,
                    token,
                    message: 'Successfully registered'
                })
            }
        })
    }

    // update user
    async updateUser(req, res) {
        const data = req.body
        if (data?.userPwd) {
            data.userPwd = await hash(data?.userPwd, 8)
        }

        const dbQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
        `
        connection.query(dbQry, [data], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "User details successfully updated!"
            })
        })
    }

    // delete user

    deleteUser(req, res) {
        const dbQry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        connection.query(dbQry, (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "User deleted"
            })
        })
    }

    // user login

    login(req, res) {
        const {
            userEmail,
            userPwd
        } = req.body
        const dbQry = `
        SELECT userID, username, firstName, lastName,
        gender, userRole, userEmail, userPwd
        FROM Users
        WHERE userEmail = '${userEmail}';
        `
        connection.query(dbQry, async (error, result) => {
            if (error) throw error
            if (!result?.length) {
                res.json({
                    status: res.errorCode,
                    message: "Incorrect email entered. Please try again"
                })
            } else {
                // Validate password
                const validatePass = await compare(userPwd, result[0].userPwd)
                if (validatePass) {
                    const token = generateToken({
                        userEmail,
                        userPwd
                    })
                    res.json({
                        status: res.errorCode,
                        message: "Login Successful",
                        token,
                        result: result[0]
                    })
                } else {
                    res.json({
                        status: res.errorCode,
                        message: "Incorrect password entered. Please try again."
                    })
                }
            }
        })
    }
}

export {
    Users
}