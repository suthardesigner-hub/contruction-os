export interface EvidenceInput{projectId:string;storageKey:string;uploaderPersonId:string;activityId?:string;locationId?:string}
export interface Evidence extends EvidenceInput{id:string;verified:boolean;createdAt:string}
export function createEvidence(x:EvidenceInput):Evidence{
 if(!x.projectId||!x.storageKey||!x.uploaderPersonId)throw new Error('Evidence requires project, storage key and uploader');
 return {...x,id:'evidence_'+Date.now(),verified:false,createdAt:new Date().toISOString()};
}
export function verifyEvidence(e:Evidence,humanApproved:boolean){if(!humanApproved)throw new Error('Human verification required');return {...e,verified:true}}
