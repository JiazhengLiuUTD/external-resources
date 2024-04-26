const tjabKitLineTraker = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitLineTraker.name',
        default: 'Line Tracker'
    }),
    extensionId: 'tjabKitLineTraker',
    version: '1.0.1',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitLineTraker.png`,
    description: formatMessage({
        id: 'tjabKitLineTraker.description',
        default: 'Single line tracker module.'
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

module.exports = tjabKitLineTraker;
