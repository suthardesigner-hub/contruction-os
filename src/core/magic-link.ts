export interface MagicLinkState{id:string;projectId:string;action:string;permissionScope:string[];expiresAt:string;revokedAt?:string;maxUses:number;usedCount:number}
export function canUseMagicLink(l:MagicLinkState,now=new Date()){
 if(l.revokedAt)return {ok:false,reason:'REVOKED'};
 if(now.getTime()>=new Date(l.expiresAt).getTime())return {ok:false,reason:'EXPIRED'};
 if(l.usedCount>=l.maxUses)return {ok:false,reason:'USE_LIMIT'};
 return {ok:true};
}
export function consumeMagicLink(l:MagicLinkState,permission:string,now=new Date()){
 const c=canUseMagicLink(l,now);if(!c.ok)throw new Error(c.reason);
 if(!l.permissionScope.includes(permission))throw new Error('PERMISSION_DENIED');
 return {...l,usedCount:l.usedCount+1};
}
