const tjabKitGrayscaleSensor = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitGrayscaleSensor.name',
        default: 'GrayscaleSensor'
    }),
    extensionId: 'tjabKitGrayscaleSensor',
    version: '1.0.2',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitGrayscaleSensor.jpg`,
    description: formatMessage({
        id: 'tjabKitGrayscaleSensor.description',
        default: 'Single GrayscaleSensor module.'
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

module.exports = tjabKitGrayscaleSensor;
