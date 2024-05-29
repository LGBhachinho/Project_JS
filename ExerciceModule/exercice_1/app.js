
// Permet d'exporter plusieurs valeurs et doit être importé en utilisant les mêmes noms.

import { pi, somme } from './outils.js';

console.log(pi); // 3.14159
console.log(somme(2, 3)); // 5

// Chaque module peut avoir un seul export par défaut, qui peut être importé sans avoir à utiliser le même nom.

import test from "./outils2.js"

test()