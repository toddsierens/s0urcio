INTERVAL = 1000;
NEW_TARGET_INTERVAL = 30000; // 30 seconds

PLAYER_NAME = "¯\\(ツ)/¯"
LOGIN_INPUT = "#login-input"
LOGIN_INPUT_FORM = "#login-input-form"
PLAYER_LIST = "#player-list"
PORT1 = "#window-other-port1"
PORT2 = "#window-other-port2"
PORT3 = "#window-other-port3"
TYPE = "#tool-type-word"
IMG = ".tool-type-img"
QUANTUM_SERVER = "#shop-quantum-server"
CLOSE_DIALOG = ".targetmessage-button-cancel"
FIREWALL1 = "#window-firewall-part1"
FIREWALL2 = "#window-firewall-part2"
FIREWALL3 = "#window-firewall-part3"
CHARGE = "#shop-firewall-charge5"
MAX_CHARGE = "#shop-firewall-max_charge10"
DIFFICULTY = "#shop-firewall-difficulty"
REGEN = "#shop-firewall-regen"

// Solve capcha

capcha_cache = {'h47': 'hostnewserver', 'h46': 'encodenewfolder', 'h45': 'loadaltevent', 'h44': 'checkhttptype', 'h43': 'sendintelpass', 'h23': 'blockthreat', 'h41': 'includedirectory', 'h40': 'respondertimeout', 'h22': 'changeusername', 'h49': 'loadregisterlist', 'h48': 'getfirewallchannel', 'e19': 'host', 'e18': 'user', 'm57': 'gridheight', 'm56': 'newline', 'm51': 'account', 'm50': 'generate', 'm53': 'protocol', 'm52': 'encrypt', 'e11': 'domain', 'e10': 'intel', 'e13': 'right', 'e12': 'set', 'e15': 'handle', 'e14': 'write', 'e17': 'temp', 'e16': 'client', 'h3': 'callmodule', 'h18': 'fileexpresslog', 'h19': 'create2axisvector', 'h54': 'rootcookieset', 'h50': 'dodecahedron', 'h51': 'mergesocket', 'h52': 'createnewsocket', 'h53': 'changepassword', 'h5': 'channelsetpackage', 'm48': 'proxy', 'm49': 'newserver', 'm42': 'hexagon', 'm43': 'mysql', 'm40': 'setnewid', 'm41': 'setping', 'm46': 'username', 'm47': 'datatype', 'm44': 'length', 'm45': 'gridwidth', 'h11': 'unpacktmpfile', 'h12': 'sizeofhexagon', 'h42': 'tempdatapass', 'h13': 'systemgridtype', 'h17': 'createnewpackage', 'm39': 'filedir', 'm38': 'writefile', 'm37': 'syscall', 'm36': 'getinfo', 'm35': 'encryptfile', 'm34': 'userport', 'm33': 'export', 'm32': 'newhost', 'm31': 'command', 'm30': 'server', 'm55': 'getkey', 'm54': 'setport', 'e9': 'join', 'e8': 'url', 'e5': 'root', 'e4': 'global', 'e7': 'loop', 'e6': 'add', 'e1': 'info', 'e0': 'ghost', 'e3': 'dir', 'e2': 'num', 'm28': 'getid', 'm29': 'getfile', 'm24': 'module', 'm25': 'disconnect', 'm26': 'threat', 'm27': 'constructor', 'm20': 'password', 'm21': 'eventtype', 'm22': 'getping', 'm23': 'channel', 'e60': 'load', 'e61': 'key', 'h8': 'loadloggedpassword', 'h9': 'wordcounter', 'h2': 'getdatapassword', 'm59': 'loadbytes', 'h0': 'createfilethread', 'h1': 'httpbuffersize', 'h6': 'create3axisvector', 'h7': 'eventlistdir', 'h4': 'ghostfilesystem', 'm58': 'thread', 'm11': 'package', 'm10': 'decryptfile', 'm13': 'number', 'm12': 'listconfig', 'm15': 'vector', 'm14': 'findpackage', 'm17': 'hostserver', 'm16': 'responder', 'm19': 'response', 'm18': 'fillgrid', 'm1': 'urlcheck', 'm5': 'accountname', 'm4': 'getlog', 'm7': 'userid', 'm6': 'setstats', 'e59': 'type', 'e58': 'stat', 'm3': 'decrypt', 'm2': 'serverproxy', 'e55': 'data', 'e54': 'part', 'e57': 'upload', 'e56': 'val', 'e51': 'pass', 'e50': 'left', 'e53': 'signal', 'e52': 'get', 'm60': 'sizeof', 'm0': 'connect', 'm61': 'download', 'm62': 'config', 'm63': 'encode', 'm64': 'getpass', 'm65': 'setcookie', 'e42': 'status', 'e43': 'xml', 'e40': 'count', 'e41': 'http', 'e46': 'remove', 'e47': 'event', 'e44': 'socket', 'e45': 'send', 'h10': 'statusofprocess', 'm9': 'process', 'e48': 'size', 'e49': 'bit', 'h14': 'getxmlprotocol', 'h15': 'systemportkey', 'h16': 'encryptunpackedbatch', 'm8': 'filetype', 'e37': 'net', 'e36': 'com', 'e35': 'ping', 'e34': 'cookies', 'e33': 'list', 'e32': 'port', 'e31': 'buffer', 'e30': 'add', 'h25': 'setnewproxy', 'h24': 'getpartoffile', 'h27': 'disconnectchannel', 'h26': 'generatecodepack', 'h21': 'bufferpingset', 'h20': 'patcheventlog', 'e39': 'reset', 'e38': 'init', 'h32': 'emitconfiglist', 'h33': 'joinnetworkclient', 'h30': 'exportconfigpackage', 'h31': 'decryptdatabatch', 'h36': 'getmysqldomain', 'h37': 'disconnectserver', 'h34': 'removenewcookie', 'h35': 'uploaduserstats', 'h29': 'destroybatch', 'h38': 'removeoldcookie', 'h39': 'batchallfiles', 'h28': 'deleteallids', 'e24': 'log', 'e25': 'file', 'e26': 'system', 'e27': 'delete', 'e20': 'emit', 'e21': 'anon', 'e22': 'bytes', 'e23': 'point', 'e28': 'call', 'e29': 'poly'}
// keep track of ongoing processes
intervals = [];

