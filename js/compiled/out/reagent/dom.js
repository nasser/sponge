// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6210__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_7871 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_7871){
return (function (){
var _STAR_always_update_STAR_7872 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7872;
}});})(_STAR_always_update_STAR_7871))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7871;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args7873 = [];
var len__7280__auto___7876 = arguments.length;
var i__7281__auto___7877 = (0);
while(true){
if((i__7281__auto___7877 < len__7280__auto___7876)){
args7873.push((arguments[i__7281__auto___7877]));

var G__7878 = (i__7281__auto___7877 + (1));
i__7281__auto___7877 = G__7878;
continue;
} else {
}
break;
}

var G__7875 = args7873.length;
switch (G__7875) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7873.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__7884_7888 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7885_7889 = null;
var count__7886_7890 = (0);
var i__7887_7891 = (0);
while(true){
if((i__7887_7891 < count__7886_7890)){
var v_7892 = cljs.core._nth.call(null,chunk__7885_7889,i__7887_7891);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7892);

var G__7893 = seq__7884_7888;
var G__7894 = chunk__7885_7889;
var G__7895 = count__7886_7890;
var G__7896 = (i__7887_7891 + (1));
seq__7884_7888 = G__7893;
chunk__7885_7889 = G__7894;
count__7886_7890 = G__7895;
i__7887_7891 = G__7896;
continue;
} else {
var temp__4657__auto___7897 = cljs.core.seq.call(null,seq__7884_7888);
if(temp__4657__auto___7897){
var seq__7884_7898__$1 = temp__4657__auto___7897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7884_7898__$1)){
var c__7021__auto___7899 = cljs.core.chunk_first.call(null,seq__7884_7898__$1);
var G__7900 = cljs.core.chunk_rest.call(null,seq__7884_7898__$1);
var G__7901 = c__7021__auto___7899;
var G__7902 = cljs.core.count.call(null,c__7021__auto___7899);
var G__7903 = (0);
seq__7884_7888 = G__7900;
chunk__7885_7889 = G__7901;
count__7886_7890 = G__7902;
i__7887_7891 = G__7903;
continue;
} else {
var v_7904 = cljs.core.first.call(null,seq__7884_7898__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7904);

var G__7905 = cljs.core.next.call(null,seq__7884_7898__$1);
var G__7906 = null;
var G__7907 = (0);
var G__7908 = (0);
seq__7884_7888 = G__7905;
chunk__7885_7889 = G__7906;
count__7886_7890 = G__7907;
i__7887_7891 = G__7908;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1478410550042