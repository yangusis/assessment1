let password = "abc0"

// checks if password has a letter
const req1 = /[a-zA-Z]/

// checks if password has a number
const req2 = /[0-9]/

// checks if password has whitespace
const req3 = /\s/

if(req1.test(password)) {
    if(req2.test(password)) {
        if(password.length < 21) {
            if(!req3.test(password)) {
                console.log("Success")
            } else {
                console.log("Failure")
            }
        } else {
            console.log("Failure")
        }
    } else {
        console.log("Failure")
    }
} else {
    console.log("Failure")
}