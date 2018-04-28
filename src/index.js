// Go for it! :)

// Example for config usage, uses development/production config as needed
import { greeting, name } from 'config';

const title = document.createElement('h1');
title.innerHTML = `${greeting}, ${name}`;

const main = document.createElement('p');
main.innerHTML = 'You are ready to start your Project!';

document.body.appendChild(title);
document.body.appendChild(main);
