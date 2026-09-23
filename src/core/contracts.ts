export type ID=string; export type Role='OWNER'|'STAFF'|'ENGINEER'|'SUPERVISOR'|'AGENCY'|'VENDOR'|'ARCHITECT'|'CONSULTANT'|'CLIENT'|'LABOUR';
export interface Person{id:ID;displayName:string;active:boolean}
export interface Business{id:ID;legalName:string}
export interface Membership{id:ID;projectId:ID;personId:ID;businessId?:ID;roles:Role[];active:boolean}
export interface Location{id:ID;projectId:ID;parentId?:ID;type:'BUILDING'|'FLOOR'|'ROOM'|'ZONE'|'WALL'|'OTHER';name:string}
export interface DomainEvent<T=unknown>{id:ID;type:string;projectId?:ID;objectType:string;objectId:ID;occurredAt:string;payload:T}
export interface AuditEntry{id:ID;actorPersonId?:ID;action:string;objectType:string;objectId:ID;occurredAt:string;oldValue?:unknown;newValue?:unknown}
export interface MagicLink{id:ID;projectId:ID;action:string;expiresAt:string;revokedAt?:string;permissionScope:string[];usedCount:number;maxUses?:number}
