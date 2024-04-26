const tj2560RobotArm = formatMessage => ({
    name: formatMessage({
        id: 'tj2560RobotArm.name',
        default: 'Robot Arm'
    }),
    extensionId: 'tj2560RobotArm',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'Jiazheng Liu',
    iconURL: `asset/tj2560RobotArm.jpg`,
    description: formatMessage({
        id: 'tj2560RobotArm.description',
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

module.exports = tj2560RobotArm;
