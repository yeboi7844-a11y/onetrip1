import type {Service} from "../data/services";
export type Result={status:"READY"|"VERIFY"|"BLOCKED";blockers:string[];warnings:string[];officeOpenNow:boolean;canGoNow:"GO"|"VERIFY"|"DONT_GO"};
const mins=(t:string)=>{const [h,m]=t.split(":").map(Number);return h*60+m};
export function evaluateReadiness(service:Service,checkedIds:string[],appointmentConfirmed:boolean,now=new Date()):Result{
 const blockers:string[]=[];const warnings:string[]=[];
 service.documents.filter(d=>!checkedIds.includes(d.id)).forEach(d=>blockers.push(`Missing: ${d.name}${d.original?" (bring original)":""}`));
 if(service.appointmentRequired&&!appointmentConfirmed) warnings.push(service.appointmentStatus==="unavailable"?"Appointment is unavailable.":"Appointment is unverified; confirm before travelling.");
 const closed=service.closedDays.includes(now.getDay());const cur=now.getHours()*60+now.getMinutes();
 const officeOpenNow=!closed&&cur>=mins(service.workingHours.open)&&cur<mins(service.workingHours.close);
 if(closed)blockers.push("The demo schedule marks the office closed today.");else if(!officeOpenNow)blockers.push(`Outside listed office hours (${service.workingHours.open}–${service.workingHours.close}).`);
 const verified=new Date(service.lastVerified+"T00:00:00");
 if(Number.isNaN(verified.getTime())||now.getTime()-verified.getTime()>7*86400000)warnings.push(`Information may be outdated. Last marked verified: ${service.lastVerified}.`);
 const status=blockers.length?"BLOCKED":warnings.length?"VERIFY":"READY";
 return {status,blockers,warnings,officeOpenNow,canGoNow:blockers.length?"DONT_GO":warnings.length?"VERIFY":"GO"};
}