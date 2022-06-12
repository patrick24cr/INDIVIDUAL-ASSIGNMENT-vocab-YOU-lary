import renderToDom from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';
import logo from '../../../images/logo.png';
import { showWords } from './showWords';
import { getWords, getCategories } from '../../api/wordData';
import { showCategories } from './showCategories';

const domBuilder = (uid) => {
  clearDom();

  const skeletonString = `<div id="login-form-container"></div>
  <div id="nav-bar"></div>
  <div id="main">
  <div id="filters" class="filters"></div>
  <div id="words" class="words"></div>
  </div>`;

  renderToDom(skeletonString, '#app');

  const navString = `<nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img id="logo" class="logo" src="${logo}" alt="" width="auto" height="40">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href='#' id="create-btn">Create Entry</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Words
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#" id="sort-alpha">Alphabetical</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" id="sort-new">Newest</a></li>
          <li><a class="dropdown-item" href="#"id="sort-old">Oldest</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" id="community-status" data-bs-toggle="dropdown" aria-expanded="false">
          Community Words: visible</a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#" id="community-toggle">Hide</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
    </form>
    <button id="google-auth" class="btn btn-outline-danger google-auth">Log Out</button>
  </div>
</div>
</nav>`;
  renderToDom(navString, '#nav-bar');
  getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
  getWords().then((wordArray) => showWords(wordArray, uid));
};

export default domBuilder;
