// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30960_30974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30961_30975 = null;
var count__30962_30976 = (0);
var i__30963_30977 = (0);
while(true){
if((i__30963_30977 < count__30962_30976)){
var f_30978 = cljs.core._nth.call(null,chunk__30961_30975,i__30963_30977);
cljs.core.println.call(null,"  ",f_30978);

var G__30979 = seq__30960_30974;
var G__30980 = chunk__30961_30975;
var G__30981 = count__30962_30976;
var G__30982 = (i__30963_30977 + (1));
seq__30960_30974 = G__30979;
chunk__30961_30975 = G__30980;
count__30962_30976 = G__30981;
i__30963_30977 = G__30982;
continue;
} else {
var temp__4657__auto___30983 = cljs.core.seq.call(null,seq__30960_30974);
if(temp__4657__auto___30983){
var seq__30960_30984__$1 = temp__4657__auto___30983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30960_30984__$1)){
var c__25345__auto___30985 = cljs.core.chunk_first.call(null,seq__30960_30984__$1);
var G__30986 = cljs.core.chunk_rest.call(null,seq__30960_30984__$1);
var G__30987 = c__25345__auto___30985;
var G__30988 = cljs.core.count.call(null,c__25345__auto___30985);
var G__30989 = (0);
seq__30960_30974 = G__30986;
chunk__30961_30975 = G__30987;
count__30962_30976 = G__30988;
i__30963_30977 = G__30989;
continue;
} else {
var f_30990 = cljs.core.first.call(null,seq__30960_30984__$1);
cljs.core.println.call(null,"  ",f_30990);

var G__30991 = cljs.core.next.call(null,seq__30960_30984__$1);
var G__30992 = null;
var G__30993 = (0);
var G__30994 = (0);
seq__30960_30974 = G__30991;
chunk__30961_30975 = G__30992;
count__30962_30976 = G__30993;
i__30963_30977 = G__30994;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30995 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24534__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30995);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30995)))?cljs.core.second.call(null,arglists_30995):arglists_30995));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30965 = null;
var count__30966 = (0);
var i__30967 = (0);
while(true){
if((i__30967 < count__30966)){
var vec__30968 = cljs.core._nth.call(null,chunk__30965,i__30967);
var name = cljs.core.nth.call(null,vec__30968,(0),null);
var map__30969 = cljs.core.nth.call(null,vec__30968,(1),null);
var map__30969__$1 = ((((!((map__30969 == null)))?((((map__30969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30969):map__30969);
var doc = cljs.core.get.call(null,map__30969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30996 = seq__30964;
var G__30997 = chunk__30965;
var G__30998 = count__30966;
var G__30999 = (i__30967 + (1));
seq__30964 = G__30996;
chunk__30965 = G__30997;
count__30966 = G__30998;
i__30967 = G__30999;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30964);
if(temp__4657__auto__){
var seq__30964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30964__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30964__$1);
var G__31000 = cljs.core.chunk_rest.call(null,seq__30964__$1);
var G__31001 = c__25345__auto__;
var G__31002 = cljs.core.count.call(null,c__25345__auto__);
var G__31003 = (0);
seq__30964 = G__31000;
chunk__30965 = G__31001;
count__30966 = G__31002;
i__30967 = G__31003;
continue;
} else {
var vec__30971 = cljs.core.first.call(null,seq__30964__$1);
var name = cljs.core.nth.call(null,vec__30971,(0),null);
var map__30972 = cljs.core.nth.call(null,vec__30971,(1),null);
var map__30972__$1 = ((((!((map__30972 == null)))?((((map__30972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30972):map__30972);
var doc = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31004 = cljs.core.next.call(null,seq__30964__$1);
var G__31005 = null;
var G__31006 = (0);
var G__31007 = (0);
seq__30964 = G__31004;
chunk__30965 = G__31005;
count__30966 = G__31006;
i__30967 = G__31007;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1478441515447