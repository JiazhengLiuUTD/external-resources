const Humanoidrobot = formatMessage => ({
    name: formatMessage({
        id: 'Humanoidrobot.name',
        default: 'Robot Humanoid'
    }),
    extensionId: 'Humanoidrobot',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560', 'TJ2560HRC_arduinoTj2560'],
    author: 'Gang Zhang',
    iconURL: `asset/Humanoidrobot.jpg`,
    description: formatMessage({
        id: 'Humanoidrobot.description',
        default: 'Robot Arm.'
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

module.exports = Humanoidrobot;
