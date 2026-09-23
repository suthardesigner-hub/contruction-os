export interface OfflineCommand{id:string;type:string;payload:unknown;createdAt:string;attempts:number;status:'QUEUED'|'SYNCING'|'SYNCED'|'FAILED'}
export class OfflineQueue{
 private seen=new Set<string>(); public items:OfflineCommand[]=[];
 enqueue(c:OfflineCommand){if(this.seen.has(c.id)||this.items.some(x=>x.id===c.id))return false;this.items.push(c);return true}
 markSynced(id:string){const x=this.items.find(v=>v.id===id);if(!x)throw Error('Command missing');x.status='SYNCED';this.seen.add(id)}
 pending(){return this.items.filter(x=>x.status==='QUEUED'||x.status==='FAILED')}
}
