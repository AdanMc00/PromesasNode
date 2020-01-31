
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
    

    function prom(){
        return new Promise ((resolve,reject)=>{

        })
    }

    function isMyName (name) {
        const myName ='Adan'
        return newPromise((resolve,reject)=>{
            if(name!==myName){
               return reject(false)
            }    
            resolve(true)
        })
    }

    const isMyNamePromise = isMyName ('luis')

    console.log()

    isMyNamePromise
    .then(response=>{
        console.log()
    })
    .catch(error => {
        console.log()
    })




function buildPromise (wall) {
    return new Promise((resolve,reject) => {
        build(wall,(error,wallBuilt) => {
            if (error) return  reject(error)
            resolve (wallBuilt)
        })
    })
}

function planishPromise (wall) {
    return new Promise ((resolve,reject) => {
        planish(wall,(error,wallPlanished) => {
            if(error) return reject (error)
            resolve (wallPlanished)
        })
    })
}

function paintPromise (wall) {
    return new Promise ((resolve,reject) => {
        paint (wall, (error, wallPainted) => {
            if(error) return reject (error)
            resolve (wallPainted)

        })
    })
}

/*
buildPromise(wallToBuild)
  .then(wallBuilt => {
    planishPromise(wallBuilt)
      .then(wallPlanished => {
        paintPromise(wallPlanished)
          .then(wallPainted => {
            console.log('DONE')
            console.log('wallPainted: ', wallPainted)
          })
          .catch(error => {
            console.error('ERROR at paint promise')
          })
      })
      .catch(error => {
        console.error('ERROR at planish promise')
      })
  })
  .catch(error => {
    console.error('ERROR at built promise')
  })
*/

async function main () {
    const wallBuilt = await buildPromise(wallToBuild)
    const wallPlanished = await planishPromise(wallBuilt)
    const wallPainted = await paintPromise (wallPlanished)
}

main ()
.then(()=>{
    console.log('todo cool')
})
.catch(error => {
    console.log('algo fallo')
})