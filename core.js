var SET_AudioBufLength = 100;
if (DataExists("SET_AudioBufLength")) { SET_AudioBufLength = parseInt(DataGet("SET_AudioBufLength")); }

var SET_ToneFreqMode = 0;
if (DataExists("SET_ToneFreqMode")) { SET_ToneFreqMode = parseInt(DataGet("SET_ToneFreqMode")); }

var SET_ToneFreqBase = 1000;
if (DataExists("SET_ToneFreqBase")) { SET_ToneFreqBase = parseInt(DataGet("SET_ToneFreqBase")); }

var SET_ToneFreqDist = 100;
if (DataExists("SET_ToneFreqDist")) { SET_ToneFreqDist = parseInt(DataGet("SET_ToneFreqDist")); }

var SET_FontOrientation = 0;
if (DataExists("SET_FontOrientation")) { SET_FontOrientation = parseInt(DataGet("SET_FontOrientation")); }

var SET_FontFlipH = false;
var SET_FontFlipV = false;
var SET_FontFlipD = false;

var SET_ToneVolSamples = 1000;
if (DataExists("SET_ToneVolSamples")) { SET_ToneVolSamples = parseInt(DataGet("SET_ToneVolSamples")); }

var SET_ToneVol = 100;
if (DataExists("SET_ToneVol")) { SET_ToneVol = parseInt(DataGet("SET_ToneVol")); }

var SET_PixelSamples = 4000;
if (DataExists("SET_PixelSamples")) { SET_PixelSamples = parseInt(DataGet("SET_PixelSamples")); }

var SET_PixelLines = 2;
if (DataExists("SET_PixelLines")) { SET_PixelLines = parseInt(DataGet("SET_PixelLines")); }

var SET_Autostart = 0;
if (DataExists("SET_Autostart")) { SET_Autostart = parseInt(DataGet("SET_Autostart")); }

var SET_EnterKey = 0;
if (DataExists("SET_EnterKey")) { SET_EnterKey = parseInt(DataGet("SET_EnterKey")); }

var SET_CanvasW = 16;
if (DataExists("SET_CanvasW")) { SET_CanvasW = parseInt(DataGet("SET_CanvasW")); }

var SET_CanvasH = 16;
if (DataExists("SET_CanvasH")) { SET_CanvasH = parseInt(DataGet("SET_CanvasH")); }

var SET_CanvasScaleX = 2;
if (DataExists("SET_CanvasScaleX")) { SET_CanvasScaleX = parseInt(DataGet("SET_CanvasScaleX")); }

var SET_CanvasScaleY = 2;
if (DataExists("SET_CanvasScaleY")) { SET_CanvasScaleY = parseInt(DataGet("SET_CanvasScaleY")); }

var SET_ColorBackR = 64;
if (DataExists("SET_ColorBackR")) { SET_ColorBackR = parseInt(DataGet("SET_ColorBackR")); }

var SET_ColorBackG = 64;
if (DataExists("SET_ColorBackG")) { SET_ColorBackG = parseInt(DataGet("SET_ColorBackG")); }

var SET_ColorBackB = 64;
if (DataExists("SET_ColorBackB")) { SET_ColorBackB = parseInt(DataGet("SET_ColorBackB")); }

var SET_ColorTextBackR = 0;
if (DataExists("SET_ColorTextBackR")) { SET_ColorTextBackR = parseInt(DataGet("SET_ColorTextBackR")); }

var SET_ColorTextBackG = 0;
if (DataExists("SET_ColorTextBackG")) { SET_ColorTextBackG = parseInt(DataGet("SET_ColorTextBackG")); }

var SET_ColorTextBackB = 0;
if (DataExists("SET_ColorTextBackB")) { SET_ColorTextBackB = parseInt(DataGet("SET_ColorTextBackB")); }

var SET_ColorTextForeR = 255;
if (DataExists("SET_ColorTextForeR")) { SET_ColorTextForeR = parseInt(DataGet("SET_ColorTextForeR")); }

var SET_ColorTextForeG = 255;
if (DataExists("SET_ColorTextForeG")) { SET_ColorTextForeG = parseInt(DataGet("SET_ColorTextForeG")); }

var SET_ColorTextForeB = 255;
if (DataExists("SET_ColorTextForeB")) { SET_ColorTextForeB = parseInt(DataGet("SET_ColorTextForeB")); }

var SET_ColorCurrBackR = 0;
if (DataExists("SET_ColorCurrBackR")) { SET_ColorCurrBackR = parseInt(DataGet("SET_ColorCurrBackR")); }