// Login

$(LOGIN_INPUT).val(PLAYER_NAME);
$(LOGIN_INPUT_FORM).submit();

// Find player to hack

function findTarget(){
    playerlist = $(PLAYER_LIST).children();
    if (playerlist.length == 1){
        setTimeout(findTarget, 1000);
        return
    }
    viable_targets = [];
    for (var i = 0; i < playerlist.length; i++){
        if (!playerlist.eq(i).children().eq(1).text().includes(PLAYER_NAME)){
            viable_targets.push(i);
        }
    }
    n = viable_targets.length;
    if (n){
        r = Math.floor((Math.random() * n));
        target = viable_targets[r];
        playerlist.eq(target).click();
    }
}

findTarget();
intervals.push(setInterval(findTarget, NEW_TARGET_INTERVAL))

// Hacking

ports = [$(PORT1), $(PORT2), $(PORT3)];
target = 0; // global variable tracking port index

function hackTarget(){
    form=$(TYPE);
    image=$(IMG)[0];
    answer = capcha_cache[image.src.split("/").slice(-2).join("")];
    if (answer){
        var i = 0
        var typingInterval = INTERVAL / 2 / (answer.length + 1);
        setTimeout(function nextLetter(){
            form.val(answer.slice(0, i));
            i++;
            if (i <= answer.length){
                setTimeout(nextLetter, typingInterval);
            } else{
                setTimeout(function(){form.submit();}, typingInterval)
            }
        }, typingInterval);
    } else{
        ports[target % 3].click();
        target ++;
    }
}

intervals.push(setInterval(hackTarget, INTERVAL));

// Buy Quantum Servers

intervals.push(setInterval(function(){$(QUANTUM_SERVER).click()}, 5000));

// Close hacking success dialog

intervals.push(setInterval(function(){$(CLOSE_DIALOG)[0].click()}, INTERVAL));

// Upgrades

firewalls = [$(FIREWALL1), $(FIREWALL2), $(FIREWALL3)];
firewall_port = 0; // global variable tracking port index
firewall_upgrade = 0; // global variable tracking upgrade index
firewall_upgrades = [
    $(CHARGE),
    $(MAX_CHARGE),
    $(DIFFICULTY),
    $(REGEN)
]

function upgrade_loop(){
    if (firewall_upgrade == 4){
        firewall_upgrade = 0;
        firewall_port++;
        if (firewall_port == 3){
            firewall_port = 0;
        }
        firewalls[firewall_port].click()
    }
    firewall_upgrades[firewall_upgrade].click();
    firewall_upgrade++;
}

intervals.push(setInterval(upgrade_loop, 500));

function kill(){
    while (intervals.length){
        clearInterval(intervals.pop());
    }
}