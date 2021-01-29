**Exercício 3**: Crie um arquivo chamado `simpsons.json` e popule com os seguintes dados:

[ { "id": "1", "name": "Homer Simpson" }, { "id": "2", "name": "Marge Simpson" }, { "id": "3", "name": "Bart Simpson" }, { "id": "4", "name": "Lisa Simpson" }, { "id": "5", "name": "Maggie Simpson" }, { "id": "6", "name": "Ned Flanders" }, { "id": "7", "name": "Montgomery Burns" }, { "id": "8", "name": "Nelson Muntz" }, { "id": "9", "name": "Krusty" }, { "id": "10", "name": "Milhouse Van Houten" } ] 

A partir disso, faça os próximos itens usando `callback`, `async/await` e `Promise (.then)`.

1. Crie uma função que leia e imprima todos o dados deste arquivo.
2. Crie uma função que leia e receba como parâmetro o nome de algum personagem dentro da lista passada e imprima apenas os dados deste personagem.
3. Crie uma função que leia e imprima os dados dos personagens com o `id` de 1 a 5.
4. Crie uma função que altere o arquivo `simpsons.json` retirando os personagens com `id` 10 e 6.
5. Crie uma função que leia o arquivo `simpsons.json` e escreva em um arquivo chamado `simpsonFamily.json` os personagens com `id` de 1 a 4.
6. Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz`.
7. Crie uma função que altere no arquivo `simpsonFamily.json` o personagem `Nelson Muntz` pela personagem `Maggie Simpson`.


**Exercício 4**: O exercícios a baixo serão focados no uso de `Promise.all`

1. Crie uma constante `files` que receba este array com nomes de arquivos`['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']`.
2. Crie outra constante `words` que receba este array `['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']`.
3. Crie uma função que crie os 5 arquivos do primeiro array e que cada arquivo deste receba a palavra correspondente ao seu índice no segundo array, ou seja
será criado um `file1.txt` tendo em seu conteúdo a palavra `Finalmente`, o arquivo `file2.txt` terá em seu conteúdo a palavra `estou`...
4. Crie uma função que faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado `fileAll.txt`. 
O conteúdo do arquivo `fileAll.txt` deverá ser `Finalmente estou usando Promise.all !!!`.
