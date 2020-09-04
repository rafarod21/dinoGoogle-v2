import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* colors */
  body {
    --background-color: #fff;
    --error-code-color: var(--google-gray-700);
    --google-blue-100: rgb(210, 227, 252);
    --google-blue-300: rgb(138, 180, 248);
    --google-blue-600: rgb(26, 115, 232);
    --google-blue-700: rgb(25, 103, 210);
    --google-gray-100: rgb(241, 243, 244);
    --google-gray-300: rgb(218, 220, 224);
    --google-gray-500: rgb(154, 160, 166);
    --google-gray-50: rgb(248, 249, 250);
    --google-gray-600: rgb(128, 134, 139);
    --google-gray-700: rgb(95, 99, 104);
    --google-gray-800: rgb(60, 64, 67);
    --google-gray-900: rgb(32, 33, 36);
    --heading-color: var(--google-gray-900);
    --link-color: rgb(88, 88, 88);
    --popup-container-background-color: rgba(0,0,0,.65);
    --primary-button-fill-color-active: var(--google-blue-700);
    --primary-button-fill-color: var(--google-blue-600);
    --primary-button-text-color: #fff;
    --quiet-background-color: rgb(247, 247, 247);
    --secondary-button-border-color: var(--google-gray-500);
    --secondary-button-fill-color: #fff;
    --secondary-button-hover-border-color: var(--google-gray-600);
    --secondary-button-hover-fill-color: var(--google-gray-50);
    --secondary-button-text-color: var(--google-gray-700);
    --small-link-color: var(--google-gray-700);
    --text-color: var(--google-gray-700);
    /* background: var(--background-color); */
    /* color: var(--text-color); */
    /* word-wrap: break-word; */

    @media (prefers-color-scheme: dark) {
      #root {
        --background-color: var(--google-gray-900);
        --error-code-color: var(--google-gray-500);
        --heading-color: var(--google-gray-500);
        --link-color: var(--google-blue-300);
        --primary-button-fill-color-active: rgb(129, 162, 208);
        --primary-button-fill-color: var(--google-blue-300);
        --primary-button-text-color: var(--google-gray-900);
        --quiet-background-color: var(--background-color);
        --secondary-button-border-color: var(--google-gray-700);
        --secondary-button-fill-color: var(--google-gray-900);
        --secondary-button-hover-fill-color: rgb(48, 51, 57);
        --secondary-button-text-color: var(--google-blue-300);
        --small-link-color: var(--google-blue-300);
        --text-color: var(--google-gray-500);
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Segoe UI', Tahoma, sans-serif;
    /* font-size: 75%; */
  }
`;

export default GlobalStyles;