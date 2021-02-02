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

    /**
     * 判断数组长度是否为空
     * @param array 
     */
    static arrayIsEmpty<T>(array: T[]){
        return !array.length
    }


    /**
     * 获取满足条件的索引
     * @param array 
     * @param compareCondition 
     */
    getIndex<T>(array: T[], compareCondition: Function){
        const res: number[] = []
        return array.reduce((preVal, curVal, curIdx)=>{
            return compareCondition(curVal) ? [...preVal, curIdx] : preVal
        },res)
    }



}
