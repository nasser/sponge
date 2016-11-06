// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27143 = [];
var len__25604__auto___27149 = arguments.length;
var i__25605__auto___27150 = (0);
while(true){
if((i__25605__auto___27150 < len__25604__auto___27149)){
args27143.push((arguments[i__25605__auto___27150]));

var G__27151 = (i__25605__auto___27150 + (1));
i__25605__auto___27150 = G__27151;
continue;
} else {
}
break;
}

var G__27145 = args27143.length;
switch (G__27145) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27143.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27146 = (function (f,blockable,meta27147){
this.f = f;
this.blockable = blockable;
this.meta27147 = meta27147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27148,meta27147__$1){
var self__ = this;
var _27148__$1 = this;
return (new cljs.core.async.t_cljs$core$async27146(self__.f,self__.blockable,meta27147__$1));
});

cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27148){
var self__ = this;
var _27148__$1 = this;
return self__.meta27147;
});

cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27147","meta27147",-577210475,null)], null);
});

cljs.core.async.t_cljs$core$async27146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27146";

cljs.core.async.t_cljs$core$async27146.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27146");
});

cljs.core.async.__GT_t_cljs$core$async27146 = (function cljs$core$async$__GT_t_cljs$core$async27146(f__$1,blockable__$1,meta27147){
return (new cljs.core.async.t_cljs$core$async27146(f__$1,blockable__$1,meta27147));
});

}

return (new cljs.core.async.t_cljs$core$async27146(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27155 = [];
var len__25604__auto___27158 = arguments.length;
var i__25605__auto___27159 = (0);
while(true){
if((i__25605__auto___27159 < len__25604__auto___27158)){
args27155.push((arguments[i__25605__auto___27159]));

var G__27160 = (i__25605__auto___27159 + (1));
i__25605__auto___27159 = G__27160;
continue;
} else {
}
break;
}

var G__27157 = args27155.length;
switch (G__27157) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27155.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27162 = [];
var len__25604__auto___27165 = arguments.length;
var i__25605__auto___27166 = (0);
while(true){
if((i__25605__auto___27166 < len__25604__auto___27165)){
args27162.push((arguments[i__25605__auto___27166]));

var G__27167 = (i__25605__auto___27166 + (1));
i__25605__auto___27166 = G__27167;
continue;
} else {
}
break;
}

var G__27164 = args27162.length;
switch (G__27164) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27162.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27169 = [];
var len__25604__auto___27172 = arguments.length;
var i__25605__auto___27173 = (0);
while(true){
if((i__25605__auto___27173 < len__25604__auto___27172)){
args27169.push((arguments[i__25605__auto___27173]));

var G__27174 = (i__25605__auto___27173 + (1));
i__25605__auto___27173 = G__27174;
continue;
} else {
}
break;
}

var G__27171 = args27169.length;
switch (G__27171) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27169.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27176 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27176);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27176,ret){
return (function (){
return fn1.call(null,val_27176);
});})(val_27176,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27177 = [];
var len__25604__auto___27180 = arguments.length;
var i__25605__auto___27181 = (0);
while(true){
if((i__25605__auto___27181 < len__25604__auto___27180)){
args27177.push((arguments[i__25605__auto___27181]));

var G__27182 = (i__25605__auto___27181 + (1));
i__25605__auto___27181 = G__27182;
continue;
} else {
}
break;
}

var G__27179 = args27177.length;
switch (G__27179) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27177.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25449__auto___27184 = n;
var x_27185 = (0);
while(true){
if((x_27185 < n__25449__auto___27184)){
(a[x_27185] = (0));

var G__27186 = (x_27185 + (1));
x_27185 = G__27186;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27187 = (i + (1));
i = G__27187;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27191 = (function (alt_flag,flag,meta27192){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27192 = meta27192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27193,meta27192__$1){
var self__ = this;
var _27193__$1 = this;
return (new cljs.core.async.t_cljs$core$async27191(self__.alt_flag,self__.flag,meta27192__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27193){
var self__ = this;
var _27193__$1 = this;
return self__.meta27192;
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27192","meta27192",-523791390,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27191";

cljs.core.async.t_cljs$core$async27191.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27191");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27191 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27191(alt_flag__$1,flag__$1,meta27192){
return (new cljs.core.async.t_cljs$core$async27191(alt_flag__$1,flag__$1,meta27192));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27191(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27197 = (function (alt_handler,flag,cb,meta27198){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27198 = meta27198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27199,meta27198__$1){
var self__ = this;
var _27199__$1 = this;
return (new cljs.core.async.t_cljs$core$async27197(self__.alt_handler,self__.flag,self__.cb,meta27198__$1));
});

cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27199){
var self__ = this;
var _27199__$1 = this;
return self__.meta27198;
});

cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27198","meta27198",1409445507,null)], null);
});

cljs.core.async.t_cljs$core$async27197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27197";

cljs.core.async.t_cljs$core$async27197.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27197");
});

cljs.core.async.__GT_t_cljs$core$async27197 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27197(alt_handler__$1,flag__$1,cb__$1,meta27198){
return (new cljs.core.async.t_cljs$core$async27197(alt_handler__$1,flag__$1,cb__$1,meta27198));
});

}

