const tjabKit_SetServo = formatMessage => ({
    name: formatMessage({
        id: 'tjabKit_SetServo.name',
        default: 'digital servo'
    }),
    extensionId: 'tjabKit_SetServo',
    version: '1.0.0',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitServo.png`,
    description: formatMessage({
        id: 'tjabKit_SetServo.description',
        default: 'Single digital servo module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['actuator'],
    helpLink: null
});

module.exports = tjabKit_SetServo;
