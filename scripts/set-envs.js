
//! requiero writeFileSync y mkdirSync para poder crear la carpeta y archivos.
const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

//! Aquí es donde va a crear el archivo
const targetPath = './src/environments/environments.ts';

//! Contenido de mis variables de entorno
const envFileContent = `
  export const environment = {
    mapbox_key: "${process.env['MAPBOX_KEY']}",
    otra: "PROPIEDAD",
  }
`;

//! Creamos la carpeta y con recursive indicamos que si existe no la cree para que no nos arroje un error.
mkdirSync('./src/environments', { recursive: true });
//! cargamos el contenido del archivo con el targetPath y el envFileContent
writeFileSync( targetPath, envFileContent);


