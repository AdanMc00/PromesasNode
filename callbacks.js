
const wallToBuild = {
    isBuilt: false,
    isPlanish: false,
    isPainted: false
}

function build  (wall, callback) {
wall.isBuilt = true
const error = !wall.isBuilt
callback(error,wall)
}

function planish (wall,callback){
    wall.isPlanish = true
    const error = !wall.isPlanish
    callback(error,wall)
}

function paint (wall,callback){
    wall.isPainted = true
    const error = !wall.isPainted
    callback(error,wall)
}


build (wallToBuild,(error,wallBuilt)=>{
    if(error){
        console.log("error")
        return
    }
    planish(wallBuilt,(error, wallPlanised )=>{
    if (error) {
        console.log("error")
        return
    }

    paint (wallPlanised,(error,wallPainted)=>{
        if(error){
            console.log("nopaint")
            return
        }
        console.log("done")
        console.log("wall:",wallPainted)
        console.log("")
    })
   
})
})