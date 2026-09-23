import type {AuditEntry,DomainEvent,ID} from './contracts';
export function recordTransition(x:{id:ID;actorPersonId?:ID;projectId?:ID;objectType:string;objectId:ID;action:string;oldValue?:unknown;newValue?:unknown;eventType:string;at?:string}){
 const at=x.at||new Date().toISOString();
 const audit:AuditEntry={id:x.id+':audit',actorPersonId:x.actorPersonId,action:x.action,objectType:x.objectType,objectId:x.objectId,occurredAt:at,oldValue:x.oldValue,newValue:x.newValue};
 const event:DomainEvent={id:x.id+':event',type:x.eventType,projectId:x.projectId,objectType:x.objectType,objectId:x.objectId,occurredAt:at,payload:{action:x.action}};
 return {audit,event};
}
