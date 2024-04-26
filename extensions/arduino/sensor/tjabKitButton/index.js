const tjabKitButton = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitButton.name',
        default: 'Button'
    }),
    extensionId: 'tjabKitButton',
    version: '1.0.0',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitButton.png`,
    description: formatMessage({
        id: 'tjabKitButton.description',
        default: 'Single button module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['sensor'],
    helpLink: null
});

module.exports = tjabKitButton;
