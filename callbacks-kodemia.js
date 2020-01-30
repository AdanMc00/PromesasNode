
const selectionProcess = {
    isInterview: false,
    isEnrolled: false,
    isInClass: false
}

function interview(koder, callback) {
    console.log("Ready")
    koder.isInterview = true
    error = !koder.isInterview
    callback(error, koder)
}

function enroll(koder, callback) {
    console.log("enrolled")
    koder.isEnrolled = true
    error = !koder.isEnrolled
    callback(error, koder)
}

function inclassroom(koder, callback) {
    console.log("assist")
    koder.isInClass = true
    error = !koder.isInClass
    callback(error, koder)
}


interview(selectionProcess, (error, interviewDone) => {
    if (error) {
        console.log("not interviewed")
        return
    }
    enroll(interviewDone, (error, enrollDone) => {
        if (error) {
            console.log("fail enroll")
            return
        }
        inclassroom(enrollDone, (error, koderInClass) => {
            if (error) {
                console.log("not in class")
                return
            }
            console.log(koderInClass)
        })
    })
})