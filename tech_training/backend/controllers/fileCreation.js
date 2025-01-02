import fs from 'node:fs';

const dirFolder='./files/';
export const fileCreation = (name, content) => {
    fs.writeFile(dirFolder + name, JSON.stringify(content), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error creating file");
      } else {
        res.send("File created successfully");
      }
    });
};


export default fileCreation;