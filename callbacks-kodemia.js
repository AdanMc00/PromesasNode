
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


/* interview(selectionProcess, (error, interviewDone) => {
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
*/


function interviewPromise(koder) {
    return new Promise((resolve, reject) => {
        interview(koder, (error, interviewed) => {
            if (error) return reject(error)
            resolve(interviewed)
        })
    })
}


function enrollPromise(koder) {
    return new Promise((resolve, reject) => {
        enroll(koder, (error, enrolled) => {
            if (error) return reject(error)
            resolve(enrolled)
        })
    })
}


function assistPromise(koder) {
    return new Promise((resolve, reject) => {
        inclassroom(koder, (error, inClass) => {
            if (error) return reject(error)
            resolve(inClass)
        })
    })
}

/*
interviewPromise(selectionProcess)
    .then(interviewed => {
        enrollPromise(interviewed)
            .then(enrolled => {
                assistPromise(enrolled)
                    .then(inClass => {
                        console.log("fin", inClass)
                    })
                    .catch(error => {
                        console.log("Error")

                    })

            })
            .catch(error => {
                console.log("Error")

            })

    })
    .catch(error => {
        console.log("Error")
    })
*/

    async function main () {
        const koderInterviewed = await interviewPromise(selectionProcess)
        const koderEnroll = await enrollPromise(koderInterviewed)
        const koderAssist = await assistPromise (koderEnroll)
        console.log(koderAssist)
    }
    
    main ()
    .then(()=>{
        console.log('todo cool')
    })
    .catch(error => {
        console.log('algo fallo')
    })