import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background-color:#f0f0f5;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button, textarea {
  font: 400 18px Roboto, sans-serif;
  color:#24292e;
  font-size:14px;
  line-height:1.5;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}


`;
