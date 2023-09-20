import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';
const laughimg = document.getElementById('laughimg');
laughimg.src = laughing;
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();
