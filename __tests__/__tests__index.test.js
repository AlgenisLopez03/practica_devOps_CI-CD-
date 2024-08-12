// __tests__/index.test.js
const fs = require('fs');
const path = require('path');

test('verifica que el archivo index.html contiene Hola Mundo', () => {
    const filePath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    expect(htmlContent).toMatch(/Hola Mundo/);
});
