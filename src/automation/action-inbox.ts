export type Priority='INFO'|'ACTION_REQUIRED'|'URGENT'|'CRITICAL';
export interface ActionItem{id:string;priority:Priority;type:string;projectId?:string;dueAt?:string;reason?:string}
const weight:Record<Priority,number>={INFO:1,ACTION_REQUIRED:2,URGENT:3,CRITICAL:4};
export function ownerInbox(items:ActionItem[]){return items.filter(x=>x.priority!=='INFO').sort((a,b)=>weight[b.priority]-weight[a.priority])}
