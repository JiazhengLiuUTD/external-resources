/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tjabKitGrayscaleSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITGRAYSCALESENSOR_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['A0 / 14', '14'],
                            ['A1 / 15', '15'],
                            ['A2 / 16', '16'],
                            ['A3 / 17', '17'],
                            ['2', '2'],
                            ['3', '3'],
                            ['9', '9'],
                            ['10', '10']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJABKITGRAYSCALESENSOR_STATE_LIGHT, '0'],
                            [Blockly.Msg.TJABKITGRAYSCALESENSOR_STATE_DARK, '1']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.tjabKitGrayscaleSensor_AnalogRead = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITGRAYSCALESENSOR_ANALOGREAD,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['A0 / 14', '14'],
                            ['A1 / 15', '15'],
                            ['A2 / 16', '16'],
                            ['A3 / 17', '17']                      
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
