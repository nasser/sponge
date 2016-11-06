// Compiled by ClojureScript 1.8.51 {}
goog.provide('sponge.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sponge.emulator');
goog.require('sponge.examples');
goog.require('reagent.core');
if(typeof sponge.core.debug_QMARK_ !== 'undefined'){
} else {
sponge.core.debug_QMARK_ = goog.DEBUG;
}
sponge.core.program_run = reagent.core.atom.call(null,null);
sponge.core.ui = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrubber","scrubber",1576196384),(0)], null));
sponge.core.run_button = (function sponge$core$run_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.run","button.run",-1399144091),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
var prog = sponge.emulator.parse_syntax.call(null,document.querySelector("#program").value);
cljs.core.reset_BANG_.call(null,sponge.core.program_run,cljs.core.vec.call(null,sponge.emulator.run.call(null,prog)));

return cljs.core.swap_BANG_.call(null,sponge.core.ui,cljs.core.assoc,new cljs.core.Keyword(null,"scrubber","scrubber",1576196384),(cljs.core.count.call(null,cljs.core.deref.call(null,sponge.core.program_run)) - (1)));
})], null)], null);
});
sponge.core.print_button = (function sponge$core$print_button(run){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.print","button.print",428105504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var content = sponge.emulator.printable.call(null,cljs.core.last.call(null,run));
var win = window.open();
win.document.open().write(content);

return win.print();
})], null),"Print"], null);
});
sponge.core.scrubber = (function sponge$core$scrubber(run){
var run__$1 = (function (){var or__24534__auto__ = run;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#scrubber","div#scrubber",-207570694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.print_button,run__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.run_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,run__$1),new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,run__$1) - (1)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run__$1){
return (function (p1__33417_SHARP_){
var textarea = document.querySelector("#program");
var step_index = (p1__33417_SHARP_.target.value | (0));
var step = cljs.core.nth.call(null,run__$1,step_index);
cljs.core.swap_BANG_.call(null,sponge.core.ui,cljs.core.assoc,new cljs.core.Keyword(null,"scrubber","scrubber",1576196384),step_index);

return selectTextareaLine(textarea,(new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(step) + (1)));
});})(run__$1))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.current","span.current",530473873),((cljs.core.empty_QMARK_.call(null,run__$1))?"0":[cljs.core.str((cljs.core.deref.call(null,sponge.core.ui).call(null,new cljs.core.Keyword(null,"scrubber","scrubber",1576196384)) + (1)))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.total","span.total",614879921),cljs.core.count.call(null,run__$1)], null)], null);
});
sponge.core.register_bank = (function sponge$core$register_bank(regs,names){
var text_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),"middle",new cljs.core.Keyword(null,"style","style",-496642736),{"fontSize": (30)}], null);
var box_width = (30);
var gap = (20);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(gap),cljs.core.str(", 0)")].join('')], null),cljs.core.map_indexed.call(null,((function (text_style,box_width,gap){
return (function (i,r){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.register","g.register",1065881805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),r,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(((gap + box_width) * i)),cljs.core.str(", 20)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text.value","text.value",1760315441),cljs.core.merge.call(null,text_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),{"fontSize": (20)},new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(6)], null)),[cljs.core.str((function (){var or__24534__auto__ = cljs.core.get.call(null,regs,r);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return (0);
}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text.name","text.name",-1228537767),cljs.core.merge.call(null,text_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null)),clojure.string.upper_case.call(null,[cljs.core.str(r)].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((gap / (2)) + box_width) / (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(-15),new cljs.core.Keyword(null,"width","width",-384071477),((gap / (2)) + box_width),new cljs.core.Keyword(null,"height","height",1025178622),(60),new cljs.core.Keyword(null,"style","style",-496642736),{"fill": "none", "stroke": "black"}], null)], null)], null);
});})(text_style,box_width,gap))
,names)], null);
});
sponge.core.registers = (function sponge$core$registers(regs){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#registers","g#registers",1631709557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,20)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,0)"], null),sponge.core.register_bank.call(null,regs,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,70)"], null),sponge.core.register_bank.call(null,regs,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null)], null);
});
sponge.core.grid = (function sponge$core$grid(step){
var plot = new cljs.core.Keyword(null,"plot","plot",2086832225).cljs$core$IFn$_invoke$arity$1(step);
var regs = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(step);
var size = (34);
var gap = (5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#grid","g#grid",710817036),(function (){var iter__25314__auto__ = ((function (plot,regs,size,gap){
return (function sponge$core$grid_$_iter__33428(s__33429){
return (new cljs.core.LazySeq(null,((function (plot,regs,size,gap){
return (function (){
var s__33429__$1 = s__33429;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33429__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25310__auto__ = ((function (s__33429__$1,x,xs__5205__auto__,temp__4657__auto__,plot,regs,size,gap){
return (function sponge$core$grid_$_iter__33428_$_iter__33430(s__33431){
return (new cljs.core.LazySeq(null,((function (s__33429__$1,x,xs__5205__auto__,temp__4657__auto__,plot,regs,size,gap){
return (function (){
var s__33431__$1 = s__33431;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__33431__$1);
if(temp__4657__auto____$1){
var s__33431__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33431__$2)){
var c__25312__auto__ = cljs.core.chunk_first.call(null,s__33431__$2);
var size__25313__auto__ = cljs.core.count.call(null,c__25312__auto__);
var b__33433 = cljs.core.chunk_buffer.call(null,size__25313__auto__);
if((function (){var i__33432 = (0);
while(true){
if((i__33432 < size__25313__auto__)){
var y = cljs.core._nth.call(null,c__25312__auto__,i__33432);
cljs.core.chunk_append.call(null,b__33433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"x","x",2099068185),(gap + ((gap + size) * x)),new cljs.core.Keyword(null,"y","y",-1757859776),(gap + ((gap + size) * y)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": (cljs.core.truth_(cljs.core.get.call(null,plot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?"green":"yellow"), "stroke": "black", "strokeOpacity": 0.125}], null)], null));

var G__33438 = (i__33432 + (1));
i__33432 = G__33438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33433),sponge$core$grid_$_iter__33428_$_iter__33430.call(null,cljs.core.chunk_rest.call(null,s__33431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33433),null);
}
} else {
var y = cljs.core.first.call(null,s__33431__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"x","x",2099068185),(gap + ((gap + size) * x)),new cljs.core.Keyword(null,"y","y",-1757859776),(gap + ((gap + size) * y)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": (cljs.core.truth_(cljs.core.get.call(null,plot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?"green":"yellow"), "stroke": "black", "strokeOpacity": 0.125}], null)], null),sponge$core$grid_$_iter__33428_$_iter__33430.call(null,cljs.core.rest.call(null,s__33431__$2)));
}
} else {
return null;
}
break;
}
});})(s__33429__$1,x,xs__5205__auto__,temp__4657__auto__,plot,regs,size,gap))
,null,null));
});})(s__33429__$1,x,xs__5205__auto__,temp__4657__auto__,plot,regs,size,gap))
;
var fs__25311__auto__ = cljs.core.seq.call(null,iterys__25310__auto__.call(null,cljs.core.range.call(null,(10))));
if(fs__25311__auto__){
return cljs.core.concat.call(null,fs__25311__auto__,sponge$core$grid_$_iter__33428.call(null,cljs.core.rest.call(null,s__33429__$1)));
} else {
var G__33439 = cljs.core.rest.call(null,s__33429__$1);
s__33429__$1 = G__33439;
continue;
}
} else {
return null;
}
break;
}
});})(plot,regs,size,gap))
,null,null));
});})(plot,regs,size,gap))
;
return iter__25314__auto__.call(null,cljs.core.range.call(null,(10)));
})(),(function (){var iter__25314__auto__ = ((function (plot,regs,size,gap){
return (function sponge$core$grid_$_iter__33434(s__33435){
return (new cljs.core.LazySeq(null,((function (plot,regs,size,gap){
return (function (){
var s__33435__$1 = s__33435;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33435__$1);
if(temp__4657__auto__){
var s__33435__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33435__$2)){
var c__25312__auto__ = cljs.core.chunk_first.call(null,s__33435__$2);
var size__25313__auto__ = cljs.core.count.call(null,c__25312__auto__);
var b__33437 = cljs.core.chunk_buffer.call(null,size__25313__auto__);
if((function (){var i__33436 = (0);
while(true){
if((i__33436 < size__25313__auto__)){
var i = cljs.core._nth.call(null,c__25312__auto__,i__33436);
cljs.core.chunk_append.call(null,b__33437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((size / (2)) + ((gap + size) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),(((12) + (5)) + ((10) * (gap + size)))], null),[cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),((size - (6)) + ((gap + size) * i)),new cljs.core.Keyword(null,"x","x",2099068185),((5) + ((10) * (gap + size)))], null),[cljs.core.str(i)].join('')], null)], null));

var G__33440 = (i__33436 + (1));
i__33436 = G__33440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33437),sponge$core$grid_$_iter__33434.call(null,cljs.core.chunk_rest.call(null,s__33435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33437),null);
}
} else {
var i = cljs.core.first.call(null,s__33435__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((size / (2)) + ((gap + size) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),(((12) + (5)) + ((10) * (gap + size)))], null),[cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),((size - (6)) + ((gap + size) * i)),new cljs.core.Keyword(null,"x","x",2099068185),((5) + ((10) * (gap + size)))], null),[cljs.core.str(i)].join('')], null)], null),sponge$core$grid_$_iter__33434.call(null,cljs.core.rest.call(null,s__33435__$2)));
}
} else {
return null;
}
break;
}
});})(plot,regs,size,gap))
,null,null));
});})(plot,regs,size,gap))
;
return iter__25314__auto__.call(null,cljs.core.range.call(null,(10)));
})()], null);
});
sponge.core.visualizer = (function sponge$core$visualizer(run,p__33441){
var map__33444 = p__33441;
var map__33444__$1 = ((((!((map__33444 == null)))?((((map__33444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);
var ui = map__33444__$1;
var scrubber = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"scrubber","scrubber",1576196384));
var step = cljs.core.nth.call(null,run,scrubber);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#visualizer","div#visualizer",1993292040),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.grid,step], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, 400)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.registers,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(step)], null)], null)], null)], null);
});
sponge.core.code_input = (function sponge$core$code_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#program","textarea#program",-858086471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),(21),new cljs.core.Keyword(null,"cols","cols",-1914801295),(25)], null)], null);
});
sponge.core.examples = (function sponge$core$examples(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__33446_SHARP_){
return document.querySelector("#program").value = sponge.examples.examples.call(null,cljs.core.keyword.call(null,p1__33446_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"diagonal"], null),"Diagonal Line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"x"], null),"The Letter X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"creeper"], null),"Creeper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"circle"], null),"Circle"], null)], null);
});
sponge.core.tools = (function sponge$core$tools(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tools","div#tools",113126094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/freehand.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/line.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/rectangle.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/circle.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/filled-rectangle.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/filled-circle.png"], null)], null)], null)], null);
});
sponge.core.page = (function sponge$core$page(program_run){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Slowest Computer On Earth"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.code_input], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.center","div.column.center",-713168777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Grid and Registers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.visualizer,cljs.core.deref.call(null,program_run),cljs.core.deref.call(null,sponge.core.ui)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.scrubber,cljs.core.deref.call(null,program_run)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.last","div.column.last",-9133569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Drawing Tools"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.tools], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Examples"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.examples], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#footer","div#footer",861595109),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Developed by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://kahoabe.net"], null),"Kaho Abe"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://nas.sr"], null),"Ramsey Nasser"], null)," for the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://eyebeam.org/communityyouth/playablefashion/"], null),"Playable Fashion"], null)," program at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://eyebeam.org/"], null),"Eyebeam"], null),"."], null)], null)], null);
});
sponge.core.dev_setup = (function sponge$core$dev_setup(){
if(cljs.core.truth_(sponge.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
sponge.core.reload = (function sponge$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.core.page,sponge.core.program_run], null),document.getElementById("app"));
});
sponge.core.main = (function sponge$core$main(){
sponge.core.dev_setup.call(null);

return sponge.core.reload.call(null);
});
goog.exportSymbol('sponge.core.main', sponge.core.main);

//# sourceMappingURL=core.js.map?rel=1478441654525