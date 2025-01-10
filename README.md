

## Naudojimasis terminalu:

C:\Users\viliu\Desktop\testine-repozitorija - Absoliutus kelias

  

. - Terminalo direktorijų struktūroje reiškia esamą direktoriją

  

.. - Nurodo vieną direktoriją aukščiau nuo esamos

  

cd - (Change Directory) Komanda kuri norodo esamos direktorijos pakeitimą

  

echo "# testine-repozitorija" >> README.md - Sukuria failą pavadinimu README.md ir jame patalpina tekstą "# testine-repozitorija"

  

## Naujos repozitorijos sukūrimas naudojat komandas:

git init - Inicijuoja repozitoriją

  

git add . - Nurodo kokius failus pridedame į commit'ą

  

git commit -m "first commit" - Commit žinutės priskyrimas

  

git branch -M main - Atšakos (branch) nurodymas

  

git remote add origin REPOZITORIJOS_ADRESAS - Github repozitorijos susiejimas

  

git push -u origin main - Commito įkėlimo iniciavimas

  

## Repozitorijos atnaujinimas:

git add .

  

git commit -m "update message"

  

git push



# NodeJS aplikacijos kūrimas
Sukuria package.json failą:
npm init 

Atlieka tą patį tik su automatiniu užpildymu:
npm init -y 

Norint paleisti programą:
node failopavadinimas.js  

Jeigu failas vadinasi index.js
node .

# React aplikacijos kūrimas
npm create vite@latest

Įvedame projekto pavadinimą
Pasirenkame React
Tuomet Javascript

Aplikacijos paleidimas:
npm run dev

Aplikacijos struktūra:
./src
    main.jsx - Pagrindinis failas
    App.jsx - Pagrindinis modifikuojamas failas
    components - Komponentų direktorija
        komponento-pavadinimas - Direktorija kurioje talpinsime komponentą
            KomponentoPavadinimas.jsx - Komponento failas
            KomponentoPavadinimas.css - Komponento stilius (esant poreikiui)


route:

npm i react-router-dom  - nuorodos

npm init -y
npm install express - serverio kurimas
npm install -g nodemon
npm install mongoose

npm run dev

postman.com - testavimui

npm install axios - fetchinimui is serverio






