export interface GRN{orderedQty:number;receivedQty:number;acceptedQty:number;shortage:number;rejected:number}
export function createGRN(orderedQty:number,receivedQty:number,acceptedQty:number):GRN{
 if([orderedQty,receivedQty,acceptedQty].some(v=>v<0))throw new Error('Negative quantity');
 if(acceptedQty>receivedQty)throw new Error('Accepted exceeds received');
 return {orderedQty,receivedQty,acceptedQty,shortage:Math.max(orderedQty-receivedQty,0),rejected:receivedQty-acceptedQty};
}
export function issueStock(balance:number,qty:number){if(qty<=0||qty>balance)throw new Error('Invalid issue / negative stock blocked');return balance-qty}
