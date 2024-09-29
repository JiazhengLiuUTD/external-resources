const tj2560WaterPump = formatMessage => ({
    name: formatMessage({
        id: 'tj2560WaterPump.name',
        default: 'Water Pump'
    }),
    extensionId: 'tj2560WaterPump',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'Jiazheng Liu',
    iconURL: `asset/tj2560WaterPump.jpeg`,
    description: formatMessage({
        id: 'tj2560WaterPump.description',
        default: 'Pumping water.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: null
});

module.exports = tj2560WaterPump;
