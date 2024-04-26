const tjabKitLed = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitLed.name',
        default: 'Led'
    }),
    extensionId: 'tjabKitLed',
    version: '1.0.0',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitLed.png`,
    description: formatMessage({
        id: 'tjabKitLed.description',
        default: 'Single led module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['display'],
    helpLink: null
});

module.exports = tjabKitLed;
