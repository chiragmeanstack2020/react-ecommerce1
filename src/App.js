import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <header>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
      </header>
      <main>
        <div class="left">
          <p>
            men <span>11</span>
          </p>
        </div>
        <div class="right">
          <div class="filters">
            <button>
              <i class="fa fa-sort" /> x
            </button>
            <input placeholder="search...." />
          </div>
          <div class="products">
            <div class="item">
              <img src="" />
              <div>title</div>
              <div>old</div>
              <div>new</div>
              <div>rating</div>
              <div>discount</div>
              <div>tags</div>
              <div>
                <i class="fa fa-shopping-cart" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>createed by chirag</footer>
    </div>
  );
}
