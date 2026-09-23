export interface WorkOrder{id:string;agencyId:string;scope:string;qty:number;rate:number;retentionPct:number;approved:boolean}
export function approveWorkOrder(w:WorkOrder,humanApproved:boolean){if(!humanApproved)throw Error('Human approval required');if(w.qty<0||w.rate<0||w.retentionPct<0||w.retentionPct>100)throw Error('Invalid work order');return {...w,approved:true}}
export const workOrderValue=(w:WorkOrder)=>w.qty*w.rate;
