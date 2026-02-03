# 🧩 Redux Dispatch Playground

Redux Toolkit kullanarak **dispatch → reducer → state → UI** akışını net bir şekilde görmek ve anlamak için hazırlanmış küçük bir React playground uygulaması.

Bu proje bir ürün değildir.
Amaç, Redux’un **neden ve ne zaman gerekli olduğunu** küçük senaryolar üzerinden göstermek.

---

## 🎯 Projenin Amacı

Redux ilk öğrenildiğinde genelde şu soru oluşur:

> “Bunu local state ile de yapabilirdim, neden Redux kullandım?”

Bu playground’un amacı tam olarak bu soruya cevap vermektir.

Uygulama:

* Küçük ve izole senaryolardan oluşur
* Dispatch çağrılarının net şekilde görülmesini sağlar
* Global state’in UI’yi nasıl etkilediğini gösterir

---

## 🧠 Bu Projede Neler Öğrenilir?

* `dispatch` nedir, ne zaman çağrılır?
* Reducer state’i nasıl günceller?
* `useSelector` ile state nasıl okunur?
* Redux Toolkit neden tercih edilir?
* Global UI state neden önemlidir?

---

## 🔔 Senaryo: Global Notification Sistemi

### Senaryo Açıklaması

Uygulamada bir butona basıldığında:

* Global state’e bir bildirim eklenir
* UI bu state’i dinler ve bildirimi render eder

Bildirimler:

* Redux store içinde tutulur
* UI herhangi bir local state kullanmaz
* Tamamen Redux üzerinden yönetilir

---

### Neden Redux?

Bildirimler:

* Tek bir component’e ait değildir
* Uygulamanın herhangi bir yerinden tetiklenebilir
* Global olarak kontrol edilmelidir

Bu yüzden bu senaryo Redux için idealdir.



### notificationSlice

* Bildirim state’ini tutar
* `addNotification` gibi action’lar içerir
* UI logic içermez, sadece state yönetir

---
## 🧪 Redux DevTools ile Gözlem

Bu projede özellikle şunları gözlemlemek amaçlanır:

* Hangi action dispatch edildi?
* Reducer state’i nasıl değiştirdi?
* UI hangi state değişimine tepki verdi?

Örnek action:

```
notifications/addNotification
```

---

## 🛠️ Kullanılan Teknolojiler

* React
* Redux Toolkit
* React Redux
* JavaScript
* Tailwind CSS

---

## 🚫 Bu Proje Ne Değildir?

* ❌ Büyük ölçekli bir uygulama
* ❌ CRUD demo
* ❌ UI/UX odaklı bir çalışma

Bu proje **öğrenme ve mantık odaklıdır**.
