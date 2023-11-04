//const mocker = require("../mock");

test("mock function", () => {
  //empty jest.fn() return undifined
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("saber")).toBe("Hello saber");
  expect(mocker("saber2")).toBe("Hello saber2");
  expect(mocker("saber3")).toBe("Hello saber3");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenLastCalledWith("saber3");
  //expect(mocker).toHaveBeenCalledWith("saber10");
});

/*
Les "mock functions" ou "fonctions simulées" en français

Les "mock functions" sont des fonctions simulées qui vous permettent de simuler le comportement d'une fonction ou d'un module réel. 
Cela peut être utile dans de nombreuses situations, par exemple pour simuler des appels à des services externes, 
des fonctions coûteuses en temps de calcul, ou pour isoler le code que vous testez d'autres parties de votre application. 

Voici comment vous pouvez utiliser des "mock functions" avec Jest :

1-Créer une fonction simulée (mock function) :

const maFonctionSimulee = jest.fn();

2-Configurer le comportement de la fonction simulée :
maFonctionSimulee.mockReturnValue(42); // Définir la valeur de retour
maFonctionSimulee.mockImplementation(() => 42); // Utiliser une fonction pour la mise en œuvre

3-Utiliser la fonction simulée dans vos tests :
expect(maFonctionSimulee()).toBe(42); // Vérifier le comportement simulé

4-Vérifier comment la fonction simulée a été appelée :
expect(maFonctionSimulee).toHaveBeenCalled(); // Vérifier si la fonction a été appelée
expect(maFonctionSimulee).toHaveBeenCalledWith(1, 2); // Vérifier les arguments de l'appel
expect(maFonctionSimulee).toHaveBeenCalledTimes(3); // Vérifier le nombre d'appels

Ces "mock functions" sont très utiles pour isoler le code que vous testez, pour vérifier comment il interagit avec d'autres parties de votre application, 
et pour simuler le comportement de fonctions ou de modules externes. 
Cela rend vos tests plus prévisibles et vous permet de cibler spécifiquement les parties de votre code que vous souhaitez tester.

*/
