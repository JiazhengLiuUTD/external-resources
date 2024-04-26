const insertSourceCode = formatMessage => ({
    name: formatMessage({
        id: 'insertSourceCode.name',
        default: 'Insert Source Code'
    }),
    extensionId: 'insertSourceCode',
    version: '1.1.0',
    supportDevice: ['arduinoTj2560','tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/insertSourceCode.png`,
    description: formatMessage({
        id: 'insertSourceCode.description',
        default: 'Insert the source code directly into the blocks, so that professional ' +
            'users can realize some more advanced functions.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['other'],
});

module.exports = insertSourceCode;
