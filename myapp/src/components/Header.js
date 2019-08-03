import React from 'react';


const Header = () => {
  return (
    <div class="container">
      <div class="">
        <img src="/favicon.ico" alt="logo" class="img-circle"/>
      </div>
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">CLASS LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ADD CLASS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">STUDENT LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">ADD STUDENT</a>
          </li>
        </ul>
      </div>
      <hr class="my-4"/>

    </div>
  )
}

export default Header