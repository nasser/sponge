// Compiled by ClojureScript 1.8.51 {}
goog.provide('sponge.emulator');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
sponge.emulator.get_cell = (function sponge$emulator$get_cell(ctx,x){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ctx),x);
});
sponge.emulator.intcast = (function sponge$emulator$intcast(v){
if(cljs.core._EQ_.call(null,v,true)){
return (1);
} else {
if(cljs.core._EQ_.call(null,v,false)){
return (0);
} else {
return v;

}
}
});
sponge.emulator.binop = (function sponge$emulator$binop(op){
return (function (ctx,a,b,s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),s], null),sponge.emulator.intcast.call(null,op.call(null,sponge.emulator.get_cell.call(null,ctx,a),sponge.emulator.get_cell.call(null,ctx,b)))),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
});
});
sponge.emulator.ops = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"\u00F7","\u00F7",-1974998442),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"jump","jump",-971319427)],[(function (ctx,x,y){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.emulator.get_cell.call(null,ctx,x),sponge.emulator.get_cell.call(null,ctx,y)], null)], null),"#"),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._STAR_),(function (ctx,a,b){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),a], null),sponge.emulator.get_cell.call(null,ctx,b)),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._GT_),sponge.emulator.binop.call(null,cljs.core._),sponge.emulator.binop.call(null,cljs.core._PLUS_),sponge.emulator.binop.call(null,cljs.core._SLASH_),(function (ctx,n,v){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),n], null),v),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._LT_),(function (ctx,t,l){
if(cljs.core._EQ_.call(null,(1),sponge.emulator.get_cell.call(null,ctx,t))){
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"ip","ip",58378915),sponge.emulator.get_cell.call(null,ctx,l));
} else {
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}
})]);
sponge.emulator.parse = (function sponge$emulator$parse(src){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"instr","instr",1938970239),src,new cljs.core.Keyword(null,"plot","plot",2086832225),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ip","ip",58378915),(0),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY], null);
});
sponge.emulator.parse_string = (function sponge$emulator$parse_string(s){
return sponge.emulator.parse.call(null,cljs.reader.read_string.call(null,s));
});
sponge.emulator.parse_syntax = (function sponge$emulator$parse_syntax(s){
return sponge.emulator.parse.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__7993_SHARP_){
var vec__7995 = cljs.reader.read_string.call(null,[cljs.core.str("["),cljs.core.str(p1__7993_SHARP_),cljs.core.str("]")].join(''));
var op = cljs.core.nth.call(null,vec__7995,(0),null);
var args = cljs.core.nthnext.call(null,vec__7995,(1));
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.keyword.call(null,op),args);
}),clojure.string.split.call(null,s,"\n"))));
});
sponge.emulator.step = (function sponge$emulator$step(ctx){
var temp__4657__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"instr","instr",1938970239)),ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915)));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__7997 = temp__4657__auto__;
var op = cljs.core.nth.call(null,vec__7997,(0),null);
var args = cljs.core.nthnext.call(null,vec__7997,(1));
return cljs.core.apply.call(null,sponge.emulator.ops.call(null,op),ctx,args);
} else {
return null;
}
});
sponge.emulator.run = (function sponge$emulator$run(ctx){
return cljs.core.take.call(null,(200),cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,sponge.emulator.step,ctx)));
});
sponge.emulator.screen_text = (function sponge$emulator$screen_text(ctx){
if(cljs.core.truth_(ctx)){
var sb = (new goog.string.StringBuffer());
var seq__8010_8022 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__8011_8023 = null;
var count__8012_8024 = (0);
var i__8013_8025 = (0);
while(true){
if((i__8013_8025 < count__8012_8024)){
var y_8026 = cljs.core._nth.call(null,chunk__8011_8023,i__8013_8025);
var seq__8014_8027 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__8015_8028 = null;
var count__8016_8029 = (0);
var i__8017_8030 = (0);
while(true){
if((i__8017_8030 < count__8016_8029)){
var x_8031 = cljs.core._nth.call(null,chunk__8015_8028,i__8017_8030);
sb.append((function (){var or__6210__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8031,y_8026], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return " ";
}
})());

var G__8032 = seq__8014_8027;
var G__8033 = chunk__8015_8028;
var G__8034 = count__8016_8029;
var G__8035 = (i__8017_8030 + (1));
seq__8014_8027 = G__8032;
chunk__8015_8028 = G__8033;
count__8016_8029 = G__8034;
i__8017_8030 = G__8035;
continue;
} else {
var temp__4657__auto___8036 = cljs.core.seq.call(null,seq__8014_8027);
if(temp__4657__auto___8036){
var seq__8014_8037__$1 = temp__4657__auto___8036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8014_8037__$1)){
var c__7021__auto___8038 = cljs.core.chunk_first.call(null,seq__8014_8037__$1);
var G__8039 = cljs.core.chunk_rest.call(null,seq__8014_8037__$1);
var G__8040 = c__7021__auto___8038;
var G__8041 = cljs.core.count.call(null,c__7021__auto___8038);
var G__8042 = (0);
seq__8014_8027 = G__8039;
chunk__8015_8028 = G__8040;
count__8016_8029 = G__8041;
i__8017_8030 = G__8042;
continue;
} else {
var x_8043 = cljs.core.first.call(null,seq__8014_8037__$1);
sb.append((function (){var or__6210__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8043,y_8026], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return " ";
}
})());

var G__8044 = cljs.core.next.call(null,seq__8014_8037__$1);
var G__8045 = null;
var G__8046 = (0);
var G__8047 = (0);
seq__8014_8027 = G__8044;
chunk__8015_8028 = G__8045;
count__8016_8029 = G__8046;
i__8017_8030 = G__8047;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__8048 = seq__8010_8022;
var G__8049 = chunk__8011_8023;
var G__8050 = count__8012_8024;
var G__8051 = (i__8013_8025 + (1));
seq__8010_8022 = G__8048;
chunk__8011_8023 = G__8049;
count__8012_8024 = G__8050;
i__8013_8025 = G__8051;
continue;
} else {
var temp__4657__auto___8052 = cljs.core.seq.call(null,seq__8010_8022);
if(temp__4657__auto___8052){
var seq__8010_8053__$1 = temp__4657__auto___8052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010_8053__$1)){
var c__7021__auto___8054 = cljs.core.chunk_first.call(null,seq__8010_8053__$1);
var G__8055 = cljs.core.chunk_rest.call(null,seq__8010_8053__$1);
var G__8056 = c__7021__auto___8054;
var G__8057 = cljs.core.count.call(null,c__7021__auto___8054);
var G__8058 = (0);
seq__8010_8022 = G__8055;
chunk__8011_8023 = G__8056;
count__8012_8024 = G__8057;
i__8013_8025 = G__8058;
continue;
} else {
var y_8059 = cljs.core.first.call(null,seq__8010_8053__$1);
var seq__8018_8060 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__8019_8061 = null;
var count__8020_8062 = (0);
var i__8021_8063 = (0);
while(true){
if((i__8021_8063 < count__8020_8062)){
var x_8064 = cljs.core._nth.call(null,chunk__8019_8061,i__8021_8063);
sb.append((function (){var or__6210__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8064,y_8059], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return " ";
}
})());

var G__8065 = seq__8018_8060;
var G__8066 = chunk__8019_8061;
var G__8067 = count__8020_8062;
var G__8068 = (i__8021_8063 + (1));
seq__8018_8060 = G__8065;
chunk__8019_8061 = G__8066;
count__8020_8062 = G__8067;
i__8021_8063 = G__8068;
continue;
} else {
var temp__4657__auto___8069__$1 = cljs.core.seq.call(null,seq__8018_8060);
if(temp__4657__auto___8069__$1){
var seq__8018_8070__$1 = temp__4657__auto___8069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_8070__$1)){
var c__7021__auto___8071 = cljs.core.chunk_first.call(null,seq__8018_8070__$1);
var G__8072 = cljs.core.chunk_rest.call(null,seq__8018_8070__$1);
var G__8073 = c__7021__auto___8071;
var G__8074 = cljs.core.count.call(null,c__7021__auto___8071);
var G__8075 = (0);
seq__8018_8060 = G__8072;
chunk__8019_8061 = G__8073;
count__8020_8062 = G__8074;
i__8021_8063 = G__8075;
continue;
} else {
var x_8076 = cljs.core.first.call(null,seq__8018_8070__$1);
sb.append((function (){var or__6210__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8076,y_8059], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return " ";
}
})());

var G__8077 = cljs.core.next.call(null,seq__8018_8070__$1);
var G__8078 = null;
var G__8079 = (0);
var G__8080 = (0);
seq__8018_8060 = G__8077;
chunk__8019_8061 = G__8078;
count__8020_8062 = G__8079;
i__8021_8063 = G__8080;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__8081 = cljs.core.next.call(null,seq__8010_8053__$1);
var G__8082 = null;
var G__8083 = (0);
var G__8084 = (0);
seq__8010_8022 = G__8081;
chunk__8011_8023 = G__8082;
count__8012_8024 = G__8083;
i__8013_8025 = G__8084;
continue;
}
} else {
}
}
break;
}

