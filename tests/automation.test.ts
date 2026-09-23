import {ownerInbox} from '../src/automation/action-inbox';
import {actionsFor} from '../src/automation/rules';
const box=ownerInbox([{id:'1',priority:'INFO',type:'x'},{id:'2',priority:'URGENT',type:'y'},{id:'3',priority:'CRITICAL',type:'z'}]);if(box.length!==2||box[0].priority!=='CRITICAL')throw Error('inbox priority');
const a=actionsFor('TARGET_MISSED',[{id:'r',eventType:'TARGET_MISSED',enabled:true,actions:[{type:'ESCALATE',config:{}}]}]);if(a.length!==1)throw Error('rule action');
