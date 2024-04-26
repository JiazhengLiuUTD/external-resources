const tjabKitIrRemoteReceiver = formatMessage => ({
    name: formatMessage({
        id: 'tjabKitIrRemoteReceiver.name',
        default: 'Taijing IR Remote Receiver.'
    }),
    extensionId: 'tjabKitIrRemoteReceiver',
    version: '1.0.0',
    supportDevice: ['tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/tjabKitIrRemoteReceiver.png`,
    description: formatMessage({
        id: 'tjabKitIrRemoteReceiver.description',
        default: 'Receiving and decoding data in infrared carrier.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: null
});

module.exports = tjabKitIrRemoteReceiver;
