import React from 'react';

const check_icon = <svg class="bi bi-check-circle mx-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd" />
</svg>

const user_icon = <svg class="bi bi-people-circle" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
  <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd" />
</svg>

class Navbar extends React.Component {
  render() {
    return <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
      <NavbarToggler></NavbarToggler>
      <NavbarBrand></NavbarBrand>
      <NavbarSearch></NavbarSearch>
      <NavbarUser></NavbarUser>
    </nav>
  }
}


function NavbarToggler(props) {
  return <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#left-sidebar" aria-controls="left-sidebar" aria-expanded="false" aria-label="Toggle sidebar">
    <span class="navbar-toggler-icon"></span>
  </button>
}

function NavbarBrand(props) {
  return <a class="navbar-brand" href="index.html">
      {check_icon}
      ToDo Manager
    </a>
}

function NavbarSearch(props) {
  return <form class="form-inline my-2 my-lg-0 mx-auto d-none d-sm-block" action="#" role="search" aria-label="Quick search">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search query"></input>
  </form>
}

function NavbarUser(props) {
  return <div class="navbar-nav ml-md-auto">
    <a class="nav-item nav-link" href="#userIcon">
      {user_icon}
    </a>
  </div>
}

export { Navbar }