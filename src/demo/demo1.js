/**
 * 函数式组件
 */
import ReactDOM from 'react-dom';
import { createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

function myTitle(title) {
    return createElement('h1', {
        style: { color: '#880088', userSelect: 'none', cursor: 'pointer' },
        className: 'bg-pink no-margin',
        onClick: function() {
            console.log('你点击了标题');
        },
    }, title || '这是一个标题');
}

let count = 0;
function render() {
    requestAnimationFrame(render);
    ReactDOM.render(myTitle(`计数${++count}`), app); // app === document.getElementById('app')
}
render();