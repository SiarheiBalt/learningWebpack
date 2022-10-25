import Post from './Post';
import json from './assets/json.json';
import './styles/styles.css';

const post = new Post('Webpack Post Title');

console.log(`Post tot string:`, post.toString());
console.log(`Post tot string:`, post.uppercaseTitle);
console.log(`JSON:`, json);
