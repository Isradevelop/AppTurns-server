(self.webpackChunkapp_turns=self.webpackChunkapp_turns||[]).push([[592],{6363:(t,e,s)=>{"use strict";s.d(e,{p:()=>c});var r=s(5304),h=s(3342),i=s(5917),a=s(9019),p=s(639),o=s(1841),n=s(8663);let c=(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.baseUrl=a.N.baseURL,this.changesCopy=[]}getChanges(t){return this.http.get(`${this.baseUrl}/change/${t}`)}createChange(t,e,s,h,a,p){return this.http.post(`${this.baseUrl}/change`,{applicantEmployee:t,affectedEmployee:e,shiftApplicant:s,shiftAffected:h,changeDate:a,status:p}).pipe((0,r.K)(t=>(0,i.of)(t)))}updateChange(t,e,s,a,p){return p?this.http.put(`${this.baseUrl}/change`,{_id:t,status:e,applicantSchedule:s,affectedSchedule:a,i:p}).pipe((0,h.b)(t=>this.router.navigateByUrl("/")),(0,r.K)(t=>(0,i.of)(t))):this.http.put(`${this.baseUrl}/change`,{_id:t,status:e}).pipe((0,h.b)(t=>this.router.navigateByUrl("/")),(0,r.K)(t=>(0,i.of)(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(o.eN),p.LFG(n.F0))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},9364:(t,e,s)=>{"use strict";s.d(e,{u:()=>c});var r=s(3342),h=s(5304),i=s(5917),a=s(9019),p=s(639),o=s(1841),n=s(8663);let c=(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.baseUrl=a.N.baseURL}getSchedules(){return this.http.get(`${this.baseUrl}/schedule`).pipe((0,r.b)(t=>t),(0,h.K)(t=>(0,i.of)(t)))}createSchedule(t,e,s,a,p){return this.http.post(`${this.baseUrl}/schedule/new`,{employeeName:t,dates:e,shifts:s,year:a,month:p}).pipe((0,r.b)(t=>t),(0,h.K)(t=>(0,i.of)(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(o.eN),p.LFG(n.F0))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4832:(t,e,s)=>{"use strict";s.d(e,{U:()=>u});var r=s(5917),h=s(5304),i=s(8002),a=s(3342),p=s(9019),o=s(639),n=s(1841),c=s(8663);let u=(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.baseUrl=p.N.baseURL}allShifts(){return this.http.get(`${this.baseUrl}/shift`).pipe((0,h.K)(t=>(0,r.of)(t.error)))}allShiftsNames(){let t=[];return this.http.get(`${this.baseUrl}/shift`).pipe((0,i.U)(e=>(e.forEach(e=>{t.push(e.name)}),t)),(0,h.K)(t=>(0,r.of)(t.error)))}createShift(t,e){let s={name:t,shift:e};return console.log("service",s),this.http.post(`${this.baseUrl}/shift`,s).pipe((0,a.b)(t=>this.router.navigateByUrl("/shifts/typesShifts")),(0,h.K)(t=>(0,r.of)(t.error)))}deleteShift(t){return this.http.delete(`${this.baseUrl}/shift/${t}`).pipe((0,a.b)(t=>this.router.navigateByUrl("/shifts/typesShift")),(0,h.K)(t=>(0,r.of)(t.error)))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(n.eN),o.LFG(c.F0))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);