const tjabKitColorSensor = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitColorSensor.name',
        default: 'Color Sensor'
    }),
    extensionId: 'tjabKitColorSensor',
    version: '1.1.0',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitColorSensor.png`,
    description: formatMessage({
        id: 'tjabKitColorSensor.description',
        default: 'Color sensor module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: null
});

module.exports = tjabKitColorSensor;
