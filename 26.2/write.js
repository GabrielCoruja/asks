const fs = require('fs').promises;

const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!!']

async function writeFile() {
  const result = files.map( async (result, index) => await fs.writeFile(result, words[index]));
  const resultPromise = await Promise.all(result);
}

async function readAndWriteFile() {
  const readFiles = files.map( async (result) => await fs.readFile(result, 'utf-8'));

  console.log('readFiles antes do Promise.all', readFiles);

  const resultPromise = await Promise.all(readFiles);

  console.log('readFiles depois do Promise.all', readFiles);

  console.log('resultPromise', resultPromise);

  await fs.writeFile('teste.txt', `${resultPromise.join(' ')}`);
}

readAndWriteFile()