var SET_ColorCurrBackG = 0;
if (DataExists("SET_ColorCurrBackG")) { SET_ColorCurrBackG = parseInt(DataGet("SET_ColorCurrBackG")); }

var SET_ColorCurrBackB = 0;
if (DataExists("SET_ColorCurrBackB")) { SET_ColorCurrBackB = parseInt(DataGet("SET_ColorCurrBackB")); }

var SET_ColorCurrForeR = 128;
if (DataExists("SET_ColorCurrForeR")) { SET_ColorCurrForeR = parseInt(DataGet("SET_ColorCurrForeR")); }

var SET_ColorCurrForeG = 128;
if (DataExists("SET_ColorCurrForeG")) { SET_ColorCurrForeG = parseInt(DataGet("SET_ColorCurrForeG")); }

var SET_ColorCurrForeB = 128;
if (DataExists("SET_ColorCurrForeB")) { SET_ColorCurrForeB = parseInt(DataGet("SET_ColorCurrForeB")); }


function Limit(Val, ValMin, ValMax)
{
    if (isNaN(Val))
    {
        Val = 0;
    }
    if (Val < ValMin) { return ValMin; }
    if (Val > ValMax) { return ValMax; }
    return Math.floor(Val);
}

function SettingsGet()
{
    document.getElementById("xSET_AudioBufLength").value = SET_AudioBufLength;
    document.getElementById("xSET_ToneFreqMode").selectedIndex = SET_ToneFreqMode;
    document.getElementById("xSET_ToneFreqBase").value = SET_ToneFreqBase;
    document.getElementById("xSET_ToneFreqDist").value = SET_ToneFreqDist;
    document.getElementById("xSET_ToneVolSamples").value = SET_ToneVolSamples;
    document.getElementById("xSET_ToneVol").value = SET_ToneVol;
    document.getElementById("xSET_PixelSamples").value = SET_PixelSamples;
    document.getElementById("xSET_PixelLines").value = SET_PixelLines;
    document.getElementById("xSET_FontOrientation").selectedIndex = SET_FontOrientation;
    document.getElementById("xSET_Autostart").selectedIndex = SET_Autostart;
    document.getElementById("xSET_EnterKey").selectedIndex = SET_EnterKey;

    document.getElementById("xSET_CanvasW").value = SET_CanvasW;
    document.getElementById("xSET_CanvasH").value = SET_CanvasH;
    document.getElementById("xSET_CanvasScaleX").value = SET_CanvasScaleX;
    document.getElementById("xSET_CanvasScaleY").value = SET_CanvasScaleY;
    document.getElementById("xSET_ColorBackR").value = SET_ColorBackR;
    document.getElementById("xSET_ColorBackG").value = SET_ColorBackG;
    document.getElementById("xSET_ColorBackB").value = SET_ColorBackB;
    document.getElementById("xSET_ColorTextBackR").value = SET_ColorTextBackR;
    document.getElementById("xSET_ColorTextBackG").value = SET_ColorTextBackG;
    document.getElementById("xSET_ColorTextBackB").value = SET_ColorTextBackB;
    document.getElementById("xSET_ColorTextForeR").value = SET_ColorTextForeR;
    document.getElementById("xSET_ColorTextForeG").value = SET_ColorTextForeG;
    document.getElementById("xSET_ColorTextForeB").value = SET_ColorTextForeB;
    document.getElementById("xSET_ColorCurrBackR").value = SET_ColorCurrBackR;
    document.getElementById("xSET_ColorCurrBackG").value = SET_ColorCurrBackG;
    document.getElementById("xSET_ColorCurrBackB").value = SET_ColorCurrBackB;
    document.getElementById("xSET_ColorCurrForeR").value = SET_ColorCurrForeR;
    document.getElementById("xSET_ColorCurrForeG").value = SET_ColorCurrForeG;
    document.getElementById("xSET_ColorCurrForeB").value = SET_ColorCurrForeB;
}

