import './index.html';
import './style.css';
import 'file-loader?context=src&name=[path][name].[ext]!./public/react-dom.development.js';
import 'file-loader?context=src&name=[path][name].[ext]!./public/react.development.js';
import 'file-loader?context=src&name=[path][name].[ext]!./public/two.min.js';
import 'file-loader?context=src&name=[path][name].[ext]!./demo/demo7.js';