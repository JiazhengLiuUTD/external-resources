const tj2560RoboticArm = formatMessage => ({
    name: formatMessage({
        id: 'tj2560RoboticArm.name',
        default: 'Robotic Arm'
    }),
    extensionId: 'tj2560RoboticArm',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560', 'TJ2560HRC_arduinoTj2560'],
    author: 'Jiazheng Liu',
    iconURL: `asset/tj2560RoboticArm.png`,
    description: formatMessage({
        id: 'tj2560RoboticArm.description',
        default: 'Robotic Arm.'
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

module.exports = tj2560RoboticArm;
