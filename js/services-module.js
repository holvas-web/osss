document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service-select");
    const serviceDetails = document.getElementById("service-details");

    const serviceDescriptions = {
        consultation: `
            <h3>Konsultacja</h3>
            <p><b>Cena:</b> 100 zł</p>
            <p><b>Zabieg:</b> Diagnoza zmian w obrębie skóry i paznokci. Przedstawienie i omówienie terapii.</p>
            <p><b>Czas trwania:</b> 30 min.</p>
        `,
        "pedicure-podologiczny": `
            <h3>Pedicure podologiczny</h3>
            <p><b>Cena:</b> od 200 zł</p>
            <p><b>Zabieg:</b> Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, aplikacja preparatów kosmetycznych.</p>
            <p><b>Czas trwania:</b> do 90 min.</p>
        `,
        "medical-pedicure": `
            <h3>Pedicure leczniczy</h3>
            <p><b>Cena:</b> od 250 zł</p>
            <p><b>Zabieg:</b> Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, aplikacja preparatów leczniczych.</p>
            <p><b>Czas trwania:</b> do 120 min.</p>
        `,
        "pedicure-klasyczny": `
            <h3>Pedicure klasyczny z lakierem hybrydowym</h3>
            <p><b>Cena:</b> od 220 zł</p>
            <p><b>Zabieg:</b> Оpracowanie podeszwy stóp, skrócenie  i oczyszczenie paznokci, naniesienie pokrycia hybrydowego, aplikacja preparatów kosmetycznych.</p>
            <p><b>Czas trwania:</b> do 120 min.</p>
        `,
        "pedicure-spa":`
            <h3>Pedicure SPA (pedicure japoński)</h3>
            <p><b>Cena:</b> od 220 zł</p>
            <p><b>Zabieg:</b> Оpracowanie podeszwy stóp, skrócenie  i oczyszczenie paznokci, aplikacja preparatów kosmetycznych, wykonanie pedicure metodą mechanicznego wcierania pasty specjalniej leczniczej w płytkę paznokcia i polerowanie pudrem mineralnym.</p>
            <p><b>Czas trwania:</b> do 120 min.</p>
        `,
        "masaz-refleks":`
            <h3>Masaż stóp z elementami refleksologii</h3>
            <p><b>Cena:</b> 80 zł</p>
            <p><b>Zabieg:</b> Оpracowanie podeszwy stóp różnymi technikami masażą z elementami refleksologii.</p>
            <p><b>Czas trwania:</b> 30 min.</p>
        `,
        "kapiele":`
            <h3>Kąpiele parafinowe stóp (z masażem)</h3>
            <p><b>Cena:</b> od 100 zł</p>
            <p><b>Zabieg:</b> Оpracowanie stóp, aplikacja preparatów kosmetycznych, zanurzenie w kąpieli parafinowej.</p>
            <p><b>Czas trwania:</b> 60 min.</p>
        `,
        "kapiele-masaz":`
            <h3>Kąpiele parafinowe stóp i dłoni (z masażem)</h3>
            <p><b>Cena:</b> od 200 zł</p>
            <p><b>Zabieg:</b> Оpracowanie stóp i dłoni, aplikacja preparatów kosmetycznych, zanurzenie w kąpieli parafinowej, masaż.</p>
            <p><b>Czas trwania:</b> do 120 min.</p>
        `,
        "grzybica":`
            <h3>Grzybica paznokci</h3>
            <p><b>Cena:</b> od 150 zł</p>
            <p>Diagnoza podologiczna, opracowanie i leczenie, aplikacja produkty leczniczego.</p>
            <p><b>Czas trwania:</b> do 60 min.</p>
        `,
        "brodaweki":`
            <h3>Terapia brodawek wirusowych</h3>
            <p><b>Cena:</b> 150 zł (1 wizyta), 100 zł (2 wizyta)</p>
            <p>Opracowanie brodawek, leczenie.</p>
            <p><b>Czas trwania:</b> do 30 min.</p>
        `,
        "paznokiec":`
            <h3>Paznokieć wrastający</h3>
            <p><b>Cena:</b> od 100 zł</p>
            <p>Opracowanie wrastającej części i leczenie paznokcia.</p>
            <p><b>Czas trwania:</b> do 60 min.</p>
        `,
        "modzel":`
            <h3>Usunięcie modzela</h3>
            <p><b>Cena:</b> od 100 zł</p>
            <p>Usunięcie modzela lub odcisku oraz założenie odciązenia.</p>
            <p><b>Czas trwania:</b> do 60 min.</p>
        `,
        "piaty":`
            <h3>Leczenie pękających pięt</h3>
            <p><b>Cena:</b> od 150 zł</p>
            <p>Opracowanie pęknięć, aplikacja preparatów leczniczych, nałożenie bandaża.</p>
            <p><b>Czas trwania:</b> do 60 min.</p>
        `,
        "unibrace":`
            <h3>Instalacja system UniBrace</h3>
            <p><b>Cena:</b> od 200 zł</p>
            <p><b>Zabieg:</b> Poprawa kształtu, zapobieganie procesu zapalnego i wrastaniu paznokcia w skórę.</p>
            <p><b>Czas trwania:</b> do 30 min. (1 palec)</p>
        `,
        "klamra-tytanowa":`
            <h3>Klamra tytanowa</h3>
            <p><b>Cena:</b> od 200 zł</p>
            <p><b>Zabieg:</b> Poprawa kształtu, zapobieganie procesu zapalnego i wrastaniu paznokcia w skórę.</p>
            <p><b>Czas trwania:</b> do 30 min. (1 palec)</p>
        `,
        "odcisk":`
            <h3>Usunięcie odcisku</h3>
            <p><b>Cena:</b> od 100 zł</p>
            <p>Usunięcie modzela lub odcisku oraz założenie odciązenia.</p>
            <p><b>Czas trwania:</b> do 60 min.</p>
        `,
    };

    serviceSelect.addEventListener("change", function () {
        const selectedValue = serviceSelect.value;
        serviceDetails.innerHTML = serviceDescriptions[selectedValue] || "";
        serviceDetails.classList.remove("hidden");
    });
});
