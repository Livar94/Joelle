# Joelle Academy - Static Next.js + Tailwind

Projektet är ombyggt till Next.js App Router och Tailwind CSS, men konfigurerat som en statisk webbplats.

Det betyder att `npm run build` skapar en färdig statisk version i mappen `out/`. Innehållet i `out/` kan laddas upp till vanligt webbhotell, Netlify, Vercel, GitHub Pages eller liknande.

## Starta projektet lokalt

```bash
npm install
npm run dev
```

Öppna sedan `http://localhost:3000`.

## Bygg som statisk webbplats

```bash
npm run build
```

Efter builden finns den statiska webbplatsen i:

```bash
out/
```

Du kan förhandsvisa den statiska versionen med:

```bash
npm run preview
```

Ladda upp innehållet i `out/` till ditt webbhotell.


## Sidor

Projektet är inte längre single page. Det har separata routes. Bokningssystemet och Formspree-formuläret är borttaget:

- `/`
- `/services`
- `/about`
- `/theway`
- `/prices`
- `/comments`

Alla befintliga huvudtexter och beskrivningar från originalprojektet är flyttade över oförändrade.
