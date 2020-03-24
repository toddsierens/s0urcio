# s0urcio
Hack and learn!

Please clone this repo and run 
`virtualenv hack && source hack/bin/activate && pip2 install -r requirements.txt`

and also we will need tesseract ocr
`brew install tesseract`

# Anatomy of a browser game

## Browser elements
Since the deprecation of Flash™, browser games have had to become more creative in how they are exectued. Since then, and the popularization of so-called ["io" games](https://www.crazygames.com/c/io) browser-based games have converged on using an `html` canvas to draw all game elements. This is great for us! Since browser memory can be easily accessed by us, we can fiddle with the inner workings of the games!!!

There are three (officially 4 now! #webassembly plug) programing languages executed by a browser.  
### html

html is strictly a markup language, but it is also the easiest to navigate and to manipulate e.g.  
```
<div class="login-element" style="width: 280px; left: 356px; top: 150px; text-align: center">
                    
    <form id="login-input-form" class="input-form-wrapper" onsubmit="return false;" style="background-color: #0b0b0c; font-size: 18px">&gt; <input type="text" class="input-form" id="login-input" autocomplete="off" spellcheck="false" maxlength="12" placeholder="Enter Name" style="width: 245px; height: 38px">
    </form>
    <div id="login-play" class="button" style="margin-top: 10px; padding: 10px 110px 10px 110px; font-size: 18px; font-weight: bold">Login</div>
    <div style="margin-top: 10px">
        <span style="margin-right: 20px">
            <input type="checkbox" id="checkbox-tutorial" name="turnoff" value="tutorial" checked=""><label for="checkbox-tutorial" class="tut-checkbox-text">Tutorial</label>
        </span>
    </div>
</div>
```

### css  

css is for styling only. It can come in handy for games if there is some kind of advantage that we can get from changing how things look. For e.g. opacity to see through walls, brightness, colours etc. e.g.  
```
#window-msg2 {
    z-index: 300;
    transform: translateX(-50%);
    display: inline-block;
    width: 100%;
    height: 90px;
    background-color: #1b1c21;
    box-shadow: 1px 1px 5px #111;
    text-align: center
}
```
### javascript

javascript is the fully-fledged programming language and it will be where all of the logic is executed, and where all of the memory is held client-side. If we gain access to the correct scope of javascript we can see all variables that are currently being stored client-side. e.g.  
```
function a(t, n, i) {
    var a = new Date;
    a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
    var o = "expires=" + a.toUTCString();
    e.cookie = t + "=" + n + ";" + o + ";path=/"
}
function o(t) {
    for (var n = t + "=", i = e.cookie.split(";"), a = 0; a < i.length; a++) {
        for (var o = i[a]; " " == o.charAt(0); )
            o = o.substring(1);
        if (0 == o.indexOf(n))
            return o.substring(n.length, o.length)
    }
    return ""
}
function r(t) {
    1 != gt.isMuted && (gt.sounds[t] == i && (gt.sounds[t] = {
        clips: [],
        index: 0,
        sr: "../client/sound/" + t + ".mp3"
    }),
    gt.sounds[t].clips[gt.sounds[t].index] == i && gt.sounds[t].clips.push(new Audio(gt.sounds[t].sr)),
    gt.sounds[t].clips[gt.sounds[t].index].play(),
    gt.sounds[t].index += 1,
    gt.sounds[t].index >= 5 && (gt.sounds[t].index = 0))
}
function l(t, e) {
    return 2 == e ? "Costs: <img src='../client/img/icon-bt.png' class='icon-small window-bt-icon'>" + (at.coins.rate * rt.attackCostMult).toFixed(4) : null == wt ? "No Description" : 0 == e && 1 == at.unlocked.firewall[t].state ? wt.Firewall[t].desc : 1 == e && 1 == at.unlocked.market[t].state ? wt.Market[t].desc : "Unlock by mining more BT coins."
}
```

## Server-Client interaction

But there is something else going on. Usually (in order to prevent cheating... oops) all of the vital information is stored and updated server-side. With the client merely acting as a terminal for the player to interact with. Information packets will be sent back and forth from client to server usually in a websocket. e.g. message from server: 
```
42["mainPackage", {unique: [{task: 2008, data: [,…],…}]}]
0: "mainPackage"
1: {unique: [{task: 2008, data: [,…],…}]}
unique: [{task: 2008, data: [,…],…}]
0: {task: 2008, data: [,…],…}
task: 2008
data: [,…]
0: {id: 10, name: "Anon426", level: 1, desc: "no description", comm: {first: "hehe", second: "Lol "},…}
id: 10
name: "Anon426"
level: 1
desc: "no description"
comm: {first: "hehe", second: "Lol "}
first: "hehe"
second: "Lol "
rank: 33
achievmentRank: 0
country: "kp"
]}]
```

# Attack vectors

Any one of these building blocks are vulnerable to attack because the client has access to much more information than the game designer ever wants to give their players. Game designers will purposefully attempt to obfuscate their code, and to scope their variables in ways that make it difficult (but not impossible) to access to. 

### html
With html we have access to the interaction that a player has, but we can manipulate it much faster than a player can

### css
As mentioned earlier, we can modify how the game is rendered and give the player an advantage

### javascript
In the worst-case-scenario, when the server manages all information, and only sends the client information that they need to render the next frame, we can still view the current state of the game as it is encoded. Best case scenario, we can just change a number and have $1,000,000,000 for example.

### websockets
We can read from and emit to the server at any time. In principal, one could even play the game "headless" Without the browser all together, if one properly reads and emits to the server convincingly enough not to get "caught"

# s0urce.io
In this tutorial, we will be attacking only the html using a javascript injection

After getting acquainted with the game, the first hurdle that we can see is that there is a type of capcha that we need to solve in order to even attempt at meaningfully automating the game.  
```<div id="tool-type"><img src="../client/img/word/m/17" class="tool-type-img"></div>```  
So lets see if we can break the capcha



```python
import requests
import numpy as np
import cv2 as cv
from PIL import Image
from IPython.display import clear_output, display
import pytesseract
import sys
import json
import re
```


```python
URL = "http://s0urce.io/client/img/word/"
r = requests.get(URL + "{}/{:d}".format("h", 4), timeout = 3)
image = cv.imdecode(np.frombuffer(r.content, np.uint8), cv.IMREAD_UNCHANGED)
display(Image.fromarray(image))
print pytesseract.image_to_string(image)

```

Not bad!!! Out of the box, tesseract already does a pretty good job at reading what this says. But it won't be very consistent (you can take my word for it, or try it yourself)


```python
def gray(image):
    if len(image.shape) <= 2 or image.shape[2] <= 2:
        return image #already gray
    else:
        return cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    
def display_and_ocr(im):
    display(Image.fromarray(im))
    return pytesseract.image_to_string(im)

grayed = gray(image)
print display_and_ocr(grayed)
```

uh oh, nothing. Lets keep going


```python
def scale(image, factor):
    if factor == 1:
        return image
    interpolation = cv.INTER_AREA if factor < 1 else cv.INTER_CUBIC
    return cv.resize(
        image,
        None,
        0,
        fx = factor,
        fy = factor,
        interpolation = interpolation
    )

scaled = scale(grayed, 5)
print display_and_ocr(scaled)
```

Ok, a little better. Lets try blurring


```python
ksize = (11,11)
sigmaX = 3
blur = cv.GaussianBlur(scaled, ksize = ksize, sigmaX = sigmaX)
display_and_ocr(blur)
```

Awesome! Typically we also do a thresholding and an opening so that the noise and the holes get filled in


```python
kernelsize = 5
kernel = np.ones((kernelsize,kernelsize))
threshold = 120
thresh = cv.threshold(blur, threshold, 255, cv.THRESH_BINARY)[1]
display_and_ocr(thresh)
openned = cv.morphologyEx(thresh, cv.MORPH_OPEN, kernel)
display_and_ocr(openned)
```

# Ok, lets do all of them!!!


```python
# Scraping all of the images
FILENAME_FORMAT = "images/{}{:d}.png"
URL = "http://s0urce.io/client/img/word/"
for diff in ["e", "m", "h"]:
    for i in range(100):
        try:
            r = requests.get(URL + "{}/{:d}".format(diff, i), timeout = 3)
            im = cv.imdecode(np.frombuffer(r.content, np.uint8), cv.IMREAD_UNCHANGED)
            cv.imwrite(FILENAME_FORMAT.format(diff, i), im)
            print "\rCollected image {:2d} from set {}".format(i, diff), 
        except requests.ReadTimeout:
            print "\nFinished collecting images from set {}".format(diff)
            break
        
print "Done"
```


```python
cache = {}
answer = ""
custom_config = r'--psm 8'

def clean_word(w):
    ALPHANUMERIC = "[a-zA-Z0-9]"
    s = ""
    for char in w:
        if re.match(ALPHANUMERIC, char):
            s+=char
    return s.lower()

def remove_green(image):
    hue_image = cv.cvtColor(image, cv.COLOR_BGR2HSV)
    green_mask = cv.inRange(hue_image, (30, 25, 25), (90, 255,255)) / 255
    return green_mask * 255

def gray(image):
    if len(image.shape) <= 2 or image.shape[2] <= 2:
        return image #already gray
    else:
        return cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    
def scale(image, factor):
    if factor == 1:
        return image
    interpolation = cv.INTER_AREA if factor < 1 else cv.INTER_CUBIC
    return cv.resize(
        image,
        None,
        0,
        fx = factor,
        fy = factor,
        interpolation = interpolation
    )

ksize = (11,11)
sigmaX = 3
kernelsize = 5
kernel = np.ones((kernelsize,kernelsize))
threshold = 120
scale_factor = 5

for diff in ["e", "m", "h"]: #super lazy way of iterating over images
    for i in range(100):
        image = cv.imread(FILENAME_FORMAT.format(diff, i))
        if image is None :
            break
        filter_green = remove_green(image)
        grayed = gray(filter_green)
        scaled = scale(grayed, scale_factor)
        blur = cv.GaussianBlur(scaled, ksize = ksize, sigmaX = sigmaX)
        thresh = cv.threshold(blur, threshold, 255, cv.THRESH_BINARY)[1]
        openned = cv.morphologyEx(thresh, cv.MORPH_OPEN, kernel)
        s = pytesseract.image_to_string(openned, config = custom_config)
        s = clean_word(s)
        width = image.shape[1] / 50
        display(Image.fromarray(scale(image, 0.5)))
        print s
        sys.stdout.flush()
        cache["{}{:d}".format(diff,i)] = str(s)


with open("word_dict.json", "w+") as outfile:
    json.dump(cache, outfile)
```


# Back to the html
## Things to do:


1. Login  
 `#login-input`, `#login-input-form`
1. Find hacking target  
 `#player-list`
1. Attack target on all ports  
 `#window-other-port1`, `#window-other-port2`, `#window-other-port3`  
1. Solve capcha  
 `.tool-type-img`, `#tool-type-word`
1. Close annoying success dialog  
 `.targetmessage-button-cancel`
1. Buy bitcoin miners  
 `#shop-quantum-server`
1. Buy firewall defences  
`#window-firewall-part1`, 
`#window-firewall-part2`, 
`#window-firewall-part3`, 
`#shop-firewall-charge5`, 
`#shop-firewall-max_charge10`, 
`#shop-firewall-difficulty`, 
`#shop-firewall-regen`

## Toolkit:
The `setInterval` function is great for code blocks that you want to run in a loop

For example, if we want to click on the "buy quantum server button" every 5 seconds, we could inject this snippet:  
`setInterval(function(){$("#shop-quantum-server").click()}, 5000));`


```python
with open("hack.txt", "r") as infile:
    js = infile.read()
js = js.format(cache = cache)
with open("hack.js", "w+") as outfile:
    outfile.write(js)
```


```python
print js
```
