"use strict";(self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[]).push([[420],{2420:function(e,t,d){d.r(t),d.d(t,{default:function(){return p}});var o=d(3396),i=d(9242),s=d(7139);const n={class:"flex justify-between items-center p-3 border"},a=["disabled"];function r(e,t,d,r,c,u){return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>c.isChecked=e),onChange:t[1]||(t[1]=e=>u.changeTodoStatus(d.id))},null,544),[[i.e8,c.isChecked]]),(0,o._)("p",{class:(0,s.C_)({isFinished:c.isChecked})},(0,s.zw)(d.text),3),(0,o._)("button",{disabled:!c.isChecked,class:(0,s.C_)(["bg-red-500 hover:bg-reds-700 text-white font-bold py-1 px-4 rounded-full",{"bg-red-100":!c.isChecked}]),onClick:t[2]||(t[2]=t=>e.deleteTodoItem(d.id))}," 刪除 ",10,a)])}var c=d(3766),u=d(1516),h={name:"TodoItem",props:{id:{type:[String,Number]},text:{type:String},isFinished:{type:Boolean,default:!1}},data(){return{isChecked:this.isFinished}},methods:{changeTodoStatus(e){this.finishTodoItem(e)},...(0,c.nv)(u.z,["deleteTodoItem","editTodoItem","finishTodoItem"])}},l=d(89);const f=(0,l.Z)(h,[["render",r],["__scopeId","data-v-5fb151ff"]]);var p=f}}]);
//# sourceMappingURL=420.2cd682f9.js.map