import {certify} from '../src/commercial/certification';
import {paymentEligibility} from '../src/commercial/payment-eligibility';
let blocked=false;try{certify({qty:10,rate:100,humanApproved:false})}catch{blocked=true}if(!blocked)throw Error('human certification gate');
const p=paymentEligibility({certifiedValue:1000,retention:100,advanceRecovery:50,certified:true});if(p.net!==850)throw Error('net payable math');
