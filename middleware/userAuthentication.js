import { config } from 'dotenv'
config()
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt 

function generateToken(user) {
    return sign({
        email: user.email,
        userPass: user.userPass
    }, process.env.secret_key, {
        expiresIn: "1h" 
    })
}

function verifyToken(req, res, next) {
    const token = req?.headers['Authorisation']
    if (token) {
        if (verify(token, process.env.secret_key)) {
            next()
        } else {
            res?.json({
                status: res.errorCode,
                message: 'Email or password are incorrect. Please try again.'
            })
        }
    }
    else { 
        res?.json({
            status: res.errorCode, 
            message: 'Proceed to login'
        })
    }
}

export {
    generateToken, 
    verifyToken
}