export function login(credentials) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === 'madison' && credentials.password === 'my_pass') {
                resolve()
            } else {
                reject()
            }
        }, 250)
    })
}

export function register(userInfo) {

}

export function logout(token) {

}

//make sure promise when doing login.