function SettingsSet(X)
{
    SET_AudioBufLength = Limit(document.getElementById("xSET_AudioBufLength").value, 1, 100000);
    SET_ToneFreqMode = document.getElementById("xSET_ToneFreqMode").selectedIndex;
    SET_ToneFreqBase = Limit(document.getElementById("xSET_ToneFreqBase").value, 1, 50000);
    SET_ToneFreqDist = Limit(document.getElementById("xSET_ToneFreqDist").value, 1, 50000);
    SET_ToneVolSamples = Limit(document.getElementById("xSET_ToneVolSamples").value, 1, 1000000);
    SET_ToneVol = Limit(document.getElementById("xSET_ToneVol").value, 0, 1000);
    SET_PixelSamples = Limit(document.getElementById("xSET_PixelSamples").value, 1, 1000000);
    SET_PixelLines = Limit(document.getElementById("xSET_PixelLines").value, 1, 100);
    SET_FontOrientation = document.getElementById("xSET_FontOrientation").selectedIndex;
    SET_Autostart = document.getElementById("xSET_Autostart").selectedIndex;
    SET_EnterKey = document.getElementById("xSET_EnterKey").selectedIndex;

    SET_CanvasW = Limit(document.getElementById("xSET_CanvasW").value, 1, 100);
    SET_CanvasH = Limit(document.getElementById("xSET_CanvasH").value, 1, 100);
    SET_CanvasScaleX = Limit(document.getElementById("xSET_CanvasScaleX").value, 1, 100);
    SET_CanvasScaleY = Limit(document.getElementById("xSET_CanvasScaleY").value, 1, 100);
    SET_ColorBackR = Limit(document.getElementById("xSET_ColorBackR").value, 0, 255);
    SET_ColorBackG = Limit(document.getElementById("xSET_ColorBackG").value, 0, 255);
    SET_ColorBackB = Limit(document.getElementById("xSET_ColorBackB").value, 0, 255);
    SET_ColorTextBackR = Limit(document.getElementById("xSET_ColorTextBackR").value, 0, 255);
    SET_ColorTextBackG = Limit(document.getElementById("xSET_ColorTextBackG").value, 0, 255);
    SET_ColorTextBackB = Limit(document.getElementById("xSET_ColorTextBackB").value, 0, 255);
    SET_ColorTextForeR = Limit(document.getElementById("xSET_ColorTextForeR").value, 0, 255);
    SET_ColorTextForeG = Limit(document.getElementById("xSET_ColorTextForeG").value, 0, 255);
    SET_ColorTextForeB = Limit(document.getElementById("xSET_ColorTextForeB").value, 0, 255);
    SET_ColorCurrBackR = Limit(document.getElementById("xSET_ColorCurrBackR").value, 0, 255);
    SET_ColorCurrBackG = Limit(document.getElementById("xSET_ColorCurrBackG").value, 0, 255);
    SET_ColorCurrBackB = Limit(document.getElementById("xSET_ColorCurrBackB").value, 0, 255);
    SET_ColorCurrForeR = Limit(document.getElementById("xSET_ColorCurrForeR").value, 0, 255);
    SET_ColorCurrForeG = Limit(document.getElementById("xSET_ColorCurrForeG").value, 0, 255);
    SET_ColorCurrForeB = Limit(document.getElementById("xSET_ColorCurrForeB").value, 0, 255);

    DataSet("SET_AudioBufLength", SET_AudioBufLength);
    DataSet("SET_ToneFreqMode", SET_ToneFreqMode);
    DataSet("SET_ToneFreqBase", SET_ToneFreqBase);
    DataSet("SET_ToneFreqDist", SET_ToneFreqDist);
    DataSet("SET_ToneVolSamples", SET_ToneVolSamples);
    DataSet("SET_ToneVol", SET_ToneVol);
    DataSet("SET_PixelSamples", SET_PixelSamples);
    DataSet("SET_PixelLines", SET_PixelLines);
    DataSet("SET_FontOrientation", SET_FontOrientation);
    DataSet("SET_Autostart", SET_Autostart);
    DataSet("SET_EnterKey", SET_EnterKey);

    DataSet("SET_CanvasW", SET_CanvasW);
    DataSet("SET_CanvasH", SET_CanvasH);
    DataSet("SET_CanvasScaleX", SET_CanvasScaleX);
    DataSet("SET_CanvasScaleY", SET_CanvasScaleY);
    DataSet("SET_ColorBackR", SET_ColorBackR);
    DataSet("SET_ColorBackG", SET_ColorBackG);
    DataSet("SET_ColorBackB", SET_ColorBackB);
    DataSet("SET_ColorTextBackR", SET_ColorTextBackR);
    DataSet("SET_ColorTextBackG", SET_ColorTextBackG);
    DataSet("SET_ColorTextBackB", SET_ColorTextBackB);
    DataSet("SET_ColorTextForeR", SET_ColorTextForeR);
    DataSet("SET_ColorTextForeG", SET_ColorTextForeG);
    DataSet("SET_ColorTextForeB", SET_ColorTextForeB);
    DataSet("SET_ColorCurrBackR", SET_ColorCurrBackR);
    DataSet("SET_ColorCurrBackG", SET_ColorCurrBackG);
    DataSet("SET_ColorCurrBackB", SET_ColorCurrBackB);
    DataSet("SET_ColorCurrForeR", SET_ColorCurrForeR);
    DataSet("SET_ColorCurrForeG", SET_ColorCurrForeG);
    DataSet("SET_ColorCurrForeB", SET_ColorCurrForeB);

    document.getElementById("xSET_AudioBufLength").value = SET_AudioBufLength;
    document.getElementById("xSET_ToneFreqBase").value = SET_ToneFreqBase;
    document.getElementById("xSET_ToneFreqDist").value = SET_ToneFreqDist;
    document.getElementById("xSET_ToneVolSamples").value = SET_ToneVolSamples;
    document.getElementById("xSET_ToneVol").value = SET_ToneVol;
    document.getElementById("xSET_PixelSamples").value = SET_PixelSamples;
    document.getElementById("xSET_PixelLines").value = SET_PixelLines;

    document.getElementById("xSET_CanvasW").value = SET_CanvasW;
    document.getElementById("xSET_CanvasH").value = SET_CanvasH;
    document.getElementById("xSET_CanvasScaleX").value = SET_CanvasScaleX;
    document.getElementById("xSET_CanvasScaleY").value = SET_CanvasScaleY;
    document.getElementById("xSET_ColorBackR").value = SET_ColorBackR;
    document.getElementById("xSET_ColorBackG").value = SET_ColorBackG;
    document.getElementById("xSET_ColorBackB").value = SET_ColorBackB;
    document.getElementById("xSET_ColorTextBackR").value = SET_ColorTextBackR;
    document.getElementById("xSET_ColorTextBackG").value = SET_ColorTextBackG;
    document.getElementById("xSET_ColorTextBackB").value = SET_ColorTextBackB;
    document.getElementById("xSET_ColorTextForeR").value = SET_ColorTextForeR;
    document.getElementById("xSET_ColorTextForeG").value = SET_ColorTextForeG;
    document.getElementById("xSET_ColorTextForeB").value = SET_ColorTextForeB;
    document.getElementById("xSET_ColorCurrBackR").value = SET_ColorCurrBackR;
    document.getElementById("xSET_ColorCurrBackG").value = SET_ColorCurrBackG;
    document.getElementById("xSET_ColorCurrBackB").value = SET_ColorCurrBackB;
    document.getElementById("xSET_ColorCurrForeR").value = SET_ColorCurrForeR;
    document.getElementById("xSET_ColorCurrForeG").value = SET_ColorCurrForeG;
    document.getElementById("xSET_ColorCurrForeB").value = SET_ColorCurrForeB;

    if (X == 1)
    {
        FontPrepareAll();
    }
    if (X == 2)
    {
        ScreenPrepare();
        ScreenRepaint();
    }
}

