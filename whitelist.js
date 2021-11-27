
const Discord = require(`discord.js`);
const prefix = ("/")


exports.run = async (client, message, args) => {

    await message.author.createDM()
    message.delete()
    message.channel.send(`${message.author}, Olhe privado o processo ira ser por la`)
    const embed = new Discord.MessageEmbed()
        .setAuthor('Whitelist Nome do seu Servidor', client.user.avatarURL())
        .setDescription('💯 Olá, fazer sua WHITELIST, explique ela de forma clara e obvia. \n \n  📌 Para começar Fazer sua WHITELIST digite \`continuar`\, não será tolerado brincadeiras com este comando, caso acontecer será punido sem aviso prévio.')
        .setColor('#0000CD')
        .setTimestamp()
        .setFooter('⛄ Infinity Roleplay | Oficial • ©️ Todos os direitos reservados.')
    message.author.send(embed)

    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

    main.on('collect', a => {

        const pergun1 = new Discord.MessageEmbed()
            .setColor("#0000CD")
            .setDescription(`\`\`\`📍 - Qual seu nome no game?\`\`\` `) /*Pergunta 1*/

        if (a.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada.');
        if (a.content.toLowerCase() === "continuar") message.author.send(pergun1)

        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })

        prg2.on('collect', b => {
            if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
            let n1 = b.content
            const pergun2 = new Discord.MessageEmbed()
                .setColor("#0000CD")
                .setDescription(`\`\`\`💡 - Oque e RDM?\`\`\``) /*Pergunta 2*/
            message.author.send(pergun2)

            var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg28.on('collect', f => {
                if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                let n3 = f.content
                const pergun3 = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`\`\`💡 - Oque e VDM?\`\`\``) /*Pergunta 3*/
                message.author.send(pergun3)

                var prg27 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                prg27.on('collect', b => {
                    if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                    let n4 = b.content
                    const pergun2 = new Discord.MessageEmbed()
                        .setColor("#0000CD")
                        .setDescription(`\`\`\`💡 - Oque e PowerGaming?\`\`\``) /*Pergunta 4*/
                    message.author.send(pergun2)
        
                    var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                        time: 100000 * 50,
                        max: 1
                    })
        
                    prg28.on('collect', f => {
                        if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                        let n5 = f.content
                        const pergun3 = new Discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription(`\`\`\`💡 - Oque e MetaGaming\`\`\``) /*Pergunta 5*/
                        message.author.send(pergun3)
        
                        var fim = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                            time: 100000 * 50,
                            max: 1
                        })                    

                fim.on('collect', c => {
                    let n2 = c.content
                    const pergun3 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`**Sua WHITELIST foi enviado com sucesso aguarde algum staff analisar!**`)
                    message.author.send(pergun3)

                    const avaliacao = new Discord.MessageEmbed()
                        .setTitle("**<a:Boost2:757983630176813136> WHITELIST NOVA <a:Boost2:757983630176813136>**")
                        .setColor("#0000CD")
                        .setDescription(`**<a:kk:757983899384283288> Nome:**\`\`\`${n1}\`\`\` \n<a:rjp_estrela:757984029109911675> **RDM:** \`\`\`${n3}\`\`\`\n<a:rjp_estrela:757984029109911675> **VDM:** \`\`\`${n4}\`\`\`\n<a:rjp_estrela:757984029109911675> **PowerGaming:** \`\`\`${n2}\`\`\`\n<a:rjp_estrela:757984029109911675> **MetaGaming:**\`\`\`${n5}\`\`\``)
                        .setThumbnail("https://cdn.discordapp.com/icons/758572716826689556/1c19865ab99a6164db237bf73dd4a787.png?size=2048")
                        .setFooter('⛄ Infinity Roleplay | Oficial • ©️ Todos os direitos reservados.')
                        client.channels.cache.get('772110086067322881').send("Nova Whitelist Recebida @everyone")
                    client.channels.cache.get('772110086067322881').send(avaliacao).then(async msg => {
                    });
                });
            });
        });
    });
});
});
};
exports.help = {
    name: "white"
}