return sb.toString();
} else {
return null;
}
});
sponge.emulator.print__STAR_ip = (function sponge$emulator$print__STAR_ip(ctx){
cljs.core.println.call(null,[cljs.core.str(ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915))),cljs.core.str(" : "),cljs.core.str(cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"instr","instr",1938970239)),ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915))))].join(''));

return ctx;
});
sponge.emulator.print_state = (function sponge$emulator$print_state(ctx){
cljs.core.println.call(null,ctx.call(null,new cljs.core.Keyword(null,"state","state",-1988618099)));

return ctx;
});
sponge.emulator.slurp = (function sponge$emulator$slurp(var_args){
var args__7287__auto__ = [];
var len__7280__auto___8086 = arguments.length;
var i__7281__auto___8087 = (0);
while(true){
if((i__7281__auto___8087 < len__7280__auto___8086)){
args__7287__auto__.push((arguments[i__7281__auto___8087]));

var G__8088 = (i__7281__auto___8087 + (1));
i__7281__auto___8087 = G__8088;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return args;
});

sponge.emulator.slurp.cljs$lang$maxFixedArity = (0);

sponge.emulator.slurp.cljs$lang$applyTo = (function (seq8085){
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8085));
});
sponge.emulator.template = (function sponge$emulator$template(named){
return document.querySelector([cljs.core.str("template[id='"),cljs.core.str(named),cljs.core.str("'")].join('')).innerHTML;
});
sponge.emulator.instr__GT_svg = (function sponge$emulator$instr__GT_svg(p__8089){
var vec__8091 = p__8089;
var op = cljs.core.nth.call(null,vec__8091,(0),null);
var args = cljs.core.nthnext.call(null,vec__8091,(1));
var argmap = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,"abcdefg",args));
var template = sponge.emulator.template.call(null,cljs.core.name.call(null,op));
return cljs.core.reduce_kv.call(null,((function (argmap,template,vec__8091,op,args){
return (function (svg,placeholder,actual){
return clojure.string.replace.call(null,svg,[cljs.core.str("$"),cljs.core.str(placeholder)].join(''),[cljs.core.str(actual)].join(''));
});})(argmap,template,vec__8091,op,args))
,template,argmap);
});
sponge.emulator.printable = (function sponge$emulator$printable(program){
return [cljs.core.str("<html><head></head><body>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map_indexed.call(null,(function (i,doc){
return clojure.string.replace.call(null,doc,"$n",[cljs.core.str(i)].join(''));
}),cljs.core.map.call(null,sponge.emulator.instr__GT_svg,new cljs.core.Keyword(null,"instr","instr",1938970239).cljs$core$IFn$_invoke$arity$1(program))))),cljs.core.str("</body></html>")].join('');
});

//# sourceMappingURL=emulator.js.map?rel=1478409788466