SettingsGet();



var CanvasObject = document.getElementById("TextScreen");
var CanvasContext = CanvasObject.getContext('2d');
var CanvasData;
var CanvasRawW;
var CanvasRawH;

function ScreenPrepare()
{
    CanvasRawW = SET_CanvasW * SET_CanvasScaleX * FontSize;
    CanvasRawH = SET_CanvasH * SET_CanvasScaleY * FontSize;
    CanvasObject.width = CanvasRawW;
    CanvasObject.height = CanvasRawH;
    CanvasObject.style["width"] = Math.floor(CanvasRawW) + "px";
    CanvasObject.style["height"] = Math.floor(CanvasRawH) + "px";
    CanvasData = CanvasContext.createImageData(CanvasRawW, CanvasRawH);
}
ScreenPrepare();


function Rect(X, Y, W, H, CR, CG, CB)
{
    if (X < 0) { W = W + X; X = 0; }
    if (Y < 0) { H = H + Y; Y = 0; }
    if (X + W > CanvasRawW) { W = CanvasRawW - X; }
    if (Y + H > CanvasRawH) { H = CanvasRawH - Y; }
    for (var YY = 0; YY < H; YY++)
    {
        for (var XX = 0; XX < W; XX++)
        {
            var Offset = ((Y + YY) * CanvasRawW + (X + XX)) * 4;
            CanvasData.data[Offset + 0] = CR;
            CanvasData.data[Offset + 1] = CG;
            CanvasData.data[Offset + 2] = CB;
            CanvasData.data[Offset + 3] = 255;
        }
    }
}

var CharBuf = new Array();

