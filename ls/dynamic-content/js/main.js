import flags from './model/flags.js';

document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');

    const createChild = ({name, image}) => {

        const flag = document.createElement('div');
        flag.classList.add("flag", "col-2", "my-2", "text-center");

        const img = document.createElement('img');
        img.src = image;
        img.alt = name;

        const p = document.createElement('p');
        p.innerText = name;

        flag.appendChild(img);
        flag.appendChild(p);

        container.appendChild(flag);

    }

    flags.forEach(createChild);

});