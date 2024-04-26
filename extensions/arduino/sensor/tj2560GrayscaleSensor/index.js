const tj2560GrayscaleSensor = formatMessage => ({
    name: formatMessage({
        id: 'tj2560GrayscaleSensor.name',
        default: 'GrayscaleSensor'
    }),
    extensionId: 'tj2560GrayscaleSensor',
    version: '1.0.1',
    supportDevice: ['arduinoTj2560'],
    author: 'Bright',
    iconURL: `asset/tj2560GrayscaleSensor.jpg`,
    description: formatMessage({
        id: 'tj2560GrayscaleSensor.description',
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

module.exports = tj2560GrayscaleSensor;