function ScreenRepaint()
{
    Rect(0, 0, CanvasRawW, CanvasRawH, SET_ColorBackR, SET_ColorBackG, SET_ColorBackB);
    var X = 0;
    var Y = 0;

    var Rb, Gb, Bb, Rf, Gf, Bf;

    for (var I = 0; I < CharBuf.length; I++)
    {
        if ((I == 0) && (AudioWorking))
        {
            Rb = SET_ColorCurrBackR;
            Gb = SET_ColorCurrBackG;
            Bb = SET_ColorCurrBackB;
            Rf = SET_ColorCurrForeR;
            Gf = SET_ColorCurrForeG;
            Bf = SET_ColorCurrForeB;
        }
        else
        {
            Rb = SET_ColorTextBackR;
            Gb = SET_ColorTextBackG;
            Bb = SET_ColorTextBackB;
            Rf = SET_ColorTextForeR;
            Gf = SET_ColorTextForeG;
            Bf = SET_ColorTextForeB;
        }

        var Glyph = (CharBuf[I] in Font) ? Font[CharBuf[I]] : Font[32];
        Rect(X, Y, FontSize * SET_CanvasScaleX, FontSize * SET_CanvasScaleY, Rb, Gb, Bb);
        for (var YY = 0; YY < FontSize; YY++)
        {
            for (var XX = 0; XX < FontSize; XX++)
            {
                if ((Glyph[YY] & BitPos[XX]) > 0)
                {
                    Rect(X + (XX * SET_CanvasScaleX), Y + (YY * SET_CanvasScaleY), SET_CanvasScaleX, SET_CanvasScaleY, Rf, Gf, Bf);
                }
            }
        }
        

        X += (FontSize * SET_CanvasScaleX);
        if (X >= CanvasRawW)
        {
            X = 0;
            Y += (FontSize * SET_CanvasScaleY);
            if (Y >= CanvasRawH)
            {
                break;
            }
        }
    }
    CanvasContext.putImageData(CanvasData, 0, 0);
}




function CharClear()
{
    if (TestMode)
    {
        TestMode = false;
    }
    else
    {
        if (AudioBufCount > 0)
        {
            if (CharBuf.length > 1)
            {
                CharBuf.pop();
            }
        }
        else
        {
            if (CharBuf.length > 0)
            {
                CharBuf.pop();
            }
        }
        ScreenRepaint();
    }
}

function CharInput(X)
{
    if (TestMode)
    {
        var Std = true;
        if (X == 10)
        {
            Std = false;
            TestRestart = true;
        }
        if (X == 32)
        {
            Std = false;
            TestVert = !TestVert;
        }
        if ((X >= 48) && (X <= 57))
        {
            Std = !TestLine(X - 48);
        }
        if ((X >= 65) && (X <= 90))
        {
            Std = !TestLine(X - 55);
        }
        if ((X >= 97) && (X <= 122))
        {
            Std = !TestLine(X - 87);
        }
        if (Std)
        {
            TestMode = false;
        }
    }
    else
    {
        if ((X >= 32) && (X < 65536))
        {
            CharBuf.push(X);
            ScreenRepaint();
            if (SET_Autostart == 1)
            {
                Start();
            }
        }
        else
        {
            if (X == 10)
            {
                if (SET_EnterKey == 0)
                {
                    if (SET_Autostart == 0)
                    {
                        Start();
                    }
                }
                if (SET_EnterKey == 1)
                {
                    CharClear();
                }
            }
        }
    }
}


var ToneVolTable = new Array();

function RoundVal(X, R)
{
    X *= 1000000000;
    X = Math.round(X);
    X /= 1000000000;
    return X;
}


var AudioBuffer;

function Print(X)
{
    console.log(X);
}

function Print2(X)
{
    document.getElementById("X").innerHTML += (X + "<br>");
}


var FontWork = new Array();
var TestGlyphIndex = 65536;
var BitPos = new Array();
var II = 1 << (FontSize - 1);
Font[TestGlyphIndex] = new Array();
for (var I = 0; I < FontSize; I++)
{
    BitPos[I] = II;
    II = II >> 1;
    Font[TestGlyphIndex][I] = 0;
}


