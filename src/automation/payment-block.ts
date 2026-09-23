export interface PaymentContext{certified:boolean;grnMismatch:boolean;approvalPending:boolean;requiredEvidenceMissing:boolean}
export function explainPaymentBlock(x:PaymentContext){
 const reasons:string[]=[];if(!x.certified)reasons.push('MEASUREMENT_NOT_CERTIFIED');if(x.grnMismatch)reasons.push('PO_GRN_INVOICE_MISMATCH');if(x.approvalPending)reasons.push('APPROVAL_PENDING');if(x.requiredEvidenceMissing)reasons.push('EVIDENCE_MISSING');
 return {blocked:reasons.length>0,reasons};
}
