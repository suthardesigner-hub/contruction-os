export type ActionType='REMINDER'|'ESCALATE'|'CREATE_TASK'|'NOTIFY';
export interface Rule{id:string;eventType:string;enabled:boolean;actions:{type:ActionType;config:Record<string,unknown>}[]}
export function actionsFor(eventType:string,rules:Rule[]){return rules.filter(r=>r.enabled&&r.eventType===eventType).flatMap(r=>r.actions.map(a=>({...a,ruleId:r.id})))}
export const HUMAN_AUTHORITY=['FINANCIAL_APPROVAL','DESIGN_APPROVAL','SAFETY_CLOSURE','LEGAL_CERTIFICATION'] as const;
