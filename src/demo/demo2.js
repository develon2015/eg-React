/**
 * 函数式组件 + 状态
 */
import ReactDOM from 'react-dom';
import { createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

function MyTitle(state) {
    let _title = '这是一个标题';
    let _container = null;
    let _state = {
        style: { color: '#880088', userSelect: 'none', cursor: 'pointer' },
        className: 'bg-pink no-margin',
        onClick: function() {
            console.log('这是标题的默认点击事件');
        },
        ...state,
    };
    // 以箭头函数方式导出render()接口
    this.render = () => {
        let react_dom = createElement('h1', _state, _title);
        _container && ReactDOM.render(react_dom, _container); // 如果挂载到容器上, 则使用ReactDOM渲染
    }
    // 以箭头函数方式导出setState()接口
    this.setState = state => {
        _state = { ..._state, ...state };
        this.render(); // MyTitle()函数通过new关键字调用, 所以该箭头函数中的this指向实例
    };
    // 以箭头函数方式导出mount()接口
    this.mount = container => {
        _container = container;
    };
    // 自定义接口
    this.setTitle = title => {
        _title = title;
        this.render();
    };
}

// 创建MyTitle实例
globalThis.inst_title = new MyTitle(); // app === document.getElementById('app')
inst_title.mount(app);
inst_title.render();

// 修改MyTitle状态, DOM自动更新
let count = 0;
function $render() {
    requestAnimationFrame($render);
    inst_title.setTitle(`计数开始 ${++count}`);
    inst_title.setState({
        onClick() {
            console.log(`于${count}按下`);
        },
    });
}
$render();