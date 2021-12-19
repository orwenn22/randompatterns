import js.lib.Int16Array;
import js.html.Window;
import js.html.BroadcastChannel;
import js.html.svg.GeometryElement;
import js.html.CanvasElement;
import js.Browser;
import StringTools;

class Main {
    static function main(){
        //array that represent the pattern
        var pattern: Array<Int> = [for(i in 0...32) 0];

        //get canvas
        var drawingcanvas: CanvasElement = cast Browser.document.getElementById("drawingcanvas");
        var context = drawingcanvas.getContext2d();
        //clear in black
        context.fillStyle = "#000000";
        context.fillRect(0, 0, 512, 512);
        context.stroke();

        //bouton that generate an 8*8 symetrical patern on a black background
        var generatebutton = Browser.document.getElementById("generatebutton");
        generatebutton.onclick = function() {
            //clear in black
            context.fillStyle = "#000000";
            context.fillRect(0, 0, 512, 512);

            //random color
            var randomcolor = Std.random(0x1000000);
            context.fillStyle = "#" + StringTools.hex(randomcolor, 6);

            //patern generation
            for(y in 0...8) {
                for(x in 0...4) {
                    var randn = Std.random(2);
                    pattern[y*4+x] = randn;
                    if(pattern[y*4+x] == 1) {
                        context.fillRect(x*64, y*64, 64, 64);
                        //context.fillRect(448-x*64, 448-y*64, 64, 64);
                        context.fillRect(448-x*64, y*64, 64, 64);
                    }
                }
            }
            
            //trace(StringTools.hex(randomcolor, 6));
            context.stroke();       //paint on the canvas
        }

        //bouton that generate an 8*8 symetrical patern on a background with a random color
        var generatewithbgbutton = Browser.document.getElementById("generatewithbgbutton");
        generatewithbgbutton.onclick = function () {
            //clear with a random color
            var bgcolor = Std.random(0x1000000);                    //generate a random number in [0x0, 0x1000000[
            context.fillStyle = "#" + StringTools.hex(bgcolor, 6);  //convert to a string
            context.fillRect(0, 0, 512, 512);                       //clear with this color

            //generate a random color for the patern
            var randomcolor = Std.random(0x1000000);
            context.fillStyle = "#" + StringTools.hex(randomcolor, 6);

            for(y in 0...8) {
                for(x in 0...4) {
                    var randn = Std.random(2);
                    pattern[y*4+x] = randn;
                    if(pattern[y*4+x] == 1) {
                        context.fillRect(x*64, y*64, 64, 64);
                        //context.fillRect(448-x*64, 448-y*64, 64, 64);
                        context.fillRect(448-x*64, y*64, 64, 64);
                    }
                }
            }
            
            //trace(StringTools.hex(randomcolor, 6));
            context.stroke();       //paint on the canvas
        }

        //button that change the background color
        var changebgbutton = Browser.document.getElementById("changebgbutton");
        changebgbutton.onclick = function () {
            //generate a new random background color
            var randomcolor = Std.random(0x1000000);
            context.fillStyle = "#" + StringTools.hex(randomcolor, 6);

            //for each pixel
            for(y in 0...8) {
                for(x in 0...4) {
                    //replace the old background color by the new one
                    if(pattern[y*4+x] == 0) {
                        context.fillRect(x*64, y*64, 64, 64);
                        context.fillRect(448-x*64, y*64, 64, 64);
                    }
                }
            }
            context.stroke();   //paint on canvas
        }

        //download
        var downloadbutton = Browser.document.getElementById("downloadbutton");
        downloadbutton.onclick = function() {
            //based on a solution from https://stackoverflow.com/questions/8126623/downloading-canvas-element-to-an-image
            var data = drawingcanvas.toDataURL("image/png");
            Browser.window.location.href = StringTools.replace(data, "image/png", "image/octet-stream");
        }
    }
}