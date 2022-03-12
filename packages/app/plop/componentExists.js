const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(path.join(__dirname, '../src/components'))

module.exports = (component) => {
    return components.map(c => c.toLowerCase()).includes(component.toLowerCase());
}