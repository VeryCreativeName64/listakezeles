const lista = [
  5, 4, 3, 2, 1, 26, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(lista.join());
lista.sort((a, b) => {
  console.log(a, b);
  return Math.random() - 0.5;
});
console.log(lista.join());

const objLista = [
  { nev: "Jenő", kor: 23, nem: "férfi" },
  { nev: "Jani", kor: 23, nem: "férfi" },
  { nev: "Juli", kor: 23, nem: "nő" },
  { nev: "Jácint", kor: 23, nem: "férfi" },
  { nev: "Béla", kor: 23, nem: "férfi" },
];

/* rendezzük a listát név szerint */

objLista.sort((a, b) => {
  return a.nev.localeCompare(b.nev);
});
console.log(JSON.stringify(objLista));

objLista.sort((a, b) => {
  return a.kor - b.kor;
});
console.log(JSON.stringify(objLista));

/*a sort helyben rendezi a tömböt, nem ad vissza új tömböt*/

const ujLista = lista.filter((a) => {
  return a > 10;
});
console.log(ujLista.join());

const parosLista = lista.filter((a) => {
  return a % 2 === 0;
});
console.log(parosLista.join());

const noObjLista = objLista.filter((a) => {
  return (a.nem == "nő");
});

megjelenit(objLista, document.querySelector(".tartalom"));

function megjelenit(lista, szuloElem) {
  let html = "";
  lista.forEach((element) => {
    console.log(element);
    html += `<p>${element.nev}, ${element.kor}, ${element.nem}</p>`;
  });
  szuloElem.innerHTML = html;
}

const kivalasztElem = document.querySelector("#valaszt");
console.log(kivalasztElem.value);
kivalasztElem.addEventListener("change", () => {
  console.log(kivalasztElem.value)
  
  switch (kivalasztElem.value) {
    case "valassz":
        megjelenit(objLista, document.querySelector(".tartalom"));
        break;
    case "nevNovekvo":
        objLista.sort((a, b) => {return a.nev.localeCompare(b.nev)})
        megjelenit(objLista, document.querySelector(".tartalom"));
        break;
    case "nevCsokk":
        objLista.sort((a, b) => {return b.nev.localeCompare(a.nev)})
        megjelenit(objLista, document.querySelector(".tartalom"));
        break;
    case "nok":
        const noObjLista = objLista.filter((a) => {
            return (a.nem == "nő");
          });
          megjelenit(noObjLista, document.querySelector(".tartalom"));
        break;
    case "ferfiak":
        const ferfiObjLista = objLista.filter((a) => {
            return (a.nem == "férfi");
          });
          megjelenit(ferfiObjLista, document.querySelector(".tartalom"));
        break;
    case "nagykoru":
        const felnott = objLista.filter(elem => elem.kor > 18)
        megjelenit(felnott, document.querySelector(".tartalom"))
        break;
    
  };
});
