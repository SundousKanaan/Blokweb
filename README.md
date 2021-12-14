# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Sundous Kanaan

#### Je startniveau:
Rood
 
#### Je focus:
Surface plane
<!-- 1- Dark/Light mode 
2- Custom properties++ (voor meer dan kleur, aanpassen met JS…)
3- Advanced positioning: sticky, fixed, z-index…

4- Custom properties
5- Scroll animaties (id & scroll-behaviour, intersection observer…)
 -->
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.yoasobi-music.jp/profile

#### Screenshot(s) van de eerste pagina (small screen): 
PROFILE (Home page)
<!-- <img src="images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina"> -->
![image](https://user-images.githubusercontent.com/94317411/142030543-41a16000-3d77-4bba-8280-414254d748a3.png)

#### Screenshot(s) van de tweede pagina (small screen):
SONGS / NOVELS
<!-- <img src="images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina"> -->
![image](https://user-images.githubusercontent.com/94317411/142031267-b04d769a-085a-4ae6-9134-e427c373bd7a.png)

 
</details>



## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<!-- <img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina"> -->
<img src="readme-images/home-page-anatome.png" width="375px" alt="breakdown van de hele pagina">
 
### dynamisch deel (bijv menu): 
<!-- <img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel"> -->
 <img src="readme-images/menu-anatome.png" width="375px" alt="breakdown van de hele pagina">

<!-- ### wellicht nog een dynamisch deel (bijv filter): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel"> -->

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Alles werkt goed tot nu toe. Ik heb geprobeerd het grids te gebruiken en we hebben het nog niet bestudeerd, 
het werkte prima, maar er zijn enkele commando's die ik niet kende en die ik moet toevoegen of corrigeren.
Mijn code is netjes, maar er zijn enkele verbeterpunten nodig, zoals het definiëren van de taal in sommige delen van de tekst, 
 omdat de site zowel Japanse en Engelse talen bevat.


### Agenda voor meeting
samen met je groepje opstellen
 
Marc:
 - Beter en duidelijker namen voor de variabele geven (custom properties).
 - Font sizen
 - Skip niet de main element in de code dan kan de screen reader niet de elementen
   van main vinden en gaat hun skippen.
 - De list elementen moeten gelijk zijn.
 
Tabita:
 - De volgorde van de HTML elementen fixen.
 - <time>: The (Date) Time element gebruiken.
 - Ze heeft een probleem met ruimte tussen de foto's, die mag niet zijn.
 - Het gebruiken van position Property.
 
Ik:
- Spacing in mijn tekst.
- Ik heb geprobeerd om grid te gebruiken.
 
### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Heb ik mijn HTML volgorde gefixt
- <time>: The (Date) Time element gebruiken.
- Spacing in mijn tekst was een font probleem.
- Definieer de taal van de site en de tekst met een span  want mijn site gebruikt Engels en Japans.
- Met de uitleg van de volgende les over de grid wordt duidelijker.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
 
Alles van de site basis ging goed volgens de lessen van de vorige weken, maar in dit punt heb ik nog twee probleemen
- Ik heb allen dit screenshot van mijn grid probleem, waar mijn nav elementen staan niet in zijn section grid:
<img src="https://user-images.githubusercontent.com/94317411/145985365-d6fffb47-f969-442b-be60-e57869f4e0e6.png" width="375px" alt="breakdown van de hele pagina">
 
- Mijn snow effect moet in mijn menu terug komen:
 <img src="https://user-images.githubusercontent.com/94317411/145986513-8e5dee05-ca9b-4063-8349-d9aaf7b8902b.png" width="375px" alt="breakdown van de hele pagina">

 



### Agenda voor meeting
Marc:
 - Zijn pagina was klein en weinig werk voor wat hij kan doen, dus het advies was om misschien kan hij animaties voor de achtergrond maken, 
 die in de orginiele site niet staat.
 - Zijn font responsive maken tijdens het veranderen van de screen width bijvoorbeeld met clamp().
 
Tabita:
 - Haar foto's size aanpassen.
 - De navigatiemenu elementen verschijnen, zelfs als het menu niet is geopend.
 
 Ik:
 - De snoweffect van de achtergrond in mijn menu ook terug zien.
 - Mijn grid van tweede pagina fixen.
 - Een hover/cursor:pointer voor mijn menu knop maken, want het is een drie los lijnen en het is niet duidelijk, 
 als je moet ergens oop de knop klicken of moet dat op de lijnen.
 - Ik heb met de browser scherm beginnen, maar dat is fout, want ik moet met mobile scherm beginnen en nu ben ik klaar met de eerste pagina, 
 mijn menu en bijna de helft van de tweede, dus moet ik Sanna vraggen wat ik nu moet doen.
 
### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Ik had een probleem met de grid van pagina 2, maar het hulp van de student assisstenten had ik duidelijker beeld over de grid en hoe kan ik mijn probleem fixen.
 Als ik wil elementen in mijn grid positioneren die een parent hebben, moet ik eerste de parent in de grid positineren en dan zijn childeren positineren.
 
- Mijn achtergrond animatie is prima maar het moet ook in mijn navigatie menu komen, ze hebben ook geprobeerd om het te fixen en uitleggen hoe kan dat.
 
- Ik kan mijn code van de eerste pagina houden, en begin opniew met de mobile versie van de tweede pagina.

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Navigeren met toetsenbord
Mijn navigatie door de toetsenbord werkt goed en je kan wel navegeren tussen de twee pagina's en hun elementen.
 
#### Algemeen punten.
Dit was de eerste test, dus heb ik paar punten gevonden, die ik moet fixen in mijn css.
- Mijn Social media hebben niet de kleur die ik wild in de light mode:
  - <img src="https://user-images.githubusercontent.com/94317411/145995475-512f7681-f7da-4840-b5f6-fc746f7d7b4a.png" width="375px" alt="breakdown van de hele pagina">
  - <img src="https://user-images.githubusercontent.com/94317411/145995448-90c1991f-648f-413a-bbc3-ac75aad6f385.png" width="375px" alt="breakdown van de hele pagina">
 
- Ik heb de code van de dark mode gefixt
  - <img src="https://user-images.githubusercontent.com/94317411/145996153-b82ebdcf-85d8-41e0-964f-b946ac14e69b.png" width="375px" alt="breakdown van de hele pagina">
  - <img src="https://user-images.githubusercontent.com/94317411/145996256-eb75a1fb-ca5c-4d84-94b6-240a67e6afd0.png" width="375px" alt="breakdown van de hele pagina">

- Mijn footer font was zwart in plaats van wit in de light mode
   - <img src="https://user-images.githubusercontent.com/94317411/145996378-f114d63a-5d13-462a-bb3b-10ed4a558cbb.png" width="375px" alt="breakdown van de hele pagina">
   - <img src="https://user-images.githubusercontent.com/94317411/145996644-1d6e39c6-d0ca-4000-9414-cb7813933a09.png" width="375px" alt="breakdown van de hele pagina">

 - Mijn menu knop ook was wit in plaats van zwart in de light mode
   - <img src="https://user-images.githubusercontent.com/94317411/145996958-c7c27c15-7879-44e8-9e75-82d39d1336cb.png" width="375px" alt="breakdown van de hele pagina">
   - <img src="https://user-images.githubusercontent.com/94317411/145997024-4ad8ec41-c6c7-434a-80c5-7b6512f60d5d.png" width="375px" alt="breakdown van de hele pagina">

 - De light mode problemen heb ik in mijn @media gefixt en voor de menu knop ik heb zijn kleur variable gefixt
   - <img src="https://user-images.githubusercontent.com/94317411/145997563-4f8f6a4c-6dba-4e9d-a0f5-4a6d0071150b.png" width="375px" alt="breakdown van de hele pagina">

 
#### Gebruik screenreader
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Visuele berperkingen
Ik heb mijn website duidelijk gevonden voor mensen met een (visuele) beperking, want hij heeft duidelijk bouwen en elementen.
 
 
#### Hulp aan de studenten assistent aanvragen:
- Ik heb mijn grid van de tweede pagina gemaakt, maar paar section hebben styling anders.
  Ik heb met de student assistenten dat opgelost door de elementen code te verwerken.
 - Section met goede styling:
   - <img src="https://user-images.githubusercontent.com/94317411/145980618-d1673bed-a6c6-43d7-b211-4cc9aa92f052.png" width="375px" alt="breakdown van de hele pagina">

 - Section met fout styling:
   - <img src="https://user-images.githubusercontent.com/94317411/145986245-5b6fb46d-a36c-44f8-83cb-057c42abe412.png" width="375px" alt="breakdown van de hele pagina">

 - De styling komt hier van de eerste pagina en dat mag niet:
   - <img src="https://user-images.githubusercontent.com/94317411/145986326-f3d23373-ca3d-4087-8732-c8f0efabf12b.png" width="375px" alt="breakdown van de hele pagina">
   - Hoe ik dit opgelost heb:
      - <img src="https://user-images.githubusercontent.com/94317411/146001877-dbd8df77-0914-4726-bd52-bddba3aa44a2.png" width="375px" alt="breakdown van de hele pagina">


</details>





## Voortgang 3 (week 4)
<!--  <img src="" width="375px" alt="breakdown van de hele pagina"> -->
<details open>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1
2. bron 2
3. ...

</details>
