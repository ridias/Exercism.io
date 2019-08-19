

export class BinarySearch {
    constructor(arr){
        this.sorted = true
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                this.sorted = false
                break
            }
        }

        this.array = this.sorted ? [...arr] : undefined
    }

    indexOf(value){
        let left = 0
        let right = this.array.length - 1
        let middle = -1

        while(left <= right){
            middle = Math.floor((left+ right) / 2)
            if(this.array[middle] == value){ return middle }
            else if(this.array[middle] > value){ right = middle - 1}
            else{ left = middle + 1 }
        }

        return this.array[middle] == value ? middle : -1
    }
}