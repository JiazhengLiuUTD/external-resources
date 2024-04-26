/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
/*    const colour = '#06603e';
      const secondaryColour = '#06603e';
*/
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';
    Blockly.Blocks.tjabKitLed_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITLED_SET, // set %1 led %2
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
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.TJABKITLED_ON, '1'],
                            [Blockly.Msg.TJABKITLED_OFF, '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
