// Compiled by ClojureScript 1.8.51 {}
goog.provide('sponge.emulator');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require('cljs.reader');
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
return sponge.emulator.parse.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__25826_SHARP_){
var vec__25828 = cljs.reader.read_string.call(null,[cljs.core.str("["),cljs.core.str(p1__25826_SHARP_),cljs.core.str("]")].join(''));
var op = cljs.core.nth.call(null,vec__25828,(0),null);
var args = cljs.core.nthnext.call(null,vec__25828,(1));
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.keyword.call(null,op),args);
}),clojure.string.split.call(null,s,"\n"))));
});
sponge.emulator.step = (function sponge$emulator$step(ctx){
var temp__4657__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"instr","instr",1938970239)),ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915)));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__25830 = temp__4657__auto__;
var op = cljs.core.nth.call(null,vec__25830,(0),null);
var args = cljs.core.nthnext.call(null,vec__25830,(1));
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
var seq__25843_25855 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__25844_25856 = null;
var count__25845_25857 = (0);
var i__25846_25858 = (0);
while(true){
if((i__25846_25858 < count__25845_25857)){
var y_25859 = cljs.core._nth.call(null,chunk__25844_25856,i__25846_25858);
var seq__25847_25860 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__25848_25861 = null;
var count__25849_25862 = (0);
var i__25850_25863 = (0);
while(true){
if((i__25850_25863 < count__25849_25862)){
var x_25864 = cljs.core._nth.call(null,chunk__25848_25861,i__25850_25863);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25864,y_25859], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__25865 = seq__25847_25860;
var G__25866 = chunk__25848_25861;
var G__25867 = count__25849_25862;
var G__25868 = (i__25850_25863 + (1));
seq__25847_25860 = G__25865;
chunk__25848_25861 = G__25866;
count__25849_25862 = G__25867;
i__25850_25863 = G__25868;
continue;
} else {
var temp__4657__auto___25869 = cljs.core.seq.call(null,seq__25847_25860);
if(temp__4657__auto___25869){
var seq__25847_25870__$1 = temp__4657__auto___25869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25847_25870__$1)){
var c__25345__auto___25871 = cljs.core.chunk_first.call(null,seq__25847_25870__$1);
var G__25872 = cljs.core.chunk_rest.call(null,seq__25847_25870__$1);
var G__25873 = c__25345__auto___25871;
var G__25874 = cljs.core.count.call(null,c__25345__auto___25871);
var G__25875 = (0);
seq__25847_25860 = G__25872;
chunk__25848_25861 = G__25873;
count__25849_25862 = G__25874;
i__25850_25863 = G__25875;
continue;
} else {
var x_25876 = cljs.core.first.call(null,seq__25847_25870__$1);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25876,y_25859], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__25877 = cljs.core.next.call(null,seq__25847_25870__$1);
var G__25878 = null;
var G__25879 = (0);
var G__25880 = (0);
seq__25847_25860 = G__25877;
chunk__25848_25861 = G__25878;
count__25849_25862 = G__25879;
i__25850_25863 = G__25880;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__25881 = seq__25843_25855;
var G__25882 = chunk__25844_25856;
var G__25883 = count__25845_25857;
var G__25884 = (i__25846_25858 + (1));
seq__25843_25855 = G__25881;
chunk__25844_25856 = G__25882;
count__25845_25857 = G__25883;
i__25846_25858 = G__25884;
continue;
} else {
var temp__4657__auto___25885 = cljs.core.seq.call(null,seq__25843_25855);
if(temp__4657__auto___25885){
var seq__25843_25886__$1 = temp__4657__auto___25885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25843_25886__$1)){
var c__25345__auto___25887 = cljs.core.chunk_first.call(null,seq__25843_25886__$1);
var G__25888 = cljs.core.chunk_rest.call(null,seq__25843_25886__$1);
var G__25889 = c__25345__auto___25887;
var G__25890 = cljs.core.count.call(null,c__25345__auto___25887);
var G__25891 = (0);
seq__25843_25855 = G__25888;
chunk__25844_25856 = G__25889;
count__25845_25857 = G__25890;
i__25846_25858 = G__25891;
continue;
} else {
var y_25892 = cljs.core.first.call(null,seq__25843_25886__$1);
var seq__25851_25893 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__25852_25894 = null;
var count__25853_25895 = (0);
var i__25854_25896 = (0);
while(true){
if((i__25854_25896 < count__25853_25895)){
var x_25897 = cljs.core._nth.call(null,chunk__25852_25894,i__25854_25896);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25897,y_25892], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__25898 = seq__25851_25893;
var G__25899 = chunk__25852_25894;
var G__25900 = count__25853_25895;
var G__25901 = (i__25854_25896 + (1));
seq__25851_25893 = G__25898;
chunk__25852_25894 = G__25899;
count__25853_25895 = G__25900;
i__25854_25896 = G__25901;
continue;
} else {
var temp__4657__auto___25902__$1 = cljs.core.seq.call(null,seq__25851_25893);
if(temp__4657__auto___25902__$1){
var seq__25851_25903__$1 = temp__4657__auto___25902__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25851_25903__$1)){
var c__25345__auto___25904 = cljs.core.chunk_first.call(null,seq__25851_25903__$1);
var G__25905 = cljs.core.chunk_rest.call(null,seq__25851_25903__$1);
var G__25906 = c__25345__auto___25904;
var G__25907 = cljs.core.count.call(null,c__25345__auto___25904);
var G__25908 = (0);
seq__25851_25893 = G__25905;
chunk__25852_25894 = G__25906;
count__25853_25895 = G__25907;
i__25854_25896 = G__25908;
continue;
} else {
var x_25909 = cljs.core.first.call(null,seq__25851_25903__$1);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25909,y_25892], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__25910 = cljs.core.next.call(null,seq__25851_25903__$1);
var G__25911 = null;
var G__25912 = (0);
var G__25913 = (0);
seq__25851_25893 = G__25910;
chunk__25852_25894 = G__25911;
count__25853_25895 = G__25912;
i__25854_25896 = G__25913;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__25914 = cljs.core.next.call(null,seq__25843_25886__$1);
var G__25915 = null;
var G__25916 = (0);
var G__25917 = (0);
seq__25843_25855 = G__25914;
chunk__25844_25856 = G__25915;
count__25845_25857 = G__25916;
i__25846_25858 = G__25917;
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
var args__25611__auto__ = [];
var len__25604__auto___25919 = arguments.length;
var i__25605__auto___25920 = (0);
while(true){
if((i__25605__auto___25920 < len__25604__auto___25919)){
args__25611__auto__.push((arguments[i__25605__auto___25920]));

var G__25921 = (i__25605__auto___25920 + (1));
i__25605__auto___25920 = G__25921;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return args;
});

sponge.emulator.slurp.cljs$lang$maxFixedArity = (0);

sponge.emulator.slurp.cljs$lang$applyTo = (function (seq25918){
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25918));
});
sponge.emulator.template = (function sponge$emulator$template(named){
return document.querySelector([cljs.core.str("template[id='"),cljs.core.str(named),cljs.core.str("'")].join('')).innerHTML;
});
sponge.emulator.instr__GT_svg = (function sponge$emulator$instr__GT_svg(p__25922){
var vec__25924 = p__25922;
var op = cljs.core.nth.call(null,vec__25924,(0),null);
var args = cljs.core.nthnext.call(null,vec__25924,(1));
var argmap = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,"abcdefg",args));
var template = sponge.emulator.template.call(null,cljs.core.name.call(null,op));
return cljs.core.reduce_kv.call(null,((function (argmap,template,vec__25924,op,args){
return (function (svg,placeholder,actual){
return clojure.string.replace.call(null,svg,[cljs.core.str("$"),cljs.core.str(placeholder)].join(''),[cljs.core.str(actual)].join(''));
});})(argmap,template,vec__25924,op,args))
,template,argmap);
});
sponge.emulator.printable = (function sponge$emulator$printable(program){
return [cljs.core.str("<html><head></head><body>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map_indexed.call(null,(function (i,doc){
return clojure.string.replace.call(null,doc,"$n",[cljs.core.str(i)].join(''));
}),cljs.core.map.call(null,sponge.emulator.instr__GT_svg,new cljs.core.Keyword(null,"instr","instr",1938970239).cljs$core$IFn$_invoke$arity$1(program))))),cljs.core.str("</body></html>")].join('');
});

//# sourceMappingURL=emulator.js.map?rel=1478441512309