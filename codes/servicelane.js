const n = 8;

// first test widths and cases
const width1 = [2, 3, 1, 2, 3, 2, 3, 3];  
let cases2DArray1 = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

// second test widths and cases
const width2 = [1, 2, 2, 2, 1];
let cases2DArray2 = [[2, 3],[1, 4],[2, 4],[2, 4],[2, 3]];

function serviceLane(num, cases) {

  let tests= 5;
  let start = 0;
  let end = 0;
  let minimums = [];
  let testsTracker = 0;

  for (let n=0; n < num; n++) {

    if (testsTracker < tests) {

      // run through the cases
      for(let i=0; i < cases.length; i++) {

        start = cases[i][0]; // 0
        end = cases[i][1]; // 3

        let slicedObject = width1.slice(start, end+1);
        let min = Math.min(...slicedObject);
        minimums.push(min)

        testsTracker++;
      }

    } 
    break;
  
  }
  
  console.log(minimums);
  // return minimums;

}

serviceLane(n, cases2DArray1);