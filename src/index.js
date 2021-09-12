import './styles/style.scss';

const Post = require('./Post.js');
const Analytics = require('./analytics.js');

const post = new Post('Hello');
window.analytics = Analytics();

console.log(post);
