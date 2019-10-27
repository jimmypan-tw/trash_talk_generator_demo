function generateTrashTalk(target) {
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']
    trashtalk = `身為一個 ${target}, ${sample(task[target])}應該${sample(phrase)}吧!`

    return trashtalk
}

function sample(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk