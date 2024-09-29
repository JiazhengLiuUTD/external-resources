/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00CED1';
    const secondaryColour = '#00CED1';

    Blockly.Blocks.tj2560WaterPump_turn = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560WATERPUMP_TURN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P1', 'P1'],
                            ['P2', 'P2'],
                            ['P3', 'P3'],
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.TJ2560WATERPUMP_ON, 'On'],
                            [Blockly.Msg.TJ2560WATERPUMP_OFF, 'Off']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
