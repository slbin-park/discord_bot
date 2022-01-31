const db = require('../../config/db');
const game = (msg) => {
    const insert_query = msg.content.split(' ')
    if (insert_query.length > 2 || insert_query.length < 2) {
        msg.channel.send('```css\n!게임 숫자\n```\n를 입력해주세요')
        return
    }
    return new Promise((resolve, reject) => {
        const Iquery = "INSERT INTO test(test) VALUES(?);";
        db.query(Iquery, [insert_query[1]], (err, data) => {
            if (err) console.log(err);
            else {
                msg.channel.send('입력 성공!')
            }
        });
    });
}

module.exports = {
    game
}