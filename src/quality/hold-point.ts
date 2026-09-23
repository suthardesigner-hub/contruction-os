export interface HoldPoint{status:'OPEN'|'CLOSED';evidenceIds:string[]}
export function closeHoldPoint(h:HoldPoint,humanApproved:boolean,evidenceIds:string[]){
 if(!humanApproved)throw new Error('Human approval required');
 if(!evidenceIds.length)throw new Error('Evidence required before cover-up');
 return {...h,status:'CLOSED' as const,evidenceIds};
}
