# Max TIER (or Tierventure [or Tripventure])

# Pitch (first draft)

## Running the project

```shell
$ git clone https://github.com/plungingChode/hackathon-2022
$ yarn install
$ yarn init:db
$ yarn init:mockdata
$ yarn dev
```

## Pitch (first draft)

This app makes city sightseeing adventurous and personalized. Listen to the tale of the **Storyteller**, which he writes about you as you're exploring the city. Take up the mantle of the music-loving bard, the strong barbarian or the laid-back druid. Choose the type of adventure you want to partake in and hit the road! The **Storyteller** will suggest a route, but you're free to go your own way. His motto: the purpose of a journey is not the destination, but the journey itself.

The application flow (e.g. one "adventure") is as follows:

1. The user "creates a character" by filling out a questionnaire about their interests - we plan a route accordingly. The user can also choose a "predefined character", who have a short summary of their personalities and planned activities.
1. The user reviews their character and route plan and makes any changes they want to them.
1. After "character selection", the "tale" loop begins. First, user chooses the next stop on their journey. _Here we could direct them to the closest TIER e-scooter._ Afterwards, the app guides them to their destination.
1. While there, the user can record their "own story", taking notes and pictures as they like.
1. When they're done, the "story continues", the user selects the next destination. _If none of the suggested destinations suit the user, they can reroll for different ones._
1. After the final stop (or whenever the user feels like they're done) the "story is over", the navigation ends. The completed story is saved and can be read again at any time.

Important: In order to prevent drunk riding, the journey immediately ends after visting a bar.

### Technologies used

- Svelte - SvelteKit framework
- Google Maps API
- TripAdvisor API
- TIER e-roller lekérdezés (?)

### Plans for the future

- Promoted destinations (similar to promoted search results in Google)
- "Adventurer groups", a system that tunes the route to the preferences of multiple people

## Pitch (HU)

Ezzel az alkalmazással kalandosabbá és személyre szabottabbá tesszük a városnézést. Hallgasd meg a **Mesemondó** történetét, amit egy városban járkálás (vagy rollerezés) közben írt rólad. A történetek a fantasy médiában megismert személyiségekről (pl. a részeges, a vadhús zabáló barbár stb.) szólnak, alakulásukban te is szerepet játszol. Válaszd ki a hozzád illő kalandort és indulj útnak. A **Mesemondó**nak van egy ötlete az útról, de akár le is térhetsz róla. Mottója: a kaland lényege nem a cél, hanem az út maga.

Az alkalmazás használata (azaz egy "kaland") a következő lépésekben történik:

1. A felhasználó "karaktert készít", azaz megadja milyen látványosságokra, elfoglaltságokra kíváncsi - ez alapján megtervezzük az útvonalat. Ha erre nincs igénye, akkor választhat egyet az előre elkészített karakterek közül.
1. A felhasználó áttekintheti a karakteréhez tartozó útvonalat, változtathat karaktert, ha szeretne.
1. A karakterválasztás után elkezdődik a "mese" (ld. a képen), ennek során a felhasználó először kiválasztja a következő megállót (_Itt odairányíthatnánk a felhasználót a legközelebbi TIER e-rollerhez_). Ezután alkalmazás térkép segítségével odavezeti.
1. Az adott állomáson a felhasználó leírhatja saját élményeit, képeket készíthet, ami mind bekerül a történetbe. Mikor végzett, a "történet tovább folytatódik", azaz kiválaszthatja a következő célt. _Ha a felhasználónak nem tetszenek a felkínált lehetőségek, újakat kérhet_
1. Az utolsó megálló után a "mesének vége van", azaz a navigáció véget ér.

A korábbi utakat elmentjük, később vissza lehet őket olvasni.
Fontos: kocsma látogatása után a "történet" azonnal véget ér, így próbáljuk megelőzni az ittas utazást.

### Felhasznált technológiák

- Svelte - SvelteKit framework
- Google Maps API
- TripAdvisor API
- TIER e-roller lekérdezés (?)

### Jövőbeli tervek

- Google Ads-hez hasonlóan az útválasztáskor felajánlhatnánk elsőként a támogatott (úgymond promóciós helyet vásárolt) létesítményeket.
- "Kalandor csapatok" kialakítása, ami több felhasználó igényeihez igazítja az útvonalat.

### Példa Karakterek

- bard: zene + ivás + tánc
- barbár: húsos/hamburger/kaja + ivás
- történész: történelmi helyek, múzeumok, romok, épületek
- druida: kirándulás, parkok, zöldövezet, chill, teaház, kávé, vízipipa
- adventurer: falmászás, aktív/sportosabb dolgok
- varázsló: Csodák Palotája, múzeumok
- őrült festő: művészeti, színház, galériák
