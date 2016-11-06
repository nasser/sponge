// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__7435__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7436__i = 0, G__7436__a = new Array(arguments.length -  0);
while (G__7436__i < G__7436__a.length) {G__7436__a[G__7436__i] = arguments[G__7436__i + 0]; ++G__7436__i;}
  args = new cljs.core.IndexedSeq(G__7436__a,0);
} 
return G__7435__delegate.call(this,args);};
G__7435.cljs$lang$maxFixedArity = 0;
G__7435.cljs$lang$applyTo = (function (arglist__7437){
var args = cljs.core.seq(arglist__7437);
return G__7435__delegate(args);
});
G__7435.cljs$core$IFn$_invoke$arity$variadic = G__7435__delegate;
return G__7435;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7438__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7439__i = 0, G__7439__a = new Array(arguments.length -  0);
while (G__7439__i < G__7439__a.length) {G__7439__a[G__7439__i] = arguments[G__7439__i + 0]; ++G__7439__i;}
  args = new cljs.core.IndexedSeq(G__7439__a,0);
} 
return G__7438__delegate.call(this,args);};
G__7438.cljs$lang$maxFixedArity = 0;
G__7438.cljs$lang$applyTo = (function (arglist__7440){
var args = cljs.core.seq(arglist__7440);
return G__7438__delegate(args);
});
G__7438.cljs$core$IFn$_invoke$arity$variadic = G__7438__delegate;
return G__7438;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1478410548194