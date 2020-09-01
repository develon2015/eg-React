/**
 * 根据官网描述, 我们可以只调用一次ReactDOM.render挂载一个根节点.
 * 应用程序状态更新就刷新一次根节点是可以的, React只会更新变化的节点, 但是整个树节点都进行一次比对是冗余的.
 * 我们来看这种不推荐的方式.
 */
import ReactDOM from 'react-dom';
import { StrictMode, createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

let count = 0;

function MyTitle() {
    return createElement('div', {
        style: {
            fontSize: '38px',
            color: '#880088',
            background: 'pink',
        },
    }, `我觉得不行 +${count}`, ' => ', createElement('button', {
        style: {
            fontSize: '38px',
        },
        onClick() {
            count++;
            render(); // 应用程序状态发生变化, 刷新根节点
        },
    }, '+1'));
}

function render() {
    ReactDOM.render(createElement(StrictMode, null, MyTitle()), app); // 注: 严格模式用途未知
}
render(); // 立即挂载根节点