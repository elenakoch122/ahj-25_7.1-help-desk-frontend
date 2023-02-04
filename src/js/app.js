import Board from './Board';
import StateService from './StateService';

const stateService = new StateService(localStorage);
const board = new Board(stateService);

board.init();

// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     try {
//       const data = JSON.parse(xhr.responseText);
//     } catch (e) {
//       console.error(e);
//     }
//   }
// });
