import '../styles/main.scss';
import '../app/view/start-page.html';
import { VIEWS } from "./view/views.namespaces";
import HtmlLoader from "./modules/html-loader/html-loader";


const appElement = document.querySelector('#app');
const htmlLoader = new HtmlLoader();


htmlLoader.load(appElement, VIEWS.startPage);
