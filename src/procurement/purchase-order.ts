export interface PurchaseOrder{id:string;vendorId:string;qty:number;rate:number;approved:boolean}
export function approvePO(po:PurchaseOrder,humanApproved:boolean){if(!humanApproved)throw Error('Human approval required');if(po.qty<=0||po.rate<0)throw Error('Invalid PO');return {...po,approved:true}}
export function canReceive(po:PurchaseOrder){return po.approved}
