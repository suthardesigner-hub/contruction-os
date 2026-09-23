export interface ReadinessInput{activityId:string;drawingReady:boolean;materialReady:boolean;agencyConfirmed:boolean;dependencyClear:boolean}
export function readiness(x:ReadinessInput){
 const blockers:string[]=[];if(!x.drawingReady)blockers.push('DRAWING');if(!x.materialReady)blockers.push('MATERIAL');if(!x.agencyConfirmed)blockers.push('AGENCY');if(!x.dependencyClear)blockers.push('DEPENDENCY');
 return {activityId:x.activityId,ready:blockers.length===0,blockers,severity:blockers.length>=2?'CRITICAL':blockers.length?'ACTION_REQUIRED':'INFO'};
}
