import {submitResult} from '../src/field/target-service';
import {createEvidence,verifyEvidence} from '../src/field/evidence-service';
const t={id:'t1',projectId:'p',activityId:'a',plannedQty:10,status:'OPEN' as const};
let blocked=false;try{submitResult(t,'PARTIAL')}catch{blocked=true}if(!blocked)throw Error('reason gate failed');
const e=createEvidence({projectId:'p',storageKey:'p/e/1.jpg',uploaderPersonId:'u'});if(e.verified)throw Error('premature verification');
let human=false;try{verifyEvidence(e,false)}catch{human=true}if(!human)throw Error('human verification gate failed');
