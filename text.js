var InputTextBase = "";
var InputTextBaseL = InputTextBase.length;
var InputTextControl = document.getElementById("InputText");

function InputTextInit()
{
    InputTextControl.value = InputTextBase;
}

InputTextInit();

function InputTextEvent(Evt)
{
    var Val = InputTextControl.value;
    var ValL = Val.length;
    var CharOut = "";
    if (ValL < InputTextBase.length)
    {
        CharClear();
    }
    if (ValL > InputTextBase.length)
    {
        if (Val.substr(0, InputTextBaseL) == InputTextBase)
        {
            CharOut = Val.substr(InputTextBaseL);
            for (var I = 0; I < CharOut.length; I++)
            {
                CharInput(CharOut.charCodeAt(I));
            }
        }
        else
        {
            var Diff = -1;
            for (var I = 0; I < InputTextBaseL; I++)
            {
                if (Val.charCodeAt(I) != InputTextBase.charCodeAt(I))
                {
                    Diff = I;
                }
            }
            CharOut = Val.substr(Diff, ValL - InputTextBaseL);
            for (var I = 0; I < CharOut.length; I++)
            {
                CharInput(CharOut.charCodeAt(I));
            }
        }
    }
    InputTextControl.value = InputTextBase;
    //X.selectionStart = 100;
    //X.selectionEnd = 100;
}
