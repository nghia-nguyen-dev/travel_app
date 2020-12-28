import './styles/style.scss'
import { clickHandler } from './js/app'

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.querySelector(`button`);
    generateBtn.addEventListener(`click`, clickHandler);
})