function FontPrepareAll()
{
    if (SET_FontOrientation == 0) { SET_FontFlipH = false; SET_FontFlipV = false; SET_FontFlipD = false; }
    if (SET_FontOrientation == 1) { SET_FontFlipH = false; SET_FontFlipV = true;  SET_FontFlipD = true;  }
    if (SET_FontOrientation == 2) { SET_FontFlipH = true;  SET_FontFlipV = true;  SET_FontFlipD = false; }
    if (SET_FontOrientation == 3) { SET_FontFlipH = true;  SET_FontFlipV = false; SET_FontFlipD = true;  }
    if (SET_FontOrientation == 4) { SET_FontFlipH = false; SET_FontFlipV = false; SET_FontFlipD = true;  }
    if (SET_FontOrientation == 5) { SET_FontFlipH = true;  SET_FontFlipV = false; SET_FontFlipD = false; }
    if (SET_FontOrientation == 6) { SET_FontFlipH = true;  SET_FontFlipV = true;  SET_FontFlipD = true;  }
    if (SET_FontOrientation == 7) { SET_FontFlipH = false; SET_FontFlipV = true;  SET_FontFlipD = false; }
    Font.forEach(function myFunction(item, index)
    {
        FontWork[index] = new Array();
        FontPrepareGlyph(index);
    }
    );
}

FontPrepareAll();

function FontPrepareGlyph(Idx)
{
    var F = FontWork[Idx];
    var Temp, Temp0, I, II;
    for (I = 0; I < FontSize; I++)
    {
        F[I] = Font[Idx][I];
    }
    if (SET_FontFlipH)
    {
        for (I = 0; I < FontSize; I++)
        {
            Temp = 0;
            for (II = 0; II < FontSize; II++)
            {
                Temp += (((F[I] & BitPos[II]) > 0) ? BitPos[FontSize - 1 - II] : 0);
            }
            F[I] = Temp;
        }
    }
    if (SET_FontFlipV)
    {
        for (II = ((FontSize / 2) - 1); II >= 0; II--)
        {
            Temp = F[II]; F[II] = F[FontSize - 1 - II]; F[FontSize - 1 - II] = Temp;
        }
    }
    if (SET_FontFlipD)
    {
        for (I = 0; I < FontSize; I++)
        {
            for (II = 0; II < FontSize; II++)
            {
                if (I > II)
                {
                    Temp = (F[I] & BitPos[II]);
                    F[I] -= Temp;

                    Temp0 = (F[II] & BitPos[I]);
                    F[II] -= Temp0;

                    if (Temp0 > 0)
                    {
                        F[I] += BitPos[II];
                    }
                    if (Temp > 0)
                    {
                        F[II] += BitPos[I];
                    }
                }
            }
        }
    }
}

var AudioBufLengthTime;
var AudioBufIteration;
var AudioBufLengthSample;

var AudioWorking = false;
var AudioBufCount = 0;
var SecondAudio;

var PixelLines;
var ToneVolSamples;
var PixelSamples;

function PrepareAudio()
{
    var AudioBuffer0 = AudioBuffer.getChannelData(0);
    var AudioBuffer1 = AudioBuffer.getChannelData(1);
    for (var i = 0; i < AudioBufLengthSample; i++)
    {
        var SampleValX = 0;

        var II = BitPos[PixelCountI];
        var CharCode = (CharBuf.length > 0) ? CharBuf[0] : 32;
        if (!(CharCode in FontWork))
        {
            CharCode = 32;
        }
        var FontChar = FontWork[CharCode];
        var I_ = 0;
        var III;
        for (var I = 0; I < ToneCount; I++)
        {
            if ((FontChar[Math.floor(I / PixelLines)] & II) > 0)
            {
                ToneVol[I] = ToneVolSamples;
            }
            else
            {
                ToneVol[I] = 0;
            }

            if (ToneVolX[I] < ToneVol[I])
            {
                ToneVolX[I]++;
            }
            else
            {
                if (ToneVolX[I] > ToneVol[I])
                {
                    ToneVolX[I]--;
                }
            }

            var Ang1 = (TonePeriodI[I]) * ToneFactor[I];
            var Ang2 = (TonePeriod[I] - TonePeriodI[I]) * ToneFactor[I];
            var SampleVal = (Math.sin(Ang1) - Math.sin(Ang2)) * ToneVolTable[ToneVolX[I]];

            SampleValX += SampleVal;

            TonePeriodI[I]++;
            if (TonePeriodI[I] >= TonePeriod[I])
            {
                TonePeriodI[I] = 0;
            }
        }

        if (SampleValX < -1)
        {
            SampleValX = -1;
        }
        if (SampleValX > 1)
        {
            SampleValX = 1;
        }

        if (SecondAudio)
        {
            AudioBuffer0[i + AudioBufLengthSample] = SampleValX;
            AudioBuffer1[i + AudioBufLengthSample] = SampleValX;
        }
        else
        {
            AudioBuffer0[i] = SampleValX;
            AudioBuffer1[i] = SampleValX;
        }

        if (CharBuf.length == 0)
        {
            var AudioSilence = true;
            for (var I = 0; I < ToneCount; I++)
            {
                if (ToneVolX[I] > 0)
                {
                    AudioSilence = false;
                }
            }
            if (AudioSilence)
            {
                AudioWorking = false;
            }
        }

        PixelSamplesI++;
        if (PixelSamplesI == PixelSamples)
        {
            PixelSamplesI = 0;
            PixelCountI++;
            if (PixelCountI == FontSize)
            {
                if (CharBuf.length > 0)
                {
                    CharBuf.shift();
                }
                if (CharBuf.length == 0)
                {
                    if (TestMode && (!TestRestart))
                    {
                        CharBuf.push(TestGlyphIndex);
                    }
                    else
                    {
                        var AudioSilence = true;
                        for (var I = 0; I < ToneCount; I++)
                        {
                            if (ToneVolX[I] > 0)
                            {
                                AudioSilence = false;
                            }
                        }
                        if (AudioSilence)
                        {
                            AudioWorking = false;
                        }
                    }
                }
                ScreenRepaint();
                PixelCountI = 0;
            }
        }
    }
}


