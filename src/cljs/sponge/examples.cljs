(ns sponge.examples)

(def examples
  {
   :smile
"set a 2
set b 7
set c 1
set e 6
set f 7
plot a b
+ a c a
plot a b
< a f d
jump d e
set a 2
set b 2
set f 7
set e 15
plot a b
+ a c a
< a f d
jump d e
plot a b
set a 1
set b 6
set f 8
set e 24
plot a b
+ a c a
< a f d
jump d e
plot a b"

   :x
"set a 0
set b 0
set c 9
set d 1
set e 1
set f 7
set g 17
plot a b
+ a d a
+ b e b
< b c h
jump h f
jump i g
set i 1
set b -1
set d -1
jump i f"
   :creeper
"set a 9
set b 0
set c 9
set d 8
set e 13
set f 1
plot b a
plot c a
- a f a
plot b a
plot c a
jump a e
jump f d
set d 17
set e 21
set a 9
plot a b
- a f a
plot a b
jump a e
jump f d
plot b b
set a 2
set b 2
set g 33
plot b a
+ b f b
plot b a
+ a f a
plot b a
- b f b
plot b a
jump f g
set h 25
set a 2
set b 6
set g 38
jump f h
set a 4
set b 4
set g 42
jump f h
set a 3
set b 6
set c 5
set e 7
set i 54
set g 48
plot a c
plot b c
+ c f c
> c e d
jump d i
jump f g"
   :diagonal
"set a 0
set b 1
set c 7
set d 5
plot a a
+ a b a
plot a a
< a c e
jump e d"

   :circle
"set a 4
set b 4
set c 4
copy d c
set e 0
set f 0
set j 1
set k 2
set g 10
set h 50
< d e m
jump m h
+ a d m
+ b e n
plot m n
+ a e m
+ b d n
plot m n
- a e m
+ b d n
plot m n
- a d m
+ b e n
plot m n
- a d m
- b e n
plot m n
- a e m
- b d n
plot m n
+ a e m
- b d n
plot m n
+ a d m
- b e n
plot m n
+ e j e
* k e m
+ j m n
+ f n f
- f d m
* k m n
+ n j o
< o l m
jump m g
- d j d
* k e m
+ j m n
+ f n f
jump j g"
   })