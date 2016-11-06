// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32462 = [];
var len__25604__auto___32465 = arguments.length;
var i__25605__auto___32466 = (0);
while(true){
if((i__25605__auto___32466 < len__25604__auto___32465)){
args32462.push((arguments[i__25605__auto___32466]));

var G__32467 = (i__25605__auto___32466 + (1));
i__25605__auto___32466 = G__32467;
continue;
} else {
}
break;
}

var G__32464 = args32462.length;
switch (G__32464) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32462.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32470 = arguments.length;
var i__25605__auto___32471 = (0);
while(true){
if((i__25605__auto___32471 < len__25604__auto___32470)){
args__25611__auto__.push((arguments[i__25605__auto___32471]));

var G__32472 = (i__25605__auto___32471 + (1));
i__25605__auto___32471 = G__32472;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32469){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32469));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32474 = arguments.length;
var i__25605__auto___32475 = (0);
while(true){
if((i__25605__auto___32475 < len__25604__auto___32474)){
args__25611__auto__.push((arguments[i__25605__auto___32475]));

var G__32476 = (i__25605__auto___32475 + (1));
i__25605__auto___32475 = G__32476;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32473){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32473));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32477 = cljs.core._EQ_;
var expr__32478 = (function (){var or__24534__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32481){if((e32481 instanceof Error)){
var e = e32481;
return false;
} else {
throw e32481;

}
}})();
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32477.call(null,"true",expr__32478))){
return true;
} else {
if(cljs.core.truth_(pred__32477.call(null,"false",expr__32478))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32478)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32483){if((e32483 instanceof Error)){
var e = e32483;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32483;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32484){
var map__32487 = p__32484;
var map__32487__$1 = ((((!((map__32487 == null)))?((((map__32487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32487):map__32487);
var message = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24534__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24522__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24522__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24522__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27098__auto___32649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___32649,ch){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___32649,ch){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (7))){
var inst_32614 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32620_32650 = state_32618__$1;
(statearr_32620_32650[(2)] = inst_32614);

(statearr_32620_32650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (1))){
var state_32618__$1 = state_32618;
var statearr_32621_32651 = state_32618__$1;
(statearr_32621_32651[(2)] = null);

(statearr_32621_32651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (4))){
var inst_32571 = (state_32618[(7)]);
var inst_32571__$1 = (state_32618[(2)]);
var state_32618__$1 = (function (){var statearr_32622 = state_32618;
(statearr_32622[(7)] = inst_32571__$1);

return statearr_32622;
})();
if(cljs.core.truth_(inst_32571__$1)){
var statearr_32623_32652 = state_32618__$1;
(statearr_32623_32652[(1)] = (5));

} else {
var statearr_32624_32653 = state_32618__$1;
(statearr_32624_32653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (15))){
var inst_32578 = (state_32618[(8)]);
var inst_32593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32578);
var inst_32594 = cljs.core.first.call(null,inst_32593);
var inst_32595 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32594);
var inst_32596 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32595)].join('');
var inst_32597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32596);
var state_32618__$1 = state_32618;
var statearr_32625_32654 = state_32618__$1;
(statearr_32625_32654[(2)] = inst_32597);

(statearr_32625_32654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (13))){
var inst_32602 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32626_32655 = state_32618__$1;
(statearr_32626_32655[(2)] = inst_32602);

(statearr_32626_32655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var state_32618__$1 = state_32618;
var statearr_32627_32656 = state_32618__$1;
(statearr_32627_32656[(2)] = null);

(statearr_32627_32656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (17))){
var inst_32600 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32628_32657 = state_32618__$1;
(statearr_32628_32657[(2)] = inst_32600);

(statearr_32628_32657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var inst_32616 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32618__$1,inst_32616);
} else {
if((state_val_32619 === (12))){
var inst_32577 = (state_32618[(9)]);
var inst_32591 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32577,opts);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32591)){
var statearr_32629_32658 = state_32618__$1;
(statearr_32629_32658[(1)] = (15));

} else {
var statearr_32630_32659 = state_32618__$1;
(statearr_32630_32659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32618__$1,(4),ch);
} else {
if((state_val_32619 === (11))){
var inst_32578 = (state_32618[(8)]);
var inst_32583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32584 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32578);
var inst_32585 = cljs.core.async.timeout.call(null,(1000));
var inst_32586 = [inst_32584,inst_32585];
var inst_32587 = (new cljs.core.PersistentVector(null,2,(5),inst_32583,inst_32586,null));
var state_32618__$1 = state_32618;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32618__$1,(14),inst_32587);
} else {
if((state_val_32619 === (9))){
var inst_32578 = (state_32618[(8)]);
var inst_32604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32578);
var inst_32606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32605);
var inst_32607 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32606)].join('');
var inst_32608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32607);
var state_32618__$1 = (function (){var statearr_32631 = state_32618;
(statearr_32631[(10)] = inst_32604);

return statearr_32631;
})();
var statearr_32632_32660 = state_32618__$1;
(statearr_32632_32660[(2)] = inst_32608);

