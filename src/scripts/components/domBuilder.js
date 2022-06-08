import renderToDom from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';
import signMeOut from '../helpers/signOut';
import logo from '../../../images/logo.png';
import { showWords } from './showWords';
import sampleData from '../../../sample_data/words.json';

const domBuilder = () => {
  const navString = `<nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img class="logo" src="${logo}" alt="" width="auto" height="40">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Create Entry</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Add Category</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Alphabetical</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Newest</a></li>
          <li><a class="dropdown-item" href="#">Oldest</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
    <button id="google-auth" class="btn btn-outline-danger google-auth">Log Out</button>
  </div>
</div>
</nav>`;

  clearDom();
  renderToDom(navString, '#nav-bar');
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
  const sampleArray = Object.values(sampleData);
  showWords(sampleArray);
};

export default domBuilder;
