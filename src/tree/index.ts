// 遍历树并对每一个节点进行操作
type callBackProps=(item: Record<string, any>, index: any) => void
export default function travelTree(data: any, iteratorCallback: callBackProps, nodeName = "children") {
    data?.forEach((item: Record<string, any>, index: any) => {
        iteratorCallback(item, index);
        if (item[nodeName]) {
            travelTree(item[nodeName], iteratorCallback, nodeName);
        }
    });
    return data;
}
