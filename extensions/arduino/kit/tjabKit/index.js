const tjabKitExt = () => ({
    name: 'Controller-B+',
    extensionId: 'tjabKitExt',
    version: '1.0.1',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    description: 'Tj Controllers-B+ kit device',
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: null
});

module.exports = tjabKitExt;