(statearr_32632_32660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (5))){
var inst_32571 = (state_32618[(7)]);
var inst_32573 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32574 = (new cljs.core.PersistentArrayMap(null,2,inst_32573,null));
var inst_32575 = (new cljs.core.PersistentHashSet(null,inst_32574,null));
var inst_32576 = figwheel.client.focus_msgs.call(null,inst_32575,inst_32571);
var inst_32577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32576);
var inst_32578 = cljs.core.first.call(null,inst_32576);
var inst_32579 = figwheel.client.autoload_QMARK_.call(null);
var state_32618__$1 = (function (){var statearr_32633 = state_32618;
(statearr_32633[(8)] = inst_32578);

(statearr_32633[(9)] = inst_32577);

return statearr_32633;
})();
if(cljs.core.truth_(inst_32579)){
var statearr_32634_32661 = state_32618__$1;
(statearr_32634_32661[(1)] = (8));

} else {
var statearr_32635_32662 = state_32618__$1;
(statearr_32635_32662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (14))){
var inst_32589 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32636_32663 = state_32618__$1;
(statearr_32636_32663[(2)] = inst_32589);

(statearr_32636_32663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (16))){
var state_32618__$1 = state_32618;
var statearr_32637_32664 = state_32618__$1;
(statearr_32637_32664[(2)] = null);

(statearr_32637_32664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (10))){
var inst_32610 = (state_32618[(2)]);
var state_32618__$1 = (function (){var statearr_32638 = state_32618;
(statearr_32638[(11)] = inst_32610);

return statearr_32638;
})();
var statearr_32639_32665 = state_32618__$1;
(statearr_32639_32665[(2)] = null);

(statearr_32639_32665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (8))){
var inst_32577 = (state_32618[(9)]);
var inst_32581 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32577,opts);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32581)){
var statearr_32640_32666 = state_32618__$1;
(statearr_32640_32666[(1)] = (11));

} else {
var statearr_32641_32667 = state_32618__$1;
(statearr_32641_32667[(1)] = (12));

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
});})(c__27098__auto___32649,ch))
;
return ((function (switch__26986__auto__,c__27098__auto___32649,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____0 = (function (){
var statearr_32645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32645[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__);

(statearr_32645[(1)] = (1));

return statearr_32645;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____1 = (function (state_32618){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_32618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e32646){if((e32646 instanceof Object)){
var ex__26990__auto__ = e32646;
var statearr_32647_32668 = state_32618;
(statearr_32647_32668[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32669 = state_32618;
state_32618 = G__32669;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26987__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___32649,ch))
})();
var state__27100__auto__ = (function (){var statearr_32648 = f__27099__auto__.call(null);
(statearr_32648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___32649);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___32649,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32670_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32670_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32673 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32673){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32672){if((e32672 instanceof Error)){
var e = e32672;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32673], null));
} else {
var e = e32672;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32673))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32674){
var map__32681 = p__32674;
var map__32681__$1 = ((((!((map__32681 == null)))?((((map__32681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32681):map__32681);
var opts = map__32681__$1;
var build_id = cljs.core.get.call(null,map__32681__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32681,map__32681__$1,opts,build_id){
return (function (p__32683){
var vec__32684 = p__32683;
var map__32685 = cljs.core.nth.call(null,vec__32684,(0),null);
var map__32685__$1 = ((((!((map__32685 == null)))?((((map__32685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32685):map__32685);
var msg = map__32685__$1;
var msg_name = cljs.core.get.call(null,map__32685__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32684,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32684,map__32685,map__32685__$1,msg,msg_name,_,map__32681,map__32681__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32684,map__32685,map__32685__$1,msg,msg_name,_,map__32681,map__32681__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32681,map__32681__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32691){
var vec__32692 = p__32691;
var map__32693 = cljs.core.nth.call(null,vec__32692,(0),null);
var map__32693__$1 = ((((!((map__32693 == null)))?((((map__32693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32693):map__32693);
var msg = map__32693__$1;
var msg_name = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32692,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32695){
var map__32705 = p__32695;
var map__32705__$1 = ((((!((map__32705 == null)))?((((map__32705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var on_compile_warning = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32705,map__32705__$1,on_compile_warning,on_compile_fail){
return (function (p__32707){
var vec__32708 = p__32707;
var map__32709 = cljs.core.nth.call(null,vec__32708,(0),null);
var map__32709__$1 = ((((!((map__32709 == null)))?((((map__32709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32709):map__32709);
var msg = map__32709__$1;
var msg_name = cljs.core.get.call(null,map__32709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32708,(1));
var pred__32711 = cljs.core._EQ_;
var expr__32712 = msg_name;
if(cljs.core.truth_(pred__32711.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32712))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32711.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32712))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32705,map__32705__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__,msg_hist,msg_names,msg){
return (function (state_32940){
var state_val_32941 = (state_32940[(1)]);
if((state_val_32941 === (7))){
var inst_32860 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32860)){
var statearr_32942_32992 = state_32940__$1;
(statearr_32942_32992[(1)] = (8));

} else {
var statearr_32943_32993 = state_32940__$1;
(statearr_32943_32993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (20))){
var inst_32934 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32944_32994 = state_32940__$1;
(statearr_32944_32994[(2)] = inst_32934);

(statearr_32944_32994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (27))){
var inst_32930 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32945_32995 = state_32940__$1;
(statearr_32945_32995[(2)] = inst_32930);

(statearr_32945_32995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (1))){
var inst_32853 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32853)){
var statearr_32946_32996 = state_32940__$1;
(statearr_32946_32996[(1)] = (2));

} else {
var statearr_32947_32997 = state_32940__$1;
(statearr_32947_32997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (24))){
var inst_32932 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32948_32998 = state_32940__$1;
(statearr_32948_32998[(2)] = inst_32932);

(statearr_32948_32998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (4))){
var inst_32938 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32940__$1,inst_32938);
} else {
if((state_val_32941 === (15))){
var inst_32936 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32949_32999 = state_32940__$1;
(statearr_32949_32999[(2)] = inst_32936);

(statearr_32949_32999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (21))){
var inst_32889 = (state_32940[(2)]);
var inst_32890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32891 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32890);
var state_32940__$1 = (function (){var statearr_32950 = state_32940;
(statearr_32950[(7)] = inst_32889);

return statearr_32950;
})();
var statearr_32951_33000 = state_32940__$1;
(statearr_32951_33000[(2)] = inst_32891);

(statearr_32951_33000[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (31))){
var inst_32919 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32919)){
var statearr_32952_33001 = state_32940__$1;
(statearr_32952_33001[(1)] = (34));

} else {
var statearr_32953_33002 = state_32940__$1;
(statearr_32953_33002[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (32))){
var inst_32928 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32954_33003 = state_32940__$1;
(statearr_32954_33003[(2)] = inst_32928);

(statearr_32954_33003[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (33))){
var inst_32915 = (state_32940[(2)]);
var inst_32916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32916);
var state_32940__$1 = (function (){var statearr_32955 = state_32940;
(statearr_32955[(8)] = inst_32915);

return statearr_32955;
})();
var statearr_32956_33004 = state_32940__$1;
(statearr_32956_33004[(2)] = inst_32917);

(statearr_32956_33004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (13))){
var inst_32874 = figwheel.client.heads_up.clear.call(null);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(16),inst_32874);
} else {
if((state_val_32941 === (22))){
var inst_32895 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32896 = figwheel.client.heads_up.append_warning_message.call(null,inst_32895);
var state_32940__$1 = state_32940;
var statearr_32957_33005 = state_32940__$1;
(statearr_32957_33005[(2)] = inst_32896);

(statearr_32957_33005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (36))){
var inst_32926 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32958_33006 = state_32940__$1;
(statearr_32958_33006[(2)] = inst_32926);

(statearr_32958_33006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (29))){
var inst_32906 = (state_32940[(2)]);
var inst_32907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32907);
var state_32940__$1 = (function (){var statearr_32959 = state_32940;
(statearr_32959[(9)] = inst_32906);

return statearr_32959;
})();
var statearr_32960_33007 = state_32940__$1;
(statearr_32960_33007[(2)] = inst_32908);

(statearr_32960_33007[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (6))){
var inst_32855 = (state_32940[(10)]);
var state_32940__$1 = state_32940;
var statearr_32961_33008 = state_32940__$1;
(statearr_32961_33008[(2)] = inst_32855);

(statearr_32961_33008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (28))){
var inst_32902 = (state_32940[(2)]);
var inst_32903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32904 = figwheel.client.heads_up.display_warning.call(null,inst_32903);
var state_32940__$1 = (function (){var statearr_32962 = state_32940;
(statearr_32962[(11)] = inst_32902);

return statearr_32962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(29),inst_32904);
} else {
if((state_val_32941 === (25))){
var inst_32900 = figwheel.client.heads_up.clear.call(null);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(28),inst_32900);
} else {
if((state_val_32941 === (34))){
var inst_32921 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(37),inst_32921);
} else {
if((state_val_32941 === (17))){
var inst_32880 = (state_32940[(2)]);
var inst_32881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32881);
var state_32940__$1 = (function (){var statearr_32963 = state_32940;
(statearr_32963[(12)] = inst_32880);

return statearr_32963;
})();
var statearr_32964_33009 = state_32940__$1;
(statearr_32964_33009[(2)] = inst_32882);

(statearr_32964_33009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (3))){
var inst_32872 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32872)){
var statearr_32965_33010 = state_32940__$1;
(statearr_32965_33010[(1)] = (13));

} else {
var statearr_32966_33011 = state_32940__$1;
(statearr_32966_33011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (12))){
var inst_32868 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32967_33012 = state_32940__$1;
(statearr_32967_33012[(2)] = inst_32868);

(statearr_32967_33012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (2))){
var inst_32855 = (state_32940[(10)]);
var inst_32855__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32940__$1 = (function (){var statearr_32968 = state_32940;
(statearr_32968[(10)] = inst_32855__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32855__$1)){
var statearr_32969_33013 = state_32940__$1;
(statearr_32969_33013[(1)] = (5));

} else {
var statearr_32970_33014 = state_32940__$1;
(statearr_32970_33014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (23))){
var inst_32898 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32898)){
var statearr_32971_33015 = state_32940__$1;
(statearr_32971_33015[(1)] = (25));

} else {
var statearr_32972_33016 = state_32940__$1;
(statearr_32972_33016[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (35))){
var state_32940__$1 = state_32940;
var statearr_32973_33017 = state_32940__$1;
(statearr_32973_33017[(2)] = null);

(statearr_32973_33017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (19))){
var inst_32893 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32893)){
var statearr_32974_33018 = state_32940__$1;
(statearr_32974_33018[(1)] = (22));

} else {
var statearr_32975_33019 = state_32940__$1;
(statearr_32975_33019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (11))){
var inst_32864 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32976_33020 = state_32940__$1;
(statearr_32976_33020[(2)] = inst_32864);

(statearr_32976_33020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (9))){
var inst_32866 = figwheel.client.heads_up.clear.call(null);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(12),inst_32866);
} else {
if((state_val_32941 === (5))){
var inst_32857 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32940__$1 = state_32940;
var statearr_32977_33021 = state_32940__$1;
(statearr_32977_33021[(2)] = inst_32857);

(statearr_32977_33021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (14))){
var inst_32884 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32884)){
var statearr_32978_33022 = state_32940__$1;
(statearr_32978_33022[(1)] = (18));

} else {
var statearr_32979_33023 = state_32940__$1;
(statearr_32979_33023[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (26))){
var inst_32910 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32910)){
var statearr_32980_33024 = state_32940__$1;
(statearr_32980_33024[(1)] = (30));

} else {
var statearr_32981_33025 = state_32940__$1;
(statearr_32981_33025[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (16))){
var inst_32876 = (state_32940[(2)]);
var inst_32877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32878 = figwheel.client.heads_up.display_exception.call(null,inst_32877);
var state_32940__$1 = (function (){var statearr_32982 = state_32940;
(statearr_32982[(13)] = inst_32876);

return statearr_32982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(17),inst_32878);
} else {
if((state_val_32941 === (30))){
var inst_32912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32913 = figwheel.client.heads_up.display_warning.call(null,inst_32912);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(33),inst_32913);
} else {
if((state_val_32941 === (10))){
var inst_32870 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32983_33026 = state_32940__$1;
(statearr_32983_33026[(2)] = inst_32870);

(statearr_32983_33026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (18))){
var inst_32886 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32887 = figwheel.client.heads_up.display_exception.call(null,inst_32886);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(21),inst_32887);
} else {
if((state_val_32941 === (37))){
var inst_32923 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32984_33027 = state_32940__$1;
(statearr_32984_33027[(2)] = inst_32923);

(statearr_32984_33027[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (8))){
var inst_32862 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(11),inst_32862);
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
});})(c__27098__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26986__auto__,c__27098__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____1 = (function (state_32940){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_32940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__26990__auto__ = e32989;
var statearr_32990_33028 = state_32940;
(statearr_32990_33028[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33029 = state_32940;
state_32940 = G__33029;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__ = function(state_32940){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____1.call(this,state_32940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__,msg_hist,msg_names,msg))
})();
var state__27100__auto__ = (function (){var statearr_32991 = f__27099__auto__.call(null);
(statearr_32991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__,msg_hist,msg_names,msg))
);

return c__27098__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27098__auto___33092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___33092,ch){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___33092,ch){
return (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (1))){
var state_33075__$1 = state_33075;
var statearr_33077_33093 = state_33075__$1;
(statearr_33077_33093[(2)] = null);

(statearr_33077_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (2))){
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33075__$1,(4),ch);
} else {
if((state_val_33076 === (3))){
var inst_33073 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33075__$1,inst_33073);
} else {
if((state_val_33076 === (4))){
var inst_33063 = (state_33075[(7)]);
var inst_33063__$1 = (state_33075[(2)]);
var state_33075__$1 = (function (){var statearr_33078 = state_33075;
(statearr_33078[(7)] = inst_33063__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33063__$1)){
var statearr_33079_33094 = state_33075__$1;
(statearr_33079_33094[(1)] = (5));

} else {
var statearr_33080_33095 = state_33075__$1;
(statearr_33080_33095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (5))){
var inst_33063 = (state_33075[(7)]);
var inst_33065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33063);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33075__$1,(8),inst_33065);
} else {
if((state_val_33076 === (6))){
var state_33075__$1 = state_33075;
var statearr_33081_33096 = state_33075__$1;
(statearr_33081_33096[(2)] = null);

(statearr_33081_33096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (7))){
var inst_33071 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33082_33097 = state_33075__$1;
(statearr_33082_33097[(2)] = inst_33071);

(statearr_33082_33097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (8))){
var inst_33067 = (state_33075[(2)]);
var state_33075__$1 = (function (){var statearr_33083 = state_33075;
(statearr_33083[(8)] = inst_33067);

return statearr_33083;
})();
var statearr_33084_33098 = state_33075__$1;
(statearr_33084_33098[(2)] = null);

(statearr_33084_33098[(1)] = (2));


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
});})(c__27098__auto___33092,ch))
;
return ((function (switch__26986__auto__,c__27098__auto___33092,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26987__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26987__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26987__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var figwheel$client$heads_up_plugin_$_state_machine__26987__auto____1 = (function (state_33075){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_33075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e33089){if((e33089 instanceof Object)){
var ex__26990__auto__ = e33089;
var statearr_33090_33099 = state_33075;
(statearr_33090_33099[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33075;
state_33075 = G__33100;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26987__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26987__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26987__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26987__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___33092,ch))
})();
var state__27100__auto__ = (function (){var statearr_33091 = f__27099__auto__.call(null);
(statearr_33091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___33092);

return statearr_33091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___33092,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__){
return (function (state_33121){
var state_val_33122 = (state_33121[(1)]);
if((state_val_33122 === (1))){
var inst_33116 = cljs.core.async.timeout.call(null,(3000));
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33121__$1,(2),inst_33116);
} else {
if((state_val_33122 === (2))){
var inst_33118 = (state_33121[(2)]);
var inst_33119 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33121__$1 = (function (){var statearr_33123 = state_33121;
(statearr_33123[(7)] = inst_33118);

return statearr_33123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33121__$1,inst_33119);
} else {
return null;
}
}
});})(c__27098__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____0 = (function (){
var statearr_33127 = [null,null,null,null,null,null,null,null];
(statearr_33127[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__);

(statearr_33127[(1)] = (1));

return statearr_33127;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____1 = (function (state_33121){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_33121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e33128){if((e33128 instanceof Object)){
var ex__26990__auto__ = e33128;
var statearr_33129_33131 = state_33121;
(statearr_33129_33131[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33132 = state_33121;
state_33121 = G__33132;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__ = function(state_33121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____1.call(this,state_33121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26987__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__))
})();
var state__27100__auto__ = (function (){var statearr_33130 = f__27099__auto__.call(null);
(statearr_33130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__))
);

return c__27098__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33155){
var state_val_33156 = (state_33155[(1)]);
if((state_val_33156 === (1))){
var inst_33149 = cljs.core.async.timeout.call(null,(2000));
var state_33155__$1 = state_33155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33155__$1,(2),inst_33149);
} else {
if((state_val_33156 === (2))){
var inst_33151 = (state_33155[(2)]);
var inst_33152 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_33153 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33152);
var state_33155__$1 = (function (){var statearr_33157 = state_33155;
(statearr_33157[(7)] = inst_33151);

return statearr_33157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33155__$1,inst_33153);
} else {
return null;
}
}
});})(c__27098__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____0 = (function (){
var statearr_33161 = [null,null,null,null,null,null,null,null];
(statearr_33161[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__);

(statearr_33161[(1)] = (1));

return statearr_33161;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____1 = (function (state_33155){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_33155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e33162){if((e33162 instanceof Object)){
var ex__26990__auto__ = e33162;
var statearr_33163_33165 = state_33155;
(statearr_33163_33165[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33155;
state_33155 = G__33166;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__ = function(state_33155){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____1.call(this,state_33155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27100__auto__ = (function (){var statearr_33164 = f__27099__auto__.call(null);
(statearr_33164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_33164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__,figwheel_version,temp__4657__auto__))
);

return c__27098__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33167){
var map__33171 = p__33167;
var map__33171__$1 = ((((!((map__33171 == null)))?((((map__33171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33171):map__33171);
var file = cljs.core.get.call(null,map__33171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33173 = "";
var G__33173__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__33173),cljs.core.str("file "),cljs.core.str(file)].join(''):G__33173);
var G__33173__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__33173__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__33173__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = line;
if(cljs.core.truth_(and__24522__auto__)){
return column;
} else {
return and__24522__auto__;
}
})())){
return [cljs.core.str(G__33173__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__33173__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33174){
var map__33181 = p__33174;
var map__33181__$1 = ((((!((map__33181 == null)))?((((map__33181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33181):map__33181);
var ed = map__33181__$1;
var formatted_exception = cljs.core.get.call(null,map__33181__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33181__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33181__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33183_33187 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33184_33188 = null;
var count__33185_33189 = (0);
var i__33186_33190 = (0);
while(true){
if((i__33186_33190 < count__33185_33189)){
var msg_33191 = cljs.core._nth.call(null,chunk__33184_33188,i__33186_33190);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33191);

var G__33192 = seq__33183_33187;
var G__33193 = chunk__33184_33188;
var G__33194 = count__33185_33189;
var G__33195 = (i__33186_33190 + (1));
seq__33183_33187 = G__33192;
chunk__33184_33188 = G__33193;
count__33185_33189 = G__33194;
i__33186_33190 = G__33195;
continue;
} else {
var temp__4657__auto___33196 = cljs.core.seq.call(null,seq__33183_33187);
if(temp__4657__auto___33196){
var seq__33183_33197__$1 = temp__4657__auto___33196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33183_33197__$1)){
var c__25345__auto___33198 = cljs.core.chunk_first.call(null,seq__33183_33197__$1);
var G__33199 = cljs.core.chunk_rest.call(null,seq__33183_33197__$1);
var G__33200 = c__25345__auto___33198;
var G__33201 = cljs.core.count.call(null,c__25345__auto___33198);
var G__33202 = (0);
seq__33183_33187 = G__33199;
chunk__33184_33188 = G__33200;
count__33185_33189 = G__33201;
i__33186_33190 = G__33202;
continue;
} else {
var msg_33203 = cljs.core.first.call(null,seq__33183_33197__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33203);

var G__33204 = cljs.core.next.call(null,seq__33183_33197__$1);
var G__33205 = null;
var G__33206 = (0);
var G__33207 = (0);
seq__33183_33187 = G__33204;
chunk__33184_33188 = G__33205;
count__33185_33189 = G__33206;
i__33186_33190 = G__33207;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33208){
var map__33211 = p__33208;
var map__33211__$1 = ((((!((map__33211 == null)))?((((map__33211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211):map__33211);
var w = map__33211__$1;
var message = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24522__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24522__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33219 = cljs.core.seq.call(null,plugins);
var chunk__33220 = null;
var count__33221 = (0);
var i__33222 = (0);
while(true){
if((i__33222 < count__33221)){
var vec__33223 = cljs.core._nth.call(null,chunk__33220,i__33222);
var k = cljs.core.nth.call(null,vec__33223,(0),null);
var plugin = cljs.core.nth.call(null,vec__33223,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33225 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33219,chunk__33220,count__33221,i__33222,pl_33225,vec__33223,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33225.call(null,msg_hist);
});})(seq__33219,chunk__33220,count__33221,i__33222,pl_33225,vec__33223,k,plugin))
);
} else {
}

var G__33226 = seq__33219;
var G__33227 = chunk__33220;
var G__33228 = count__33221;
var G__33229 = (i__33222 + (1));
seq__33219 = G__33226;
chunk__33220 = G__33227;
count__33221 = G__33228;
i__33222 = G__33229;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33219);
if(temp__4657__auto__){
var seq__33219__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33219__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__33219__$1);
var G__33230 = cljs.core.chunk_rest.call(null,seq__33219__$1);
var G__33231 = c__25345__auto__;
var G__33232 = cljs.core.count.call(null,c__25345__auto__);
var G__33233 = (0);
seq__33219 = G__33230;
chunk__33220 = G__33231;
count__33221 = G__33232;
i__33222 = G__33233;
continue;
} else {
var vec__33224 = cljs.core.first.call(null,seq__33219__$1);
var k = cljs.core.nth.call(null,vec__33224,(0),null);
var plugin = cljs.core.nth.call(null,vec__33224,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33234 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33219,chunk__33220,count__33221,i__33222,pl_33234,vec__33224,k,plugin,seq__33219__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33234.call(null,msg_hist);
});})(seq__33219,chunk__33220,count__33221,i__33222,pl_33234,vec__33224,k,plugin,seq__33219__$1,temp__4657__auto__))
);
} else {
}

var G__33235 = cljs.core.next.call(null,seq__33219__$1);
var G__33236 = null;
var G__33237 = (0);
var G__33238 = (0);
seq__33219 = G__33235;
chunk__33220 = G__33236;
count__33221 = G__33237;
i__33222 = G__33238;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33239 = [];
var len__25604__auto___33246 = arguments.length;
var i__25605__auto___33247 = (0);
while(true){
if((i__25605__auto___33247 < len__25604__auto___33246)){
args33239.push((arguments[i__25605__auto___33247]));

var G__33248 = (i__25605__auto___33247 + (1));
i__25605__auto___33247 = G__33248;
continue;
} else {
}
break;
}

var G__33241 = args33239.length;
switch (G__33241) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33239.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33242_33250 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33243_33251 = null;
var count__33244_33252 = (0);
var i__33245_33253 = (0);
while(true){
if((i__33245_33253 < count__33244_33252)){
var msg_33254 = cljs.core._nth.call(null,chunk__33243_33251,i__33245_33253);
figwheel.client.socket.handle_incoming_message.call(null,msg_33254);

var G__33255 = seq__33242_33250;
var G__33256 = chunk__33243_33251;
var G__33257 = count__33244_33252;
var G__33258 = (i__33245_33253 + (1));
seq__33242_33250 = G__33255;
chunk__33243_33251 = G__33256;
count__33244_33252 = G__33257;
i__33245_33253 = G__33258;
continue;
} else {
var temp__4657__auto___33259 = cljs.core.seq.call(null,seq__33242_33250);
if(temp__4657__auto___33259){
var seq__33242_33260__$1 = temp__4657__auto___33259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33242_33260__$1)){
var c__25345__auto___33261 = cljs.core.chunk_first.call(null,seq__33242_33260__$1);
var G__33262 = cljs.core.chunk_rest.call(null,seq__33242_33260__$1);
var G__33263 = c__25345__auto___33261;
var G__33264 = cljs.core.count.call(null,c__25345__auto___33261);
var G__33265 = (0);
seq__33242_33250 = G__33262;
chunk__33243_33251 = G__33263;
count__33244_33252 = G__33264;
i__33245_33253 = G__33265;
continue;
} else {
var msg_33266 = cljs.core.first.call(null,seq__33242_33260__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33266);

var G__33267 = cljs.core.next.call(null,seq__33242_33260__$1);
var G__33268 = null;
var G__33269 = (0);
var G__33270 = (0);
seq__33242_33250 = G__33267;
chunk__33243_33251 = G__33268;
count__33244_33252 = G__33269;
i__33245_33253 = G__33270;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25611__auto__ = [];
var len__25604__auto___33275 = arguments.length;
var i__25605__auto___33276 = (0);
while(true){
if((i__25605__auto___33276 < len__25604__auto___33275)){
args__25611__auto__.push((arguments[i__25605__auto___33276]));

var G__33277 = (i__25605__auto___33276 + (1));
i__25605__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33272){
var map__33273 = p__33272;
var map__33273__$1 = ((((!((map__33273 == null)))?((((map__33273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);
var opts = map__33273__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33271){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33271));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33279){if((e33279 instanceof Error)){
var e = e33279;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33279;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33283){
var map__33284 = p__33283;
var map__33284__$1 = ((((!((map__33284 == null)))?((((map__33284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33284):map__33284);
var msg_name = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478441518505