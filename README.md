# stringDifference

`stringDifference` est une fonction qui calcule les différences entre deux chaînes de caractères. Elle renvoie un tableau d'objets, chacun contenant les indices de début et de fin de la différence dans la chaîne de base, ainsi que la sous-chaîne différente.

## Installation

```bash
npm install string-differencer
```

## Utilisation

```javascript
const stringDifference = require('string-differencer');

let baseString = 'Bonjour, le monde !';
let comparisonString = 'Bonjour, lx monde !';

let differences = stringDifference(baseString, comparisonString);

console.log(differences);
// Résultat : [ { startIndex: 10, endIndex: 10, difference: 'l' } ]
```

Dans l'exemple ci-dessus, la fonction `stringDifference` est utilisée pour trouver les différences entre les chaînes 'Bonjour, le monde !' et 'Bonjour, lx monde !'. La fonction renvoie un tableau d'objets, chacun contenant l'indice de début, l'indice de fin et la sous-chaîne différente de la chaîne de base.

## Licence

MIT