var audioCtx;


function InitAudio()
{
    SecondAudio = true;
    AudioBufIteration = 1;
    var AudioBuffer0 = AudioBuffer.getChannelData(0);
    var AudioBuffer1 = AudioBuffer.getChannelData(1);
    for (var i = 0; i < AudioBufLengthSample; i++)
    {
        AudioBuffer0[i] = 0;
        AudioBuffer1[i] = 0;
    }
    var source = audioCtx.createBufferSource();
    source.buffer = AudioBuffer;
    source.connect(audioCtx.destination);
    source.onended = function()
    {
        AudioBufCount--;
        var source_ = audioCtx.createBufferSource();
        source_.buffer = AudioBuffer;
        source_.connect(audioCtx.destination);
        source_.onended = function()
        {
            AudioBufCount--;
            GetAudio();
        };
        AudioBufCount++;
        source_.start(0, 0, AudioBufLengthTime / 5);
        GetAudio();
    };
    AudioWorking = true;
    ScreenRepaint();
    AudioBufCount++;
    source.start(0, 0, AudioBufLengthTime / 5);
}



function GetAudio()
{
    if (!AudioWorking)
    {
        if (TestMode && TestRestart)
        {
            if (CharBuf.length == 0)
            {
                CharBuf.push(TestGlyphIndex);
            }
            if (AudioBufCount == 0)
            {
                TestRestart = false;
                Start();
            }
        }
        else
        {
            if ((SET_Autostart == 1) && (AudioBufCount == 0) && (CharBuf.length > 0))
            {
                Start();
            }
        }
        //Print2("STOP " + AudioBufCount);
        return;
    }

    PrepareAudio();
    var source = audioCtx.createBufferSource();
    source.buffer = AudioBuffer;
    source.connect(audioCtx.destination);
    source.onended = function()
    {
        AudioBufCount--;
        GetAudio();
    };
    var TimePoint = AudioBufIteration * AudioBufLengthTime;
    TimePoint = TimePoint * 1000;
    TimePoint = Math.round(TimePoint);
    TimePoint = TimePoint / 1000;
    AudioBufCount++;
    if (SecondAudio)
    {
        source.start(TimePoint, AudioBufLengthTime, AudioBufLengthTime);
    }
    else
    {
        source.start(TimePoint, 0, AudioBufLengthTime);
    }
    SecondAudio = !SecondAudio;
    AudioBufIteration++;

    //var ProcTime = TimePoint - audioCtx.currentTime;
    //Print2(AudioBufIteration + "   " + "GetAudio   " + ProcTime + " &nbsp;&nbsp;&nbsp;&nbsp; " + Math.round(ProcTime * 100 / AudioBufLengthTime) + "%");
}


var SampleRate;

var PixelSamplesI;
var PixelCountI;

var ToneFreq;
var ToneVol;
var ToneVolX;
var TonePeriod;
var TonePeriodI;
var ToneFactor;

var ToneAccuracy = 1000;
var ToneCount;
var ToneVolMin = 0;
var ToneVolMax = 0;

var TestMode = false;
var TestRestart = false;
var TestVert = false;

