export interface CertificationInput{qty:number;rate:number;humanApproved:boolean}
export function certify(x:CertificationInput){
 if(!x.humanApproved)throw new Error('Human approval required');
 if(x.qty<0||x.rate<0)throw new Error('Invalid quantity/rate');
 return {certifiedQty:x.qty,certifiedValue:x.qty*x.rate,status:'CERTIFIED' as const};
}
export function netPayable(value:number,retention=0,recovery=0,deduction=0){return Math.max(value-retention-recovery-deduction,0)}
