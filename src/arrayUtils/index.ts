export class ArrayUtil{

    /**
     * 找出两个数组不相同的元素的索引
     * @param arr1
     * @param arr2
     */
    static getDiffInds<T>(arr1: T[], arr2: T[]): number[]{
        const res: number[] = []
        if(arr1.length > arr2.length){
            res.push(...ArrayUtil.findIndex(arr1,arr2))
        }else {
            res.push(...ArrayUtil.findIndex(arr2,arr1))

        }
        return res
    }

    static findIndex<T>(arr1: T[],arr2: T[]){
        const res: number[] = []
        arr1.forEach( (el,ind)=>{
            if(ind >= arr2.length){
                res.push(ind)
            }else{
                if(el!==arr2[ind]){
                    res.push(ind)
                }
            }
        })
        return res
    }
}
