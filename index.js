const { Telegraf, Markup } = require('telegraf');
const env = require('./.env');
const token = env.token;


if (token === undefined) {
  throw new Error('Deu merda no token!')
}

const bot = new Telegraf(env.token)

//minera as informações
bot.use(Telegraf.log())


//menu de interação  /custom
bot.command('custom', async (ctx) => {
  return await ctx.reply('Bem-vindo ao bot mais brabo do brasil!',Markup
    .keyboard([
      ['BTC', 'ETH'], 
      ['DOGE', 'LGN'], 
      ['Compre meu Bot!!', 'Próxima ->']
    ])
	.resize()
	//.oneTime()      //função que permite o usuário clicar somente uma vez no botão
  )
})

bot.hears('BTC', ctx => ctx.reply('BTC -- $25.000,00'))
bot.hears('ETH', ctx => ctx.reply('ETH -- $2.000,00'))
bot.hears('DOGE', ctx => ctx.reply('DOGE -- $0.01,00'))
bot.hears('LGN', ctx => ctx.reply('\n oi tudo bem \nLGN -- $0.40,00'))
bot.hears('Compre meu Bot!!', ctx => ctx.reply(` ${ctx.match}`))
bot.hears('Próxima ->', ctx => ctx.reply('Yay!'))

bot.launch()