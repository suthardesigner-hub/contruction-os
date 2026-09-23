export interface Complaint{id:string;createdAt:string;dueAt:string;status:'OPEN'|'IN_PROGRESS'|'RESOLVED'|'CLOSED';resolutionEvidenceIds:string[]}
export function createComplaint(id:string,createdAt:string,slaDays=3):Complaint{const d=new Date(createdAt);d.setDate(d.getDate()+slaDays);return{id,createdAt,dueAt:d.toISOString(),status:'OPEN',resolutionEvidenceIds:[]}}
export function resolveComplaint(c:Complaint,evidenceIds:string[]){if(!evidenceIds.length)throw new Error('Resolution evidence required');return{...c,status:'RESOLVED' as const,resolutionEvidenceIds:evidenceIds}}
