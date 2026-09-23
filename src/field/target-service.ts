export type Result='ACHIEVED'|'PARTIAL'|'NOT_ACHIEVED';
export interface Target{id:string;projectId:string;activityId:string;plannedQty:number;status:'OPEN'|'SUBMITTED';result?:Result;reason?:string}
export function submitResult(t:Target,result:Result,reason?:string):Target{
 if(result!=='ACHIEVED'&&!reason?.trim()) throw new Error('Missed reason mandatory');
 return {...t,status:'SUBMITTED',result,reason};
}
export function requiresOwnerAction(t:Target){return t.result==='PARTIAL'||t.result==='NOT_ACHIEVED'}
