const tj2560ColorSensor = formatMessage => ({
    name: formatMessage({
        id: 'tj2560ColorSensor.name',
        default: 'Color Sensor'
    }),
    extensionId: 'tj2560ColorSensor',
    version: '1.1.0',
    supportDevice: ['arduinoTj2560', 'TJ2560HRC_arduinoTj2560'],
    author: 'Bright',
    iconURL: `asset/tj2560ColorSensor.jpg`,
    description: formatMessage({
        id: 'tj2560ColorSensor.description',
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

module.exports = tj2560ColorSensor;
