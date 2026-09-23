export interface DailyProgress{activityId:string;plannedQty:number;achievedQty:number;reason?:string;evidenceIds:string[]}
export function closeDailyProgress(x:DailyProgress){
 if(x.achievedQty<0||x.achievedQty>x.plannedQty)throw Error('Invalid achieved quantity');
 if(x.achievedQty<x.plannedQty&&!x.reason?.trim())throw Error('Missed reason mandatory');
 if(x.achievedQty>0&&!x.evidenceIds.length)throw Error('Evidence required for achieved work');
 return {...x,status:x.achievedQty===x.plannedQty?'ACHIEVED':x.achievedQty===0?'NOT_ACHIEVED':'PARTIAL'};
}
