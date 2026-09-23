export type DrawingStatus='DRAFT'|'UNDER_REVIEW'|'APPROVED'|'IFC'|'SUPERSEDED';
export interface DrawingRevision{id:string;drawingNo:string;revision:number;status:DrawingStatus;createdAt:string}
export function latestApproved(revs:DrawingRevision[]){
 return [...revs].filter(r=>r.status==='APPROVED'||r.status==='IFC').sort((a,b)=>b.revision-a.revision)[0];
}
export function supersedeOlder(revs:DrawingRevision[],currentId:string){const c=revs.find(r=>r.id===currentId);if(!c)throw Error('Revision missing');return revs.map(r=>r.drawingNo===c.drawingNo&&r.revision<c.revision&&['APPROVED','IFC'].includes(r.status)?{...r,status:'SUPERSEDED' as const}:r)}
