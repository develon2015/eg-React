import Two from 'two';
import React, { createElement, Component, StrictMode, } from 'react';
import ReactDOM from 'react-dom';

document.body.innerHTML = `<div id="app"><h1>ok</h1></div>`;
document.head.innerHTML += `
<style>
#app {
    min-height: 100vh;
    min-width: 100vw;
    background: black;
}
.title {
    background: green;
    color: white;
}
</style>`;

class TwoMgr {
    constructor(container) {
        this.two = new Two({ fullscreen: true, });
        this.two.appendTo(container);
    }
    drawPoint(x, y) {
        const circle = this.two.makeCircle(x, y, 20);
        circle.noStroke();
        circle.fill = 'red';
    }
    clear() {
        this.two.clear();
    }
    update() {
        this.two.update();
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 };
    }
    componentDidMount() {
        globalThis.mgr = new TwoMgr(globalThis.app);
        let [Ox, Oy] = ([innerWidth / 2, innerHeight / 2]);
        let [x, y] = [Ox, Oy];
        let frame = 60;
        let seta = Math.PI * 2 / frame;
        let i = 0;
        let r = 60;
        function anima() {
            i++; if (i > frame) i = 0;
            requestAnimationFrame(anima); // 注册动画帧
            x = Ox + r * Math.cos(seta * i);
            y = Oy + r * Math.sin(seta * i);
            mgr.clear();
            mgr.drawPoint(x, y);
            mgr.update();
        }
        anima();
    }
    render() {
        return React.createElement('div', null,
            React.createElement('h1', { className: 'title' },
                this.props.title
            ),
        );
    }
}

ReactDOM.render(
    React.createElement(React.StrictMode, null,
        React.createElement(App, { title: 'React入门 - 2D绘图' } // App组件及其参数
        ),
    ),
    globalThis.app, // App组件要挂载的父容器
    () => { // 回调函数
        console.log(`React DOM 已挂载`);
    }
);