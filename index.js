// Code your solution in this file!
let blocksEntered
let headquarters = 42
function distanceFromHqInBlocks(blocksEntered){

    return (Math.abs(blocksEntered-headquarters))
    
}

function distanceFromHqInFeet(blocksEntered){
    return((Math.abs(blocksEntered-headquarters)*264));
}
//function distanceTravelledInFeet(blocksEntered,headquarters){
  //  return(Math.abs(blocksEntered-headquarters)*264)
//}
let blockStarted
let blockEnded
function distanceTravelledInFeet(blockStarted,blockEnded){
    return(Math.abs(blockStarted-blockEnded)*264)
}

function calculatesFarePrice(start, destination){
    let feet = Math.abs(start-destination)*264;
    if (feet<400) return 0;
    if (feet>400 && feet<=2000) return((feet-400)*.02);
    if (feet>2000 && feet<=2500) return 25
    if (feet>2500) return 'cannot travel that far'

        
}
