import{k as h,l as W,p as E,A as B,q as v,o as n,f as d,a as t,w as o,b as e,i as $,D as N,g as z,F as C,x as T,v as ue,t as u,d as c,n as J,E as me,e as X,c as Q,y as _e,u as D,G as pe,B as ve,C as he,H as fe,T as ye}from"./app-B0RD5qJU.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const xe="/build/assets/student-search-BiC_fK2p.gif",l=j=>(ve("data-v-73fe4533"),j=j(),he(),j),be=l(()=>e("img",{src:xe,style:{margin:"auto",display:"block","margin-bottom":"20px"}},null,-1)),we=l(()=>e("p",{class:"mb-0"},"Search student by Name /Email ID /Roll No",-1)),ke=l(()=>e("hr",null,null,-1)),Se={class:"flex flex-col"},Ce={class:""},Ve={class:""},De={class:"",style:{"overflow-x":"auto"}},$e={class:"min-w-full divide-y marksheet-table"},Ue={class:"bg-gray-50"},Pe=l(()=>e("th",{scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"}," Select Student ",-1)),Ne=l(()=>e("th",{scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"}," Roll No ",-1)),Te=l(()=>e("th",{scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"}," Name ",-1)),Fe=l(()=>e("th",{scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"}," Email ",-1)),Ge={scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"},Ee={class:"flex items-center space-x-2"},Be=l(()=>e("option",{value:""}," Pass Status ",-1)),je=l(()=>e("option",{value:"passed"}," Passed ",-1)),Le=l(()=>e("option",{value:"failed"}," Failed ",-1)),Me=l(()=>e("option",{value:"pending"}," Pending ",-1)),ze=[Be,je,Le,Me],Ie={scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"},Ae=l(()=>e("option",{value:""}," Generated Status ",-1)),Re=l(()=>e("option",{value:"generated"}," Generated ",-1)),qe=l(()=>e("option",{value:"not_generated"}," Not Generated ",-1)),He=[Ae,Re,qe],Ke=l(()=>e("th",{scope:"col",class:"py-3.5 pl-1 pr-1 text-left text-sm text-primary font-semibold text-gray-900 sm:pl-6"}," Shipment Tracking ",-1)),Oe={class:"divide-y divide-gray-200 bg-white"},Ye={key:0},Je=l(()=>e("td",{class:"text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500",colspan:7}," Loading students data please wait ... ",-1)),Qe=[Je],We={key:1},Xe=l(()=>e("td",{class:"text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500",colspan:7}," No data is available ",-1)),Ze=[Xe],et={class:"whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6"},tt=["value"],st={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-secondary sm:pl-6"},ot={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-primary"},at={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-warning"},lt={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},nt=["onClick","disabled"],ct={key:0},dt={style:{"list-style-type":"none"}},it={key:1},rt=l(()=>e("p",{class:"text-center"}," No documents generated yet. ",-1)),ut=[rt],mt={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},_t=["onClick"],pt={key:0,class:""},vt={class:"max-w-none mx-auto"},ht={class:"bg-white overflow-hidden shadow sm:rounded-lg"},ft={class:"bg-white px-4 py-3 flex items-center justify-between"},yt=l(()=>e("div",{class:"flex-1 flex justify-between sm:hidden"},null,-1)),gt={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},xt={class:"text-sm text-gray-700 text-primary"},bt={class:"font-medium"},wt={class:"font-medium"},kt={class:"font-medium"},St=["onClick","disabled"],Ct=["innerHTML"],Vt=l(()=>e("p",{class:"custom-title"},"Select Students and Generate Documents",-1)),Dt={class:"form-floating"},$t=l(()=>e("option",{value:"documents"},"Final Documents",-1)),Ut=l(()=>e("option",{value:"semesters"}," Semester Marksheet ",-1)),Pt=[$t,Ut],Nt=l(()=>e("label",{for:"floatingSelect"},"Update Document Type",-1)),Tt=l(()=>e("p",{class:""},"Select Documents to be Generated",-1)),Ft=l(()=>e("div",{"data-v-22f91e27":"",class:"v-col-md-12 v-col-12"},[e("hr",{"data-v-22f91e27":""})],-1)),Gt=l(()=>e("p",{class:"custom-title"},"Selects Students and Update Exam Status",-1)),Et={class:"form-floating mb-3"},Bt=l(()=>e("option",{value:"passed"},"Passed",-1)),jt=l(()=>e("option",{value:"failed"},"Failed",-1)),Lt=l(()=>e("option",{value:"pending"},"Pending",-1)),Mt=[Bt,jt,Lt],zt=l(()=>e("label",{for:"floatingSelect"},"Update Exam Status",-1)),It=l(()=>e("strong",{style:{color:"brown"},class:"text-success"},"Generated Documents",-1)),At={key:0,style:{"list-style-type":"none"}},Rt={__name:"DataTable",props:{students:{type:Object,required:!0}},setup(j){const b=h([]),S=h([]),U=h(null);let x=h("");const w=h(""),I=h([]),i=h([]),f=h([]),F=h(!1),G=h(1),L=h(""),m=h(""),r=W();let k=null;const M=h(!1),H=j;E(()=>H.students,a=>{i.value=a},{immediate:!0}),E(U,a=>{console.log("Search query changed:",a),G.value=1,k&&clearTimeout(k),k=setTimeout(()=>{V()},500)}),E(L,a=>{console.log("Filter by pass status:",a),G.value=1,V()}),E(m,a=>{console.log("Filter by Generated Status:",a),G.value=1,V()});const A=a=>{G.value=a.url.split("=")[1],V()},V=()=>{M.value=!0,B.get("/marksheet/search",{params:{query:U.value,page:G.value,pass_status:L.value,generated_status:m.value}}).then(a=>{console.log(a),i.value=a.data.students,M.value=!1}).catch(a=>{r.error(a.response.data.error),M.value=!1})},R=a=>{pe.visit(`/shipment/student/${a}`)};E(b,a=>{console.log("Selected students:",a)}),E(S,a=>{console.log("Selected documents:",a)});const K=a=>{f.value=a,F.value=!0},_=()=>{console.log(w.value),B.get("/marksheet/documents",{params:{doc_type:w.value}}).then(a=>{console.log(a),I.value=a.data.map(p=>p.document_name)}).catch(a=>{r.error(a.response.data.error)})},Z=()=>{if(confirm("Are you sure you want to update"))console.log("User confirmed the update");else{console.log("User canceled the update");return}console.log("Form has gone through the update: ",w.value),B.post("/marksheet/update-documents",{doc_type:w.value,docs:S.value,students:b.value}).then(a=>{console.log(a),r.success("Documents updated successfully!"),S.value=[],b.value=[],w.value="",V()}).catch(a=>{S.value=[],b.value=[],w.value="",r.error(a.response.data.error)})},ee=()=>{if(confirm("Are you sure you want to update?"))console.log("User confirmed the update.");else{console.log("User canceled the update.");return}B.post("/marksheet/update-pass-status",{students:b.value,pass_status:x.value}).then(a=>{console.log(a),r.success("Pass status updated successfully!"),b.value=[],x.value="",V()}).catch(a=>{b.value=[],x.value="",r.error(a.response.data.error)})};return(a,p)=>{const y=v("v-col"),te=v("v-text-field"),g=v("v-icon"),se=v("v-tooltip"),oe=v("v-combobox"),O=v("v-btn"),q=v("v-row"),ae=v("v-card-title"),le=v("v-card-subtitle"),Y=v("v-divider"),ne=v("v-card-text"),ce=v("v-card-actions"),de=v("v-card"),ie=v("v-dialog");return n(),d(C,null,[t(q,{class:"justify-content-center"},{default:o(()=>[t(y,{cols:"12",md:"12",class:"text-center"},{default:o(()=>[be,we]),_:1}),t(y,{cols:"12",md:"6",class:"search-box"},{default:o(()=>[t(te,{modelValue:U.value,"onUpdate:modelValue":p[0]||(p[0]=s=>U.value=s),label:"Search by Name, Roll number or Email ...","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",md:"12",class:"px-5"},{default:o(()=>[ke]),_:1}),t(y,{cols:"12",md:"9"},{default:o(()=>[e("div",Se,[e("div",Ce,[e("div",Ve,[e("div",De,[e("table",$e,[e("thead",Ue,[e("tr",null,[Pe,Ne,Te,Fe,e("th",Ge,[e("div",Ee,[$(e("select",{"onUpdate:modelValue":p[1]||(p[1]=s=>L.value=s),class:"border border-white text-sm rounded focus:outline-none"},ze,512),[[N,L.value]])])]),e("th",Ie,[$(e("select",{"onUpdate:modelValue":p[2]||(p[2]=s=>m.value=s),class:"border border-white text-sm rounded"},He,512),[[N,m.value]])]),Ke])]),e("tbody",Oe,[M.value?(n(),d("tr",Ye,Qe)):z("",!0),i.value.length===0?(n(),d("tr",We,Ze)):z("",!0),(n(!0),d(C,null,T(i.value.data,s=>(n(),d("tr",{key:s.id},[e("td",et,[$(e("input",{type:"checkbox",value:s.id,"onUpdate:modelValue":p[3]||(p[3]=P=>b.value=P),class:"custom-checkbox"},null,8,tt),[[ue,b.value]])]),e("td",st,u(s.student_roll_no),1),e("td",ot,[t(g,{icon:"mdi-account"}),c(" "+u(s.student_name),1)]),e("td",at,[t(g,{icon:s.email?"mdi-email":""},null,8,["icon"]),c(" "+u(s.email),1)]),e("td",lt,[e("button",{class:J({"bg-green-500 text-white px-4 py-2 rounded text-capitalize":s.student_exam_status==="passed","bg-red-500 text-white px-4 py-2 rounded text-capitalize":s.student_exam_status==="failed","bg-yellow-500 text-white px-4 py-2 rounded text-capitalize":s.student_exam_status==="pending"}),disabled:""},[t(g,{icon:s.student_exam_status==="passed"?"mdi-account-check-outline":"mdi-account-cancel-outline"},null,8,["icon"]),c(" "+u(s.student_exam_status),1)],2)]),e("td",null,[t(se,{"no-click-animation":"",variant:"outlined",prominent:""},{activator:o(({props:P})=>[e("button",me({ref_for:!0},P,{onClick:re=>K(s),disabled:s.documents.length<1,class:{"bg-green-500 text-white px-4 py-2 rounded":s.documents.length&&s.documents[0].is_document_generated==="yes","bg-red-500 text-white px-4 py-2 rounded":s.documents.length<1}}),[t(g,{icon:s.documents.length&&s.documents[0].is_document_generated==="yes"?"mdi-note-check":"mdi-note-remove"},null,8,["icon"]),c(" "+u(s.documents.length&&s.documents[0].is_document_generated==="yes"?"Generated":"Not Generated"),1)],16,nt)]),default:o(()=>[e("div",null,[s.documents.length>0?(n(),d("div",ct,[(n(!0),d(C,null,T(s.documents,P=>(n(),d("div",null,[e("li",dt,u(P.document_name),1)]))),256))])):(n(),d("div",it,ut))])]),_:2},1024)]),e("td",mt,[e("button",{class:"text-success",onClick:P=>R(s.id)}," Track Shipment ",8,_t),t(g,{icon:"mdi-truck",color:"primary",class:"mx-1"})])]))),128))])])])])])]),i.value.current_page?(n(),d("div",pt,[e("div",vt,[e("div",ht,[e("div",ft,[yt,e("div",gt,[e("div",null,[e("p",xt,[c(" Showing "),e("span",bt,u(i.value.from),1),c(" to "),e("span",wt,u(i.value.to),1),c(" of "),e("span",kt,u(i.value.total),1),c(" results ")])]),e("div",null,[(n(!0),d(C,null,T(i.value.links,(s,P)=>(n(),d("button",{onClick:X(re=>A(s),["prevent"]),key:P,disabled:s.active||!s.url,class:J(["relative inline-flex items-center px-4 py-2 border text-sm font-medium",{"z-10 bg-indigo-50 border-indigo-500 text-indigo-600":s.active,"bg-white border-gray-300 text-gray-500 hover:bg-gray-50":!s.active}])},[e("span",{innerHTML:s.label,class:"text-primary"},null,8,Ct)],10,St))),128))])])])])])])):z("",!0)]),_:1}),t(y,{cols:"12",md:"3"},{default:o(()=>[t(q,{class:"justify-content-center align-items-center"},{default:o(()=>[t(y,{cols:"12",md:"12",class:"py-2"},{default:o(()=>[Vt,e("div",Dt,[$(e("select",{onChange:_,"onUpdate:modelValue":p[4]||(p[4]=s=>w.value=s),class:"select2 form-control"},Pt,544),[[N,w.value]]),Nt])]),_:1}),w.value?(n(),Q(y,{key:0,cols:"12",md:"12",class:"py-2"},{default:o(()=>[Tt,t(oe,{modelValue:S.value,"onUpdate:modelValue":p[5]||(p[5]=s=>S.value=s),color:"primary",items:I.value,chips:"",variant:"outlined",multiple:""},null,8,["modelValue","items"])]),_:1})):z("",!0),S.value.length>0?(n(),Q(y,{key:1,cols:"12",md:"12",class:"d-flex justify-content-center align-items-center py-2 px-2"},{default:o(()=>[t(O,{onClick:p[6]||(p[6]=s=>Z()),class:"btn btn-primary text-subtitle-1 text-white"},{default:o(()=>[t(g,{icon:"mdi-check-circle"}),c(" Generate Document")]),_:1})]),_:1})):z("",!0),Ft,t(y,{cols:"12",md:"12"},{default:o(()=>[Gt,e("div",Et,[$(e("select",{onChange:ee,"onUpdate:modelValue":p[7]||(p[7]=s=>_e(x)?x.value=s:x=s),class:"select2 form-control"},Mt,544),[[N,D(x)]]),zt])]),_:1})]),_:1})]),_:1})]),_:1}),t(ie,{modelValue:F.value,"onUpdate:modelValue":p[9]||(p[9]=s=>F.value=s),"max-width":"600px"},{default:o(()=>[t(de,{class:"mx-auto my-24","max-width":"780",outlined:""},{default:o(()=>[t(ae,{class:"text-h6 text-center text-primary"},{default:o(()=>[t(g,{icon:"mdi-account"}),c(" "+u(f.value.student_name),1)]),_:1}),t(le,{class:"text-center text-primary"},{default:o(()=>[t(g,{icon:"mdi-file-sign"}),c(" Roll No: "+u(f.value.student_roll_no),1)]),_:1}),t(Y),t(ne,null,{default:o(()=>[t(q,null,{default:o(()=>[t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-email"}),c(" Email:")]),c(" "+u(f.value.email),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-city"}),c(" City:")]),c(" "+u(f.value.student_city),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-map-marker"}),c(" Address:")]),c(" "+u(f.value.student_address),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-pin"}),c(" Pincode:")]),c(" "+u(f.value.student_pincode),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-restore"}),c(" Exam Cycle:")]),c(" "+u(f.value.exam_cycle),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-clock-check"}),c(" Passing Year:")]),c(" "+u(f.value.student_passing_year),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-creation"}),c(" Exam Status:")]),c(" "+u(f.value.student_exam_status),1)]),_:1}),t(y,{cols:"6",class:"py-1 text-primary"},{default:o(()=>[e("strong",null,[t(g,{icon:"mdi-auto-fix"}),c(" Created By:")]),c(" "+u(f.value.created_by),1)]),_:1})]),_:1}),t(Y),t(q,null,{default:o(()=>[t(y,{cols:"12",class:"py-1"},{default:o(()=>[It,(n(!0),d(C,null,T(f.value.documents,s=>(n(),d("span",null,[s.is_document_generated==="yes"?(n(),d("li",At,[t(g,{icon:"mdi-check-circle",color:"success",size:"small"}),c(" "+u(s.document_name),1)])):z("",!0)]))),256))]),_:1})]),_:1})]),_:1}),t(ce,null,{default:o(()=>[t(O,{color:"primary",onClick:p[8]||(p[8]=s=>F.value=!1)},{default:o(()=>[c("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},qt=ge(Rt,[["__scopeId","data-v-73fe4533"]]),Ht={class:"form-floating mb-3"},Kt={key:0},Ot=["value"],Yt=e("label",{for:"floatingSelect"},"Select Department",-1),Jt={class:"form-floating mb-3"},Qt={key:0},Wt=["value"],Xt=e("label",{for:"floatingSelect"},"Select Programs",-1),Zt={class:"form-floating mb-3"},es={key:0},ts=["value"],ss=e("label",{for:"floatingSelect"},"Select Batch",-1),os={class:"form-floating mb-3"},as={key:0},ls=["value"],ns=e("label",{for:"floatingSelect"},"Select Exam Cycle",-1),cs={href:"/sample_format.csv"},ds=e("button",{type:"submit",class:"btn btn-primary"},"Upload",-1),us={__name:"Filter",setup(j){const b=h([]),S=h([]),U=h([]),x=h(!0),w=W();fe(()=>{B.get("/fetch/Apis").then(m=>{x.value=!1,S.value=m.data[0],b.value=m.data[1],U.value=m.data[2],console.log(b,S,U)}).catch(m=>{console.log(m)})});const I=h([]),i=ye({department_id:null,program_id:null,batch_id:null,examCycle:null}),f=h(null),F=h([]),G=()=>{if(!f.value){alert("Please select a CSV file.");return}if(!i.department_id){alert("Please select a department.");return}if(!i.program_id){alert("Please select a program.");return}if(!i.batch_id){alert("Please select a batch.");return}if(!i.examCycle){alert("Please select an exam cycle.");return}const m=new FormData;m.append("csv",f.value),m.append("department_id",i.department_id),m.append("program_id",i.program_id),m.append("batch_id",i.batch_id),m.append("examCycle",i.examCycle),console.log(m),B.post("/marksheet/upload",m,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{F.value=r.data.students,f.value=null,w.success("Student Data uploaded successfully")}).catch(r=>{console.log(r),f.value=null,w.error(r.message)})};E(()=>i.department_id,m=>{x.value=!0,L(m)});const L=m=>{B.get(`/marksheet/programs/${m}`).then(r=>{x.value=!1,I.value=r.data}).catch(r=>{console.log(r),w.error(r)})};return(m,r)=>{const k=v("v-col"),M=v("v-alert"),H=v("v-file-input"),A=v("v-row"),V=v("v-form"),R=v("v-sheet"),K=v("v-card");return n(),d(C,null,[t(R,{class:"v-card v-theme--light v-card--density-default v-card--variant-elevated mx-auto card-shadow mb-5 py-5"},{default:o(()=>[t(V,null,{default:o(()=>[t(A,{class:"pt-4"},{default:o(()=>[t(k,{cols:"12",md:"3"},{default:o(()=>[e("div",Ht,[$(e("select",{"onUpdate:modelValue":r[0]||(r[0]=_=>D(i).department_id=_),name:"department_id",id:"department",class:"select2 form-control"},[x.value?(n(),d("option",Kt,"Loading ...")):(n(!0),d(C,{key:1},T(b.value,_=>(n(),d("option",{value:_.department_id},u(_.department_name),9,Ot))),256))],512),[[N,D(i).department_id]]),Yt])]),_:1}),t(k,{cols:"12",md:"3"},{default:o(()=>[e("div",Jt,[$(e("select",{"onUpdate:modelValue":r[1]||(r[1]=_=>D(i).program_id=_),name:"program_id",id:"programCreate",class:"select2 form-control"},[x.value?(n(),d("option",Qt,"Loading ...")):(n(!0),d(C,{key:1},T(I.value,_=>(n(),d("option",{value:_.program_id},u(_.program),9,Wt))),256))],512),[[N,D(i).program_id]]),Xt])]),_:1}),t(k,{cols:"12",md:"3"},{default:o(()=>[e("div",Zt,[$(e("select",{"onUpdate:modelValue":r[2]||(r[2]=_=>D(i).batch_id=_),name:"batch_id",id:"batchCreate",class:"select2 form-control"},[x.value?(n(),d("option",es,"Loading ...")):(n(!0),d(C,{key:1},T(S.value,_=>(n(),d("option",{value:_.batch_id},u(_.batch),9,ts))),256))],512),[[N,D(i).batch_id]]),ss])]),_:1}),t(k,{cols:"12",md:"3"},{default:o(()=>[e("div",os,[$(e("select",{"onUpdate:modelValue":r[3]||(r[3]=_=>D(i).examCycle=_),name:"semester_id",id:"semesterCreate",class:"select2 form-control"},[x.value?(n(),d("option",as,"Loading ...")):(n(!0),d(C,{key:1},T(U.value,_=>(n(),d("option",{value:_.exam_cycle},u(_.exam_cycle),9,ls))),256))],512),[[N,D(i).examCycle]]),ns])]),_:1}),t(k,{cols:"12",md:"12"},{default:o(()=>[t(V,{onSubmit:X(G,["prevent"])},{default:o(()=>[t(A,{class:"d-flex justify-content-center align-items-center"},{default:o(()=>[t(k,{cols:"6",class:""},{default:o(()=>[e("a",cs,[t(M,{class:"alert",text:"Please fill up the relevant details in the sample format provided in the link and then upload it.Click to download the sample file",title:"Note:",border:"start","border-color":"deep-purple accent-4",elevation:"2",type:""})])]),_:1}),t(k,{cols:"6"},{default:o(()=>[t(A,{class:"justify-content-center align-items-center"},{default:o(()=>[t(k,{cols:"8"},{default:o(()=>[t(H,{modelValue:f.value,"onUpdate:modelValue":r[4]||(r[4]=_=>f.value=_),clearable:"",label:"Upload CSV File ...",variant:"outlined",accept:".csv"},null,8,["modelValue"])]),_:1}),t(k,{cols:"4"},{default:o(()=>[ds]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(R,{class:"v-card v-theme--light v-card--density-default v-card--variant-elevated mx-auto card-shadow mb-5"},{default:o(()=>[t(K,{title:"Marksheet Data and Display",flat:""},{default:o(()=>[t(qt,{students:F.value},null,8,["students"])]),_:1})]),_:1})],64)}}};export{us as default};
