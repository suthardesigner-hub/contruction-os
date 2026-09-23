export type RFIStatus='OPEN'|'ANSWERED'|'CLOSED';
export interface RFI{id:string;projectId:string;question:string;assigneeId:string;dueAt:string;status:RFIStatus;response?:string}
export function answerRFI(r:RFI,response:string){if(!response.trim())throw Error('Response required');return {...r,response,status:'ANSWERED' as const}}
export function closeRFI(r:RFI,humanApproved:boolean){if(!humanApproved)throw Error('Human closure required');if(r.status!=='ANSWERED')throw Error('RFI must be answered first');return {...r,status:'CLOSED' as const}}
