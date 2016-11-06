// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24534__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24534__auto__){
return or__24534__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24534__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29931_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29931_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29936 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29937 = null;
var count__29938 = (0);
var i__29939 = (0);
while(true){
if((i__29939 < count__29938)){
var n = cljs.core._nth.call(null,chunk__29937,i__29939);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29940 = seq__29936;
var G__29941 = chunk__29937;
var G__29942 = count__29938;
var G__29943 = (i__29939 + (1));
seq__29936 = G__29940;
chunk__29937 = G__29941;
count__29938 = G__29942;
i__29939 = G__29943;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29936);
if(temp__4657__auto__){
var seq__29936__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29936__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__29936__$1);
var G__29944 = cljs.core.chunk_rest.call(null,seq__29936__$1);
var G__29945 = c__25345__auto__;
var G__29946 = cljs.core.count.call(null,c__25345__auto__);
var G__29947 = (0);
seq__29936 = G__29944;
chunk__29937 = G__29945;
count__29938 = G__29946;
i__29939 = G__29947;
continue;
} else {
var n = cljs.core.first.call(null,seq__29936__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29948 = cljs.core.next.call(null,seq__29936__$1);
var G__29949 = null;
var G__29950 = (0);
var G__29951 = (0);
seq__29936 = G__29948;
chunk__29937 = G__29949;
count__29938 = G__29950;
i__29939 = G__29951;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29990_29997 = cljs.core.seq.call(null,deps);
var chunk__29991_29998 = null;
var count__29992_29999 = (0);
var i__29993_30000 = (0);
while(true){
if((i__29993_30000 < count__29992_29999)){
var dep_30001 = cljs.core._nth.call(null,chunk__29991_29998,i__29993_30000);
topo_sort_helper_STAR_.call(null,dep_30001,(depth + (1)),state);

var G__30002 = seq__29990_29997;
var G__30003 = chunk__29991_29998;
var G__30004 = count__29992_29999;
var G__30005 = (i__29993_30000 + (1));
seq__29990_29997 = G__30002;
chunk__29991_29998 = G__30003;
count__29992_29999 = G__30004;
i__29993_30000 = G__30005;
continue;
} else {
var temp__4657__auto___30006 = cljs.core.seq.call(null,seq__29990_29997);
if(temp__4657__auto___30006){
var seq__29990_30007__$1 = temp__4657__auto___30006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29990_30007__$1)){
var c__25345__auto___30008 = cljs.core.chunk_first.call(null,seq__29990_30007__$1);
var G__30009 = cljs.core.chunk_rest.call(null,seq__29990_30007__$1);
var G__30010 = c__25345__auto___30008;
var G__30011 = cljs.core.count.call(null,c__25345__auto___30008);
var G__30012 = (0);
seq__29990_29997 = G__30009;
chunk__29991_29998 = G__30010;
count__29992_29999 = G__30011;
i__29993_30000 = G__30012;
continue;
} else {
var dep_30013 = cljs.core.first.call(null,seq__29990_30007__$1);
topo_sort_helper_STAR_.call(null,dep_30013,(depth + (1)),state);

var G__30014 = cljs.core.next.call(null,seq__29990_30007__$1);
var G__30015 = null;
var G__30016 = (0);
var G__30017 = (0);
seq__29990_29997 = G__30014;
chunk__29991_29998 = G__30015;
count__29992_29999 = G__30016;
i__29993_30000 = G__30017;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29994){
var vec__29996 = p__29994;
var x = cljs.core.nth.call(null,vec__29996,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29996,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29996,x,xs,get_deps__$1){
return (function (p1__29952_SHARP_){
return clojure.set.difference.call(null,p1__29952_SHARP_,x);
});})(vec__29996,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30030 = cljs.core.seq.call(null,provides);
var chunk__30031 = null;
var count__30032 = (0);
var i__30033 = (0);
while(true){
if((i__30033 < count__30032)){
var prov = cljs.core._nth.call(null,chunk__30031,i__30033);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30034_30042 = cljs.core.seq.call(null,requires);
var chunk__30035_30043 = null;
var count__30036_30044 = (0);
var i__30037_30045 = (0);
while(true){
if((i__30037_30045 < count__30036_30044)){
var req_30046 = cljs.core._nth.call(null,chunk__30035_30043,i__30037_30045);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30046,prov);

var G__30047 = seq__30034_30042;
var G__30048 = chunk__30035_30043;
var G__30049 = count__30036_30044;
var G__30050 = (i__30037_30045 + (1));
seq__30034_30042 = G__30047;
chunk__30035_30043 = G__30048;
count__30036_30044 = G__30049;
i__30037_30045 = G__30050;
continue;
} else {
var temp__4657__auto___30051 = cljs.core.seq.call(null,seq__30034_30042);
if(temp__4657__auto___30051){
var seq__30034_30052__$1 = temp__4657__auto___30051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30034_30052__$1)){
var c__25345__auto___30053 = cljs.core.chunk_first.call(null,seq__30034_30052__$1);
var G__30054 = cljs.core.chunk_rest.call(null,seq__30034_30052__$1);
var G__30055 = c__25345__auto___30053;
var G__30056 = cljs.core.count.call(null,c__25345__auto___30053);
var G__30057 = (0);
seq__30034_30042 = G__30054;
chunk__30035_30043 = G__30055;
count__30036_30044 = G__30056;
i__30037_30045 = G__30057;
continue;
} else {
var req_30058 = cljs.core.first.call(null,seq__30034_30052__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30058,prov);

var G__30059 = cljs.core.next.call(null,seq__30034_30052__$1);
var G__30060 = null;
var G__30061 = (0);
var G__30062 = (0);
seq__30034_30042 = G__30059;
chunk__30035_30043 = G__30060;
count__30036_30044 = G__30061;
i__30037_30045 = G__30062;
continue;
}
} else {
}
}
break;
}

var G__30063 = seq__30030;
var G__30064 = chunk__30031;
var G__30065 = count__30032;
var G__30066 = (i__30033 + (1));
seq__30030 = G__30063;
chunk__30031 = G__30064;
count__30032 = G__30065;
i__30033 = G__30066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30030);
if(temp__4657__auto__){
var seq__30030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30030__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30030__$1);
var G__30067 = cljs.core.chunk_rest.call(null,seq__30030__$1);
var G__30068 = c__25345__auto__;
var G__30069 = cljs.core.count.call(null,c__25345__auto__);
var G__30070 = (0);
seq__30030 = G__30067;
chunk__30031 = G__30068;
count__30032 = G__30069;
i__30033 = G__30070;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30030__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30038_30071 = cljs.core.seq.call(null,requires);
var chunk__30039_30072 = null;
var count__30040_30073 = (0);
var i__30041_30074 = (0);
while(true){
if((i__30041_30074 < count__30040_30073)){
var req_30075 = cljs.core._nth.call(null,chunk__30039_30072,i__30041_30074);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30075,prov);

var G__30076 = seq__30038_30071;
var G__30077 = chunk__30039_30072;
var G__30078 = count__30040_30073;
var G__30079 = (i__30041_30074 + (1));
seq__30038_30071 = G__30076;
chunk__30039_30072 = G__30077;
count__30040_30073 = G__30078;
i__30041_30074 = G__30079;
continue;
} else {
var temp__4657__auto___30080__$1 = cljs.core.seq.call(null,seq__30038_30071);
if(temp__4657__auto___30080__$1){
var seq__30038_30081__$1 = temp__4657__auto___30080__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30038_30081__$1)){
var c__25345__auto___30082 = cljs.core.chunk_first.call(null,seq__30038_30081__$1);
var G__30083 = cljs.core.chunk_rest.call(null,seq__30038_30081__$1);
var G__30084 = c__25345__auto___30082;
var G__30085 = cljs.core.count.call(null,c__25345__auto___30082);
var G__30086 = (0);
seq__30038_30071 = G__30083;
chunk__30039_30072 = G__30084;
count__30040_30073 = G__30085;
i__30041_30074 = G__30086;
continue;
} else {
var req_30087 = cljs.core.first.call(null,seq__30038_30081__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30087,prov);

var G__30088 = cljs.core.next.call(null,seq__30038_30081__$1);
var G__30089 = null;
var G__30090 = (0);
var G__30091 = (0);
seq__30038_30071 = G__30088;
chunk__30039_30072 = G__30089;
count__30040_30073 = G__30090;
i__30041_30074 = G__30091;
continue;
}
} else {
}
}
break;
}

