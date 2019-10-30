// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    const result = [];
    let currentNum = 1;
    for(let i=0;i<n;i++){
        const currentRow = [];
        for(j=0;j<=i;j+=1){
            currentRow.push(currentNum);
            currentNum += 1;
        }
        result.push(currentRow.join(''));
    }
    return result.join('\n');
};

module.exports = { floydsTriangle };
