let currentXP = 0;
const maxXp = 200;

function increaseXP(){
    currentXP += 1;
    if (currentXP >= maxXP){
        currentXP = maxXP;
    }
    updateXPBar();
}

function updateXPBar(){
        const xpBar = document.getElementById("xp-bar");
        const percentage = (currentXP / maxXP) * 100;
        xpBar.style.width = percentage + "%";
}
