(ns sponge.core
  (:require
    [clojure.string :as string]
    [sponge.emulator :as emu]
    [sponge.examples :as ex]
    [reagent.core :as reagent]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vars

(defonce debug?
  ^boolean js/goog.DEBUG)

(def program-run (reagent/atom nil))
(def ui (reagent/atom {:scrubber 0}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Page
(defn svg-preview! []
  (when-let [run @program-run]
    (let [idx (:scrubber @ui)
          step (nth run idx)
          ip (:ip step)
          instr (get (:instr step) ip)
          svg (string/replace (emu/instr->svg instr) "$n" ip)]
      ;; hack!
      (when (js/document.querySelector "div#svg")
        (set! (.. (js/document.querySelector "#svg") -innerHTML) svg)))))

(defn run-program! []
  (let [prog (emu/parse-syntax
               (.. (js/document.querySelector "#program") -value))]
    (reset! program-run (vec (emu/run prog)))
    (swap! ui assoc :scrubber (- (count @program-run) 2))
    (svg-preview!)))

(defn run-button []
  [:button.run {:onClick run-program!}])

(defn print-button [run]
  [:button.print {:onClick #(let [content (-> run last emu/printable)
                                  win (js/window.open)]
                              (.. win -document open (write content))
                              (.. win print))}
   "Print"])

(defn scrubber [run]
  (let [run (or run [])]
    [:div#scrubber
     [print-button run]
     [run-button]
     [:input {:disabled (empty? run)
              :type "range"
              :min 0
              :value (:scrubber @ui)
              :max (- (count run) 2)
              :onChange #(let [textarea (js/document.querySelector "#program")
                               step-index (int (.. % -target -value))
                               step (nth run step-index)]
                           (swap! ui assoc :scrubber step-index)
                           (svg-preview!)
                           (js/selectTextareaLine
                             textarea
                             (-> step :ip inc)))}]
     [:span.current (if (empty? run) "0"
                      (str (inc (@ui :scrubber))))]
     [:span.total (if (zero? (count run))
                    (count run)
                    (- (count run) 1))]]))

(defn register-bank [regs names]
  (let [text-style {:textAnchor "middle"
                    :style #js {:fontSize 30}}
        box-width 30
        gap 20]
    [:g {:transform (str "translate(" gap ", 0)")}
     (map-indexed
       (fn [i r]
         [:g.register
          {:key r :transform (str "translate(" (* (+ gap box-width) i) ", 20)")}
          
          [:text.value (merge text-style {:style #js {:fontSize 20} :x 0 :y 6})
           (str (or (get regs r) 0))]
          
          [:text.name (merge text-style {:y 36})
           (string/lower-case (str r))]
          
          [:rect {:x (/ (+ (/ gap 2) box-width) -2)
                  :y -15
                  :width (+ (/ gap 2) box-width)
                  :height 60
                  :style #js {:fill "none" :stroke "black"}}]
          ])
       names)]))

(defn registers [regs]
  [:g#registers {:transform "translate(0,20)"}
   [:g {:transform "translate(0,0)"}
    (register-bank regs '[a b c d e f g h])]
   [:g {:transform "translate(0,70)"}
    (register-bank regs '[i j k l m n o p])]])

(defn grid [step]
  (let [plot (:plot step)
        regs (:state step) 
        size 34
        gap 5]
    [:g#grid
     (for [x (range 10)
           y (range 10)]
       [:rect {:key [x y] 
               :x (+ gap (* (+ gap size) x)) 
               :y (+ gap (* (+ gap size) y)) 
               :width size 
               :height size
               :style #js {:fill (if (get plot [x y])
                                   "green"
                                   "yellow")
                           :stroke "black"
                           :strokeOpacity 0.125}}])
     (for [i (range 10)]
       [:g {:key i}
        [:text {:x (+ (/ size 2) (* (+ gap size) i))
                :y (+ 12 5 (* 10 (+ gap size)))} (str i)]
        [:text {:y (+ (- size 6) (* (+ gap size) i))
                :x (+ 5 (* 10 (+ gap size)))} (str i)]])]))

(defn visualizer [run {:keys [scrubber] :as ui}]
  (let [step (nth run (inc scrubber))]
    [:div#visualizer
     [:svg
      {:width 600
       :height 600}
      [grid step]
      [:g {:transform "translate(0, 400)"}
       [registers (:state step)]]
      ]]))

(defn code-input []
  [:textarea#program {:rows 16 :cols 25}])

(defn examples []
  [:select
   {:onChange (fn [e]
                (set! (.. (js/document.querySelector "#program") -value)
                      (ex/examples (keyword (.. e -target -value))))
                (run-program!))}
   [:option {:value "diagonal"} "Diagonal Line"]
   [:option {:value "x"} "The Letter X"]
   [:option {:value "smile"} "Smiley Face"]
   [:option {:value "creeper"} "Creeper"]
   [:option {:value "circle"} "Circle"]])

(defn tools []
  [:div#tools 
   [:button {:disabled true} [:img {:src "images/freehand.png"}]]
   [:button {:disabled true} [:img {:src "images/line.png"}]]
   [:button {:disabled true} [:img {:src "images/rectangle.png"}]]
   [:button {:disabled true} [:img {:src "images/circle.png"}]]
   [:button {:disabled true} [:img {:src "images/filled-rectangle.png"}]]
   [:button {:disabled true} [:img {:src "images/filled-circle.png"}]]
   ]
  )

(defn page [program-run]
  [:div
   [:h1 "The Slowest Computer On Earth"]
   [:div#main
    [:div.column
     [:h2 "Code"]
     [code-input]
     [:h2 "Instruction Preview"]
     [:div#svg]]
    [:div.column.center
     [:h2 "Sponge Grid & Memory Cells"]
     [visualizer @program-run @ui]
     [:h2 "Printing & Execution"]
     [scrubber @program-run]
     [:h2 "Examples"]
     [examples]]
    #_ [:div.column.last
     ; [:h2 "Instruction Preview"]
     ; [:div#svg]
     ; [:h2 "Examples"]
     ; [examples]
     ]]
   [:div#footer
    [:p
     [:a {:href "https://github.com/nasser/sponge"} "Developed"]
     " by "
     [:a {:href "http://kahoabe.net"} "Kaho Abe"]
     " and "
     [:a {:href "http://nas.sr"} "Ramsey Nasser"]
     " for the "
     [:a {:href "https://eyebeam.org/communityyouth/playablefashion/"} "Playable Fashion"]
     " program at "
     [:a {:href "https://eyebeam.org/"} "Eyebeam"]
     "."]]])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize App

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")
    ))

(defn reload []
  (reagent/render [page program-run]
                  (.getElementById js/document "app"))
  (set! (.. (js/document.querySelector "#program") -value)
        (ex/examples :diagonal))
  (run-program!))

(defn ^:export main []
  (dev-setup)
  (reload))
