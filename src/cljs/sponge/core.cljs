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
(defn run-button []
  [:button.run {:onClick
                (fn [e]
                  (let [prog (emu/parse-syntax
                               (.. (js/document.querySelector "#program") -value))]
                    (reset! program-run (vec (emu/run prog)))
                    (swap! ui assoc :scrubber (dec (count @program-run)))))}])

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
              :max (dec (count run))
              :onChange #(let [textarea (js/document.querySelector "#program")
                               step-index (int (.. % -target -value))
                               step (nth run step-index)]
                           (swap! ui assoc :scrubber step-index)
                           (js/selectTextareaLine
                             textarea
                             (-> step :ip inc)))}]
     [:span.current (if (empty? run) "0"
                      (str (inc (@ui :scrubber))))]
     [:span.total (count run)]]))

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
          
          [:text.name (merge text-style {:y 40})
           (string/upper-case (str r))]
          
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
       [:g
        [:text {:x (+ (/ size 2) (* (+ gap size) i))
                :y (+ 12 5 (* 10 (+ gap size)))} (str i)]
        [:text {:y (+ (- size 6) (* (+ gap size) i))
                :x (+ 5 (* 10 (+ gap size)))} (str i)]])]))

(defn visualizer [run {:keys [scrubber] :as ui}]
  (let [step (nth run scrubber)]
    [:div#visualizer
     [:svg
      {:width 600
       :height 600}
      [grid step]
      [:g {:transform "translate(0, 400)"}
       [registers (:state step)]]
      ]]))

(defn code-input []
  [:textarea#program {:rows 21 :cols 25}])

(defn examples []
  [:select
   {:onChange #(set! (.. (js/document.querySelector "#program") -value)
                     (ex/examples (keyword (.. % -target -value))))}
   [:option {:value "diagonal"} "Diagonal Line"]
   [:option {:value "x"} "The Letter X"]
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
     [code-input]]
    [:div.column.center
     [:h2 "Grid and Registers"]
     [visualizer @program-run @ui]
     [scrubber @program-run]]
    [:div.column.last
     [:h2 "Drawing Tools"]
     [tools]
     [:h2 "Examples"]
     [examples]
     ]]
   [:div#footer
    [:p
     "Developed by "
     [:a {:href "http://kahoabe.net"} "Kaho Abe"]
     " and "
     [:a {:href "http://nas.sr"} "Ramsey Nasser"]
     " for the "
     [:a {:href "https://eyebeam.org/communityyouth/playablefashion/"} "Playable Fashion"]
     " program at "
     [:a {:href "https://eyebeam.org/"} "Eyebeam"]
     "."
     ]
    ]
   ])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize App

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")
    ))

(defn reload []
  (reagent/render [page program-run]
                  (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (reload))
