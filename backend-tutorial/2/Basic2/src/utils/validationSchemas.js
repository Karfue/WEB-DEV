export const createUserValidation = {
    password: {
        isLength : {
            options: {
                min: 8
            },
            errorMessage: "8 characters"
        },
        isString: {
            errorMessage: "should be string!"
        },
    }
}