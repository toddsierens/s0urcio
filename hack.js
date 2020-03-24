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

capcha_cache = {}
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