function Start()
{
    if (AudioBufCount > 0)
    {
        return;
    }

    PixelLines = SET_PixelLines;
    ToneVolSamples = SET_ToneVolSamples;
    PixelSamples = SET_PixelSamples;

    ToneVolMin = 0;
    ToneVolMax = SET_ToneVol / (FontSize * SET_PixelLines * 200.0);
    for (var I = 0; I <= SET_ToneVolSamples; I++)
    {
        // Triangle
        //ToneVolTable[I] = ToneVolMin + ((ToneVolMax - ToneVolMin) * I / SET_ToneVolSamples);

        // Sine
        ToneVolTable[I] = (1 + Math.sin((I - (SET_ToneVolSamples / 2.0)) * Math.PI / SET_ToneVolSamples)) / 2.0;
        ToneVolTable[I] = ToneVolMin + (ToneVolTable[I] * (ToneVolMax - ToneVolMin));
        ToneVolTable[I] = RoundVal(ToneVolTable[I]);
    }

    AudioBufLengthTime = SET_AudioBufLength / 1000;
    ToneCount = FontSize * PixelLines;

    PixelSamplesI = 0;
    PixelCountI = 0;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    SampleRate = audioCtx.sampleRate;

    ToneFreq = new Float32Array(ToneCount);
    ToneVol = new Float32Array(ToneCount);
    ToneVolX = new Float32Array(ToneCount);
    TonePeriod = new Float32Array(ToneCount);
    TonePeriodI = new Float32Array(ToneCount);
    ToneFactor = new Float32Array(ToneCount);

    var FreqOffset = 0;
    if (SET_ToneFreqMode == 0)
    {
        FreqOffset = ((FontSize * PixelLines) - 1) / 2;
    }
    if (SET_ToneFreqMode == 1)
    {
        FreqOffset = 0;
    }
    if (SET_ToneFreqMode == 2)
    {
        FreqOffset = (FontSize * PixelLines) - 1;
    }
    for (var I = 0; I < ToneCount; I++)
    {
        ToneFreq[I] = SET_ToneFreqBase + ((ToneCount - I - 1 - FreqOffset) * SET_ToneFreqDist);
        if ((ToneFreq[I] < 0) || (ToneFreq[I] > (SampleRate / 2)))
        {
            ToneFreq[I] = 0;
        }
        ToneVol[I] = 0;
        ToneVolX[I] = 0;
        TonePeriod[I] = Math.round(SampleRate * ToneAccuracy / ToneFreq[I]);
        TonePeriodI[I] = 0;
        ToneFactor[I] = ((Math.PI * 2.0 * ToneAccuracy) / (TonePeriod[I]));
    }

    AudioBufLengthSample = SampleRate * AudioBufLengthTime;

    AudioBuffer = audioCtx.createBuffer(2, AudioBufLengthSample + AudioBufLengthSample, SampleRate);

    InitAudio();

}

ScreenRepaint();


function Test()
{
    if (TestMode)
    {
        TestRestart = true;
    }
    else
    {
        TestRestart = false;
        TestMode = true;
        TestVert = false;
        for (var I = 0; I < FontSize; I++)
        {
            Font[TestGlyphIndex][I] = 255;
        }
        FontPrepareGlyph(TestGlyphIndex);
        CharBuf.push(TestGlyphIndex);
        Start();
    }
}

function TestLine(N)
{
    if (N < 0)
    {
        for (var I = 0; I < FontSize; I++)
        {
            TestLine(I);
        }
        return true;
    }
    if (N >= FontSize)
    {
        return false;
    }
    if (TestVert)
    {
        for (var I = 0; I < FontSize; I++)
        {
            var Val = Font[TestGlyphIndex][I] & BitPos[N];
            if (Val > 0)
            {
                Font[TestGlyphIndex][I] -= BitPos[N];
            }
            else
            {
                Font[TestGlyphIndex][I] += BitPos[N];
            }
        }
    }
    else
    {
        Font[TestGlyphIndex][N] = 255 - Font[TestGlyphIndex][N];
    }
    FontPrepareGlyph(TestGlyphIndex);
    return true;
}


var SetAudioX = false;
var SetCanvasX = false;

function SetAudio()
{
    if (SetAudioX)
    {
        document.getElementById("SetAudio").style.display = "none";
    }
    else
    {
        document.getElementById("SetAudio").style.display = "block";
    }
    SetAudioX = !SetAudioX;
}

function SetCanvas()
{
    if (SetCanvasX)
    {
        document.getElementById("SetCanvas").style.display = "none";
    }
    else
    {
        document.getElementById("SetCanvas").style.display = "block";
    }
    SetCanvasX = !SetCanvasX;
}


//document.getElementById("BtnStart").style.height = "100px";
//document.getElementById("BtnSetAudio").style.height = "100px";
//document.getElementById("BtnSetCanvas").style.height = "100px";
document.getElementById("InputText").style.height = "20px";


