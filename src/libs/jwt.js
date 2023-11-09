import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload,
            TOKEN_SECRET, {
                expiresIn: "5h"
        }, (err, token) => {
            if (err) { reject(err); console.log(err)} else {
                resolve(token); console.log(token)
            }
        });
    })
}

