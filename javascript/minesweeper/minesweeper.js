

export const annotate = matrix =>{

    matrix = matrix.map((e) => e.split(""))

    let positions = [[-1, 0], [-1, -1], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]]
    
    for(let i = 0; i < matrix.length; i++){

        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == " "){
                let count = 0
                for(let k = 0; k < positions.length; k++){
                    if(i + positions[k][0] >= 0 && i + positions[k][0] < matrix.length && j + positions[k][1] >= 0 && j + positions[k][1] < matrix[i].length){
                        if(matrix[i+positions[k][0]][j+positions[k][1]] == "*"){ count++ }
                    }
                }
                if(count > 0){ matrix[i][j] = count}
            }
        }
        matrix[i] = matrix[i].join("")
    }
    return matrix
}
