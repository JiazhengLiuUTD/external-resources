/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4C97FF';
    const secondaryColour = '#3373CC';

    Blockly.Blocks.arduinoTjabKitExt_irRecive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJABKITEXT_IRRECIVE,
                args0: [
                    {
                     type: 'field_dropdown',
                     name: 'PORT',
                     options:[
                        ['2','2'],
                        ['3','3']
                        ],   
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTjabKitExt_isIrPress = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJABKITEXT_ISIRPRESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3'],
                            ['5', '4'],
                            ['6', '5'],
                            ['7', '6'],
                            ['8', '7'],
                            ['9', '8'],
                            ['0', '9'],
                            ['▲', '10'],
                            ['▼', '11'],
                            ['▶', '12'],
                            ['◀', '13'],
                            ['A', '14'],
                            [Blockly.Msg.ARDUINOTJABKITEXT_POWER, '15'],
                            ['C', '16'],
                            ['E', '17'],
                            ['P2', '18'],
                            ['B', '19'],
                            ['△', '20'],
                            ['*', '21'],
                            ['G', '22'],
                            ['#', '23'],
                            ['P1', '24'],
                            ['■', '25'],
                            ['D', '26'],
                            ['◁', '27'],
                            ['□', '28'],
                            ['▷', '29'],
                            ['▽', '30'],
                            ['F', '31']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.arduinoTjabKitExt_hs_isIrPress = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJABKITEXT_HS_ISIRPRESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CH_1',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3'],
                            ['5', '4'],
                            ['6', '5'],
                            ['7', '6'],
                            ['8', '7']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY_1',
                        options: [
                            ['▲', '0'],
                            ['▼', '1'],
                            ['◀', '2'],
                            ['▶', '3'],
                            ['A + ▲', '4'],
                            ['A + ▼', '5'],
                            ['A + ◀', '6'],
                            ['A + ▶', '7'],
                            ['B + ▲', '8'],
                            ['B + ▼', '9'],
                            ['B + ◀', '10'],
                            ['B + ▶', '11'],
                            ['C + ▲', '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
