/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let count = 0;
  preferences.unshift(0);
  if(preferences.length>=3){
    for(let i=1; i<preferences.length; i++){
      for(let k=i+1; k<preferences.length; k++){
        for(let m=i+1; m<preferences.length; m++){
          if(preferences[i]==k&&preferences[k]==m&&preferences[m]==i){
            count++;
           
          }
        }
      }
    }
  }
  return count;
};
