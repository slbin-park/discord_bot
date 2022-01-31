const { MessageEmbed } = require('discord.js');

const clear = (msg) => {
    const clear_msg = msg.content.split(' ')
    if (clear_msg.length < 2 || clear_msg.length > 2) {
        msg.channel.send('```css\n!청소 1~100사이숫자\n```\n 를 입력해주세요')
    }
    else if (isNaN(clear_msg[1])) {
        msg.channel.send('숫자를 입력해주세요')
    }
    else {
        const count = parseInt(clear_msg[1])
        // 저희는 MessageEmbed 생성자로 embed를 생성할 수 있습니다.
        msg.channel.bulkDelete(count + 1).then((count) => {
            const embed = new MessageEmbed()
                .setTitle("청 소") // 1 - embed의 제목을 담당합니다.
                .setColor('#2ECC71') // 2 - embed 사이드 바의 색을 정합니다.
                .setDescription(count.size - 1 + '개의 메시지를 삭제했습니다.'); // 3 - 실제로 설명을 담당하는 곳입니다.
            msg.channel.send({ embeds: [embed] })
        }).catch((err) => {
            // console.log('에러 - ', err)
        })
    }
}
module.exports = {
    clear
}