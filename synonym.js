// Data for synonymer (Enkeltord og Setninger)
const synonymData = {
    // Enkelte ord: Målord, 1 korrekt synonym og 3 feilaktige alternativer
    ord: [
        // Eksisterende ord
        { ord: "Fortsette", fasit: "Gå videre", alternativer: ["Vente", "Stoppe", "Gå videre", "Pause"] },
        { ord: "Iglo", fasit: "Ishus", alternativer: ["Trehytte", "Ishus", "Telt", "Grotte"] },
        { ord: "Presang", fasit: "Gave", alternativer: ["Sløyfe", "Gave", "Perfekt", "Pakkepapir"] },
        { ord: "Begynnelse", fasit: "Start", alternativer: ["Pause", "Avslutning", "Start", "Midte"] },
        { ord: "Oppfinnsom", fasit: "Kreativ", alternativer: ["Bråkete", "Doven", "Kreativ", "Sint"] },
        { ord: "Mektig", fasit: "Sterk", alternativer: ["Sterk", "Svak", "Spent", "Liten"] },
        { ord: "Fremmed", fasit: "Ukjent", alternativer: ["Kollega", "Ukjent", "Venn", "Nabo"] },
        { ord: "Frisk", fasit: "Sunn", alternativer: ["Doven", "Sunn", "Syk", "Trett"] },
        { ord: "Kjølig", fasit: "Kald", alternativer: ["Knuse", "Kald", "Puste", "Varm"] },
        { ord: "Reparere", fasit: "Ordne", alternativer: ["Ordne", "Operere", "Reagere", "Ødelegge"] },
        { ord: "Hurtig", fasit: "Rask", alternativer: ["Langsom", "Rask", "Tung", "Stille"] },
        { ord: "Vanskelig", fasit: "Krevende", alternativer: ["Enkel", "Krevende", "Morsom", "Kjedelig"] },
        { ord: "Barmhjertig", fasit: "Snill", alternativer: ["Sint", "Snill", "Rik", "Trøtt"] },
        { ord: "Klok", fasit: "Lur", alternativer: ["Dum", "Lur", "Sint", "Rask"] },
        { ord: "Skummel", fasit: "Skremmende", alternativer: ["Trygg", "Morsom", "Skremmende", "Pen"] },
        { ord: "Prikkfri", fasit: "Perfekt", alternativer: ["Dårlig", "Skitne", "Perfekt", "Smal"] },
        { ord: "Trøtt", fasit: "Sliten", alternativer: ["Våken", "Mett", "Sliten", "Glad"] },
        { ord: "Redd", fasit: "Engstelig", alternativer: ["Modig", "Engstelig", "Stolt", "Rolig"] },
        { ord: "Liten", fasit: "Bitteliten", alternativer: ["Stor", "Bitteliten", "Mektig", "Bred"] },
        { ord: "Glede", fasit: "Lykke", alternativer: ["Sorg", "Sint", "Lykke", "Frykt"] },
        { ord: "Prate", fasit: "Snakke", alternativer: ["Lytte", "Skrive", "Snakke", "Tegne"] },
        { ord: "Kaste", fasit: "Pælme", alternativer: ["Fange", "Pælme", "Gjemme", "Finne"] },
        { ord: "Finne", fasit: "Oppdage", alternativer: ["Miste", "Oppdage", "Gjemme", "Lete"] },

        // Nye ord lagt til fra bildet
        { ord: "Plyndre", fasit: "Røve", alternativer: ["Bygge", "Røve", "Låne", "Gjemme"] },
        { ord: "Glad", fasit: "Munter", alternativer: ["Trist", "Munter", "Sint", "Trøtt"] },
        { ord: "Rar", fasit: "Merkelig", alternativer: ["Vanlig", "Merkelig", "Pen", "Kjent"] },
        { ord: "Skrike", fasit: "Hyle", alternativer: ["Viske", "Hyle", "Sove", "Synge"] },
        { ord: "Venn", fasit: "Kamerat", alternativer: ["Fiende", "Ukjent", "Kamerat", "Nabo"] },
        { ord: "Våt", fasit: "Bløt", alternativer: ["Tørr", "Varm", "Bløt", "Kald"] },
        { ord: "Nifs", fasit: "Skummel", alternativer: ["Trygg", "Skummel", "Morsom", "Søt"] },
        { ord: "Snakke", fasit: "Skravle", alternativer: ["Tie", "Skravle", "Lytte", "Skrive"] },
        { ord: "Fat", fasit: "Tallerken", alternativer: ["Kopp", "Tallerken", "Gaffel", "Gryte"] },
        { ord: "Kaldt", fasit: "Kjølig", alternativer: ["Varmt", "Kjølig", "Mørkt", "Tørt"] },
        { ord: "Møte", fasit: "Treffe", alternativer: ["Unngå", "Miste", "Treffe", "Glemme"] },
        { ord: "Blomst", fasit: "Plante", alternativer: ["Hjerte", "Plante", "Stein", "Spade"] },
        { ord: "Addisjon", fasit: "Pluss", alternativer: ["Minus", "Ganging", "Pluss", "Deling"] },
        { ord: "Tulle", fasit: "Tøyse", alternativer: ["Kjede", "Tøyse", "Lære", "Jobbe"] },
        { ord: "Klær", fasit: "Tøy", alternativer: ["Sko", "Tøy", "Smykker", "Veske"] },
        { ord: "Fjerte", fasit: "Prompe", alternativer: ["Nyse", "Prompe", "Heste", "Rape"] },
        { ord: "Morsom", fasit: "Artig", alternativer: ["Kjedelig", "Artig", "Sint", "Trist"] },
        { ord: "Fortelling", fasit: "Historie", alternativer: ["Sang", "Historie", "Bilde", "Tegning"] },
        { ord: "Dyr", fasit: "Kostbar", alternativer: ["Billig", "Kostbar", "Enkel", "Liten"] },
        { ord: "Billig", fasit: "Rimelig", alternativer: ["Dyr", "Rimelig", "Tung", "Vanskelig"] },
        { ord: "Erte", fasit: "Plage", alternativer: ["Hjelpe", "Plage", "Trøste", "Leke"] },
        { ord: "Far", fasit: "Pappa", alternativer: ["Onkel", "Pappa", "Bror", "Bestefar"] },
        { ord: "Jente", fasit: "Pike", alternativer: ["Gutt", "Pike", "Mann", "Dame"] },
        { ord: "Fly", fasit: "Sveve", alternativer: ["Falle", "Sveve", "Løpe", "Svømme"] },
        { ord: "Friminutt", fasit: "Pause", alternativer: ["Time", "Pause", "Lekse", "Prøve"] },
        { ord: "Mor", fasit: "Mamma", alternativer: ["Tante", "Mamma", "Søster", "Bestemor"] },
        { ord: "Stinker", fasit: "Lukter", alternativer: ["Smaker", "Lukter", "Skinner", "Høres"] },
        { ord: "Gå", fasit: "Spasere", alternativer: ["Løpe", "Spasere", "Sitte", "Hoppe"] },
        { ord: "Løpe", fasit: "Springe", alternativer: ["Gå", "Springe", "Stå", "Sitte"] },
        { ord: "Snill", fasit: "Grei", alternativer: ["Slem", "Grei", "Sint", "Sur"] },
        { ord: "Ulike", fasit: "Forskjellige", alternativer: ["Like", "Forskjellige", "Samme", "Jevne"] },
        { ord: "Fort", fasit: "Rask", alternativer: ["Treig", "Rask", "Tung", "Rolig"] },
        { ord: "Eske", fasit: "Boks", alternativer: ["Pose", "Boks", "Kasse", "Flaske"] },
        { ord: "Hus", fasit: "Bygning", alternativer: ["Hage", "Bygning", "Gate", "Park"] },

// Legges til i 'ord'-arrayen:
{ ord: "Redde", fasit: "Berge", alternativer: ["Miste", "Berge", "Skade", "Gjemme"] },
{ ord: "Krangle", fasit: "Trette", alternativer: ["Enes", "Leke", "Trette", "Synge"] },
{ ord: "Hjelpe", fasit: "Bistå", alternativer: ["Hindre", "Bistå", "Plage", "Sitte"] },
{ ord: "Bygge", fasit: "Lage", alternativer: ["Knuse", "Lage", "Riv", "Gjemme"] },
{ ord: "Gjemme", fasit: "Skjule", alternativer: ["Vise", "Skjule", "Finne", "Miste"] },
{ ord: "Lykkelig", fasit: "Glad", alternativer: ["Trist", "Sint", "Glad", "Redd"] },
{ ord: "Start", fasit: "Begynnelse", alternativer: ["Slutt", "Pause", "Begynnelse", "Midte"] },
{ ord: "Skuffet", fasit: "Lei seg", alternativer: ["Fornøyd", "Lei seg", "Stolt", "Lystig"] },
{ ord: "Vente", fasit: "Bie", alternativer: ["Løpe", "Gå", "Bie", "Starte"] },

// Flere enkeltord – utvidelse
        { ord: "Modig", fasit: "Tapper", alternativer: ["Redd", "Tapper", "Svak", "Trøtt"] },
        { ord: "Vakker", fasit: "Pen", alternativer: ["Stygg", "Liten", "Pen", "Gammel"] },
        { ord: "Enorm", fasit: "Kjempestor", alternativer: ["Bitteliten", "Kjempestor", "Smal", "Kort"] },
        { ord: "Fornøyd", fasit: "Tilfreds", alternativer: ["Skuffet", "Sint", "Tilfreds", "Bekymret"] },
        { ord: "Undersøke", fasit: "Granske", alternativer: ["Gjemme", "Granske", "Glemme", "Ødelegge"] },
        { ord: "Beskytte", fasit: "Verne", alternativer: ["Angripe", "Forlate", "Verne", "Skade"] },
        { ord: "Ivrig", fasit: "Engasjert", alternativer: ["Uinteressert", "Engasjert", "Doven", "Trist"] },
        { ord: "Sjelden", fasit: "Uvanlig", alternativer: ["Vanlig", "Uvanlig", "Ofte", "Daglig"] },
        { ord: "Grundig", fasit: "Nøyaktig", alternativer: ["Raskt", "Slurvete", "Nøyaktig", "Tilfeldig"] },
        { ord: "Smal", fasit: "Trang", alternativer: ["Bred", "Romslig", "Trang", "Høy"] },
        { ord: "Bred", fasit: "Vid", alternativer: ["Smal", "Vid", "Kort", "Tynn"] },
        { ord: "Beskjed", fasit: "Melding", alternativer: ["Spørsmål", "Melding", "Historie", "Lekse"] },
        { ord: "Avslutte", fasit: "Gjøre ferdig", alternativer: ["Begynne", "Fortsette", "Gjøre ferdig", "Utsette"] },
        { ord: "Skynde", fasit: "Haste", alternativer: ["Hvile", "Haste", "Vente", "Sove"] },
        { ord: "Skade", fasit: "Ødelegge", alternativer: ["Hjelpe", "Ordne", "Ødelegge", "Beskytte"] },
        { ord: "Taus", fasit: "Stille", alternativer: ["Bråkete", "Stille", "Pratsom", "Sint"] },
        { ord: "Smart", fasit: "Klok", alternativer: ["Dum", "Klok", "Svak", "Langsom"] },
        { ord: "Forundret", fasit: "Overrasket", alternativer: ["Likegyldig", "Overrasket", "Sint", "Søvnig"] },
        { ord: "Bekymret", fasit: "Urolig", alternativer: ["Trygg", "Urolig", "Fornøyd", "Modig"] },
        { ord: "Lure", fasit: "Narre", alternativer: ["Hjelpe", "Narre", "Trøste", "Forklare"] },
        { ord: "Forlate", fasit: "Dra fra", alternativer: ["Besøke", "Dra fra", "Finne", "Møte"] },
        { ord: "Rasende", fasit: "Veldig sint", alternativer: ["Veldig glad", "Veldig trøtt", "Veldig sint", "Veldig redd"] },
        { ord: "Raus", fasit: "Sjenerøs", alternativer: ["Gjerrig", "Sjenerøs", "Sjenert", "Utålmodig"] },
        { ord: "Utholdende", fasit: "Seig", alternativer: ["Utålmodig", "Seig", "Svak", "Urolig"] },
        { ord: "Forsiktig", fasit: "Varsom", alternativer: ["Uredd", "Varsom", "Bråkete", "Hastig"] },
        { ord: "Rydde", fasit: "Ordne", alternativer: ["Rote", "Ordne", "Gjemme", "Miste"] },
        { ord: "Løgn", fasit: "Usannhet", alternativer: ["Sannhet", "Usannhet", "Spørsmål", "Beskjed"] },
        { ord: "Enighet", fasit: "Overensstemmelse", alternativer: ["Krangel", "Uenighet", "Overensstemmelse", "Uro"] },
        { ord: "Misunnelig", fasit: "Sjalu", alternativer: ["Stolt", "Sjalu", "Fornøyd", "Modig"] }
    ],

    // Setninger: Tekst med målord og 4 alternativer der kun ét er rett
    setninger: [
        { 
            tekst: "Søppeltømmeren SLENGTE posen vår over kanten.", 
            maallord: "SLENGTE",
            fasit: "kastet",
            alternativer: ["snublet", "sparket", "rev", "kastet"] 
        },
        { 
            tekst: "Isen TINTE på bakken.", 
            maallord: "TINTE",
            fasit: "smeltet",
            alternativer: ["tørket", "skrumpet", "frøys", "smeltet"] 
        },
        { 
            tekst: "Farfar var BORTREIST på bursdagen sin.", 
            maallord: "BORTREIST",
            fasit: "ikke hjemme",
            alternativer: ["ikke hjemme", "for gammel", "bråkete", "syk"] 
        },
        {
            tekst: "Katten SPURTET opp i treet da hunden kom.",
            maallord: "SPURTET",
            fasit: "Løp fort",
            alternativer: ["Gikk rolig", "Løp fort", "Krøp", "Hoppet"]
        },
        {
            tekst: "Læreren ROSTE elevene for den fine jobben.",
            maallord: "ROSTE",
            fasit: "Skrøt av",
            alternativer: ["Kjeftet på", "Skrøt av", "Glemte", "Hjalp"]
        },
        {
            tekst: "Hun var veldig NYSGJERRIG på hva som var i pakken.",
            maallord: "NYSGJERRIG",
            fasit: "Lyst til å vite",
            alternativer: ["Redd", "Lyst til å vite", "Kjedet seg", "Trøtt"]
        },
        {
            tekst: "Hunden ULTE mot månen om natten.",
            maallord: "ULTE",
            fasit: "Hylte",
            alternativer: ["Bjeffet", "Hylte", "Sov", "Spiste"]
        },
        {
            tekst: "Gutten var alltid HØFLIG mot de eldre.",
            maallord: "HØFLIG",
            fasit: "Hensynsfull og grei",
            alternativer: ["Uoppdragen", "Hensynsfull og grei", "Sint", "Stille"]
        },
        {
            tekst: "Elevrådet ØNSKET seg nye leker i friminuttet.",
            maallord: "ØNSKET",
            fasit: "Ville ha",
            alternativer: ["Kjøpte", "Ville ha", "Kastet", "Mistet"]
        },
// Legges til i 'setninger'-arrayen:
{
    tekst: "Vikingene prøvde å PLYNDRE landsbyen om natten.",
    maallord: "PLYNDRE",
    fasit: "Røve",
    alternativer: ["Bygge", "Røve", "Beskytte", "Besøke"]
},
{
    tekst: "Han var så GLAD da det endelig ble helg.",
    maallord: "GLAD",
    fasit: "Munter",
    alternativer: ["Trist", "Munter", "Sint", "Trøtt"]
},
{
    tekst: "Det kom en RAR lyd fra mørkeloftet.",
    maallord: "RAR",
    fasit: "Merkelig",
    alternativer: ["Kjent", "Vanlig", "Merkelig", "Pen"]
},
{
    tekst: "Jonas er min aller beste VENN på skolen.",
    maallord: "VENN",
    fasit: "Kamerat",
    alternativer: ["Fiende", "Ukjent", "Kamerat", "Nabo"]
},
{
    tekst: "Skoene ble helt VÅTE etter at vi gikk i vanndammen.",
    maallord: "VÅTE",
    fasit: "Bløte",
    alternativer: ["Tørre", "Varme", "Bløte", "Kalde"]
},
{
    tekst: "Filmen vi så på kino var skikkelig NIFS.",
    maallord: "NIFS",
    fasit: "Skummel",
    alternativer: ["Trygg", "Skummel", "Morsom", "Kjedelig"]
},
{
    tekst: "Elevrådet fikk tid til å SNAKKE om de nye reglene.",
    maallord: "SNAKKE",
    fasit: "Skravle",
    alternativer: ["Tie", "Skravle", "Lytte", "Skrive"]
},
{
    tekst: "Han mistet en stort TALLERKEN i gulvet, så det knuste.",
    maallord: "TALLERKEN",
    fasit: "Asjett",
    alternativer: ["Kopp", "Asjett", "Gaffel", "Gryte"]
},
{
    tekst: "Vannet i sjøen var veldig KALDT i mai.",
    maallord: "KALDT",
    fasit: "Kjølig",
    alternativer: ["Varmt", "Kjølig", "Mørkt", "Klokt"]
},
{
    tekst: "Vi skal MØTE klassen ved inngangen til parken.",
    maallord: "MØTE",
    fasit: "Treffe",
    alternativer: ["Unngå", "Miste", "Treffe", "Glemme"]
},
{
    tekst: "Læreren sa vi måtte lære om ADDISJON i mattetimen.",
    maallord: "ADDISJON",
    fasit: "Pluss",
    alternativer: ["Minus", "Ganging", "Pluss", "Deling"]
},
{
    tekst: "Det er ikke lov å TULLE når læreren snakker.",
    maallord: "TULLE",
    fasit: "Tøyse",
    alternativer: ["Kjede", "Tøyse", "Lære", "Høre"]
},
{
    tekst: "Bestefar fortalte en spennende FORTELLING om gamle dager.",
    maallord: "FORTELLING",
    fasit: "Historie",
    alternativer: ["Sang", "Historie", "Tegning", "Avis"]
},
{
    tekst: "Uglene regnes ofte som SMARTE dyr i eventyrene.",
    maallord: "SMARTE",
    fasit: "Kloke",
    alternativer: ["Dumme", "Kloke", "Trege", "Raske"]
},


        {
            tekst: "Den MODIGE jenta gikk inn i det mørke huset.",
            maallord: "MODIGE",
            fasit: "Tapre",
            alternativer: ["Redde", "Tapre", "Trøtte", "Forsiktige"]
        },
        {
            tekst: "Bestemor ble FORUNDRET da hun så den store pakken.",
            maallord: "FORUNDRET",
            fasit: "Overrasket",
            alternativer: ["Sint", "Søvnig", "Overrasket", "Skuffet"]
        },
        {
            tekst: "Han var RASENDE fordi noen hadde ødelagt sykkelen hans.",
            maallord: "RASENDE",
            fasit: "Veldig sint",
            alternativer: ["Veldig glad", "Veldig sint", "Veldig trøtt", "Veldig redd"]
        },
        {
            tekst: "Vi måtte SKYNDE OSS for å rekke bussen.",
            maallord: "SKYNDE OSS",
            fasit: "Forte oss",
            alternativer: ["Hvile", "Vente", "Forte oss", "Stoppe"]
        },
        {
            tekst: "Hun var FORNØYD med resultatet på prøven.",
            maallord: "FORNØYD",
            fasit: "Tilfreds",
            alternativer: ["Skuffet", "Bekymret", "Tilfreds", "Sint"]
        },
        {
            tekst: "De SJELDNE fuglene ble bare sett én gang i året.",
            maallord: "SJELDNE",
            fasit: "Uvanlige",
            alternativer: ["Vanlige", "Uvanlige", "Små", "Bråkete"]
        },
        {
            tekst: "Læreren ba elevene UNDERSØKE hva som hadde skjedd.",
            maallord: "UNDERSØKE",
            fasit: "Granske",
            alternativer: ["Glemme", "Gjemme", "Granske", "Gjette"]
        },
        {
            tekst: "Vakten skulle BESKYTTE slottet mot fiender.",
            maallord: "BESKYTTE",
            fasit: "Verne",
            alternativer: ["Forlate", "Verne", "Angripe", "Ødelegge"]
        },
        {
            tekst: "Han var så IVRIG etter å begynne med forsøket.",
            maallord: "IVRIG",
            fasit: "Engasjert",
            alternativer: ["Lei seg", "Trøtt", "Engasjert", "Uinteressert"]
        },
        {
            tekst: "Hun var FORSIKTIG da hun bar glasset.",
            maallord: "FORSIKTIG",
            fasit: "Varsom",
            alternativer: ["Hastig", "Varsom", "Bråkete", "Uoppmerksom"]
        },
        {
            tekst: "Vi måtte FULLFØRE oppgaven før vi kunne gå hjem.",
            maallord: "FULLFØRE",
            fasit: "Gjøre ferdig",
            alternativer: ["Begynne", "Utsette", "Gjøre ferdig", "Glemme"]
        },
        {
            tekst: "Han var TAUS under hele bilturen.",
            maallord: "TAUS",
            fasit: "Stille",
            alternativer: ["Pratsom", "Sint", "Stille", "Glad"]
        },
        {
            tekst: "Det var en ENORM snømann i hagen.",
            maallord: "ENORM",
            fasit: "Kjempestor",
            alternativer: ["Bitteliten", "Kjempestor", "Skjev", "Gammel"]
        },
        {
            tekst: "Hun ble BEKYMRET da lillebroren ikke kom hjem.",
            maallord: "BEKYMRET",
            fasit: "Urolig",
            alternativer: ["Fornøyd", "Urolig", "Stolt", "Overrasket"]
        },
        {
            tekst: "Han prøvde å NARRE vennene sine med en spøk.",
            maallord: "NARRE",
            fasit: "Lure",
            alternativer: ["Hjelpe", "Trøste", "Lure", "Advare"]
        },
        {
            tekst: "Vi måtte FORLATE hytta før stormen kom.",
            maallord: "FORLATE",
            fasit: "Dra fra",
            alternativer: ["Besøke", "Dra fra", "Rydde", "Finne"]
        },
        {
            tekst: "Det var viktig å VÆRE RAUS og dele med de andre.",
            maallord: "RAUS",
            fasit: "Sjenerøs",
            alternativer: ["Gjerrig", "Sjenerøs", "Sjenert", "Urolig"]
        },
        {
            tekst: "Han fortalte en LØGN for å slippe unna trøbbel.",
            maallord: "LØGN",
            fasit: "Usannhet",
            alternativer: ["Forklaring", "Beskjed", "Usannhet", "Spørsmål"]
        },
        {
            tekst: "Hun var SJALU fordi broren fikk en større gave.",
            maallord: "SJALU",
            fasit: "Misunnelig",
            alternativer: ["Stolt", "Misunnelig", "Fornøyd", "Modig"]
        }

    ]
};