return (new cljs.core.async.t_cljs$core$async27197(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27200_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27200_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27201_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27201_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24534__auto__ = wport;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27202 = (i + (1));
i = G__27202;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24534__auto__ = ret;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24522__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24522__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___27208 = arguments.length;
var i__25605__auto___27209 = (0);
while(true){
if((i__25605__auto___27209 < len__25604__auto___27208)){
args__25611__auto__.push((arguments[i__25605__auto___27209]));

var G__27210 = (i__25605__auto___27209 + (1));
i__25605__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((1) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25612__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27205){
var map__27206 = p__27205;
var map__27206__$1 = ((((!((map__27206 == null)))?((((map__27206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27206):map__27206);
var opts = map__27206__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27203){
var G__27204 = cljs.core.first.call(null,seq27203);
var seq27203__$1 = cljs.core.next.call(null,seq27203);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27204,seq27203__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27211 = [];
var len__25604__auto___27261 = arguments.length;
var i__25605__auto___27262 = (0);
while(true){
if((i__25605__auto___27262 < len__25604__auto___27261)){
args27211.push((arguments[i__25605__auto___27262]));

var G__27263 = (i__25605__auto___27262 + (1));
i__25605__auto___27262 = G__27263;
continue;
} else {
}
break;
}

var G__27213 = args27211.length;
switch (G__27213) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27211.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27098__auto___27265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___27265){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___27265){
return (function (state_27237){
var state_val_27238 = (state_27237[(1)]);
if((state_val_27238 === (7))){
var inst_27233 = (state_27237[(2)]);
var state_27237__$1 = state_27237;
var statearr_27239_27266 = state_27237__$1;
(statearr_27239_27266[(2)] = inst_27233);

(statearr_27239_27266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (1))){
var state_27237__$1 = state_27237;
var statearr_27240_27267 = state_27237__$1;
(statearr_27240_27267[(2)] = null);

(statearr_27240_27267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (4))){
var inst_27216 = (state_27237[(7)]);
var inst_27216__$1 = (state_27237[(2)]);
var inst_27217 = (inst_27216__$1 == null);
var state_27237__$1 = (function (){var statearr_27241 = state_27237;
(statearr_27241[(7)] = inst_27216__$1);

return statearr_27241;
})();
if(cljs.core.truth_(inst_27217)){
var statearr_27242_27268 = state_27237__$1;
(statearr_27242_27268[(1)] = (5));

} else {
var statearr_27243_27269 = state_27237__$1;
(statearr_27243_27269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (13))){
var state_27237__$1 = state_27237;
var statearr_27244_27270 = state_27237__$1;
(statearr_27244_27270[(2)] = null);

(statearr_27244_27270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (6))){
var inst_27216 = (state_27237[(7)]);
var state_27237__$1 = state_27237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27237__$1,(11),to,inst_27216);
} else {
if((state_val_27238 === (3))){
var inst_27235 = (state_27237[(2)]);
var state_27237__$1 = state_27237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27237__$1,inst_27235);
} else {
if((state_val_27238 === (12))){
var state_27237__$1 = state_27237;
var statearr_27245_27271 = state_27237__$1;
(statearr_27245_27271[(2)] = null);

(statearr_27245_27271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (2))){
var state_27237__$1 = state_27237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27237__$1,(4),from);
} else {
if((state_val_27238 === (11))){
var inst_27226 = (state_27237[(2)]);
var state_27237__$1 = state_27237;
if(cljs.core.truth_(inst_27226)){
var statearr_27246_27272 = state_27237__$1;
(statearr_27246_27272[(1)] = (12));

} else {
var statearr_27247_27273 = state_27237__$1;
(statearr_27247_27273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (9))){
var state_27237__$1 = state_27237;
var statearr_27248_27274 = state_27237__$1;
(statearr_27248_27274[(2)] = null);

(statearr_27248_27274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (5))){
var state_27237__$1 = state_27237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27249_27275 = state_27237__$1;
(statearr_27249_27275[(1)] = (8));

} else {
var statearr_27250_27276 = state_27237__$1;
(statearr_27250_27276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (14))){
var inst_27231 = (state_27237[(2)]);
var state_27237__$1 = state_27237;
var statearr_27251_27277 = state_27237__$1;
(statearr_27251_27277[(2)] = inst_27231);

(statearr_27251_27277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (10))){
var inst_27223 = (state_27237[(2)]);
var state_27237__$1 = state_27237;
var statearr_27252_27278 = state_27237__$1;
(statearr_27252_27278[(2)] = inst_27223);

(statearr_27252_27278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27238 === (8))){
var inst_27220 = cljs.core.async.close_BANG_.call(null,to);
var state_27237__$1 = state_27237;
var statearr_27253_27279 = state_27237__$1;
(statearr_27253_27279[(2)] = inst_27220);

(statearr_27253_27279[(1)] = (10));


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
});})(c__27098__auto___27265))
;
return ((function (switch__26986__auto__,c__27098__auto___27265){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_27257 = [null,null,null,null,null,null,null,null];
(statearr_27257[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_27257[(1)] = (1));

return statearr_27257;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_27237){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27258){if((e27258 instanceof Object)){
var ex__26990__auto__ = e27258;
var statearr_27259_27280 = state_27237;
(statearr_27259_27280[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27281 = state_27237;
state_27237 = G__27281;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_27237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_27237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___27265))
})();
var state__27100__auto__ = (function (){var statearr_27260 = f__27099__auto__.call(null);
(statearr_27260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27265);

return statearr_27260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___27265))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27465){
var vec__27466 = p__27465;
var v = cljs.core.nth.call(null,vec__27466,(0),null);
var p = cljs.core.nth.call(null,vec__27466,(1),null);
var job = vec__27466;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27098__auto___27648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results){
return (function (state_27471){
var state_val_27472 = (state_27471[(1)]);
if((state_val_27472 === (1))){
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27471__$1,(2),res,v);
} else {
if((state_val_27472 === (2))){
var inst_27468 = (state_27471[(2)]);
var inst_27469 = cljs.core.async.close_BANG_.call(null,res);
var state_27471__$1 = (function (){var statearr_27473 = state_27471;
(statearr_27473[(7)] = inst_27468);

return statearr_27473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27471__$1,inst_27469);
} else {
return null;
}
}
});})(c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results))
;
return ((function (switch__26986__auto__,c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_27477 = [null,null,null,null,null,null,null,null];
(statearr_27477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__);

(statearr_27477[(1)] = (1));

return statearr_27477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1 = (function (state_27471){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27478){if((e27478 instanceof Object)){
var ex__26990__auto__ = e27478;
var statearr_27479_27649 = state_27471;
(statearr_27479_27649[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27650 = state_27471;
state_27471 = G__27650;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = function(state_27471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1.call(this,state_27471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results))
})();
var state__27100__auto__ = (function (){var statearr_27480 = f__27099__auto__.call(null);
(statearr_27480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27648);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___27648,res,vec__27466,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27481){
var vec__27482 = p__27481;
var v = cljs.core.nth.call(null,vec__27482,(0),null);
var p = cljs.core.nth.call(null,vec__27482,(1),null);
var job = vec__27482;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25449__auto___27651 = n;
var __27652 = (0);
while(true){
if((__27652 < n__25449__auto___27651)){
var G__27483_27653 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27483_27653) {
case "compute":
var c__27098__auto___27655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27652,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (__27652,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function (state_27496){
var state_val_27497 = (state_27496[(1)]);
if((state_val_27497 === (1))){
var state_27496__$1 = state_27496;
var statearr_27498_27656 = state_27496__$1;
(statearr_27498_27656[(2)] = null);

(statearr_27498_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (2))){
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27496__$1,(4),jobs);
} else {
if((state_val_27497 === (3))){
var inst_27494 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27496__$1,inst_27494);
} else {
if((state_val_27497 === (4))){
var inst_27486 = (state_27496[(2)]);
var inst_27487 = process.call(null,inst_27486);
var state_27496__$1 = state_27496;
if(cljs.core.truth_(inst_27487)){
var statearr_27499_27657 = state_27496__$1;
(statearr_27499_27657[(1)] = (5));

} else {
var statearr_27500_27658 = state_27496__$1;
(statearr_27500_27658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (5))){
var state_27496__$1 = state_27496;
var statearr_27501_27659 = state_27496__$1;
(statearr_27501_27659[(2)] = null);

(statearr_27501_27659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (6))){
var state_27496__$1 = state_27496;
var statearr_27502_27660 = state_27496__$1;
(statearr_27502_27660[(2)] = null);

(statearr_27502_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (7))){
var inst_27492 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27503_27661 = state_27496__$1;
(statearr_27503_27661[(2)] = inst_27492);

(statearr_27503_27661[(1)] = (3));


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
});})(__27652,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
;
return ((function (__27652,switch__26986__auto__,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null];
(statearr_27507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1 = (function (state_27496){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__26990__auto__ = e27508;
var statearr_27509_27662 = state_27496;
(statearr_27509_27662[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27663 = state_27496;
state_27496 = G__27663;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = function(state_27496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1.call(this,state_27496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__;
})()
;})(__27652,switch__26986__auto__,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
})();
var state__27100__auto__ = (function (){var statearr_27510 = f__27099__auto__.call(null);
(statearr_27510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27655);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(__27652,c__27098__auto___27655,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
);


break;
case "async":
var c__27098__auto___27664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27652,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (__27652,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (1))){
var state_27523__$1 = state_27523;
var statearr_27525_27665 = state_27523__$1;
(statearr_27525_27665[(2)] = null);

(statearr_27525_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (2))){
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(4),jobs);
} else {
if((state_val_27524 === (3))){
var inst_27521 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (4))){
var inst_27513 = (state_27523[(2)]);
var inst_27514 = async.call(null,inst_27513);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27514)){
var statearr_27526_27666 = state_27523__$1;
(statearr_27526_27666[(1)] = (5));

} else {
var statearr_27527_27667 = state_27523__$1;
(statearr_27527_27667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (5))){
var state_27523__$1 = state_27523;
var statearr_27528_27668 = state_27523__$1;
(statearr_27528_27668[(2)] = null);

(statearr_27528_27668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (6))){
var state_27523__$1 = state_27523;
var statearr_27529_27669 = state_27523__$1;
(statearr_27529_27669[(2)] = null);

(statearr_27529_27669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (7))){
var inst_27519 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27530_27670 = state_27523__$1;
(statearr_27530_27670[(2)] = inst_27519);

(statearr_27530_27670[(1)] = (3));


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
});})(__27652,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
;
return ((function (__27652,switch__26986__auto__,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_27534 = [null,null,null,null,null,null,null];
(statearr_27534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__);

(statearr_27534[(1)] = (1));

return statearr_27534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1 = (function (state_27523){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27535){if((e27535 instanceof Object)){
var ex__26990__auto__ = e27535;
var statearr_27536_27671 = state_27523;
(statearr_27536_27671[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27672 = state_27523;
state_27523 = G__27672;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__;
})()
;})(__27652,switch__26986__auto__,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
})();
var state__27100__auto__ = (function (){var statearr_27537 = f__27099__auto__.call(null);
(statearr_27537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27664);

return statearr_27537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(__27652,c__27098__auto___27664,G__27483_27653,n__25449__auto___27651,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27673 = (__27652 + (1));
__27652 = G__27673;
continue;
} else {
}
break;
}

var c__27098__auto___27674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___27674,jobs,results,process,async){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___27674,jobs,results,process,async){
return (function (state_27559){
var state_val_27560 = (state_27559[(1)]);
if((state_val_27560 === (1))){
var state_27559__$1 = state_27559;
var statearr_27561_27675 = state_27559__$1;
(statearr_27561_27675[(2)] = null);

(statearr_27561_27675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (2))){
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27559__$1,(4),from);
} else {
if((state_val_27560 === (3))){
var inst_27557 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27559__$1,inst_27557);
} else {
if((state_val_27560 === (4))){
var inst_27540 = (state_27559[(7)]);
var inst_27540__$1 = (state_27559[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var state_27559__$1 = (function (){var statearr_27562 = state_27559;
(statearr_27562[(7)] = inst_27540__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27541)){
var statearr_27563_27676 = state_27559__$1;
(statearr_27563_27676[(1)] = (5));

} else {
var statearr_27564_27677 = state_27559__$1;
(statearr_27564_27677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (5))){
var inst_27543 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27559__$1 = state_27559;
var statearr_27565_27678 = state_27559__$1;
(statearr_27565_27678[(2)] = inst_27543);

(statearr_27565_27678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (6))){
var inst_27540 = (state_27559[(7)]);
var inst_27545 = (state_27559[(8)]);
var inst_27545__$1 = cljs.core.async.chan.call(null,(1));
var inst_27546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27547 = [inst_27540,inst_27545__$1];
var inst_27548 = (new cljs.core.PersistentVector(null,2,(5),inst_27546,inst_27547,null));
var state_27559__$1 = (function (){var statearr_27566 = state_27559;
(statearr_27566[(8)] = inst_27545__$1);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27559__$1,(8),jobs,inst_27548);
} else {
if((state_val_27560 === (7))){
var inst_27555 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27567_27679 = state_27559__$1;
(statearr_27567_27679[(2)] = inst_27555);

(statearr_27567_27679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (8))){
var inst_27545 = (state_27559[(8)]);
var inst_27550 = (state_27559[(2)]);
var state_27559__$1 = (function (){var statearr_27568 = state_27559;
(statearr_27568[(9)] = inst_27550);

return statearr_27568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27559__$1,(9),results,inst_27545);
} else {
if((state_val_27560 === (9))){
var inst_27552 = (state_27559[(2)]);
var state_27559__$1 = (function (){var statearr_27569 = state_27559;
(statearr_27569[(10)] = inst_27552);

return statearr_27569;
})();
var statearr_27570_27680 = state_27559__$1;
(statearr_27570_27680[(2)] = null);

(statearr_27570_27680[(1)] = (2));


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
});})(c__27098__auto___27674,jobs,results,process,async))
;
return ((function (switch__26986__auto__,c__27098__auto___27674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_27574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__);

(statearr_27574[(1)] = (1));

return statearr_27574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1 = (function (state_27559){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27575){if((e27575 instanceof Object)){
var ex__26990__auto__ = e27575;
var statearr_27576_27681 = state_27559;
(statearr_27576_27681[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27682 = state_27559;
state_27559 = G__27682;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = function(state_27559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1.call(this,state_27559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___27674,jobs,results,process,async))
})();
var state__27100__auto__ = (function (){var statearr_27577 = f__27099__auto__.call(null);
(statearr_27577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27674);

return statearr_27577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___27674,jobs,results,process,async))
);


var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__,jobs,results,process,async){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__,jobs,results,process,async){
return (function (state_27615){
var state_val_27616 = (state_27615[(1)]);
if((state_val_27616 === (7))){
var inst_27611 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27617_27683 = state_27615__$1;
(statearr_27617_27683[(2)] = inst_27611);

(statearr_27617_27683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (20))){
var state_27615__$1 = state_27615;
var statearr_27618_27684 = state_27615__$1;
(statearr_27618_27684[(2)] = null);

(statearr_27618_27684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (1))){
var state_27615__$1 = state_27615;
var statearr_27619_27685 = state_27615__$1;
(statearr_27619_27685[(2)] = null);

(statearr_27619_27685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (4))){
var inst_27580 = (state_27615[(7)]);
var inst_27580__$1 = (state_27615[(2)]);
var inst_27581 = (inst_27580__$1 == null);
var state_27615__$1 = (function (){var statearr_27620 = state_27615;
(statearr_27620[(7)] = inst_27580__$1);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27621_27686 = state_27615__$1;
(statearr_27621_27686[(1)] = (5));

} else {
var statearr_27622_27687 = state_27615__$1;
(statearr_27622_27687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (15))){
var inst_27593 = (state_27615[(8)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27615__$1,(18),to,inst_27593);
} else {
if((state_val_27616 === (21))){
var inst_27606 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27623_27688 = state_27615__$1;
(statearr_27623_27688[(2)] = inst_27606);

(statearr_27623_27688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (13))){
var inst_27608 = (state_27615[(2)]);
var state_27615__$1 = (function (){var statearr_27624 = state_27615;
(statearr_27624[(9)] = inst_27608);

return statearr_27624;
})();
var statearr_27625_27689 = state_27615__$1;
(statearr_27625_27689[(2)] = null);

(statearr_27625_27689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (6))){
var inst_27580 = (state_27615[(7)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(11),inst_27580);
} else {
if((state_val_27616 === (17))){
var inst_27601 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
if(cljs.core.truth_(inst_27601)){
var statearr_27626_27690 = state_27615__$1;
(statearr_27626_27690[(1)] = (19));

} else {
var statearr_27627_27691 = state_27615__$1;
(statearr_27627_27691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (3))){
var inst_27613 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27615__$1,inst_27613);
} else {
if((state_val_27616 === (12))){
var inst_27590 = (state_27615[(10)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(14),inst_27590);
} else {
if((state_val_27616 === (2))){
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(4),results);
} else {
if((state_val_27616 === (19))){
var state_27615__$1 = state_27615;
var statearr_27628_27692 = state_27615__$1;
(statearr_27628_27692[(2)] = null);

(statearr_27628_27692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (11))){
var inst_27590 = (state_27615[(2)]);
var state_27615__$1 = (function (){var statearr_27629 = state_27615;
(statearr_27629[(10)] = inst_27590);

return statearr_27629;
})();
var statearr_27630_27693 = state_27615__$1;
(statearr_27630_27693[(2)] = null);

(statearr_27630_27693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (9))){
var state_27615__$1 = state_27615;
var statearr_27631_27694 = state_27615__$1;
(statearr_27631_27694[(2)] = null);

(statearr_27631_27694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (5))){
var state_27615__$1 = state_27615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27632_27695 = state_27615__$1;
(statearr_27632_27695[(1)] = (8));

} else {
var statearr_27633_27696 = state_27615__$1;
(statearr_27633_27696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (14))){
var inst_27593 = (state_27615[(8)]);
var inst_27595 = (state_27615[(11)]);
var inst_27593__$1 = (state_27615[(2)]);
var inst_27594 = (inst_27593__$1 == null);
var inst_27595__$1 = cljs.core.not.call(null,inst_27594);
var state_27615__$1 = (function (){var statearr_27634 = state_27615;
(statearr_27634[(8)] = inst_27593__$1);

(statearr_27634[(11)] = inst_27595__$1);

return statearr_27634;
})();
if(inst_27595__$1){
var statearr_27635_27697 = state_27615__$1;
(statearr_27635_27697[(1)] = (15));

} else {
var statearr_27636_27698 = state_27615__$1;
(statearr_27636_27698[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (16))){
var inst_27595 = (state_27615[(11)]);
var state_27615__$1 = state_27615;
var statearr_27637_27699 = state_27615__$1;
(statearr_27637_27699[(2)] = inst_27595);

(statearr_27637_27699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (10))){
var inst_27587 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27638_27700 = state_27615__$1;
(statearr_27638_27700[(2)] = inst_27587);

(statearr_27638_27700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (18))){
var inst_27598 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27639_27701 = state_27615__$1;
(statearr_27639_27701[(2)] = inst_27598);

(statearr_27639_27701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (8))){
var inst_27584 = cljs.core.async.close_BANG_.call(null,to);
var state_27615__$1 = state_27615;
var statearr_27640_27702 = state_27615__$1;
(statearr_27640_27702[(2)] = inst_27584);

(statearr_27640_27702[(1)] = (10));


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
});})(c__27098__auto__,jobs,results,process,async))
;
return ((function (switch__26986__auto__,c__27098__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_27644 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__);

(statearr_27644[(1)] = (1));

return statearr_27644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1 = (function (state_27615){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27645){if((e27645 instanceof Object)){
var ex__26990__auto__ = e27645;
var statearr_27646_27703 = state_27615;
(statearr_27646_27703[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27704 = state_27615;
state_27615 = G__27704;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__ = function(state_27615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1.call(this,state_27615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__,jobs,results,process,async))
})();
var state__27100__auto__ = (function (){var statearr_27647 = f__27099__auto__.call(null);
(statearr_27647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_27647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__,jobs,results,process,async))
);

return c__27098__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27705 = [];
var len__25604__auto___27708 = arguments.length;
var i__25605__auto___27709 = (0);
while(true){
if((i__25605__auto___27709 < len__25604__auto___27708)){
args27705.push((arguments[i__25605__auto___27709]));

var G__27710 = (i__25605__auto___27709 + (1));
i__25605__auto___27709 = G__27710;
continue;
} else {
}
break;
}

var G__27707 = args27705.length;
switch (G__27707) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27705.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27712 = [];
var len__25604__auto___27715 = arguments.length;
var i__25605__auto___27716 = (0);
while(true){
if((i__25605__auto___27716 < len__25604__auto___27715)){
args27712.push((arguments[i__25605__auto___27716]));

var G__27717 = (i__25605__auto___27716 + (1));
i__25605__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var G__27714 = args27712.length;
switch (G__27714) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27712.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27719 = [];
var len__25604__auto___27772 = arguments.length;
var i__25605__auto___27773 = (0);
while(true){
if((i__25605__auto___27773 < len__25604__auto___27772)){
args27719.push((arguments[i__25605__auto___27773]));

var G__27774 = (i__25605__auto___27773 + (1));
i__25605__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var G__27721 = args27719.length;
switch (G__27721) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27719.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27098__auto___27776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___27776,tc,fc){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___27776,tc,fc){
return (function (state_27747){
var state_val_27748 = (state_27747[(1)]);
if((state_val_27748 === (7))){
var inst_27743 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27749_27777 = state_27747__$1;
(statearr_27749_27777[(2)] = inst_27743);

(statearr_27749_27777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (1))){
var state_27747__$1 = state_27747;
var statearr_27750_27778 = state_27747__$1;
(statearr_27750_27778[(2)] = null);

(statearr_27750_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (4))){
var inst_27724 = (state_27747[(7)]);
var inst_27724__$1 = (state_27747[(2)]);
var inst_27725 = (inst_27724__$1 == null);
var state_27747__$1 = (function (){var statearr_27751 = state_27747;
(statearr_27751[(7)] = inst_27724__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27725)){
var statearr_27752_27779 = state_27747__$1;
(statearr_27752_27779[(1)] = (5));

} else {
var statearr_27753_27780 = state_27747__$1;
(statearr_27753_27780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (13))){
var state_27747__$1 = state_27747;
var statearr_27754_27781 = state_27747__$1;
(statearr_27754_27781[(2)] = null);

(statearr_27754_27781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (6))){
var inst_27724 = (state_27747[(7)]);
var inst_27730 = p.call(null,inst_27724);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27730)){
var statearr_27755_27782 = state_27747__$1;
(statearr_27755_27782[(1)] = (9));

} else {
var statearr_27756_27783 = state_27747__$1;
(statearr_27756_27783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (3))){
var inst_27745 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27747__$1,inst_27745);
} else {
if((state_val_27748 === (12))){
var state_27747__$1 = state_27747;
var statearr_27757_27784 = state_27747__$1;
(statearr_27757_27784[(2)] = null);

(statearr_27757_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (2))){
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27747__$1,(4),ch);
} else {
if((state_val_27748 === (11))){
var inst_27724 = (state_27747[(7)]);
var inst_27734 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27747__$1,(8),inst_27734,inst_27724);
} else {
if((state_val_27748 === (9))){
var state_27747__$1 = state_27747;
var statearr_27758_27785 = state_27747__$1;
(statearr_27758_27785[(2)] = tc);

(statearr_27758_27785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (5))){
var inst_27727 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27728 = cljs.core.async.close_BANG_.call(null,fc);
var state_27747__$1 = (function (){var statearr_27759 = state_27747;
(statearr_27759[(8)] = inst_27727);

return statearr_27759;
})();
var statearr_27760_27786 = state_27747__$1;
(statearr_27760_27786[(2)] = inst_27728);

(statearr_27760_27786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (14))){
var inst_27741 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27761_27787 = state_27747__$1;
(statearr_27761_27787[(2)] = inst_27741);

(statearr_27761_27787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (10))){
var state_27747__$1 = state_27747;
var statearr_27762_27788 = state_27747__$1;
(statearr_27762_27788[(2)] = fc);

(statearr_27762_27788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (8))){
var inst_27736 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27736)){
var statearr_27763_27789 = state_27747__$1;
(statearr_27763_27789[(1)] = (12));

} else {
var statearr_27764_27790 = state_27747__$1;
(statearr_27764_27790[(1)] = (13));

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
});})(c__27098__auto___27776,tc,fc))
;
return ((function (switch__26986__auto__,c__27098__auto___27776,tc,fc){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_27768 = [null,null,null,null,null,null,null,null,null];
(statearr_27768[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_27768[(1)] = (1));

return statearr_27768;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_27747){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27769){if((e27769 instanceof Object)){
var ex__26990__auto__ = e27769;
var statearr_27770_27791 = state_27747;
(statearr_27770_27791[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27792 = state_27747;
state_27747 = G__27792;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_27747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_27747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___27776,tc,fc))
})();
var state__27100__auto__ = (function (){var statearr_27771 = f__27099__auto__.call(null);
(statearr_27771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___27776);

return statearr_27771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___27776,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__){
return (function (state_27856){
var state_val_27857 = (state_27856[(1)]);
if((state_val_27857 === (7))){
var inst_27852 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27858_27879 = state_27856__$1;
(statearr_27858_27879[(2)] = inst_27852);

(statearr_27858_27879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (1))){
var inst_27836 = init;
var state_27856__$1 = (function (){var statearr_27859 = state_27856;
(statearr_27859[(7)] = inst_27836);

return statearr_27859;
})();
var statearr_27860_27880 = state_27856__$1;
(statearr_27860_27880[(2)] = null);

(statearr_27860_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (4))){
var inst_27839 = (state_27856[(8)]);
var inst_27839__$1 = (state_27856[(2)]);
var inst_27840 = (inst_27839__$1 == null);
var state_27856__$1 = (function (){var statearr_27861 = state_27856;
(statearr_27861[(8)] = inst_27839__$1);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27840)){
var statearr_27862_27881 = state_27856__$1;
(statearr_27862_27881[(1)] = (5));

} else {
var statearr_27863_27882 = state_27856__$1;
(statearr_27863_27882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (6))){
var inst_27836 = (state_27856[(7)]);
var inst_27839 = (state_27856[(8)]);
var inst_27843 = (state_27856[(9)]);
var inst_27843__$1 = f.call(null,inst_27836,inst_27839);
var inst_27844 = cljs.core.reduced_QMARK_.call(null,inst_27843__$1);
var state_27856__$1 = (function (){var statearr_27864 = state_27856;
(statearr_27864[(9)] = inst_27843__$1);

return statearr_27864;
})();
if(inst_27844){
var statearr_27865_27883 = state_27856__$1;
(statearr_27865_27883[(1)] = (8));

} else {
var statearr_27866_27884 = state_27856__$1;
(statearr_27866_27884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (3))){
var inst_27854 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27856__$1,inst_27854);
} else {
if((state_val_27857 === (2))){
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27856__$1,(4),ch);
} else {
if((state_val_27857 === (9))){
var inst_27843 = (state_27856[(9)]);
var inst_27836 = inst_27843;
var state_27856__$1 = (function (){var statearr_27867 = state_27856;
(statearr_27867[(7)] = inst_27836);

return statearr_27867;
})();
var statearr_27868_27885 = state_27856__$1;
(statearr_27868_27885[(2)] = null);

(statearr_27868_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (5))){
var inst_27836 = (state_27856[(7)]);
var state_27856__$1 = state_27856;
var statearr_27869_27886 = state_27856__$1;
(statearr_27869_27886[(2)] = inst_27836);

(statearr_27869_27886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (10))){
var inst_27850 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27870_27887 = state_27856__$1;
(statearr_27870_27887[(2)] = inst_27850);

(statearr_27870_27887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (8))){
var inst_27843 = (state_27856[(9)]);
var inst_27846 = cljs.core.deref.call(null,inst_27843);
var state_27856__$1 = state_27856;
var statearr_27871_27888 = state_27856__$1;
(statearr_27871_27888[(2)] = inst_27846);

(statearr_27871_27888[(1)] = (10));


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
});})(c__27098__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26987__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26987__auto____0 = (function (){
var statearr_27875 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27875[(0)] = cljs$core$async$reduce_$_state_machine__26987__auto__);

(statearr_27875[(1)] = (1));

return statearr_27875;
});
var cljs$core$async$reduce_$_state_machine__26987__auto____1 = (function (state_27856){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27876){if((e27876 instanceof Object)){
var ex__26990__auto__ = e27876;
var statearr_27877_27889 = state_27856;
(statearr_27877_27889[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27890 = state_27856;
state_27856 = G__27890;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26987__auto__ = function(state_27856){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26987__auto____1.call(this,state_27856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26987__auto____0;
cljs$core$async$reduce_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26987__auto____1;
return cljs$core$async$reduce_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__))
})();
var state__27100__auto__ = (function (){var statearr_27878 = f__27099__auto__.call(null);
(statearr_27878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_27878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__))
);

return c__27098__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27891 = [];
var len__25604__auto___27943 = arguments.length;
var i__25605__auto___27944 = (0);
while(true){
if((i__25605__auto___27944 < len__25604__auto___27943)){
args27891.push((arguments[i__25605__auto___27944]));

var G__27945 = (i__25605__auto___27944 + (1));
i__25605__auto___27944 = G__27945;
continue;
} else {
}
break;
}

var G__27893 = args27891.length;
switch (G__27893) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27891.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__){
return (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (7))){
var inst_27900 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27920_27947 = state_27918__$1;
(statearr_27920_27947[(2)] = inst_27900);

(statearr_27920_27947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (1))){
var inst_27894 = cljs.core.seq.call(null,coll);
var inst_27895 = inst_27894;
var state_27918__$1 = (function (){var statearr_27921 = state_27918;
(statearr_27921[(7)] = inst_27895);

return statearr_27921;
})();
var statearr_27922_27948 = state_27918__$1;
(statearr_27922_27948[(2)] = null);

(statearr_27922_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (4))){
var inst_27895 = (state_27918[(7)]);
var inst_27898 = cljs.core.first.call(null,inst_27895);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27918__$1,(7),ch,inst_27898);
} else {
if((state_val_27919 === (13))){
var inst_27912 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27923_27949 = state_27918__$1;
(statearr_27923_27949[(2)] = inst_27912);

(statearr_27923_27949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (6))){
var inst_27903 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27903)){
var statearr_27924_27950 = state_27918__$1;
(statearr_27924_27950[(1)] = (8));

} else {
var statearr_27925_27951 = state_27918__$1;
(statearr_27925_27951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (3))){
var inst_27916 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
if((state_val_27919 === (12))){
var state_27918__$1 = state_27918;
var statearr_27926_27952 = state_27918__$1;
(statearr_27926_27952[(2)] = null);

(statearr_27926_27952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (2))){
var inst_27895 = (state_27918[(7)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27895)){
var statearr_27927_27953 = state_27918__$1;
(statearr_27927_27953[(1)] = (4));

} else {
var statearr_27928_27954 = state_27918__$1;
(statearr_27928_27954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (11))){
var inst_27909 = cljs.core.async.close_BANG_.call(null,ch);
var state_27918__$1 = state_27918;
var statearr_27929_27955 = state_27918__$1;
(statearr_27929_27955[(2)] = inst_27909);

(statearr_27929_27955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (9))){
var state_27918__$1 = state_27918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27930_27956 = state_27918__$1;
(statearr_27930_27956[(1)] = (11));

} else {
var statearr_27931_27957 = state_27918__$1;
(statearr_27931_27957[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (5))){
var inst_27895 = (state_27918[(7)]);
var state_27918__$1 = state_27918;
var statearr_27932_27958 = state_27918__$1;
(statearr_27932_27958[(2)] = inst_27895);

(statearr_27932_27958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (10))){
var inst_27914 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27933_27959 = state_27918__$1;
(statearr_27933_27959[(2)] = inst_27914);

(statearr_27933_27959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (8))){
var inst_27895 = (state_27918[(7)]);
var inst_27905 = cljs.core.next.call(null,inst_27895);
var inst_27895__$1 = inst_27905;
var state_27918__$1 = (function (){var statearr_27934 = state_27918;
(statearr_27934[(7)] = inst_27895__$1);

return statearr_27934;
})();
var statearr_27935_27960 = state_27918__$1;
(statearr_27935_27960[(2)] = null);

(statearr_27935_27960[(1)] = (2));


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
});})(c__27098__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_27939 = [null,null,null,null,null,null,null,null];
(statearr_27939[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_27939[(1)] = (1));

return statearr_27939;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_27918){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e27940){if((e27940 instanceof Object)){
var ex__26990__auto__ = e27940;
var statearr_27941_27961 = state_27918;
(statearr_27941_27961[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27962 = state_27918;
state_27918 = G__27962;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__))
})();
var state__27100__auto__ = (function (){var statearr_27942 = f__27099__auto__.call(null);
(statearr_27942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_27942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__))
);

return c__27098__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25197__auto__ = (((_ == null))?null:_);
var m__25198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,_);
} else {
var m__25198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28184 = (function (mult,ch,cs,meta28185){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28185 = meta28185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28186,meta28185__$1){
var self__ = this;
var _28186__$1 = this;
return (new cljs.core.async.t_cljs$core$async28184(self__.mult,self__.ch,self__.cs,meta28185__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28186){
var self__ = this;
var _28186__$1 = this;
return self__.meta28185;
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28185","meta28185",-1854548780,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28184";

cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28184");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28184 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28184(mult__$1,ch__$1,cs__$1,meta28185){
return (new cljs.core.async.t_cljs$core$async28184(mult__$1,ch__$1,cs__$1,meta28185));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28184(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27098__auto___28405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___28405,cs,m,dchan,dctr,done){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___28405,cs,m,dchan,dctr,done){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28319_28406 = state_28317__$1;
(statearr_28319_28406[(2)] = inst_28313);

(statearr_28319_28406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (20))){
var inst_28218 = (state_28317[(7)]);
var inst_28228 = cljs.core.first.call(null,inst_28218);
var inst_28229 = cljs.core.nth.call(null,inst_28228,(0),null);
var inst_28230 = cljs.core.nth.call(null,inst_28228,(1),null);
var state_28317__$1 = (function (){var statearr_28320 = state_28317;
(statearr_28320[(8)] = inst_28229);

return statearr_28320;
})();
if(cljs.core.truth_(inst_28230)){
var statearr_28321_28407 = state_28317__$1;
(statearr_28321_28407[(1)] = (22));

} else {
var statearr_28322_28408 = state_28317__$1;
(statearr_28322_28408[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (27))){
var inst_28189 = (state_28317[(9)]);
var inst_28258 = (state_28317[(10)]);
var inst_28260 = (state_28317[(11)]);
var inst_28265 = (state_28317[(12)]);
var inst_28265__$1 = cljs.core._nth.call(null,inst_28258,inst_28260);
var inst_28266 = cljs.core.async.put_BANG_.call(null,inst_28265__$1,inst_28189,done);
var state_28317__$1 = (function (){var statearr_28323 = state_28317;
(statearr_28323[(12)] = inst_28265__$1);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28266)){
var statearr_28324_28409 = state_28317__$1;
(statearr_28324_28409[(1)] = (30));

} else {
var statearr_28325_28410 = state_28317__$1;
(statearr_28325_28410[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var state_28317__$1 = state_28317;
var statearr_28326_28411 = state_28317__$1;
(statearr_28326_28411[(2)] = null);

(statearr_28326_28411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (24))){
var inst_28218 = (state_28317[(7)]);
var inst_28235 = (state_28317[(2)]);
var inst_28236 = cljs.core.next.call(null,inst_28218);
var inst_28198 = inst_28236;
var inst_28199 = null;
var inst_28200 = (0);
var inst_28201 = (0);
var state_28317__$1 = (function (){var statearr_28327 = state_28317;
(statearr_28327[(13)] = inst_28199);

(statearr_28327[(14)] = inst_28200);

(statearr_28327[(15)] = inst_28235);

(statearr_28327[(16)] = inst_28201);

(statearr_28327[(17)] = inst_28198);

return statearr_28327;
})();
var statearr_28328_28412 = state_28317__$1;
(statearr_28328_28412[(2)] = null);

(statearr_28328_28412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (39))){
var state_28317__$1 = state_28317;
var statearr_28332_28413 = state_28317__$1;
(statearr_28332_28413[(2)] = null);

(statearr_28332_28413[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28189 = (state_28317[(9)]);
var inst_28189__$1 = (state_28317[(2)]);
var inst_28190 = (inst_28189__$1 == null);
var state_28317__$1 = (function (){var statearr_28333 = state_28317;
(statearr_28333[(9)] = inst_28189__$1);

return statearr_28333;
})();
if(cljs.core.truth_(inst_28190)){
var statearr_28334_28414 = state_28317__$1;
(statearr_28334_28414[(1)] = (5));

} else {
var statearr_28335_28415 = state_28317__$1;
(statearr_28335_28415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28199 = (state_28317[(13)]);
var inst_28200 = (state_28317[(14)]);
var inst_28201 = (state_28317[(16)]);
var inst_28198 = (state_28317[(17)]);
var inst_28214 = (state_28317[(2)]);
var inst_28215 = (inst_28201 + (1));
var tmp28329 = inst_28199;
var tmp28330 = inst_28200;
var tmp28331 = inst_28198;
var inst_28198__$1 = tmp28331;
var inst_28199__$1 = tmp28329;
var inst_28200__$1 = tmp28330;
var inst_28201__$1 = inst_28215;
var state_28317__$1 = (function (){var statearr_28336 = state_28317;
(statearr_28336[(18)] = inst_28214);

(statearr_28336[(13)] = inst_28199__$1);

(statearr_28336[(14)] = inst_28200__$1);

(statearr_28336[(16)] = inst_28201__$1);

(statearr_28336[(17)] = inst_28198__$1);

return statearr_28336;
})();
var statearr_28337_28416 = state_28317__$1;
(statearr_28337_28416[(2)] = null);

(statearr_28337_28416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (21))){
var inst_28239 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28341_28417 = state_28317__$1;
(statearr_28341_28417[(2)] = inst_28239);

(statearr_28341_28417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (31))){
var inst_28265 = (state_28317[(12)]);
var inst_28269 = done.call(null,null);
var inst_28270 = cljs.core.async.untap_STAR_.call(null,m,inst_28265);
var state_28317__$1 = (function (){var statearr_28342 = state_28317;
(statearr_28342[(19)] = inst_28269);

return statearr_28342;
})();
var statearr_28343_28418 = state_28317__$1;
(statearr_28343_28418[(2)] = inst_28270);

(statearr_28343_28418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (32))){
var inst_28258 = (state_28317[(10)]);
var inst_28259 = (state_28317[(20)]);
var inst_28257 = (state_28317[(21)]);
var inst_28260 = (state_28317[(11)]);
var inst_28272 = (state_28317[(2)]);
var inst_28273 = (inst_28260 + (1));
var tmp28338 = inst_28258;
var tmp28339 = inst_28259;
var tmp28340 = inst_28257;
var inst_28257__$1 = tmp28340;
var inst_28258__$1 = tmp28338;
var inst_28259__$1 = tmp28339;
var inst_28260__$1 = inst_28273;
var state_28317__$1 = (function (){var statearr_28344 = state_28317;
(statearr_28344[(10)] = inst_28258__$1);

(statearr_28344[(20)] = inst_28259__$1);

(statearr_28344[(21)] = inst_28257__$1);

(statearr_28344[(11)] = inst_28260__$1);

(statearr_28344[(22)] = inst_28272);

return statearr_28344;
})();
var statearr_28345_28419 = state_28317__$1;
(statearr_28345_28419[(2)] = null);

(statearr_28345_28419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (40))){
var inst_28285 = (state_28317[(23)]);
var inst_28289 = done.call(null,null);
var inst_28290 = cljs.core.async.untap_STAR_.call(null,m,inst_28285);
var state_28317__$1 = (function (){var statearr_28346 = state_28317;
(statearr_28346[(24)] = inst_28289);

return statearr_28346;
})();
var statearr_28347_28420 = state_28317__$1;
(statearr_28347_28420[(2)] = inst_28290);

(statearr_28347_28420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (33))){
var inst_28276 = (state_28317[(25)]);
var inst_28278 = cljs.core.chunked_seq_QMARK_.call(null,inst_28276);
var state_28317__$1 = state_28317;
if(inst_28278){
var statearr_28348_28421 = state_28317__$1;
(statearr_28348_28421[(1)] = (36));

} else {
var statearr_28349_28422 = state_28317__$1;
(statearr_28349_28422[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var inst_28208 = (state_28317[(26)]);
var inst_28211 = cljs.core.async.close_BANG_.call(null,inst_28208);
var state_28317__$1 = state_28317;
var statearr_28350_28423 = state_28317__$1;
(statearr_28350_28423[(2)] = inst_28211);

(statearr_28350_28423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (22))){
var inst_28229 = (state_28317[(8)]);
var inst_28232 = cljs.core.async.close_BANG_.call(null,inst_28229);
var state_28317__$1 = state_28317;
var statearr_28351_28424 = state_28317__$1;
(statearr_28351_28424[(2)] = inst_28232);

(statearr_28351_28424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (36))){
var inst_28276 = (state_28317[(25)]);
var inst_28280 = cljs.core.chunk_first.call(null,inst_28276);
var inst_28281 = cljs.core.chunk_rest.call(null,inst_28276);
var inst_28282 = cljs.core.count.call(null,inst_28280);
var inst_28257 = inst_28281;
var inst_28258 = inst_28280;
var inst_28259 = inst_28282;
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28352 = state_28317;
(statearr_28352[(10)] = inst_28258);

(statearr_28352[(20)] = inst_28259);

(statearr_28352[(21)] = inst_28257);

(statearr_28352[(11)] = inst_28260);

return statearr_28352;
})();
var statearr_28353_28425 = state_28317__$1;
(statearr_28353_28425[(2)] = null);

(statearr_28353_28425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (41))){
var inst_28276 = (state_28317[(25)]);
var inst_28292 = (state_28317[(2)]);
var inst_28293 = cljs.core.next.call(null,inst_28276);
var inst_28257 = inst_28293;
var inst_28258 = null;
var inst_28259 = (0);
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28354 = state_28317;
(statearr_28354[(10)] = inst_28258);

(statearr_28354[(20)] = inst_28259);

(statearr_28354[(21)] = inst_28257);

(statearr_28354[(11)] = inst_28260);

(statearr_28354[(27)] = inst_28292);

return statearr_28354;
})();
var statearr_28355_28426 = state_28317__$1;
(statearr_28355_28426[(2)] = null);

(statearr_28355_28426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (43))){
var state_28317__$1 = state_28317;
var statearr_28356_28427 = state_28317__$1;
(statearr_28356_28427[(2)] = null);

(statearr_28356_28427[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (29))){
var inst_28301 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28357_28428 = state_28317__$1;
(statearr_28357_28428[(2)] = inst_28301);

(statearr_28357_28428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (44))){
var inst_28310 = (state_28317[(2)]);
var state_28317__$1 = (function (){var statearr_28358 = state_28317;
(statearr_28358[(28)] = inst_28310);

return statearr_28358;
})();
var statearr_28359_28429 = state_28317__$1;
(statearr_28359_28429[(2)] = null);

(statearr_28359_28429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28249 = (state_28317[(29)]);
var inst_28248 = cljs.core.deref.call(null,cs);
var inst_28249__$1 = cljs.core.keys.call(null,inst_28248);
var inst_28250 = cljs.core.count.call(null,inst_28249__$1);
var inst_28251 = cljs.core.reset_BANG_.call(null,dctr,inst_28250);
var inst_28256 = cljs.core.seq.call(null,inst_28249__$1);
var inst_28257 = inst_28256;
var inst_28258 = null;
var inst_28259 = (0);
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28360 = state_28317;
(statearr_28360[(10)] = inst_28258);

(statearr_28360[(20)] = inst_28259);

(statearr_28360[(21)] = inst_28257);

(statearr_28360[(11)] = inst_28260);

(statearr_28360[(29)] = inst_28249__$1);

(statearr_28360[(30)] = inst_28251);

return statearr_28360;
})();
var statearr_28361_28430 = state_28317__$1;
(statearr_28361_28430[(2)] = null);

(statearr_28361_28430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (28))){
var inst_28276 = (state_28317[(25)]);
var inst_28257 = (state_28317[(21)]);
var inst_28276__$1 = cljs.core.seq.call(null,inst_28257);
var state_28317__$1 = (function (){var statearr_28362 = state_28317;
(statearr_28362[(25)] = inst_28276__$1);

return statearr_28362;
})();
if(inst_28276__$1){
var statearr_28363_28431 = state_28317__$1;
(statearr_28363_28431[(1)] = (33));

} else {
var statearr_28364_28432 = state_28317__$1;
(statearr_28364_28432[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (25))){
var inst_28259 = (state_28317[(20)]);
var inst_28260 = (state_28317[(11)]);
var inst_28262 = (inst_28260 < inst_28259);
var inst_28263 = inst_28262;
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28263)){
var statearr_28365_28433 = state_28317__$1;
(statearr_28365_28433[(1)] = (27));

} else {
var statearr_28366_28434 = state_28317__$1;
(statearr_28366_28434[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (34))){
var state_28317__$1 = state_28317;
var statearr_28367_28435 = state_28317__$1;
(statearr_28367_28435[(2)] = null);

(statearr_28367_28435[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (17))){
var state_28317__$1 = state_28317;
var statearr_28368_28436 = state_28317__$1;
(statearr_28368_28436[(2)] = null);

(statearr_28368_28436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (12))){
var inst_28244 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28369_28437 = state_28317__$1;
(statearr_28369_28437[(2)] = inst_28244);

(statearr_28369_28437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),ch);
} else {
if((state_val_28318 === (23))){
var state_28317__$1 = state_28317;
var statearr_28370_28438 = state_28317__$1;
(statearr_28370_28438[(2)] = null);

(statearr_28370_28438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (35))){
var inst_28299 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28371_28439 = state_28317__$1;
(statearr_28371_28439[(2)] = inst_28299);

(statearr_28371_28439[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (19))){
var inst_28218 = (state_28317[(7)]);
var inst_28222 = cljs.core.chunk_first.call(null,inst_28218);
var inst_28223 = cljs.core.chunk_rest.call(null,inst_28218);
var inst_28224 = cljs.core.count.call(null,inst_28222);
var inst_28198 = inst_28223;
var inst_28199 = inst_28222;
var inst_28200 = inst_28224;
var inst_28201 = (0);
var state_28317__$1 = (function (){var statearr_28372 = state_28317;
(statearr_28372[(13)] = inst_28199);

(statearr_28372[(14)] = inst_28200);

(statearr_28372[(16)] = inst_28201);

(statearr_28372[(17)] = inst_28198);

return statearr_28372;
})();
var statearr_28373_28440 = state_28317__$1;
(statearr_28373_28440[(2)] = null);

(statearr_28373_28440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (11))){
var inst_28218 = (state_28317[(7)]);
var inst_28198 = (state_28317[(17)]);
var inst_28218__$1 = cljs.core.seq.call(null,inst_28198);
var state_28317__$1 = (function (){var statearr_28374 = state_28317;
(statearr_28374[(7)] = inst_28218__$1);

return statearr_28374;
})();
if(inst_28218__$1){
var statearr_28375_28441 = state_28317__$1;
(statearr_28375_28441[(1)] = (16));

} else {
var statearr_28376_28442 = state_28317__$1;
(statearr_28376_28442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28246 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28377_28443 = state_28317__$1;
(statearr_28377_28443[(2)] = inst_28246);

(statearr_28377_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (5))){
var inst_28196 = cljs.core.deref.call(null,cs);
var inst_28197 = cljs.core.seq.call(null,inst_28196);
var inst_28198 = inst_28197;
var inst_28199 = null;
var inst_28200 = (0);
var inst_28201 = (0);
var state_28317__$1 = (function (){var statearr_28378 = state_28317;
(statearr_28378[(13)] = inst_28199);

(statearr_28378[(14)] = inst_28200);

(statearr_28378[(16)] = inst_28201);

(statearr_28378[(17)] = inst_28198);

return statearr_28378;
})();
var statearr_28379_28444 = state_28317__$1;
(statearr_28379_28444[(2)] = null);

(statearr_28379_28444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var state_28317__$1 = state_28317;
var statearr_28380_28445 = state_28317__$1;
(statearr_28380_28445[(2)] = null);

(statearr_28380_28445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (45))){
var inst_28307 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28381_28446 = state_28317__$1;
(statearr_28381_28446[(2)] = inst_28307);

(statearr_28381_28446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (26))){
var inst_28249 = (state_28317[(29)]);
var inst_28303 = (state_28317[(2)]);
var inst_28304 = cljs.core.seq.call(null,inst_28249);
var state_28317__$1 = (function (){var statearr_28382 = state_28317;
(statearr_28382[(31)] = inst_28303);

return statearr_28382;
})();
if(inst_28304){
var statearr_28383_28447 = state_28317__$1;
(statearr_28383_28447[(1)] = (42));

} else {
var statearr_28384_28448 = state_28317__$1;
(statearr_28384_28448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (16))){
var inst_28218 = (state_28317[(7)]);
var inst_28220 = cljs.core.chunked_seq_QMARK_.call(null,inst_28218);
var state_28317__$1 = state_28317;
if(inst_28220){
var statearr_28385_28449 = state_28317__$1;
(statearr_28385_28449[(1)] = (19));

} else {
var statearr_28386_28450 = state_28317__$1;
(statearr_28386_28450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (38))){
var inst_28296 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28387_28451 = state_28317__$1;
(statearr_28387_28451[(2)] = inst_28296);

(statearr_28387_28451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (30))){
var state_28317__$1 = state_28317;
var statearr_28388_28452 = state_28317__$1;
(statearr_28388_28452[(2)] = null);

(statearr_28388_28452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28199 = (state_28317[(13)]);
var inst_28201 = (state_28317[(16)]);
var inst_28207 = cljs.core._nth.call(null,inst_28199,inst_28201);
var inst_28208 = cljs.core.nth.call(null,inst_28207,(0),null);
var inst_28209 = cljs.core.nth.call(null,inst_28207,(1),null);
var state_28317__$1 = (function (){var statearr_28389 = state_28317;
(statearr_28389[(26)] = inst_28208);

return statearr_28389;
})();
if(cljs.core.truth_(inst_28209)){
var statearr_28390_28453 = state_28317__$1;
(statearr_28390_28453[(1)] = (13));

} else {
var statearr_28391_28454 = state_28317__$1;
(statearr_28391_28454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (18))){
var inst_28242 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28392_28455 = state_28317__$1;
(statearr_28392_28455[(2)] = inst_28242);

(statearr_28392_28455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (42))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(45),dchan);
} else {
if((state_val_28318 === (37))){
var inst_28276 = (state_28317[(25)]);
var inst_28285 = (state_28317[(23)]);
var inst_28189 = (state_28317[(9)]);
var inst_28285__$1 = cljs.core.first.call(null,inst_28276);
var inst_28286 = cljs.core.async.put_BANG_.call(null,inst_28285__$1,inst_28189,done);
var state_28317__$1 = (function (){var statearr_28393 = state_28317;
(statearr_28393[(23)] = inst_28285__$1);

return statearr_28393;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28394_28456 = state_28317__$1;
(statearr_28394_28456[(1)] = (39));

} else {
var statearr_28395_28457 = state_28317__$1;
(statearr_28395_28457[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28200 = (state_28317[(14)]);
var inst_28201 = (state_28317[(16)]);
var inst_28203 = (inst_28201 < inst_28200);
var inst_28204 = inst_28203;
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28204)){
var statearr_28396_28458 = state_28317__$1;
(statearr_28396_28458[(1)] = (10));

} else {
var statearr_28397_28459 = state_28317__$1;
(statearr_28397_28459[(1)] = (11));

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
});})(c__27098__auto___28405,cs,m,dchan,dctr,done))
;
return ((function (switch__26986__auto__,c__27098__auto___28405,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26987__auto__ = null;
var cljs$core$async$mult_$_state_machine__26987__auto____0 = (function (){
var statearr_28401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28401[(0)] = cljs$core$async$mult_$_state_machine__26987__auto__);

(statearr_28401[(1)] = (1));

return statearr_28401;
});
var cljs$core$async$mult_$_state_machine__26987__auto____1 = (function (state_28317){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e28402){if((e28402 instanceof Object)){
var ex__26990__auto__ = e28402;
var statearr_28403_28460 = state_28317;
(statearr_28403_28460[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28461 = state_28317;
state_28317 = G__28461;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26987__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26987__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26987__auto____0;
cljs$core$async$mult_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26987__auto____1;
return cljs$core$async$mult_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___28405,cs,m,dchan,dctr,done))
})();
var state__27100__auto__ = (function (){var statearr_28404 = f__27099__auto__.call(null);
(statearr_28404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___28405);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___28405,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28462 = [];
var len__25604__auto___28465 = arguments.length;
var i__25605__auto___28466 = (0);
while(true){
if((i__25605__auto___28466 < len__25604__auto___28465)){
args28462.push((arguments[i__25605__auto___28466]));

var G__28467 = (i__25605__auto___28466 + (1));
i__25605__auto___28466 = G__28467;
continue;
} else {
}
break;
}

var G__28464 = args28462.length;
switch (G__28464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28462.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,state_map);
} else {
var m__25198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,mode);
} else {
var m__25198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___28479 = arguments.length;
var i__25605__auto___28480 = (0);
while(true){
if((i__25605__auto___28480 < len__25604__auto___28479)){
args__25611__auto__.push((arguments[i__25605__auto___28480]));

var G__28481 = (i__25605__auto___28480 + (1));
i__25605__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((3) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25612__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28473){
var map__28474 = p__28473;
var map__28474__$1 = ((((!((map__28474 == null)))?((((map__28474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);
var opts = map__28474__$1;
var statearr_28476_28482 = state;
(statearr_28476_28482[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28474,map__28474__$1,opts){
return (function (val){
var statearr_28477_28483 = state;
(statearr_28477_28483[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28474,map__28474__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28478_28484 = state;
(statearr_28478_28484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28469){
var G__28470 = cljs.core.first.call(null,seq28469);
var seq28469__$1 = cljs.core.next.call(null,seq28469);
var G__28471 = cljs.core.first.call(null,seq28469__$1);
var seq28469__$2 = cljs.core.next.call(null,seq28469__$1);
var G__28472 = cljs.core.first.call(null,seq28469__$2);
var seq28469__$3 = cljs.core.next.call(null,seq28469__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28470,G__28471,G__28472,seq28469__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28648 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28649){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28649 = meta28649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28650,meta28649__$1){
var self__ = this;
var _28650__$1 = this;
return (new cljs.core.async.t_cljs$core$async28648(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28649__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28650){
var self__ = this;
var _28650__$1 = this;
return self__.meta28649;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28649","meta28649",32901649,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28648";

cljs.core.async.t_cljs$core$async28648.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28648");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28648 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28648(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28649){
return (new cljs.core.async.t_cljs$core$async28648(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28649));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28648(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27098__auto___28811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28748){
var state_val_28749 = (state_28748[(1)]);
if((state_val_28749 === (7))){
var inst_28666 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
var statearr_28750_28812 = state_28748__$1;
(statearr_28750_28812[(2)] = inst_28666);

(statearr_28750_28812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (20))){
var inst_28678 = (state_28748[(7)]);
var state_28748__$1 = state_28748;
var statearr_28751_28813 = state_28748__$1;
(statearr_28751_28813[(2)] = inst_28678);

(statearr_28751_28813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (27))){
var state_28748__$1 = state_28748;
var statearr_28752_28814 = state_28748__$1;
(statearr_28752_28814[(2)] = null);

(statearr_28752_28814[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (1))){
var inst_28654 = (state_28748[(8)]);
var inst_28654__$1 = calc_state.call(null);
var inst_28656 = (inst_28654__$1 == null);
var inst_28657 = cljs.core.not.call(null,inst_28656);
var state_28748__$1 = (function (){var statearr_28753 = state_28748;
(statearr_28753[(8)] = inst_28654__$1);

return statearr_28753;
})();
if(inst_28657){
var statearr_28754_28815 = state_28748__$1;
(statearr_28754_28815[(1)] = (2));

} else {
var statearr_28755_28816 = state_28748__$1;
(statearr_28755_28816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (24))){
var inst_28722 = (state_28748[(9)]);
var inst_28701 = (state_28748[(10)]);
var inst_28708 = (state_28748[(11)]);
var inst_28722__$1 = inst_28701.call(null,inst_28708);
var state_28748__$1 = (function (){var statearr_28756 = state_28748;
(statearr_28756[(9)] = inst_28722__$1);

return statearr_28756;
})();
if(cljs.core.truth_(inst_28722__$1)){
var statearr_28757_28817 = state_28748__$1;
(statearr_28757_28817[(1)] = (29));

} else {
var statearr_28758_28818 = state_28748__$1;
(statearr_28758_28818[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (4))){
var inst_28669 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28669)){
var statearr_28759_28819 = state_28748__$1;
(statearr_28759_28819[(1)] = (8));

} else {
var statearr_28760_28820 = state_28748__$1;
(statearr_28760_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (15))){
var inst_28695 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28695)){
var statearr_28761_28821 = state_28748__$1;
(statearr_28761_28821[(1)] = (19));

} else {
var statearr_28762_28822 = state_28748__$1;
(statearr_28762_28822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (21))){
var inst_28700 = (state_28748[(12)]);
var inst_28700__$1 = (state_28748[(2)]);
var inst_28701 = cljs.core.get.call(null,inst_28700__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28702 = cljs.core.get.call(null,inst_28700__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28703 = cljs.core.get.call(null,inst_28700__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28748__$1 = (function (){var statearr_28763 = state_28748;
(statearr_28763[(13)] = inst_28702);

(statearr_28763[(12)] = inst_28700__$1);

(statearr_28763[(10)] = inst_28701);

return statearr_28763;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28748__$1,(22),inst_28703);
} else {
if((state_val_28749 === (31))){
var inst_28730 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28730)){
var statearr_28764_28823 = state_28748__$1;
(statearr_28764_28823[(1)] = (32));

} else {
var statearr_28765_28824 = state_28748__$1;
(statearr_28765_28824[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (32))){
var inst_28707 = (state_28748[(14)]);
var state_28748__$1 = state_28748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28748__$1,(35),out,inst_28707);
} else {
if((state_val_28749 === (33))){
var inst_28700 = (state_28748[(12)]);
var inst_28678 = inst_28700;
var state_28748__$1 = (function (){var statearr_28766 = state_28748;
(statearr_28766[(7)] = inst_28678);

return statearr_28766;
})();
var statearr_28767_28825 = state_28748__$1;
(statearr_28767_28825[(2)] = null);

(statearr_28767_28825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (13))){
var inst_28678 = (state_28748[(7)]);
var inst_28685 = inst_28678.cljs$lang$protocol_mask$partition0$;
var inst_28686 = (inst_28685 & (64));
var inst_28687 = inst_28678.cljs$core$ISeq$;
var inst_28688 = (inst_28686) || (inst_28687);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28688)){
var statearr_28768_28826 = state_28748__$1;
(statearr_28768_28826[(1)] = (16));

} else {
var statearr_28769_28827 = state_28748__$1;
(statearr_28769_28827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (22))){
var inst_28707 = (state_28748[(14)]);
var inst_28708 = (state_28748[(11)]);
var inst_28706 = (state_28748[(2)]);
var inst_28707__$1 = cljs.core.nth.call(null,inst_28706,(0),null);
var inst_28708__$1 = cljs.core.nth.call(null,inst_28706,(1),null);
var inst_28709 = (inst_28707__$1 == null);
var inst_28710 = cljs.core._EQ_.call(null,inst_28708__$1,change);
var inst_28711 = (inst_28709) || (inst_28710);
var state_28748__$1 = (function (){var statearr_28770 = state_28748;
(statearr_28770[(14)] = inst_28707__$1);

(statearr_28770[(11)] = inst_28708__$1);

return statearr_28770;
})();
if(cljs.core.truth_(inst_28711)){
var statearr_28771_28828 = state_28748__$1;
(statearr_28771_28828[(1)] = (23));

} else {
var statearr_28772_28829 = state_28748__$1;
(statearr_28772_28829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (36))){
var inst_28700 = (state_28748[(12)]);
var inst_28678 = inst_28700;
var state_28748__$1 = (function (){var statearr_28773 = state_28748;
(statearr_28773[(7)] = inst_28678);

return statearr_28773;
})();
var statearr_28774_28830 = state_28748__$1;
(statearr_28774_28830[(2)] = null);

(statearr_28774_28830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (29))){
var inst_28722 = (state_28748[(9)]);
var state_28748__$1 = state_28748;
var statearr_28775_28831 = state_28748__$1;
(statearr_28775_28831[(2)] = inst_28722);

(statearr_28775_28831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (6))){
var state_28748__$1 = state_28748;
var statearr_28776_28832 = state_28748__$1;
(statearr_28776_28832[(2)] = false);

(statearr_28776_28832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (28))){
var inst_28718 = (state_28748[(2)]);
var inst_28719 = calc_state.call(null);
var inst_28678 = inst_28719;
var state_28748__$1 = (function (){var statearr_28777 = state_28748;
(statearr_28777[(15)] = inst_28718);

(statearr_28777[(7)] = inst_28678);

return statearr_28777;
})();
var statearr_28778_28833 = state_28748__$1;
(statearr_28778_28833[(2)] = null);

(statearr_28778_28833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (25))){
var inst_28744 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
var statearr_28779_28834 = state_28748__$1;
(statearr_28779_28834[(2)] = inst_28744);

(statearr_28779_28834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (34))){
var inst_28742 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
var statearr_28780_28835 = state_28748__$1;
(statearr_28780_28835[(2)] = inst_28742);

(statearr_28780_28835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (17))){
var state_28748__$1 = state_28748;
var statearr_28781_28836 = state_28748__$1;
(statearr_28781_28836[(2)] = false);

(statearr_28781_28836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (3))){
var state_28748__$1 = state_28748;
var statearr_28782_28837 = state_28748__$1;
(statearr_28782_28837[(2)] = false);

(statearr_28782_28837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (12))){
var inst_28746 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28748__$1,inst_28746);
} else {
if((state_val_28749 === (2))){
var inst_28654 = (state_28748[(8)]);
var inst_28659 = inst_28654.cljs$lang$protocol_mask$partition0$;
var inst_28660 = (inst_28659 & (64));
var inst_28661 = inst_28654.cljs$core$ISeq$;
var inst_28662 = (inst_28660) || (inst_28661);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28662)){
var statearr_28783_28838 = state_28748__$1;
(statearr_28783_28838[(1)] = (5));

} else {
var statearr_28784_28839 = state_28748__$1;
(statearr_28784_28839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (23))){
var inst_28707 = (state_28748[(14)]);
var inst_28713 = (inst_28707 == null);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28713)){
var statearr_28785_28840 = state_28748__$1;
(statearr_28785_28840[(1)] = (26));

} else {
var statearr_28786_28841 = state_28748__$1;
(statearr_28786_28841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (35))){
var inst_28733 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
if(cljs.core.truth_(inst_28733)){
var statearr_28787_28842 = state_28748__$1;
(statearr_28787_28842[(1)] = (36));

} else {
var statearr_28788_28843 = state_28748__$1;
(statearr_28788_28843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (19))){
var inst_28678 = (state_28748[(7)]);
var inst_28697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28678);
var state_28748__$1 = state_28748;
var statearr_28789_28844 = state_28748__$1;
(statearr_28789_28844[(2)] = inst_28697);

(statearr_28789_28844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (11))){
var inst_28678 = (state_28748[(7)]);
var inst_28682 = (inst_28678 == null);
var inst_28683 = cljs.core.not.call(null,inst_28682);
var state_28748__$1 = state_28748;
if(inst_28683){
var statearr_28790_28845 = state_28748__$1;
(statearr_28790_28845[(1)] = (13));

} else {
var statearr_28791_28846 = state_28748__$1;
(statearr_28791_28846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (9))){
var inst_28654 = (state_28748[(8)]);
var state_28748__$1 = state_28748;
var statearr_28792_28847 = state_28748__$1;
(statearr_28792_28847[(2)] = inst_28654);

(statearr_28792_28847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (5))){
var state_28748__$1 = state_28748;
var statearr_28793_28848 = state_28748__$1;
(statearr_28793_28848[(2)] = true);

(statearr_28793_28848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (14))){
var state_28748__$1 = state_28748;
var statearr_28794_28849 = state_28748__$1;
(statearr_28794_28849[(2)] = false);

(statearr_28794_28849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (26))){
var inst_28708 = (state_28748[(11)]);
var inst_28715 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28708);
var state_28748__$1 = state_28748;
var statearr_28795_28850 = state_28748__$1;
(statearr_28795_28850[(2)] = inst_28715);

(statearr_28795_28850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (16))){
var state_28748__$1 = state_28748;
var statearr_28796_28851 = state_28748__$1;
(statearr_28796_28851[(2)] = true);

(statearr_28796_28851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (38))){
var inst_28738 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
var statearr_28797_28852 = state_28748__$1;
(statearr_28797_28852[(2)] = inst_28738);

(statearr_28797_28852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (30))){
var inst_28702 = (state_28748[(13)]);
var inst_28701 = (state_28748[(10)]);
var inst_28708 = (state_28748[(11)]);
var inst_28725 = cljs.core.empty_QMARK_.call(null,inst_28701);
var inst_28726 = inst_28702.call(null,inst_28708);
var inst_28727 = cljs.core.not.call(null,inst_28726);
var inst_28728 = (inst_28725) && (inst_28727);
var state_28748__$1 = state_28748;
var statearr_28798_28853 = state_28748__$1;
(statearr_28798_28853[(2)] = inst_28728);

(statearr_28798_28853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (10))){
var inst_28654 = (state_28748[(8)]);
var inst_28674 = (state_28748[(2)]);
var inst_28675 = cljs.core.get.call(null,inst_28674,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28676 = cljs.core.get.call(null,inst_28674,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28677 = cljs.core.get.call(null,inst_28674,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28678 = inst_28654;
var state_28748__$1 = (function (){var statearr_28799 = state_28748;
(statearr_28799[(16)] = inst_28677);

(statearr_28799[(17)] = inst_28675);

(statearr_28799[(7)] = inst_28678);

(statearr_28799[(18)] = inst_28676);

return statearr_28799;
})();
var statearr_28800_28854 = state_28748__$1;
(statearr_28800_28854[(2)] = null);

(statearr_28800_28854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (18))){
var inst_28692 = (state_28748[(2)]);
var state_28748__$1 = state_28748;
var statearr_28801_28855 = state_28748__$1;
(statearr_28801_28855[(2)] = inst_28692);

(statearr_28801_28855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (37))){
var state_28748__$1 = state_28748;
var statearr_28802_28856 = state_28748__$1;
(statearr_28802_28856[(2)] = null);

(statearr_28802_28856[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28749 === (8))){
var inst_28654 = (state_28748[(8)]);
var inst_28671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28654);
var state_28748__$1 = state_28748;
var statearr_28803_28857 = state_28748__$1;
(statearr_28803_28857[(2)] = inst_28671);

(statearr_28803_28857[(1)] = (10));


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
});})(c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26986__auto__,c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26987__auto__ = null;
var cljs$core$async$mix_$_state_machine__26987__auto____0 = (function (){
var statearr_28807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28807[(0)] = cljs$core$async$mix_$_state_machine__26987__auto__);

(statearr_28807[(1)] = (1));

return statearr_28807;
});
var cljs$core$async$mix_$_state_machine__26987__auto____1 = (function (state_28748){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_28748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e28808){if((e28808 instanceof Object)){
var ex__26990__auto__ = e28808;
var statearr_28809_28858 = state_28748;
(statearr_28809_28858[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28859 = state_28748;
state_28748 = G__28859;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26987__auto__ = function(state_28748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26987__auto____1.call(this,state_28748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26987__auto____0;
cljs$core$async$mix_$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26987__auto____1;
return cljs$core$async$mix_$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27100__auto__ = (function (){var statearr_28810 = f__27099__auto__.call(null);
(statearr_28810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___28811);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___28811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28860 = [];
var len__25604__auto___28863 = arguments.length;
var i__25605__auto___28864 = (0);
while(true){
if((i__25605__auto___28864 < len__25604__auto___28863)){
args28860.push((arguments[i__25605__auto___28864]));

var G__28865 = (i__25605__auto___28864 + (1));
i__25605__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var G__28862 = args28860.length;
switch (G__28862) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28860.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28868 = [];
var len__25604__auto___28993 = arguments.length;
var i__25605__auto___28994 = (0);
while(true){
if((i__25605__auto___28994 < len__25604__auto___28993)){
args28868.push((arguments[i__25605__auto___28994]));

var G__28995 = (i__25605__auto___28994 + (1));
i__25605__auto___28994 = G__28995;
continue;
} else {
}
break;
}

var G__28870 = args28868.length;
switch (G__28870) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28868.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24534__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24534__auto__,mults){
return (function (p1__28867_SHARP_){
if(cljs.core.truth_(p1__28867_SHARP_.call(null,topic))){
return p1__28867_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28867_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24534__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28872 = meta28872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28873,meta28872__$1){
var self__ = this;
var _28873__$1 = this;
return (new cljs.core.async.t_cljs$core$async28871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28872__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28873){
var self__ = this;
var _28873__$1 = this;
return self__.meta28872;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28872","meta28872",-1205384874,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28871";

cljs.core.async.t_cljs$core$async28871.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28871");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28871 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28872){
return (new cljs.core.async.t_cljs$core$async28871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28872));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27098__auto___28997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___28997,mults,ensure_mult,p){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___28997,mults,ensure_mult,p){
return (function (state_28945){
var state_val_28946 = (state_28945[(1)]);
if((state_val_28946 === (7))){
var inst_28941 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28947_28998 = state_28945__$1;
(statearr_28947_28998[(2)] = inst_28941);

(statearr_28947_28998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (20))){
var state_28945__$1 = state_28945;
var statearr_28948_28999 = state_28945__$1;
(statearr_28948_28999[(2)] = null);

(statearr_28948_28999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (1))){
var state_28945__$1 = state_28945;
var statearr_28949_29000 = state_28945__$1;
(statearr_28949_29000[(2)] = null);

(statearr_28949_29000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (24))){
var inst_28924 = (state_28945[(7)]);
var inst_28933 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28924);
var state_28945__$1 = state_28945;
var statearr_28950_29001 = state_28945__$1;
(statearr_28950_29001[(2)] = inst_28933);

(statearr_28950_29001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (4))){
var inst_28876 = (state_28945[(8)]);
var inst_28876__$1 = (state_28945[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var state_28945__$1 = (function (){var statearr_28951 = state_28945;
(statearr_28951[(8)] = inst_28876__$1);

return statearr_28951;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28952_29002 = state_28945__$1;
(statearr_28952_29002[(1)] = (5));

} else {
var statearr_28953_29003 = state_28945__$1;
(statearr_28953_29003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (15))){
var inst_28918 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28954_29004 = state_28945__$1;
(statearr_28954_29004[(2)] = inst_28918);

(statearr_28954_29004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (21))){
var inst_28938 = (state_28945[(2)]);
var state_28945__$1 = (function (){var statearr_28955 = state_28945;
(statearr_28955[(9)] = inst_28938);

return statearr_28955;
})();
var statearr_28956_29005 = state_28945__$1;
(statearr_28956_29005[(2)] = null);

(statearr_28956_29005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (13))){
var inst_28900 = (state_28945[(10)]);
var inst_28902 = cljs.core.chunked_seq_QMARK_.call(null,inst_28900);
var state_28945__$1 = state_28945;
if(inst_28902){
var statearr_28957_29006 = state_28945__$1;
(statearr_28957_29006[(1)] = (16));

} else {
var statearr_28958_29007 = state_28945__$1;
(statearr_28958_29007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (22))){
var inst_28930 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28930)){
var statearr_28959_29008 = state_28945__$1;
(statearr_28959_29008[(1)] = (23));

} else {
var statearr_28960_29009 = state_28945__$1;
(statearr_28960_29009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (6))){
var inst_28924 = (state_28945[(7)]);
var inst_28876 = (state_28945[(8)]);
var inst_28926 = (state_28945[(11)]);
var inst_28924__$1 = topic_fn.call(null,inst_28876);
var inst_28925 = cljs.core.deref.call(null,mults);
var inst_28926__$1 = cljs.core.get.call(null,inst_28925,inst_28924__$1);
var state_28945__$1 = (function (){var statearr_28961 = state_28945;
(statearr_28961[(7)] = inst_28924__$1);

(statearr_28961[(11)] = inst_28926__$1);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28926__$1)){
var statearr_28962_29010 = state_28945__$1;
(statearr_28962_29010[(1)] = (19));

} else {
var statearr_28963_29011 = state_28945__$1;
(statearr_28963_29011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (25))){
var inst_28935 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28964_29012 = state_28945__$1;
(statearr_28964_29012[(2)] = inst_28935);

(statearr_28964_29012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (17))){
var inst_28900 = (state_28945[(10)]);
var inst_28909 = cljs.core.first.call(null,inst_28900);
var inst_28910 = cljs.core.async.muxch_STAR_.call(null,inst_28909);
var inst_28911 = cljs.core.async.close_BANG_.call(null,inst_28910);
var inst_28912 = cljs.core.next.call(null,inst_28900);
var inst_28886 = inst_28912;
var inst_28887 = null;
var inst_28888 = (0);
var inst_28889 = (0);
var state_28945__$1 = (function (){var statearr_28965 = state_28945;
(statearr_28965[(12)] = inst_28888);

(statearr_28965[(13)] = inst_28911);

(statearr_28965[(14)] = inst_28886);

(statearr_28965[(15)] = inst_28889);

(statearr_28965[(16)] = inst_28887);

return statearr_28965;
})();
var statearr_28966_29013 = state_28945__$1;
(statearr_28966_29013[(2)] = null);

(statearr_28966_29013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (3))){
var inst_28943 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28945__$1,inst_28943);
} else {
if((state_val_28946 === (12))){
var inst_28920 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28967_29014 = state_28945__$1;
(statearr_28967_29014[(2)] = inst_28920);

(statearr_28967_29014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (2))){
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28945__$1,(4),ch);
} else {
if((state_val_28946 === (23))){
var state_28945__$1 = state_28945;
var statearr_28968_29015 = state_28945__$1;
(statearr_28968_29015[(2)] = null);

(statearr_28968_29015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (19))){
var inst_28876 = (state_28945[(8)]);
var inst_28926 = (state_28945[(11)]);
var inst_28928 = cljs.core.async.muxch_STAR_.call(null,inst_28926);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28945__$1,(22),inst_28928,inst_28876);
} else {
if((state_val_28946 === (11))){
var inst_28900 = (state_28945[(10)]);
var inst_28886 = (state_28945[(14)]);
var inst_28900__$1 = cljs.core.seq.call(null,inst_28886);
var state_28945__$1 = (function (){var statearr_28969 = state_28945;
(statearr_28969[(10)] = inst_28900__$1);

return statearr_28969;
})();
if(inst_28900__$1){
var statearr_28970_29016 = state_28945__$1;
(statearr_28970_29016[(1)] = (13));

} else {
var statearr_28971_29017 = state_28945__$1;
(statearr_28971_29017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (9))){
var inst_28922 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28972_29018 = state_28945__$1;
(statearr_28972_29018[(2)] = inst_28922);

(statearr_28972_29018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (5))){
var inst_28883 = cljs.core.deref.call(null,mults);
var inst_28884 = cljs.core.vals.call(null,inst_28883);
var inst_28885 = cljs.core.seq.call(null,inst_28884);
var inst_28886 = inst_28885;
var inst_28887 = null;
var inst_28888 = (0);
var inst_28889 = (0);
var state_28945__$1 = (function (){var statearr_28973 = state_28945;
(statearr_28973[(12)] = inst_28888);

(statearr_28973[(14)] = inst_28886);

(statearr_28973[(15)] = inst_28889);

(statearr_28973[(16)] = inst_28887);

return statearr_28973;
})();
var statearr_28974_29019 = state_28945__$1;
(statearr_28974_29019[(2)] = null);

(statearr_28974_29019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (14))){
var state_28945__$1 = state_28945;
var statearr_28978_29020 = state_28945__$1;
(statearr_28978_29020[(2)] = null);

(statearr_28978_29020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (16))){
var inst_28900 = (state_28945[(10)]);
var inst_28904 = cljs.core.chunk_first.call(null,inst_28900);
var inst_28905 = cljs.core.chunk_rest.call(null,inst_28900);
var inst_28906 = cljs.core.count.call(null,inst_28904);
var inst_28886 = inst_28905;
var inst_28887 = inst_28904;
var inst_28888 = inst_28906;
var inst_28889 = (0);
var state_28945__$1 = (function (){var statearr_28979 = state_28945;
(statearr_28979[(12)] = inst_28888);

(statearr_28979[(14)] = inst_28886);

(statearr_28979[(15)] = inst_28889);

(statearr_28979[(16)] = inst_28887);

return statearr_28979;
})();
var statearr_28980_29021 = state_28945__$1;
(statearr_28980_29021[(2)] = null);

(statearr_28980_29021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (10))){
var inst_28888 = (state_28945[(12)]);
var inst_28886 = (state_28945[(14)]);
var inst_28889 = (state_28945[(15)]);
var inst_28887 = (state_28945[(16)]);
var inst_28894 = cljs.core._nth.call(null,inst_28887,inst_28889);
var inst_28895 = cljs.core.async.muxch_STAR_.call(null,inst_28894);
var inst_28896 = cljs.core.async.close_BANG_.call(null,inst_28895);
var inst_28897 = (inst_28889 + (1));
var tmp28975 = inst_28888;
var tmp28976 = inst_28886;
var tmp28977 = inst_28887;
var inst_28886__$1 = tmp28976;
var inst_28887__$1 = tmp28977;
var inst_28888__$1 = tmp28975;
var inst_28889__$1 = inst_28897;
var state_28945__$1 = (function (){var statearr_28981 = state_28945;
(statearr_28981[(12)] = inst_28888__$1);

(statearr_28981[(14)] = inst_28886__$1);

(statearr_28981[(17)] = inst_28896);

(statearr_28981[(15)] = inst_28889__$1);

(statearr_28981[(16)] = inst_28887__$1);

return statearr_28981;
})();
var statearr_28982_29022 = state_28945__$1;
(statearr_28982_29022[(2)] = null);

(statearr_28982_29022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (18))){
var inst_28915 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28983_29023 = state_28945__$1;
(statearr_28983_29023[(2)] = inst_28915);

(statearr_28983_29023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (8))){
var inst_28888 = (state_28945[(12)]);
var inst_28889 = (state_28945[(15)]);
var inst_28891 = (inst_28889 < inst_28888);
var inst_28892 = inst_28891;
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28892)){
var statearr_28984_29024 = state_28945__$1;
(statearr_28984_29024[(1)] = (10));

} else {
var statearr_28985_29025 = state_28945__$1;
(statearr_28985_29025[(1)] = (11));

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
});})(c__27098__auto___28997,mults,ensure_mult,p))
;
return ((function (switch__26986__auto__,c__27098__auto___28997,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_28989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28989[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_28989[(1)] = (1));

return statearr_28989;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_28945){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_28945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e28990){if((e28990 instanceof Object)){
var ex__26990__auto__ = e28990;
var statearr_28991_29026 = state_28945;
(statearr_28991_29026[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29027 = state_28945;
state_28945 = G__29027;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___28997,mults,ensure_mult,p))
})();
var state__27100__auto__ = (function (){var statearr_28992 = f__27099__auto__.call(null);
(statearr_28992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___28997);

return statearr_28992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___28997,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29028 = [];
var len__25604__auto___29031 = arguments.length;
var i__25605__auto___29032 = (0);
while(true){
if((i__25605__auto___29032 < len__25604__auto___29031)){
args29028.push((arguments[i__25605__auto___29032]));

var G__29033 = (i__25605__auto___29032 + (1));
i__25605__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var G__29030 = args29028.length;
switch (G__29030) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29028.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29035 = [];
var len__25604__auto___29038 = arguments.length;
var i__25605__auto___29039 = (0);
while(true){
if((i__25605__auto___29039 < len__25604__auto___29038)){
args29035.push((arguments[i__25605__auto___29039]));

var G__29040 = (i__25605__auto___29039 + (1));
i__25605__auto___29039 = G__29040;
continue;
} else {
}
break;
}

var G__29037 = args29035.length;
switch (G__29037) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29035.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29042 = [];
var len__25604__auto___29113 = arguments.length;
var i__25605__auto___29114 = (0);
while(true){
if((i__25605__auto___29114 < len__25604__auto___29113)){
args29042.push((arguments[i__25605__auto___29114]));

var G__29115 = (i__25605__auto___29114 + (1));
i__25605__auto___29114 = G__29115;
continue;
} else {
}
break;
}

var G__29044 = args29042.length;
switch (G__29044) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29042.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27098__auto___29117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29083){
var state_val_29084 = (state_29083[(1)]);
if((state_val_29084 === (7))){
var state_29083__$1 = state_29083;
var statearr_29085_29118 = state_29083__$1;
(statearr_29085_29118[(2)] = null);

(statearr_29085_29118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (1))){
var state_29083__$1 = state_29083;
var statearr_29086_29119 = state_29083__$1;
(statearr_29086_29119[(2)] = null);

(statearr_29086_29119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (4))){
var inst_29047 = (state_29083[(7)]);
var inst_29049 = (inst_29047 < cnt);
var state_29083__$1 = state_29083;
if(cljs.core.truth_(inst_29049)){
var statearr_29087_29120 = state_29083__$1;
(statearr_29087_29120[(1)] = (6));

} else {
var statearr_29088_29121 = state_29083__$1;
(statearr_29088_29121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (15))){
var inst_29079 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
var statearr_29089_29122 = state_29083__$1;
(statearr_29089_29122[(2)] = inst_29079);

(statearr_29089_29122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (13))){
var inst_29072 = cljs.core.async.close_BANG_.call(null,out);
var state_29083__$1 = state_29083;
var statearr_29090_29123 = state_29083__$1;
(statearr_29090_29123[(2)] = inst_29072);

(statearr_29090_29123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (6))){
var state_29083__$1 = state_29083;
var statearr_29091_29124 = state_29083__$1;
(statearr_29091_29124[(2)] = null);

(statearr_29091_29124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (3))){
var inst_29081 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29083__$1,inst_29081);
} else {
if((state_val_29084 === (12))){
var inst_29069 = (state_29083[(8)]);
var inst_29069__$1 = (state_29083[(2)]);
var inst_29070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29069__$1);
var state_29083__$1 = (function (){var statearr_29092 = state_29083;
(statearr_29092[(8)] = inst_29069__$1);

return statearr_29092;
})();
if(cljs.core.truth_(inst_29070)){
var statearr_29093_29125 = state_29083__$1;
(statearr_29093_29125[(1)] = (13));

} else {
var statearr_29094_29126 = state_29083__$1;
(statearr_29094_29126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (2))){
var inst_29046 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29047 = (0);
var state_29083__$1 = (function (){var statearr_29095 = state_29083;
(statearr_29095[(9)] = inst_29046);

(statearr_29095[(7)] = inst_29047);

return statearr_29095;
})();
var statearr_29096_29127 = state_29083__$1;
(statearr_29096_29127[(2)] = null);

(statearr_29096_29127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (11))){
var inst_29047 = (state_29083[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29083,(10),Object,null,(9));
var inst_29056 = chs__$1.call(null,inst_29047);
var inst_29057 = done.call(null,inst_29047);
var inst_29058 = cljs.core.async.take_BANG_.call(null,inst_29056,inst_29057);
var state_29083__$1 = state_29083;
var statearr_29097_29128 = state_29083__$1;
(statearr_29097_29128[(2)] = inst_29058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (9))){
var inst_29047 = (state_29083[(7)]);
var inst_29060 = (state_29083[(2)]);
var inst_29061 = (inst_29047 + (1));
var inst_29047__$1 = inst_29061;
var state_29083__$1 = (function (){var statearr_29098 = state_29083;
(statearr_29098[(10)] = inst_29060);

(statearr_29098[(7)] = inst_29047__$1);

return statearr_29098;
})();
var statearr_29099_29129 = state_29083__$1;
(statearr_29099_29129[(2)] = null);

(statearr_29099_29129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (5))){
var inst_29067 = (state_29083[(2)]);
var state_29083__$1 = (function (){var statearr_29100 = state_29083;
(statearr_29100[(11)] = inst_29067);

return statearr_29100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29083__$1,(12),dchan);
} else {
if((state_val_29084 === (14))){
var inst_29069 = (state_29083[(8)]);
var inst_29074 = cljs.core.apply.call(null,f,inst_29069);
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29083__$1,(16),out,inst_29074);
} else {
if((state_val_29084 === (16))){
var inst_29076 = (state_29083[(2)]);
var state_29083__$1 = (function (){var statearr_29101 = state_29083;
(statearr_29101[(12)] = inst_29076);

return statearr_29101;
})();
var statearr_29102_29130 = state_29083__$1;
(statearr_29102_29130[(2)] = null);

(statearr_29102_29130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (10))){
var inst_29051 = (state_29083[(2)]);
var inst_29052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29083__$1 = (function (){var statearr_29103 = state_29083;
(statearr_29103[(13)] = inst_29051);

return statearr_29103;
})();
var statearr_29104_29131 = state_29083__$1;
(statearr_29104_29131[(2)] = inst_29052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (8))){
var inst_29065 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
var statearr_29105_29132 = state_29083__$1;
(statearr_29105_29132[(2)] = inst_29065);

(statearr_29105_29132[(1)] = (5));


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
});})(c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26986__auto__,c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29109[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29083){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__26990__auto__ = e29110;
var statearr_29111_29133 = state_29083;
(statearr_29111_29133[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29134 = state_29083;
state_29083 = G__29134;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27100__auto__ = (function (){var statearr_29112 = f__27099__auto__.call(null);
(statearr_29112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29117);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29117,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29136 = [];
var len__25604__auto___29192 = arguments.length;
var i__25605__auto___29193 = (0);
while(true){
if((i__25605__auto___29193 < len__25604__auto___29192)){
args29136.push((arguments[i__25605__auto___29193]));

var G__29194 = (i__25605__auto___29193 + (1));
i__25605__auto___29193 = G__29194;
continue;
} else {
}
break;
}

var G__29138 = args29136.length;
switch (G__29138) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29136.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29196,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29196,out){
return (function (state_29168){
var state_val_29169 = (state_29168[(1)]);
if((state_val_29169 === (7))){
var inst_29147 = (state_29168[(7)]);
var inst_29148 = (state_29168[(8)]);
var inst_29147__$1 = (state_29168[(2)]);
var inst_29148__$1 = cljs.core.nth.call(null,inst_29147__$1,(0),null);
var inst_29149 = cljs.core.nth.call(null,inst_29147__$1,(1),null);
var inst_29150 = (inst_29148__$1 == null);
var state_29168__$1 = (function (){var statearr_29170 = state_29168;
(statearr_29170[(7)] = inst_29147__$1);

(statearr_29170[(8)] = inst_29148__$1);

(statearr_29170[(9)] = inst_29149);

return statearr_29170;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29171_29197 = state_29168__$1;
(statearr_29171_29197[(1)] = (8));

} else {
var statearr_29172_29198 = state_29168__$1;
(statearr_29172_29198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (1))){
var inst_29139 = cljs.core.vec.call(null,chs);
var inst_29140 = inst_29139;
var state_29168__$1 = (function (){var statearr_29173 = state_29168;
(statearr_29173[(10)] = inst_29140);

return statearr_29173;
})();
var statearr_29174_29199 = state_29168__$1;
(statearr_29174_29199[(2)] = null);

(statearr_29174_29199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (4))){
var inst_29140 = (state_29168[(10)]);
var state_29168__$1 = state_29168;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29168__$1,(7),inst_29140);
} else {
if((state_val_29169 === (6))){
var inst_29164 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29175_29200 = state_29168__$1;
(statearr_29175_29200[(2)] = inst_29164);

(statearr_29175_29200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (3))){
var inst_29166 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29168__$1,inst_29166);
} else {
if((state_val_29169 === (2))){
var inst_29140 = (state_29168[(10)]);
var inst_29142 = cljs.core.count.call(null,inst_29140);
var inst_29143 = (inst_29142 > (0));
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29143)){
var statearr_29177_29201 = state_29168__$1;
(statearr_29177_29201[(1)] = (4));

} else {
var statearr_29178_29202 = state_29168__$1;
(statearr_29178_29202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (11))){
var inst_29140 = (state_29168[(10)]);
var inst_29157 = (state_29168[(2)]);
var tmp29176 = inst_29140;
var inst_29140__$1 = tmp29176;
var state_29168__$1 = (function (){var statearr_29179 = state_29168;
(statearr_29179[(10)] = inst_29140__$1);

(statearr_29179[(11)] = inst_29157);

return statearr_29179;
})();
var statearr_29180_29203 = state_29168__$1;
(statearr_29180_29203[(2)] = null);

(statearr_29180_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (9))){
var inst_29148 = (state_29168[(8)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29168__$1,(11),out,inst_29148);
} else {
if((state_val_29169 === (5))){
var inst_29162 = cljs.core.async.close_BANG_.call(null,out);
var state_29168__$1 = state_29168;
var statearr_29181_29204 = state_29168__$1;
(statearr_29181_29204[(2)] = inst_29162);

(statearr_29181_29204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (10))){
var inst_29160 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29182_29205 = state_29168__$1;
(statearr_29182_29205[(2)] = inst_29160);

(statearr_29182_29205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (8))){
var inst_29140 = (state_29168[(10)]);
var inst_29147 = (state_29168[(7)]);
var inst_29148 = (state_29168[(8)]);
var inst_29149 = (state_29168[(9)]);
var inst_29152 = (function (){var cs = inst_29140;
var vec__29145 = inst_29147;
var v = inst_29148;
var c = inst_29149;
return ((function (cs,vec__29145,v,c,inst_29140,inst_29147,inst_29148,inst_29149,state_val_29169,c__27098__auto___29196,out){
return (function (p1__29135_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29135_SHARP_);
});
;})(cs,vec__29145,v,c,inst_29140,inst_29147,inst_29148,inst_29149,state_val_29169,c__27098__auto___29196,out))
})();
var inst_29153 = cljs.core.filterv.call(null,inst_29152,inst_29140);
var inst_29140__$1 = inst_29153;
var state_29168__$1 = (function (){var statearr_29183 = state_29168;
(statearr_29183[(10)] = inst_29140__$1);

return statearr_29183;
})();
var statearr_29184_29206 = state_29168__$1;
(statearr_29184_29206[(2)] = null);

(statearr_29184_29206[(1)] = (2));


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
});})(c__27098__auto___29196,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29196,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29168){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__26990__auto__ = e29189;
var statearr_29190_29207 = state_29168;
(statearr_29190_29207[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29168;
state_29168 = G__29208;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29196,out))
})();
var state__27100__auto__ = (function (){var statearr_29191 = f__27099__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29196);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29196,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29209 = [];
var len__25604__auto___29258 = arguments.length;
var i__25605__auto___29259 = (0);
while(true){
if((i__25605__auto___29259 < len__25604__auto___29258)){
args29209.push((arguments[i__25605__auto___29259]));

var G__29260 = (i__25605__auto___29259 + (1));
i__25605__auto___29259 = G__29260;
continue;
} else {
}
break;
}

var G__29211 = args29209.length;
switch (G__29211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29209.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29262,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29262,out){
return (function (state_29235){
var state_val_29236 = (state_29235[(1)]);
if((state_val_29236 === (7))){
var inst_29217 = (state_29235[(7)]);
var inst_29217__$1 = (state_29235[(2)]);
var inst_29218 = (inst_29217__$1 == null);
var inst_29219 = cljs.core.not.call(null,inst_29218);
var state_29235__$1 = (function (){var statearr_29237 = state_29235;
(statearr_29237[(7)] = inst_29217__$1);

return statearr_29237;
})();
if(inst_29219){
var statearr_29238_29263 = state_29235__$1;
(statearr_29238_29263[(1)] = (8));

} else {
var statearr_29239_29264 = state_29235__$1;
(statearr_29239_29264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (1))){
var inst_29212 = (0);
var state_29235__$1 = (function (){var statearr_29240 = state_29235;
(statearr_29240[(8)] = inst_29212);

return statearr_29240;
})();
var statearr_29241_29265 = state_29235__$1;
(statearr_29241_29265[(2)] = null);

(statearr_29241_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (4))){
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29235__$1,(7),ch);
} else {
if((state_val_29236 === (6))){
var inst_29230 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29242_29266 = state_29235__$1;
(statearr_29242_29266[(2)] = inst_29230);

(statearr_29242_29266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (3))){
var inst_29232 = (state_29235[(2)]);
var inst_29233 = cljs.core.async.close_BANG_.call(null,out);
var state_29235__$1 = (function (){var statearr_29243 = state_29235;
(statearr_29243[(9)] = inst_29232);

return statearr_29243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29235__$1,inst_29233);
} else {
if((state_val_29236 === (2))){
var inst_29212 = (state_29235[(8)]);
var inst_29214 = (inst_29212 < n);
var state_29235__$1 = state_29235;
if(cljs.core.truth_(inst_29214)){
var statearr_29244_29267 = state_29235__$1;
(statearr_29244_29267[(1)] = (4));

} else {
var statearr_29245_29268 = state_29235__$1;
(statearr_29245_29268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (11))){
var inst_29212 = (state_29235[(8)]);
var inst_29222 = (state_29235[(2)]);
var inst_29223 = (inst_29212 + (1));
var inst_29212__$1 = inst_29223;
var state_29235__$1 = (function (){var statearr_29246 = state_29235;
(statearr_29246[(10)] = inst_29222);

(statearr_29246[(8)] = inst_29212__$1);

return statearr_29246;
})();
var statearr_29247_29269 = state_29235__$1;
(statearr_29247_29269[(2)] = null);

(statearr_29247_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (9))){
var state_29235__$1 = state_29235;
var statearr_29248_29270 = state_29235__$1;
(statearr_29248_29270[(2)] = null);

(statearr_29248_29270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (5))){
var state_29235__$1 = state_29235;
var statearr_29249_29271 = state_29235__$1;
(statearr_29249_29271[(2)] = null);

(statearr_29249_29271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (10))){
var inst_29227 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29250_29272 = state_29235__$1;
(statearr_29250_29272[(2)] = inst_29227);

(statearr_29250_29272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (8))){
var inst_29217 = (state_29235[(7)]);
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29235__$1,(11),out,inst_29217);
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
});})(c__27098__auto___29262,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29262,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29254[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29254[(1)] = (1));

return statearr_29254;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29235){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29255){if((e29255 instanceof Object)){
var ex__26990__auto__ = e29255;
var statearr_29256_29273 = state_29235;
(statearr_29256_29273[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29235;
state_29235 = G__29274;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29262,out))
})();
var state__27100__auto__ = (function (){var statearr_29257 = f__27099__auto__.call(null);
(statearr_29257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29262);

return statearr_29257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29262,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29282 = (function (map_LT_,f,ch,meta29283){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29283 = meta29283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29284,meta29283__$1){
var self__ = this;
var _29284__$1 = this;
return (new cljs.core.async.t_cljs$core$async29282(self__.map_LT_,self__.f,self__.ch,meta29283__$1));
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29284){
var self__ = this;
var _29284__$1 = this;
return self__.meta29283;
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29285 = (function (map_LT_,f,ch,meta29283,_,fn1,meta29286){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29283 = meta29283;
this._ = _;
this.fn1 = fn1;
this.meta29286 = meta29286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29287,meta29286__$1){
var self__ = this;
var _29287__$1 = this;
return (new cljs.core.async.t_cljs$core$async29285(self__.map_LT_,self__.f,self__.ch,self__.meta29283,self__._,self__.fn1,meta29286__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29287){
var self__ = this;
var _29287__$1 = this;
return self__.meta29286;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29275_SHARP_){
return f1.call(null,(((p1__29275_SHARP_ == null))?null:self__.f.call(null,p1__29275_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29283","meta29283",-1246370948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29282","cljs.core.async/t_cljs$core$async29282",1876749134,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29286","meta29286",178505753,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29285";

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29285");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29285 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29283__$1,___$2,fn1__$1,meta29286){
return (new cljs.core.async.t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29283__$1,___$2,fn1__$1,meta29286));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29285(self__.map_LT_,self__.f,self__.ch,self__.meta29283,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24522__auto__ = ret;
if(cljs.core.truth_(and__24522__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24522__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29283","meta29283",-1246370948,null)], null);
});

cljs.core.async.t_cljs$core$async29282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29282";

cljs.core.async.t_cljs$core$async29282.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29282");
});

cljs.core.async.__GT_t_cljs$core$async29282 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29282(map_LT___$1,f__$1,ch__$1,meta29283){
return (new cljs.core.async.t_cljs$core$async29282(map_LT___$1,f__$1,ch__$1,meta29283));
});

}

return (new cljs.core.async.t_cljs$core$async29282(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29291 = (function (map_GT_,f,ch,meta29292){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29292 = meta29292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29293,meta29292__$1){
var self__ = this;
var _29293__$1 = this;
return (new cljs.core.async.t_cljs$core$async29291(self__.map_GT_,self__.f,self__.ch,meta29292__$1));
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29293){
var self__ = this;
var _29293__$1 = this;
return self__.meta29292;
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29292","meta29292",1154505499,null)], null);
});

cljs.core.async.t_cljs$core$async29291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29291";

cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29291");
});

cljs.core.async.__GT_t_cljs$core$async29291 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29291(map_GT___$1,f__$1,ch__$1,meta29292){
return (new cljs.core.async.t_cljs$core$async29291(map_GT___$1,f__$1,ch__$1,meta29292));
});

}

return (new cljs.core.async.t_cljs$core$async29291(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29297 = (function (filter_GT_,p,ch,meta29298){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29298 = meta29298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29299,meta29298__$1){
var self__ = this;
var _29299__$1 = this;
return (new cljs.core.async.t_cljs$core$async29297(self__.filter_GT_,self__.p,self__.ch,meta29298__$1));
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29299){
var self__ = this;
var _29299__$1 = this;
return self__.meta29298;
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29298","meta29298",1354074699,null)], null);
});

cljs.core.async.t_cljs$core$async29297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29297";

cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29297");
});

cljs.core.async.__GT_t_cljs$core$async29297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29297(filter_GT___$1,p__$1,ch__$1,meta29298){
return (new cljs.core.async.t_cljs$core$async29297(filter_GT___$1,p__$1,ch__$1,meta29298));
});

}

return (new cljs.core.async.t_cljs$core$async29297(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29300 = [];
var len__25604__auto___29344 = arguments.length;
var i__25605__auto___29345 = (0);
while(true){
if((i__25605__auto___29345 < len__25604__auto___29344)){
args29300.push((arguments[i__25605__auto___29345]));

var G__29346 = (i__25605__auto___29345 + (1));
i__25605__auto___29345 = G__29346;
continue;
} else {
}
break;
}

var G__29302 = args29300.length;
switch (G__29302) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29300.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29348,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29348,out){
return (function (state_29323){
var state_val_29324 = (state_29323[(1)]);
if((state_val_29324 === (7))){
var inst_29319 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29325_29349 = state_29323__$1;
(statearr_29325_29349[(2)] = inst_29319);

(statearr_29325_29349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (1))){
var state_29323__$1 = state_29323;
var statearr_29326_29350 = state_29323__$1;
(statearr_29326_29350[(2)] = null);

(statearr_29326_29350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (4))){
var inst_29305 = (state_29323[(7)]);
var inst_29305__$1 = (state_29323[(2)]);
var inst_29306 = (inst_29305__$1 == null);
var state_29323__$1 = (function (){var statearr_29327 = state_29323;
(statearr_29327[(7)] = inst_29305__$1);

return statearr_29327;
})();
if(cljs.core.truth_(inst_29306)){
var statearr_29328_29351 = state_29323__$1;
(statearr_29328_29351[(1)] = (5));

} else {
var statearr_29329_29352 = state_29323__$1;
(statearr_29329_29352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (6))){
var inst_29305 = (state_29323[(7)]);
var inst_29310 = p.call(null,inst_29305);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29310)){
var statearr_29330_29353 = state_29323__$1;
(statearr_29330_29353[(1)] = (8));

} else {
var statearr_29331_29354 = state_29323__$1;
(statearr_29331_29354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (3))){
var inst_29321 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29323__$1,inst_29321);
} else {
if((state_val_29324 === (2))){
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29323__$1,(4),ch);
} else {
if((state_val_29324 === (11))){
var inst_29313 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29332_29355 = state_29323__$1;
(statearr_29332_29355[(2)] = inst_29313);

(statearr_29332_29355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (9))){
var state_29323__$1 = state_29323;
var statearr_29333_29356 = state_29323__$1;
(statearr_29333_29356[(2)] = null);

(statearr_29333_29356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (5))){
var inst_29308 = cljs.core.async.close_BANG_.call(null,out);
var state_29323__$1 = state_29323;
var statearr_29334_29357 = state_29323__$1;
(statearr_29334_29357[(2)] = inst_29308);

(statearr_29334_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (10))){
var inst_29316 = (state_29323[(2)]);
var state_29323__$1 = (function (){var statearr_29335 = state_29323;
(statearr_29335[(8)] = inst_29316);

return statearr_29335;
})();
var statearr_29336_29358 = state_29323__$1;
(statearr_29336_29358[(2)] = null);

(statearr_29336_29358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (8))){
var inst_29305 = (state_29323[(7)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29323__$1,(11),out,inst_29305);
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
});})(c__27098__auto___29348,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29348,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29340 = [null,null,null,null,null,null,null,null,null];
(statearr_29340[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29340[(1)] = (1));

return statearr_29340;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29323){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29341){if((e29341 instanceof Object)){
var ex__26990__auto__ = e29341;
var statearr_29342_29359 = state_29323;
(statearr_29342_29359[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29360 = state_29323;
state_29323 = G__29360;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29348,out))
})();
var state__27100__auto__ = (function (){var statearr_29343 = f__27099__auto__.call(null);
(statearr_29343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29348);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29348,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29361 = [];
var len__25604__auto___29364 = arguments.length;
var i__25605__auto___29365 = (0);
while(true){
if((i__25605__auto___29365 < len__25604__auto___29364)){
args29361.push((arguments[i__25605__auto___29365]));

var G__29366 = (i__25605__auto___29365 + (1));
i__25605__auto___29365 = G__29366;
continue;
} else {
}
break;
}

var G__29363 = args29361.length;
switch (G__29363) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29361.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27098__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto__){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto__){
return (function (state_29533){
var state_val_29534 = (state_29533[(1)]);
if((state_val_29534 === (7))){
var inst_29529 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29535_29576 = state_29533__$1;
(statearr_29535_29576[(2)] = inst_29529);

(statearr_29535_29576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (20))){
var inst_29499 = (state_29533[(7)]);
var inst_29510 = (state_29533[(2)]);
var inst_29511 = cljs.core.next.call(null,inst_29499);
var inst_29485 = inst_29511;
var inst_29486 = null;
var inst_29487 = (0);
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29536 = state_29533;
(statearr_29536[(8)] = inst_29486);

(statearr_29536[(9)] = inst_29487);

(statearr_29536[(10)] = inst_29488);

(statearr_29536[(11)] = inst_29485);

(statearr_29536[(12)] = inst_29510);

return statearr_29536;
})();
var statearr_29537_29577 = state_29533__$1;
(statearr_29537_29577[(2)] = null);

(statearr_29537_29577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (1))){
var state_29533__$1 = state_29533;
var statearr_29538_29578 = state_29533__$1;
(statearr_29538_29578[(2)] = null);

(statearr_29538_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (4))){
var inst_29474 = (state_29533[(13)]);
var inst_29474__$1 = (state_29533[(2)]);
var inst_29475 = (inst_29474__$1 == null);
var state_29533__$1 = (function (){var statearr_29539 = state_29533;
(statearr_29539[(13)] = inst_29474__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29540_29579 = state_29533__$1;
(statearr_29540_29579[(1)] = (5));

} else {
var statearr_29541_29580 = state_29533__$1;
(statearr_29541_29580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (15))){
var state_29533__$1 = state_29533;
var statearr_29545_29581 = state_29533__$1;
(statearr_29545_29581[(2)] = null);

(statearr_29545_29581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (21))){
var state_29533__$1 = state_29533;
var statearr_29546_29582 = state_29533__$1;
(statearr_29546_29582[(2)] = null);

(statearr_29546_29582[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (13))){
var inst_29486 = (state_29533[(8)]);
var inst_29487 = (state_29533[(9)]);
var inst_29488 = (state_29533[(10)]);
var inst_29485 = (state_29533[(11)]);
var inst_29495 = (state_29533[(2)]);
var inst_29496 = (inst_29488 + (1));
var tmp29542 = inst_29486;
var tmp29543 = inst_29487;
var tmp29544 = inst_29485;
var inst_29485__$1 = tmp29544;
var inst_29486__$1 = tmp29542;
var inst_29487__$1 = tmp29543;
var inst_29488__$1 = inst_29496;
var state_29533__$1 = (function (){var statearr_29547 = state_29533;
(statearr_29547[(8)] = inst_29486__$1);

(statearr_29547[(9)] = inst_29487__$1);

(statearr_29547[(10)] = inst_29488__$1);

(statearr_29547[(11)] = inst_29485__$1);

(statearr_29547[(14)] = inst_29495);

return statearr_29547;
})();
var statearr_29548_29583 = state_29533__$1;
(statearr_29548_29583[(2)] = null);

(statearr_29548_29583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (22))){
var state_29533__$1 = state_29533;
var statearr_29549_29584 = state_29533__$1;
(statearr_29549_29584[(2)] = null);

(statearr_29549_29584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (6))){
var inst_29474 = (state_29533[(13)]);
var inst_29483 = f.call(null,inst_29474);
var inst_29484 = cljs.core.seq.call(null,inst_29483);
var inst_29485 = inst_29484;
var inst_29486 = null;
var inst_29487 = (0);
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29550 = state_29533;
(statearr_29550[(8)] = inst_29486);

(statearr_29550[(9)] = inst_29487);

(statearr_29550[(10)] = inst_29488);

(statearr_29550[(11)] = inst_29485);

return statearr_29550;
})();
var statearr_29551_29585 = state_29533__$1;
(statearr_29551_29585[(2)] = null);

(statearr_29551_29585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (17))){
var inst_29499 = (state_29533[(7)]);
var inst_29503 = cljs.core.chunk_first.call(null,inst_29499);
var inst_29504 = cljs.core.chunk_rest.call(null,inst_29499);
var inst_29505 = cljs.core.count.call(null,inst_29503);
var inst_29485 = inst_29504;
var inst_29486 = inst_29503;
var inst_29487 = inst_29505;
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29552 = state_29533;
(statearr_29552[(8)] = inst_29486);

(statearr_29552[(9)] = inst_29487);

(statearr_29552[(10)] = inst_29488);

(statearr_29552[(11)] = inst_29485);

return statearr_29552;
})();
var statearr_29553_29586 = state_29533__$1;
(statearr_29553_29586[(2)] = null);

(statearr_29553_29586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (3))){
var inst_29531 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else {
if((state_val_29534 === (12))){
var inst_29519 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29554_29587 = state_29533__$1;
(statearr_29554_29587[(2)] = inst_29519);

(statearr_29554_29587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (2))){
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(4),in$);
} else {
if((state_val_29534 === (23))){
var inst_29527 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29555_29588 = state_29533__$1;
(statearr_29555_29588[(2)] = inst_29527);

(statearr_29555_29588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (19))){
var inst_29514 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29556_29589 = state_29533__$1;
(statearr_29556_29589[(2)] = inst_29514);

(statearr_29556_29589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (11))){
var inst_29485 = (state_29533[(11)]);
var inst_29499 = (state_29533[(7)]);
var inst_29499__$1 = cljs.core.seq.call(null,inst_29485);
var state_29533__$1 = (function (){var statearr_29557 = state_29533;
(statearr_29557[(7)] = inst_29499__$1);

return statearr_29557;
})();
if(inst_29499__$1){
var statearr_29558_29590 = state_29533__$1;
(statearr_29558_29590[(1)] = (14));

} else {
var statearr_29559_29591 = state_29533__$1;
(statearr_29559_29591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (9))){
var inst_29521 = (state_29533[(2)]);
var inst_29522 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29533__$1 = (function (){var statearr_29560 = state_29533;
(statearr_29560[(15)] = inst_29521);

return statearr_29560;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29561_29592 = state_29533__$1;
(statearr_29561_29592[(1)] = (21));

} else {
var statearr_29562_29593 = state_29533__$1;
(statearr_29562_29593[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (5))){
var inst_29477 = cljs.core.async.close_BANG_.call(null,out);
var state_29533__$1 = state_29533;
var statearr_29563_29594 = state_29533__$1;
(statearr_29563_29594[(2)] = inst_29477);

(statearr_29563_29594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (14))){
var inst_29499 = (state_29533[(7)]);
var inst_29501 = cljs.core.chunked_seq_QMARK_.call(null,inst_29499);
var state_29533__$1 = state_29533;
if(inst_29501){
var statearr_29564_29595 = state_29533__$1;
(statearr_29564_29595[(1)] = (17));

} else {
var statearr_29565_29596 = state_29533__$1;
(statearr_29565_29596[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (16))){
var inst_29517 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29566_29597 = state_29533__$1;
(statearr_29566_29597[(2)] = inst_29517);

(statearr_29566_29597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (10))){
var inst_29486 = (state_29533[(8)]);
var inst_29488 = (state_29533[(10)]);
var inst_29493 = cljs.core._nth.call(null,inst_29486,inst_29488);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(13),out,inst_29493);
} else {
if((state_val_29534 === (18))){
var inst_29499 = (state_29533[(7)]);
var inst_29508 = cljs.core.first.call(null,inst_29499);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(20),out,inst_29508);
} else {
if((state_val_29534 === (8))){
var inst_29487 = (state_29533[(9)]);
var inst_29488 = (state_29533[(10)]);
var inst_29490 = (inst_29488 < inst_29487);
var inst_29491 = inst_29490;
var state_29533__$1 = state_29533;
if(cljs.core.truth_(inst_29491)){
var statearr_29567_29598 = state_29533__$1;
(statearr_29567_29598[(1)] = (10));

} else {
var statearr_29568_29599 = state_29533__$1;
(statearr_29568_29599[(1)] = (11));

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
});})(c__27098__auto__))
;
return ((function (switch__26986__auto__,c__27098__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____0 = (function (){
var statearr_29572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__);

(statearr_29572[(1)] = (1));

return statearr_29572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____1 = (function (state_29533){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29573){if((e29573 instanceof Object)){
var ex__26990__auto__ = e29573;
var statearr_29574_29600 = state_29533;
(statearr_29574_29600[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29601 = state_29533;
state_29533 = G__29601;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26987__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto__))
})();
var state__27100__auto__ = (function (){var statearr_29575 = f__27099__auto__.call(null);
(statearr_29575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto__);

return statearr_29575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto__))
);

return c__27098__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29602 = [];
var len__25604__auto___29605 = arguments.length;
var i__25605__auto___29606 = (0);
while(true){
if((i__25605__auto___29606 < len__25604__auto___29605)){
args29602.push((arguments[i__25605__auto___29606]));

var G__29607 = (i__25605__auto___29606 + (1));
i__25605__auto___29606 = G__29607;
continue;
} else {
}
break;
}

var G__29604 = args29602.length;
switch (G__29604) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29602.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29609 = [];
var len__25604__auto___29612 = arguments.length;
var i__25605__auto___29613 = (0);
while(true){
if((i__25605__auto___29613 < len__25604__auto___29612)){
args29609.push((arguments[i__25605__auto___29613]));

var G__29614 = (i__25605__auto___29613 + (1));
i__25605__auto___29613 = G__29614;
continue;
} else {
}
break;
}

var G__29611 = args29609.length;
switch (G__29611) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29609.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29616 = [];
var len__25604__auto___29667 = arguments.length;
var i__25605__auto___29668 = (0);
while(true){
if((i__25605__auto___29668 < len__25604__auto___29667)){
args29616.push((arguments[i__25605__auto___29668]));

var G__29669 = (i__25605__auto___29668 + (1));
i__25605__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var G__29618 = args29616.length;
switch (G__29618) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29616.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29671,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29671,out){
return (function (state_29642){
var state_val_29643 = (state_29642[(1)]);
if((state_val_29643 === (7))){
var inst_29637 = (state_29642[(2)]);
var state_29642__$1 = state_29642;
var statearr_29644_29672 = state_29642__$1;
(statearr_29644_29672[(2)] = inst_29637);

(statearr_29644_29672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (1))){
var inst_29619 = null;
var state_29642__$1 = (function (){var statearr_29645 = state_29642;
(statearr_29645[(7)] = inst_29619);

return statearr_29645;
})();
var statearr_29646_29673 = state_29642__$1;
(statearr_29646_29673[(2)] = null);

(statearr_29646_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (4))){
var inst_29622 = (state_29642[(8)]);
var inst_29622__$1 = (state_29642[(2)]);
var inst_29623 = (inst_29622__$1 == null);
var inst_29624 = cljs.core.not.call(null,inst_29623);
var state_29642__$1 = (function (){var statearr_29647 = state_29642;
(statearr_29647[(8)] = inst_29622__$1);

return statearr_29647;
})();
if(inst_29624){
var statearr_29648_29674 = state_29642__$1;
(statearr_29648_29674[(1)] = (5));

} else {
var statearr_29649_29675 = state_29642__$1;
(statearr_29649_29675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (6))){
var state_29642__$1 = state_29642;
var statearr_29650_29676 = state_29642__$1;
(statearr_29650_29676[(2)] = null);

(statearr_29650_29676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (3))){
var inst_29639 = (state_29642[(2)]);
var inst_29640 = cljs.core.async.close_BANG_.call(null,out);
var state_29642__$1 = (function (){var statearr_29651 = state_29642;
(statearr_29651[(9)] = inst_29639);

return statearr_29651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29642__$1,inst_29640);
} else {
if((state_val_29643 === (2))){
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29642__$1,(4),ch);
} else {
if((state_val_29643 === (11))){
var inst_29622 = (state_29642[(8)]);
var inst_29631 = (state_29642[(2)]);
var inst_29619 = inst_29622;
var state_29642__$1 = (function (){var statearr_29652 = state_29642;
(statearr_29652[(10)] = inst_29631);

(statearr_29652[(7)] = inst_29619);

return statearr_29652;
})();
var statearr_29653_29677 = state_29642__$1;
(statearr_29653_29677[(2)] = null);

(statearr_29653_29677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (9))){
var inst_29622 = (state_29642[(8)]);
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29642__$1,(11),out,inst_29622);
} else {
if((state_val_29643 === (5))){
var inst_29619 = (state_29642[(7)]);
var inst_29622 = (state_29642[(8)]);
var inst_29626 = cljs.core._EQ_.call(null,inst_29622,inst_29619);
var state_29642__$1 = state_29642;
if(inst_29626){
var statearr_29655_29678 = state_29642__$1;
(statearr_29655_29678[(1)] = (8));

} else {
var statearr_29656_29679 = state_29642__$1;
(statearr_29656_29679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (10))){
var inst_29634 = (state_29642[(2)]);
var state_29642__$1 = state_29642;
var statearr_29657_29680 = state_29642__$1;
(statearr_29657_29680[(2)] = inst_29634);

(statearr_29657_29680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (8))){
var inst_29619 = (state_29642[(7)]);
var tmp29654 = inst_29619;
var inst_29619__$1 = tmp29654;
var state_29642__$1 = (function (){var statearr_29658 = state_29642;
(statearr_29658[(7)] = inst_29619__$1);

return statearr_29658;
})();
var statearr_29659_29681 = state_29642__$1;
(statearr_29659_29681[(2)] = null);

(statearr_29659_29681[(1)] = (2));


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
});})(c__27098__auto___29671,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29671,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29663[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29663[(1)] = (1));

return statearr_29663;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29642){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29664){if((e29664 instanceof Object)){
var ex__26990__auto__ = e29664;
var statearr_29665_29682 = state_29642;
(statearr_29665_29682[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29683 = state_29642;
state_29642 = G__29683;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29671,out))
})();
var state__27100__auto__ = (function (){var statearr_29666 = f__27099__auto__.call(null);
(statearr_29666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29671);

return statearr_29666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29671,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29684 = [];
var len__25604__auto___29754 = arguments.length;
var i__25605__auto___29755 = (0);
while(true){
if((i__25605__auto___29755 < len__25604__auto___29754)){
args29684.push((arguments[i__25605__auto___29755]));

var G__29756 = (i__25605__auto___29755 + (1));
i__25605__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var G__29686 = args29684.length;
switch (G__29686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29684.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29758,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29758,out){
return (function (state_29724){
var state_val_29725 = (state_29724[(1)]);
if((state_val_29725 === (7))){
var inst_29720 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29726_29759 = state_29724__$1;
(statearr_29726_29759[(2)] = inst_29720);

(statearr_29726_29759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (1))){
var inst_29687 = (new Array(n));
var inst_29688 = inst_29687;
var inst_29689 = (0);
var state_29724__$1 = (function (){var statearr_29727 = state_29724;
(statearr_29727[(7)] = inst_29688);

(statearr_29727[(8)] = inst_29689);

return statearr_29727;
})();
var statearr_29728_29760 = state_29724__$1;
(statearr_29728_29760[(2)] = null);

(statearr_29728_29760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (4))){
var inst_29692 = (state_29724[(9)]);
var inst_29692__$1 = (state_29724[(2)]);
var inst_29693 = (inst_29692__$1 == null);
var inst_29694 = cljs.core.not.call(null,inst_29693);
var state_29724__$1 = (function (){var statearr_29729 = state_29724;
(statearr_29729[(9)] = inst_29692__$1);

return statearr_29729;
})();
if(inst_29694){
var statearr_29730_29761 = state_29724__$1;
(statearr_29730_29761[(1)] = (5));

} else {
var statearr_29731_29762 = state_29724__$1;
(statearr_29731_29762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (15))){
var inst_29714 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29732_29763 = state_29724__$1;
(statearr_29732_29763[(2)] = inst_29714);

(statearr_29732_29763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (13))){
var state_29724__$1 = state_29724;
var statearr_29733_29764 = state_29724__$1;
(statearr_29733_29764[(2)] = null);

(statearr_29733_29764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (6))){
var inst_29689 = (state_29724[(8)]);
var inst_29710 = (inst_29689 > (0));
var state_29724__$1 = state_29724;
if(cljs.core.truth_(inst_29710)){
var statearr_29734_29765 = state_29724__$1;
(statearr_29734_29765[(1)] = (12));

} else {
var statearr_29735_29766 = state_29724__$1;
(statearr_29735_29766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (3))){
var inst_29722 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29724__$1,inst_29722);
} else {
if((state_val_29725 === (12))){
var inst_29688 = (state_29724[(7)]);
var inst_29712 = cljs.core.vec.call(null,inst_29688);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29724__$1,(15),out,inst_29712);
} else {
if((state_val_29725 === (2))){
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29724__$1,(4),ch);
} else {
if((state_val_29725 === (11))){
var inst_29704 = (state_29724[(2)]);
var inst_29705 = (new Array(n));
var inst_29688 = inst_29705;
var inst_29689 = (0);
var state_29724__$1 = (function (){var statearr_29736 = state_29724;
(statearr_29736[(10)] = inst_29704);

(statearr_29736[(7)] = inst_29688);

(statearr_29736[(8)] = inst_29689);

return statearr_29736;
})();
var statearr_29737_29767 = state_29724__$1;
(statearr_29737_29767[(2)] = null);

(statearr_29737_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (9))){
var inst_29688 = (state_29724[(7)]);
var inst_29702 = cljs.core.vec.call(null,inst_29688);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29724__$1,(11),out,inst_29702);
} else {
if((state_val_29725 === (5))){
var inst_29692 = (state_29724[(9)]);
var inst_29697 = (state_29724[(11)]);
var inst_29688 = (state_29724[(7)]);
var inst_29689 = (state_29724[(8)]);
var inst_29696 = (inst_29688[inst_29689] = inst_29692);
var inst_29697__$1 = (inst_29689 + (1));
var inst_29698 = (inst_29697__$1 < n);
var state_29724__$1 = (function (){var statearr_29738 = state_29724;
(statearr_29738[(12)] = inst_29696);

(statearr_29738[(11)] = inst_29697__$1);

return statearr_29738;
})();
if(cljs.core.truth_(inst_29698)){
var statearr_29739_29768 = state_29724__$1;
(statearr_29739_29768[(1)] = (8));

} else {
var statearr_29740_29769 = state_29724__$1;
(statearr_29740_29769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (14))){
var inst_29717 = (state_29724[(2)]);
var inst_29718 = cljs.core.async.close_BANG_.call(null,out);
var state_29724__$1 = (function (){var statearr_29742 = state_29724;
(statearr_29742[(13)] = inst_29717);

return statearr_29742;
})();
var statearr_29743_29770 = state_29724__$1;
(statearr_29743_29770[(2)] = inst_29718);

(statearr_29743_29770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (10))){
var inst_29708 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29744_29771 = state_29724__$1;
(statearr_29744_29771[(2)] = inst_29708);

(statearr_29744_29771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (8))){
var inst_29697 = (state_29724[(11)]);
var inst_29688 = (state_29724[(7)]);
var tmp29741 = inst_29688;
var inst_29688__$1 = tmp29741;
var inst_29689 = inst_29697;
var state_29724__$1 = (function (){var statearr_29745 = state_29724;
(statearr_29745[(7)] = inst_29688__$1);

(statearr_29745[(8)] = inst_29689);

return statearr_29745;
})();
var statearr_29746_29772 = state_29724__$1;
(statearr_29746_29772[(2)] = null);

(statearr_29746_29772[(1)] = (2));


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
});})(c__27098__auto___29758,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29758,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29750[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29750[(1)] = (1));

return statearr_29750;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29724){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29751){if((e29751 instanceof Object)){
var ex__26990__auto__ = e29751;
var statearr_29752_29773 = state_29724;
(statearr_29752_29773[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29724;
state_29724 = G__29774;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29758,out))
})();
var state__27100__auto__ = (function (){var statearr_29753 = f__27099__auto__.call(null);
(statearr_29753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29758);

return statearr_29753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29758,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29775 = [];
var len__25604__auto___29849 = arguments.length;
var i__25605__auto___29850 = (0);
while(true){
if((i__25605__auto___29850 < len__25604__auto___29849)){
args29775.push((arguments[i__25605__auto___29850]));

var G__29851 = (i__25605__auto___29850 + (1));
i__25605__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var G__29777 = args29775.length;
switch (G__29777) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29775.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27098__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27098__auto___29853,out){
return (function (){
var f__27099__auto__ = (function (){var switch__26986__auto__ = ((function (c__27098__auto___29853,out){
return (function (state_29819){
var state_val_29820 = (state_29819[(1)]);
if((state_val_29820 === (7))){
var inst_29815 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29821_29854 = state_29819__$1;
(statearr_29821_29854[(2)] = inst_29815);

(statearr_29821_29854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (1))){
var inst_29778 = [];
var inst_29779 = inst_29778;
var inst_29780 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29819__$1 = (function (){var statearr_29822 = state_29819;
(statearr_29822[(7)] = inst_29779);

(statearr_29822[(8)] = inst_29780);

return statearr_29822;
})();
var statearr_29823_29855 = state_29819__$1;
(statearr_29823_29855[(2)] = null);

(statearr_29823_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (4))){
var inst_29783 = (state_29819[(9)]);
var inst_29783__$1 = (state_29819[(2)]);
var inst_29784 = (inst_29783__$1 == null);
var inst_29785 = cljs.core.not.call(null,inst_29784);
var state_29819__$1 = (function (){var statearr_29824 = state_29819;
(statearr_29824[(9)] = inst_29783__$1);

return statearr_29824;
})();
if(inst_29785){
var statearr_29825_29856 = state_29819__$1;
(statearr_29825_29856[(1)] = (5));

} else {
var statearr_29826_29857 = state_29819__$1;
(statearr_29826_29857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (15))){
var inst_29809 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29827_29858 = state_29819__$1;
(statearr_29827_29858[(2)] = inst_29809);

(statearr_29827_29858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (13))){
var state_29819__$1 = state_29819;
var statearr_29828_29859 = state_29819__$1;
(statearr_29828_29859[(2)] = null);

(statearr_29828_29859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (6))){
var inst_29779 = (state_29819[(7)]);
var inst_29804 = inst_29779.length;
var inst_29805 = (inst_29804 > (0));
var state_29819__$1 = state_29819;
if(cljs.core.truth_(inst_29805)){
var statearr_29829_29860 = state_29819__$1;
(statearr_29829_29860[(1)] = (12));

} else {
var statearr_29830_29861 = state_29819__$1;
(statearr_29830_29861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (3))){
var inst_29817 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29819__$1,inst_29817);
} else {
if((state_val_29820 === (12))){
var inst_29779 = (state_29819[(7)]);
var inst_29807 = cljs.core.vec.call(null,inst_29779);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(15),out,inst_29807);
} else {
if((state_val_29820 === (2))){
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29819__$1,(4),ch);
} else {
if((state_val_29820 === (11))){
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29797 = (state_29819[(2)]);
var inst_29798 = [];
var inst_29799 = inst_29798.push(inst_29783);
var inst_29779 = inst_29798;
var inst_29780 = inst_29787;
var state_29819__$1 = (function (){var statearr_29831 = state_29819;
(statearr_29831[(7)] = inst_29779);

(statearr_29831[(11)] = inst_29797);

(statearr_29831[(8)] = inst_29780);

(statearr_29831[(12)] = inst_29799);

return statearr_29831;
})();
var statearr_29832_29862 = state_29819__$1;
(statearr_29832_29862[(2)] = null);

(statearr_29832_29862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (9))){
var inst_29779 = (state_29819[(7)]);
var inst_29795 = cljs.core.vec.call(null,inst_29779);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(11),out,inst_29795);
} else {
if((state_val_29820 === (5))){
var inst_29780 = (state_29819[(8)]);
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29787__$1 = f.call(null,inst_29783);
var inst_29788 = cljs.core._EQ_.call(null,inst_29787__$1,inst_29780);
var inst_29789 = cljs.core.keyword_identical_QMARK_.call(null,inst_29780,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29790 = (inst_29788) || (inst_29789);
var state_29819__$1 = (function (){var statearr_29833 = state_29819;
(statearr_29833[(10)] = inst_29787__$1);

return statearr_29833;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29834_29863 = state_29819__$1;
(statearr_29834_29863[(1)] = (8));

} else {
var statearr_29835_29864 = state_29819__$1;
(statearr_29835_29864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (14))){
var inst_29812 = (state_29819[(2)]);
var inst_29813 = cljs.core.async.close_BANG_.call(null,out);
var state_29819__$1 = (function (){var statearr_29837 = state_29819;
(statearr_29837[(13)] = inst_29812);

return statearr_29837;
})();
var statearr_29838_29865 = state_29819__$1;
(statearr_29838_29865[(2)] = inst_29813);

(statearr_29838_29865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (10))){
var inst_29802 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29839_29866 = state_29819__$1;
(statearr_29839_29866[(2)] = inst_29802);

(statearr_29839_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (8))){
var inst_29779 = (state_29819[(7)]);
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29792 = inst_29779.push(inst_29783);
var tmp29836 = inst_29779;
var inst_29779__$1 = tmp29836;
var inst_29780 = inst_29787;
var state_29819__$1 = (function (){var statearr_29840 = state_29819;
(statearr_29840[(7)] = inst_29779__$1);

(statearr_29840[(8)] = inst_29780);

(statearr_29840[(14)] = inst_29792);

return statearr_29840;
})();
var statearr_29841_29867 = state_29819__$1;
(statearr_29841_29867[(2)] = null);

(statearr_29841_29867[(1)] = (2));


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
});})(c__27098__auto___29853,out))
;
return ((function (switch__26986__auto__,c__27098__auto___29853,out){
return (function() {
var cljs$core$async$state_machine__26987__auto__ = null;
var cljs$core$async$state_machine__26987__auto____0 = (function (){
var statearr_29845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29845[(0)] = cljs$core$async$state_machine__26987__auto__);

(statearr_29845[(1)] = (1));

return statearr_29845;
});
var cljs$core$async$state_machine__26987__auto____1 = (function (state_29819){
while(true){
var ret_value__26988__auto__ = (function (){try{while(true){
var result__26989__auto__ = switch__26986__auto__.call(null,state_29819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26989__auto__;
}
break;
}
}catch (e29846){if((e29846 instanceof Object)){
var ex__26990__auto__ = e29846;
var statearr_29847_29868 = state_29819;
(statearr_29847_29868[(5)] = ex__26990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29819;
state_29819 = G__29869;
continue;
} else {
return ret_value__26988__auto__;
}
break;
}
});
cljs$core$async$state_machine__26987__auto__ = function(state_29819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26987__auto____1.call(this,state_29819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26987__auto____0;
cljs$core$async$state_machine__26987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26987__auto____1;
return cljs$core$async$state_machine__26987__auto__;
})()
;})(switch__26986__auto__,c__27098__auto___29853,out))
})();
var state__27100__auto__ = (function (){var statearr_29848 = f__27099__auto__.call(null);
(statearr_29848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27098__auto___29853);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27100__auto__);
});})(c__27098__auto___29853,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1478441514643