var G__30092 = cljs.core.next.call(null,seq__30030__$1);
var G__30093 = null;
var G__30094 = (0);
var G__30095 = (0);
seq__30030 = G__30092;
chunk__30031 = G__30093;
count__30032 = G__30094;
i__30033 = G__30095;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30100_30104 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30101_30105 = null;
var count__30102_30106 = (0);
var i__30103_30107 = (0);
while(true){
if((i__30103_30107 < count__30102_30106)){
var ns_30108 = cljs.core._nth.call(null,chunk__30101_30105,i__30103_30107);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30108);

var G__30109 = seq__30100_30104;
var G__30110 = chunk__30101_30105;
var G__30111 = count__30102_30106;
var G__30112 = (i__30103_30107 + (1));
seq__30100_30104 = G__30109;
chunk__30101_30105 = G__30110;
count__30102_30106 = G__30111;
i__30103_30107 = G__30112;
continue;
} else {
var temp__4657__auto___30113 = cljs.core.seq.call(null,seq__30100_30104);
if(temp__4657__auto___30113){
var seq__30100_30114__$1 = temp__4657__auto___30113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30100_30114__$1)){
var c__25345__auto___30115 = cljs.core.chunk_first.call(null,seq__30100_30114__$1);
var G__30116 = cljs.core.chunk_rest.call(null,seq__30100_30114__$1);
var G__30117 = c__25345__auto___30115;
var G__30118 = cljs.core.count.call(null,c__25345__auto___30115);
var G__30119 = (0);
seq__30100_30104 = G__30116;
chunk__30101_30105 = G__30117;
count__30102_30106 = G__30118;
i__30103_30107 = G__30119;
continue;
} else {
var ns_30120 = cljs.core.first.call(null,seq__30100_30114__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30120);

var G__30121 = cljs.core.next.call(null,seq__30100_30114__$1);
var G__30122 = null;
var G__30123 = (0);
var G__30124 = (0);
seq__30100_30104 = G__30121;
chunk__30101_30105 = G__30122;
count__30102_30106 = G__30123;
i__30103_30107 = G__30124;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24534__auto__ = goog.require__;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30125__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30126__i = 0, G__30126__a = new Array(arguments.length -  0);
while (G__30126__i < G__30126__a.length) {G__30126__a[G__30126__i] = arguments[G__30126__i + 0]; ++G__30126__i;}
  args = new cljs.core.IndexedSeq(G__30126__a,0);
} 
return G__30125__delegate.call(this,args);};
G__30125.cljs$lang$maxFixedArity = 0;
G__30125.cljs$lang$applyTo = (function (arglist__30127){
var args = cljs.core.seq(arglist__30127);
return G__30125__delegate(args);
});
G__30125.cljs$core$IFn$_invoke$arity$variadic = G__30125__delegate;
return G__30125;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30129 = cljs.core._EQ_;
var expr__30130 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30129.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30130))){
var path_parts = ((function (pred__30129,expr__30130){
return (function (p1__30128_SHARP_){
return clojure.string.split.call(null,p1__30128_SHARP_,/[\/\\]/);
});})(pred__30129,expr__30130))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30129,expr__30130){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30132){if((e30132 instanceof Error)){
var e = e30132;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30132;

}
}})());
});
;})(path_parts,sep,root,pred__30129,expr__30130))
} else {
if(cljs.core.truth_(pred__30129.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30130))){
return ((function (pred__30129,expr__30130){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30129,expr__30130){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30129,expr__30130))
);

return deferred.addErrback(((function (deferred,pred__30129,expr__30130){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30129,expr__30130))
);
});
;})(pred__30129,expr__30130))
} else {
return ((function (pred__30129,expr__30130){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30129,expr__30130))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30133,callback){
var map__30136 = p__30133;
var map__30136__$1 = ((((!((map__30136 == null)))?((((map__30136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30136):map__30136);
var file_msg = map__30136__$1;
var request_url = cljs.core.get.call(null,map__30136__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30136,map__30136__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30136,map__30136__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__){
return (function (state_30160){
var state_val_30161 = (state_30160[(1)]);
if((state_val_30161 === (7))){
var inst_30156 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30162_30182 = state_30160__$1;
(statearr_30162_30182[(2)] = inst_30156);

(statearr_30162_30182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (1))){
var state_30160__$1 = state_30160;
var statearr_30163_30183 = state_30160__$1;
(statearr_30163_30183[(2)] = null);

(statearr_30163_30183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (4))){
var inst_30140 = (state_30160[(7)]);
var inst_30140__$1 = (state_30160[(2)]);
var state_30160__$1 = (function (){var statearr_30164 = state_30160;
(statearr_30164[(7)] = inst_30140__$1);

return statearr_30164;
})();
if(cljs.core.truth_(inst_30140__$1)){
var statearr_30165_30184 = state_30160__$1;
(statearr_30165_30184[(1)] = (5));

} else {
var statearr_30166_30185 = state_30160__$1;
(statearr_30166_30185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (6))){
var state_30160__$1 = state_30160;
var statearr_30167_30186 = state_30160__$1;
(statearr_30167_30186[(2)] = null);

(statearr_30167_30186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (3))){
var inst_30158 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30160__$1,inst_30158);
} else {
if((state_val_30161 === (2))){
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30160__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30161 === (11))){
var inst_30152 = (state_30160[(2)]);
var state_30160__$1 = (function (){var statearr_30168 = state_30160;
(statearr_30168[(8)] = inst_30152);

return statearr_30168;
})();
var statearr_30169_30187 = state_30160__$1;
(statearr_30169_30187[(2)] = null);

(statearr_30169_30187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (9))){
var inst_30146 = (state_30160[(9)]);
var inst_30144 = (state_30160[(10)]);
var inst_30148 = inst_30146.call(null,inst_30144);
var state_30160__$1 = state_30160;
var statearr_30170_30188 = state_30160__$1;
(statearr_30170_30188[(2)] = inst_30148);

(statearr_30170_30188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (5))){
var inst_30140 = (state_30160[(7)]);
var inst_30142 = figwheel.client.file_reloading.blocking_load.call(null,inst_30140);
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30160__$1,(8),inst_30142);
} else {
if((state_val_30161 === (10))){
var inst_30144 = (state_30160[(10)]);
var inst_30150 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30144);
var state_30160__$1 = state_30160;
var statearr_30171_30189 = state_30160__$1;
(statearr_30171_30189[(2)] = inst_30150);

(statearr_30171_30189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (8))){
var inst_30146 = (state_30160[(9)]);
var inst_30140 = (state_30160[(7)]);
var inst_30144 = (state_30160[(2)]);
var inst_30145 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30146__$1 = cljs.core.get.call(null,inst_30145,inst_30140);
var state_30160__$1 = (function (){var statearr_30172 = state_30160;
(statearr_30172[(9)] = inst_30146__$1);

(statearr_30172[(10)] = inst_30144);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30146__$1)){
var statearr_30173_30190 = state_30160__$1;
(statearr_30173_30190[(1)] = (9));

} else {
var statearr_30174_30191 = state_30160__$1;
(statearr_30174_30191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27098__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26987__auto__ = null;
var figwheel$client$file_reloading$state_machine__26987__auto____0 = (function (){
var statearr_30178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30178[(0)] = figwheel$client$file_reloading$state_machine__26987__auto__);

(statearr_30178[(1)] = (1));

return statearr_30178;
});
var figwheel$client$file_reloading$state_machine__26987__auto____1 = (function (state_30160){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_30160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e30179){if((e30179 instanceof Object)){
var ex__26990__auto__ = e30179;
var statearr_30180_30192 = state_30160;
(statearr_30180_30192[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30193 = state_30160;
state_30160 = G__30193;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26987__auto__ = function(state_30160){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26987__auto____1.call(this,state_30160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26987__auto____0;
figwheel$client$file_reloading$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26987__auto____1;
return figwheel$client$file_reloading$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__))
})();
var state__27100__auto__ = (function (){var statearr_30181 = f__27099__auto__.call(null);
(statearr_30181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_30181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__))
);

return c__27098__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30194,callback){
var map__30197 = p__30194;
var map__30197__$1 = ((((!((map__30197 == null)))?((((map__30197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30197):map__30197);
var file_msg = map__30197__$1;
var namespace = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30197,map__30197__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30197,map__30197__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30199){
var map__30202 = p__30199;
var map__30202__$1 = ((((!((map__30202 == null)))?((((map__30202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30202):map__30202);
var file_msg = map__30202__$1;
var namespace = cljs.core.get.call(null,map__30202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24522__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24522__auto__){
var or__24534__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
var or__24534__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto____$1)){
return or__24534__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24522__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30204,callback){
var map__30207 = p__30204;
var map__30207__$1 = ((((!((map__30207 == null)))?((((map__30207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30207):map__30207);
var file_msg = map__30207__$1;
var request_url = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27098__auto___30295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___30295,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___30295,out){
return (function (state_30277){
var state_val_30278 = (state_30277[(1)]);
if((state_val_30278 === (1))){
var inst_30255 = cljs.core.nth.call(null,files,(0),null);
var inst_30256 = cljs.core.nthnext.call(null,files,(1));
var inst_30257 = files;
var state_30277__$1 = (function (){var statearr_30279 = state_30277;
(statearr_30279[(7)] = inst_30255);

(statearr_30279[(8)] = inst_30256);

(statearr_30279[(9)] = inst_30257);

return statearr_30279;
})();
var statearr_30280_30296 = state_30277__$1;
(statearr_30280_30296[(2)] = null);

(statearr_30280_30296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30278 === (2))){
var inst_30260 = (state_30277[(10)]);
var inst_30257 = (state_30277[(9)]);
var inst_30260__$1 = cljs.core.nth.call(null,inst_30257,(0),null);
var inst_30261 = cljs.core.nthnext.call(null,inst_30257,(1));
var inst_30262 = (inst_30260__$1 == null);
var inst_30263 = cljs.core.not.call(null,inst_30262);
var state_30277__$1 = (function (){var statearr_30281 = state_30277;
(statearr_30281[(10)] = inst_30260__$1);

(statearr_30281[(11)] = inst_30261);

return statearr_30281;
})();
if(inst_30263){
var statearr_30282_30297 = state_30277__$1;
(statearr_30282_30297[(1)] = (4));

} else {
var statearr_30283_30298 = state_30277__$1;
(statearr_30283_30298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30278 === (3))){
var inst_30275 = (state_30277[(2)]);
var state_30277__$1 = state_30277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30277__$1,inst_30275);
} else {
if((state_val_30278 === (4))){
var inst_30260 = (state_30277[(10)]);
var inst_30265 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30260);
var state_30277__$1 = state_30277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30277__$1,(7),inst_30265);
} else {
if((state_val_30278 === (5))){
var inst_30271 = cljs.core.async.close_BANG_.call(null,out);
var state_30277__$1 = state_30277;
var statearr_30284_30299 = state_30277__$1;
(statearr_30284_30299[(2)] = inst_30271);

(statearr_30284_30299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30278 === (6))){
var inst_30273 = (state_30277[(2)]);
var state_30277__$1 = state_30277;
var statearr_30285_30300 = state_30277__$1;
(statearr_30285_30300[(2)] = inst_30273);

(statearr_30285_30300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30278 === (7))){
var inst_30261 = (state_30277[(11)]);
var inst_30267 = (state_30277[(2)]);
var inst_30268 = cljs.core.async.put_BANG_.call(null,out,inst_30267);
var inst_30257 = inst_30261;
var state_30277__$1 = (function (){var statearr_30286 = state_30277;
(statearr_30286[(12)] = inst_30268);

(statearr_30286[(9)] = inst_30257);

return statearr_30286;
})();
var statearr_30287_30301 = state_30277__$1;
(statearr_30287_30301[(2)] = null);

(statearr_30287_30301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27098__auto___30295,out))
;
return ((function (switch__26986__auto__,c__27098__auto___30295,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____1 = (function (state_30277){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_30277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__26990__auto__ = e30292;
var statearr_30293_30302 = state_30277;
(statearr_30293_30302[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30303 = state_30277;
state_30277 = G__30303;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__ = function(state_30277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____1.call(this,state_30277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___30295,out))
})();
var state__27100__auto__ = (function (){var statearr_30294 = f__27099__auto__.call(null);
(statearr_30294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___30295);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___30295,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30304,opts){
var map__30308 = p__30304;
var map__30308__$1 = ((((!((map__30308 == null)))?((((map__30308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308):map__30308);
var eval_body__$1 = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24522__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24522__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24522__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30310){var e = e30310;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30311_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30311_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30316){
var vec__30317 = p__30316;
var k = cljs.core.nth.call(null,vec__30317,(0),null);
var v = cljs.core.nth.call(null,vec__30317,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30318){
var vec__30319 = p__30318;
var k = cljs.core.nth.call(null,vec__30319,(0),null);
var v = cljs.core.nth.call(null,vec__30319,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30323,p__30324){
var map__30571 = p__30323;
var map__30571__$1 = ((((!((map__30571 == null)))?((((map__30571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30571):map__30571);
var opts = map__30571__$1;
var before_jsload = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30572 = p__30324;
var map__30572__$1 = ((((!((map__30572 == null)))?((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var msg = map__30572__$1;
var files = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30725){
var state_val_30726 = (state_30725[(1)]);
if((state_val_30726 === (7))){
var inst_30588 = (state_30725[(7)]);
var inst_30587 = (state_30725[(8)]);
var inst_30586 = (state_30725[(9)]);
var inst_30589 = (state_30725[(10)]);
var inst_30594 = cljs.core._nth.call(null,inst_30587,inst_30589);
var inst_30595 = figwheel.client.file_reloading.eval_body.call(null,inst_30594,opts);
var inst_30596 = (inst_30589 + (1));
var tmp30727 = inst_30588;
var tmp30728 = inst_30587;
var tmp30729 = inst_30586;
var inst_30586__$1 = tmp30729;
var inst_30587__$1 = tmp30728;
var inst_30588__$1 = tmp30727;
var inst_30589__$1 = inst_30596;
var state_30725__$1 = (function (){var statearr_30730 = state_30725;
(statearr_30730[(7)] = inst_30588__$1);

(statearr_30730[(8)] = inst_30587__$1);

(statearr_30730[(9)] = inst_30586__$1);

(statearr_30730[(11)] = inst_30595);

(statearr_30730[(10)] = inst_30589__$1);

return statearr_30730;
})();
var statearr_30731_30817 = state_30725__$1;
(statearr_30731_30817[(2)] = null);

(statearr_30731_30817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (20))){
var inst_30629 = (state_30725[(12)]);
var inst_30637 = figwheel.client.file_reloading.sort_files.call(null,inst_30629);
var state_30725__$1 = state_30725;
var statearr_30732_30818 = state_30725__$1;
(statearr_30732_30818[(2)] = inst_30637);

(statearr_30732_30818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (27))){
var state_30725__$1 = state_30725;
var statearr_30733_30819 = state_30725__$1;
(statearr_30733_30819[(2)] = null);

(statearr_30733_30819[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (1))){
var inst_30578 = (state_30725[(13)]);
var inst_30575 = before_jsload.call(null,files);
var inst_30576 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30577 = (function (){return ((function (inst_30578,inst_30575,inst_30576,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30320_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30320_SHARP_);
});
;})(inst_30578,inst_30575,inst_30576,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30578__$1 = cljs.core.filter.call(null,inst_30577,files);
var inst_30579 = cljs.core.not_empty.call(null,inst_30578__$1);
var state_30725__$1 = (function (){var statearr_30734 = state_30725;
(statearr_30734[(14)] = inst_30575);

(statearr_30734[(13)] = inst_30578__$1);

(statearr_30734[(15)] = inst_30576);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30579)){
var statearr_30735_30820 = state_30725__$1;
(statearr_30735_30820[(1)] = (2));

} else {
var statearr_30736_30821 = state_30725__$1;
(statearr_30736_30821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (24))){
var state_30725__$1 = state_30725;
var statearr_30737_30822 = state_30725__$1;
(statearr_30737_30822[(2)] = null);

(statearr_30737_30822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (39))){
var inst_30679 = (state_30725[(16)]);
var state_30725__$1 = state_30725;
var statearr_30738_30823 = state_30725__$1;
(statearr_30738_30823[(2)] = inst_30679);

(statearr_30738_30823[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (46))){
var inst_30720 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30739_30824 = state_30725__$1;
(statearr_30739_30824[(2)] = inst_30720);

(statearr_30739_30824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (4))){
var inst_30623 = (state_30725[(2)]);
var inst_30624 = cljs.core.List.EMPTY;
var inst_30625 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30624);
var inst_30626 = (function (){return ((function (inst_30623,inst_30624,inst_30625,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30321_SHARP_){
var and__24522__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30321_SHARP_);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30321_SHARP_));
} else {
return and__24522__auto__;
}
});
;})(inst_30623,inst_30624,inst_30625,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30627 = cljs.core.filter.call(null,inst_30626,files);
var inst_30628 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30629 = cljs.core.concat.call(null,inst_30627,inst_30628);
var state_30725__$1 = (function (){var statearr_30740 = state_30725;
(statearr_30740[(17)] = inst_30623);

(statearr_30740[(18)] = inst_30625);

(statearr_30740[(12)] = inst_30629);

return statearr_30740;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30741_30825 = state_30725__$1;
(statearr_30741_30825[(1)] = (16));

} else {
var statearr_30742_30826 = state_30725__$1;
(statearr_30742_30826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (15))){
var inst_30613 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30743_30827 = state_30725__$1;
(statearr_30743_30827[(2)] = inst_30613);

(statearr_30743_30827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (21))){
var inst_30639 = (state_30725[(19)]);
var inst_30639__$1 = (state_30725[(2)]);
var inst_30640 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30639__$1);
var state_30725__$1 = (function (){var statearr_30744 = state_30725;
(statearr_30744[(19)] = inst_30639__$1);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30725__$1,(22),inst_30640);
} else {
if((state_val_30726 === (31))){
var inst_30723 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30725__$1,inst_30723);
} else {
if((state_val_30726 === (32))){
var inst_30679 = (state_30725[(16)]);
var inst_30684 = inst_30679.cljs$lang$protocol_mask$partition0$;
var inst_30685 = (inst_30684 & (64));
var inst_30686 = inst_30679.cljs$core$ISeq$;
var inst_30687 = (inst_30685) || (inst_30686);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30687)){
var statearr_30745_30828 = state_30725__$1;
(statearr_30745_30828[(1)] = (35));

} else {
var statearr_30746_30829 = state_30725__$1;
(statearr_30746_30829[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (40))){
var inst_30700 = (state_30725[(20)]);
var inst_30699 = (state_30725[(2)]);
var inst_30700__$1 = cljs.core.get.call(null,inst_30699,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30701 = cljs.core.get.call(null,inst_30699,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30702 = cljs.core.not_empty.call(null,inst_30700__$1);
var state_30725__$1 = (function (){var statearr_30747 = state_30725;
(statearr_30747[(20)] = inst_30700__$1);

(statearr_30747[(21)] = inst_30701);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30702)){
var statearr_30748_30830 = state_30725__$1;
(statearr_30748_30830[(1)] = (41));

} else {
var statearr_30749_30831 = state_30725__$1;
(statearr_30749_30831[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (33))){
var state_30725__$1 = state_30725;
var statearr_30750_30832 = state_30725__$1;
(statearr_30750_30832[(2)] = false);

(statearr_30750_30832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (13))){
var inst_30599 = (state_30725[(22)]);
var inst_30603 = cljs.core.chunk_first.call(null,inst_30599);
var inst_30604 = cljs.core.chunk_rest.call(null,inst_30599);
var inst_30605 = cljs.core.count.call(null,inst_30603);
var inst_30586 = inst_30604;
var inst_30587 = inst_30603;
var inst_30588 = inst_30605;
var inst_30589 = (0);
var state_30725__$1 = (function (){var statearr_30751 = state_30725;
(statearr_30751[(7)] = inst_30588);

(statearr_30751[(8)] = inst_30587);

(statearr_30751[(9)] = inst_30586);

(statearr_30751[(10)] = inst_30589);

return statearr_30751;
})();
var statearr_30752_30833 = state_30725__$1;
(statearr_30752_30833[(2)] = null);

(statearr_30752_30833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (22))){
var inst_30643 = (state_30725[(23)]);
var inst_30647 = (state_30725[(24)]);
var inst_30639 = (state_30725[(19)]);
var inst_30642 = (state_30725[(25)]);
var inst_30642__$1 = (state_30725[(2)]);
var inst_30643__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30642__$1);
var inst_30644 = (function (){var all_files = inst_30639;
var res_SINGLEQUOTE_ = inst_30642__$1;
var res = inst_30643__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30643,inst_30647,inst_30639,inst_30642,inst_30642__$1,inst_30643__$1,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30322_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30322_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30643,inst_30647,inst_30639,inst_30642,inst_30642__$1,inst_30643__$1,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30645 = cljs.core.filter.call(null,inst_30644,inst_30642__$1);
var inst_30646 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30647__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30646);
var inst_30648 = cljs.core.not_empty.call(null,inst_30647__$1);
var state_30725__$1 = (function (){var statearr_30753 = state_30725;
(statearr_30753[(23)] = inst_30643__$1);

(statearr_30753[(24)] = inst_30647__$1);

(statearr_30753[(25)] = inst_30642__$1);

(statearr_30753[(26)] = inst_30645);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30648)){
var statearr_30754_30834 = state_30725__$1;
(statearr_30754_30834[(1)] = (23));

} else {
var statearr_30755_30835 = state_30725__$1;
(statearr_30755_30835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (36))){
var state_30725__$1 = state_30725;
var statearr_30756_30836 = state_30725__$1;
(statearr_30756_30836[(2)] = false);

(statearr_30756_30836[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (41))){
var inst_30700 = (state_30725[(20)]);
var inst_30704 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30705 = cljs.core.map.call(null,inst_30704,inst_30700);
var inst_30706 = cljs.core.pr_str.call(null,inst_30705);
var inst_30707 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30706)].join('');
var inst_30708 = figwheel.client.utils.log.call(null,inst_30707);
var state_30725__$1 = state_30725;
var statearr_30757_30837 = state_30725__$1;
(statearr_30757_30837[(2)] = inst_30708);

(statearr_30757_30837[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (43))){
var inst_30701 = (state_30725[(21)]);
var inst_30711 = (state_30725[(2)]);
var inst_30712 = cljs.core.not_empty.call(null,inst_30701);
var state_30725__$1 = (function (){var statearr_30758 = state_30725;
(statearr_30758[(27)] = inst_30711);

return statearr_30758;
})();
if(cljs.core.truth_(inst_30712)){
var statearr_30759_30838 = state_30725__$1;
(statearr_30759_30838[(1)] = (44));

} else {
var statearr_30760_30839 = state_30725__$1;
(statearr_30760_30839[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (29))){
var inst_30643 = (state_30725[(23)]);
var inst_30647 = (state_30725[(24)]);
var inst_30639 = (state_30725[(19)]);
var inst_30642 = (state_30725[(25)]);
var inst_30679 = (state_30725[(16)]);
var inst_30645 = (state_30725[(26)]);
var inst_30675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30678 = (function (){var all_files = inst_30639;
var res_SINGLEQUOTE_ = inst_30642;
var res = inst_30643;
var files_not_loaded = inst_30645;
var dependencies_that_loaded = inst_30647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30679,inst_30645,inst_30675,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30677){
var map__30761 = p__30677;
var map__30761__$1 = ((((!((map__30761 == null)))?((((map__30761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);
var namespace = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30679,inst_30645,inst_30675,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30679__$1 = cljs.core.group_by.call(null,inst_30678,inst_30645);
var inst_30681 = (inst_30679__$1 == null);
var inst_30682 = cljs.core.not.call(null,inst_30681);
var state_30725__$1 = (function (){var statearr_30763 = state_30725;
(statearr_30763[(28)] = inst_30675);

(statearr_30763[(16)] = inst_30679__$1);

return statearr_30763;
})();
if(inst_30682){
var statearr_30764_30840 = state_30725__$1;
(statearr_30764_30840[(1)] = (32));

} else {
var statearr_30765_30841 = state_30725__$1;
(statearr_30765_30841[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (44))){
var inst_30701 = (state_30725[(21)]);
var inst_30714 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30701);
var inst_30715 = cljs.core.pr_str.call(null,inst_30714);
var inst_30716 = [cljs.core.str("not required: "),cljs.core.str(inst_30715)].join('');
var inst_30717 = figwheel.client.utils.log.call(null,inst_30716);
var state_30725__$1 = state_30725;
var statearr_30766_30842 = state_30725__$1;
(statearr_30766_30842[(2)] = inst_30717);

(statearr_30766_30842[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (6))){
var inst_30620 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30767_30843 = state_30725__$1;
(statearr_30767_30843[(2)] = inst_30620);

(statearr_30767_30843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (28))){
var inst_30645 = (state_30725[(26)]);
var inst_30672 = (state_30725[(2)]);
var inst_30673 = cljs.core.not_empty.call(null,inst_30645);
var state_30725__$1 = (function (){var statearr_30768 = state_30725;
(statearr_30768[(29)] = inst_30672);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30673)){
var statearr_30769_30844 = state_30725__$1;
(statearr_30769_30844[(1)] = (29));

} else {
var statearr_30770_30845 = state_30725__$1;
(statearr_30770_30845[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (25))){
var inst_30643 = (state_30725[(23)]);
var inst_30659 = (state_30725[(2)]);
var inst_30660 = cljs.core.not_empty.call(null,inst_30643);
var state_30725__$1 = (function (){var statearr_30771 = state_30725;
(statearr_30771[(30)] = inst_30659);

return statearr_30771;
})();
if(cljs.core.truth_(inst_30660)){
var statearr_30772_30846 = state_30725__$1;
(statearr_30772_30846[(1)] = (26));

} else {
var statearr_30773_30847 = state_30725__$1;
(statearr_30773_30847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (34))){
var inst_30694 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30694)){
var statearr_30774_30848 = state_30725__$1;
(statearr_30774_30848[(1)] = (38));

} else {
var statearr_30775_30849 = state_30725__$1;
(statearr_30775_30849[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (17))){
var state_30725__$1 = state_30725;
var statearr_30776_30850 = state_30725__$1;
(statearr_30776_30850[(2)] = recompile_dependents);

(statearr_30776_30850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (3))){
var state_30725__$1 = state_30725;
var statearr_30777_30851 = state_30725__$1;
(statearr_30777_30851[(2)] = null);

(statearr_30777_30851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (12))){
var inst_30616 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30778_30852 = state_30725__$1;
(statearr_30778_30852[(2)] = inst_30616);

(statearr_30778_30852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (2))){
var inst_30578 = (state_30725[(13)]);
var inst_30585 = cljs.core.seq.call(null,inst_30578);
var inst_30586 = inst_30585;
var inst_30587 = null;
var inst_30588 = (0);
var inst_30589 = (0);
var state_30725__$1 = (function (){var statearr_30779 = state_30725;
(statearr_30779[(7)] = inst_30588);

(statearr_30779[(8)] = inst_30587);

(statearr_30779[(9)] = inst_30586);

(statearr_30779[(10)] = inst_30589);

return statearr_30779;
})();
var statearr_30780_30853 = state_30725__$1;
(statearr_30780_30853[(2)] = null);

(statearr_30780_30853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (23))){
var inst_30643 = (state_30725[(23)]);
var inst_30647 = (state_30725[(24)]);
var inst_30639 = (state_30725[(19)]);
var inst_30642 = (state_30725[(25)]);
var inst_30645 = (state_30725[(26)]);
var inst_30650 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30652 = (function (){var all_files = inst_30639;
var res_SINGLEQUOTE_ = inst_30642;
var res = inst_30643;
var files_not_loaded = inst_30645;
var dependencies_that_loaded = inst_30647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30650,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30651){
var map__30781 = p__30651;
var map__30781__$1 = ((((!((map__30781 == null)))?((((map__30781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var request_url = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30650,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30653 = cljs.core.reverse.call(null,inst_30647);
var inst_30654 = cljs.core.map.call(null,inst_30652,inst_30653);
var inst_30655 = cljs.core.pr_str.call(null,inst_30654);
var inst_30656 = figwheel.client.utils.log.call(null,inst_30655);
var state_30725__$1 = (function (){var statearr_30783 = state_30725;
(statearr_30783[(31)] = inst_30650);

return statearr_30783;
})();
var statearr_30784_30854 = state_30725__$1;
(statearr_30784_30854[(2)] = inst_30656);

(statearr_30784_30854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (35))){
var state_30725__$1 = state_30725;
var statearr_30785_30855 = state_30725__$1;
(statearr_30785_30855[(2)] = true);

(statearr_30785_30855[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (19))){
var inst_30629 = (state_30725[(12)]);
var inst_30635 = figwheel.client.file_reloading.expand_files.call(null,inst_30629);
var state_30725__$1 = state_30725;
var statearr_30786_30856 = state_30725__$1;
(statearr_30786_30856[(2)] = inst_30635);

(statearr_30786_30856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (11))){
var state_30725__$1 = state_30725;
var statearr_30787_30857 = state_30725__$1;
(statearr_30787_30857[(2)] = null);

(statearr_30787_30857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (9))){
var inst_30618 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30788_30858 = state_30725__$1;
(statearr_30788_30858[(2)] = inst_30618);

(statearr_30788_30858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (5))){
var inst_30588 = (state_30725[(7)]);
var inst_30589 = (state_30725[(10)]);
var inst_30591 = (inst_30589 < inst_30588);
var inst_30592 = inst_30591;
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30592)){
var statearr_30789_30859 = state_30725__$1;
(statearr_30789_30859[(1)] = (7));

} else {
var statearr_30790_30860 = state_30725__$1;
(statearr_30790_30860[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (14))){
var inst_30599 = (state_30725[(22)]);
var inst_30608 = cljs.core.first.call(null,inst_30599);
var inst_30609 = figwheel.client.file_reloading.eval_body.call(null,inst_30608,opts);
var inst_30610 = cljs.core.next.call(null,inst_30599);
var inst_30586 = inst_30610;
var inst_30587 = null;
var inst_30588 = (0);
var inst_30589 = (0);
var state_30725__$1 = (function (){var statearr_30791 = state_30725;
(statearr_30791[(7)] = inst_30588);

(statearr_30791[(32)] = inst_30609);

(statearr_30791[(8)] = inst_30587);

(statearr_30791[(9)] = inst_30586);

(statearr_30791[(10)] = inst_30589);

return statearr_30791;
})();
var statearr_30792_30861 = state_30725__$1;
(statearr_30792_30861[(2)] = null);

(statearr_30792_30861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (45))){
var state_30725__$1 = state_30725;
var statearr_30793_30862 = state_30725__$1;
(statearr_30793_30862[(2)] = null);

(statearr_30793_30862[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (26))){
var inst_30643 = (state_30725[(23)]);
var inst_30647 = (state_30725[(24)]);
var inst_30639 = (state_30725[(19)]);
var inst_30642 = (state_30725[(25)]);
var inst_30645 = (state_30725[(26)]);
var inst_30662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30664 = (function (){var all_files = inst_30639;
var res_SINGLEQUOTE_ = inst_30642;
var res = inst_30643;
var files_not_loaded = inst_30645;
var dependencies_that_loaded = inst_30647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30662,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30663){
var map__30794 = p__30663;
var map__30794__$1 = ((((!((map__30794 == null)))?((((map__30794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30794):map__30794);
var namespace = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30662,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30665 = cljs.core.map.call(null,inst_30664,inst_30643);
var inst_30666 = cljs.core.pr_str.call(null,inst_30665);
var inst_30667 = figwheel.client.utils.log.call(null,inst_30666);
var inst_30668 = (function (){var all_files = inst_30639;
var res_SINGLEQUOTE_ = inst_30642;
var res = inst_30643;
var files_not_loaded = inst_30645;
var dependencies_that_loaded = inst_30647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30662,inst_30664,inst_30665,inst_30666,inst_30667,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30643,inst_30647,inst_30639,inst_30642,inst_30645,inst_30662,inst_30664,inst_30665,inst_30666,inst_30667,state_val_30726,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30669 = setTimeout(inst_30668,(10));
var state_30725__$1 = (function (){var statearr_30796 = state_30725;
(statearr_30796[(33)] = inst_30662);

(statearr_30796[(34)] = inst_30667);

return statearr_30796;
})();
var statearr_30797_30863 = state_30725__$1;
(statearr_30797_30863[(2)] = inst_30669);

(statearr_30797_30863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (16))){
var state_30725__$1 = state_30725;
var statearr_30798_30864 = state_30725__$1;
(statearr_30798_30864[(2)] = reload_dependents);

(statearr_30798_30864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (38))){
var inst_30679 = (state_30725[(16)]);
var inst_30696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30679);
var state_30725__$1 = state_30725;
var statearr_30799_30865 = state_30725__$1;
(statearr_30799_30865[(2)] = inst_30696);

(statearr_30799_30865[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (30))){
var state_30725__$1 = state_30725;
var statearr_30800_30866 = state_30725__$1;
(statearr_30800_30866[(2)] = null);

(statearr_30800_30866[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (10))){
var inst_30599 = (state_30725[(22)]);
var inst_30601 = cljs.core.chunked_seq_QMARK_.call(null,inst_30599);
var state_30725__$1 = state_30725;
if(inst_30601){
var statearr_30801_30867 = state_30725__$1;
(statearr_30801_30867[(1)] = (13));

} else {
var statearr_30802_30868 = state_30725__$1;
(statearr_30802_30868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (18))){
var inst_30633 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30633)){
var statearr_30803_30869 = state_30725__$1;
(statearr_30803_30869[(1)] = (19));

} else {
var statearr_30804_30870 = state_30725__$1;
(statearr_30804_30870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (42))){
var state_30725__$1 = state_30725;
var statearr_30805_30871 = state_30725__$1;
(statearr_30805_30871[(2)] = null);

(statearr_30805_30871[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (37))){
var inst_30691 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30806_30872 = state_30725__$1;
(statearr_30806_30872[(2)] = inst_30691);

(statearr_30806_30872[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (8))){
var inst_30586 = (state_30725[(9)]);
var inst_30599 = (state_30725[(22)]);
var inst_30599__$1 = cljs.core.seq.call(null,inst_30586);
var state_30725__$1 = (function (){var statearr_30807 = state_30725;
(statearr_30807[(22)] = inst_30599__$1);

return statearr_30807;
})();
if(inst_30599__$1){
var statearr_30808_30873 = state_30725__$1;
(statearr_30808_30873[(1)] = (10));

} else {
var statearr_30809_30874 = state_30725__$1;
(statearr_30809_30874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26986__auto__,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____0 = (function (){
var statearr_30813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30813[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__);

(statearr_30813[(1)] = (1));

return statearr_30813;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____1 = (function (state_30725){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_30725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e30814){if((e30814 instanceof Object)){
var ex__26990__auto__ = e30814;
var statearr_30815_30875 = state_30725;
(statearr_30815_30875[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30876 = state_30725;
state_30725 = G__30876;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__ = function(state_30725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____1.call(this,state_30725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27100__auto__ = (function (){var statearr_30816 = f__27099__auto__.call(null);
(statearr_30816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_30816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__,map__30571,map__30571__$1,opts,before_jsload,on_jsload,reload_dependents,map__30572,map__30572__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27098__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30879,link){
var map__30882 = p__30879;
var map__30882__$1 = ((((!((map__30882 == null)))?((((map__30882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30882):map__30882);
var file = cljs.core.get.call(null,map__30882__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30882,map__30882__$1,file){
return (function (p1__30877_SHARP_,p2__30878_SHARP_){
if(cljs.core._EQ_.call(null,p1__30877_SHARP_,p2__30878_SHARP_)){
return p1__30877_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30882,map__30882__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30888){
var map__30889 = p__30888;
var map__30889__$1 = ((((!((map__30889 == null)))?((((map__30889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30889):map__30889);
var match_length = cljs.core.get.call(null,map__30889__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30889__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30884_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30884_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30891 = [];
var len__25604__auto___30894 = arguments.length;
var i__25605__auto___30895 = (0);
while(true){
if((i__25605__auto___30895 < len__25604__auto___30894)){
args30891.push((arguments[i__25605__auto___30895]));

var G__30896 = (i__25605__auto___30895 + (1));
i__25605__auto___30895 = G__30896;
continue;
} else {
}
break;
}

var G__30893 = args30891.length;
switch (G__30893) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30891.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30898_SHARP_,p2__30899_SHARP_){
return cljs.core.assoc.call(null,p1__30898_SHARP_,cljs.core.get.call(null,p2__30899_SHARP_,key),p2__30899_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30900){
var map__30903 = p__30900;
var map__30903__$1 = ((((!((map__30903 == null)))?((((map__30903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);
var f_data = map__30903__$1;
var file = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30905,p__30906){
var map__30915 = p__30905;
var map__30915__$1 = ((((!((map__30915 == null)))?((((map__30915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30915):map__30915);
var opts = map__30915__$1;
var on_cssload = cljs.core.get.call(null,map__30915__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30916 = p__30906;
var map__30916__$1 = ((((!((map__30916 == null)))?((((map__30916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30916):map__30916);
var files_msg = map__30916__$1;
var files = cljs.core.get.call(null,map__30916__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30919_30923 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30920_30924 = null;
var count__30921_30925 = (0);
var i__30922_30926 = (0);
while(true){
if((i__30922_30926 < count__30921_30925)){
var f_30927 = cljs.core._nth.call(null,chunk__30920_30924,i__30922_30926);
figwheel.client.file_reloading.reload_css_file.call(null,f_30927);

var G__30928 = seq__30919_30923;
var G__30929 = chunk__30920_30924;
var G__30930 = count__30921_30925;
var G__30931 = (i__30922_30926 + (1));
seq__30919_30923 = G__30928;
chunk__30920_30924 = G__30929;
count__30921_30925 = G__30930;
i__30922_30926 = G__30931;
continue;
} else {
var temp__4657__auto___30932 = cljs.core.seq.call(null,seq__30919_30923);
if(temp__4657__auto___30932){
var seq__30919_30933__$1 = temp__4657__auto___30932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30919_30933__$1)){
var c__25345__auto___30934 = cljs.core.chunk_first.call(null,seq__30919_30933__$1);
var G__30935 = cljs.core.chunk_rest.call(null,seq__30919_30933__$1);
var G__30936 = c__25345__auto___30934;
var G__30937 = cljs.core.count.call(null,c__25345__auto___30934);
var G__30938 = (0);
seq__30919_30923 = G__30935;
chunk__30920_30924 = G__30936;
count__30921_30925 = G__30937;
i__30922_30926 = G__30938;
continue;
} else {
var f_30939 = cljs.core.first.call(null,seq__30919_30933__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30939);

var G__30940 = cljs.core.next.call(null,seq__30919_30933__$1);
var G__30941 = null;
var G__30942 = (0);
var G__30943 = (0);
seq__30919_30923 = G__30940;
chunk__30920_30924 = G__30941;
count__30921_30925 = G__30942;
i__30922_30926 = G__30943;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30915,map__30915__$1,opts,on_cssload,map__30916,map__30916__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30915,map__30915__$1,opts,on_cssload,map__30916,map__30916__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478441515347