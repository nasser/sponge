(ns sponge.emulator
  (:import goog.string.StringBuffer)
  (:require [clojure.string :as string]
            cljs.reader))

(defn get-cell [ctx x]
  (-> ctx :state (get x)))

(defn intcast [v]
  (cond
    (= v true) 1
    (= v false) 0
    :else v))

(defn binop [op]
  (fn [ctx a b s]
    (-> ctx
        (assoc-in [:state s] (intcast (op (get-cell ctx a) (get-cell ctx b))))
        (update :ip inc))))


(def ops
  {:set (fn [ctx n v]
          (-> ctx
              (assoc-in [:state n] v)
              (update :ip inc)))
   
   :copy (fn [ctx a b]
          (-> ctx
              (assoc-in [:state a] (get-cell ctx b))
              (update :ip inc)))
   
   :jump (fn [ctx t l]
           (if (= 1 (get-cell ctx t))
             (assoc ctx :ip (get-cell ctx l))
             (update ctx :ip inc)))
   
   :plot (fn [ctx x y]
           ; (println (get-cell ctx x) (get-cell ctx y))
           (-> ctx
               (assoc-in [:plot [(get-cell ctx x) (get-cell ctx y)]] "#")
               (update :ip inc)))
   
   :- (binop -)
   :+ (binop +)
   :* (binop *)
   :÷ (binop /)
   :< (binop <)
   :> (binop >)})


(defn parse [src]
  {:instr src
   :plot {}
   :ip 0
   :state {}})

(defn parse-string [s]
  (parse (cljs.reader/read-string s)))

(defn parse-syntax [s]
  (parse
    (->> (string/split s "\n")
         (map #(let [[op & args] (cljs.reader/read-string (str "[" % "]"))]
                 (apply vector (keyword op) args)))
         vec)))

(defn step [ctx]
  (when-let [[op & args] (get (ctx :instr) (ctx :ip))]
    (when (ops op)
      (apply (ops op) ctx args))))

(defn run [ctx]
  (take 200 ;; halting problem
    (take-while some?
      (iterate step ctx))))

(defn screen-text [ctx]
  (when ctx
    (let [sb (StringBuffer.)]
      (doseq [y (range 10)]
        (doseq [x (range 10)]
          (.append sb (or (get (ctx :plot) [x y])
                          " ")))
        (.append sb "\n"))
      (.toString sb))))

(defn print-*ip [ctx]
  (println (str (ctx :ip) " : " (get (ctx :instr) (ctx :ip))))
  ctx)

(defn print-state [ctx]
  (println  (ctx :state))
  ctx)

; (defn visualize [steps]
;   (dorun (map #(-> % print-screen print-*ip print-state) steps)))

(defn slurp [& args]
  args)

(defn template [named]
  (.. (js/document.querySelector (str "template[id='" named "'")) -innerHTML))

(defn instr->svg [[op & args]]
  (let [argmap (apply hash-map (interleave "abcdefg" args))
        template (template (name op))]
    (reduce-kv (fn [svg placeholder actual]
                 (string/replace svg
                                 (str "$" placeholder)
                                 (str actual)))
               template
               argmap)))

(defn printable [program]
  (str "<html><head></head><body>"
       (->> program
            :instr
            (map instr->svg)
            (map-indexed
              (fn [i doc]
                (string/replace doc "$n" (str i))))
            (apply str))
       "</body></html>"))