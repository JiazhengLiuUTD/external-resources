/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';
    /* ---------------- 舵机 ------------------ */
    Blockly.Blocks.tjabKit_SetServo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKIT_SETSERVO, // set %1 servo angle %2
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['9', '9'],
                            ['10', '10']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE'
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
