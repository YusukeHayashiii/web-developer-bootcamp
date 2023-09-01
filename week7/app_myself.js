// 起動すると「コマンドを入力してください(new, list, delete.quit)」と表示される
// newを入力すると「新しいtodoを追加してください」と表示され、新しいtodoを追加する。
// todoは配列に格納され、hogeが追加されましたと表示される
// listでtodoの一覧を表示する。配列の中身とインデックスを表示し、前後の行に区切りを表示する
// deleteでtodoを削除する。削除するtodoの番号を入力すると、そのtodoが削除される。spliceメソッドが使える
// quitでアプリを終了する


// todoを格納する配列
let todoList = []; //constでも良い
// コマンド、新しいtodo、削除するインデックスの変数定義
let commands = prompt('コマンドを入力してください（new, list, delete, quit）');
let newToDo = ''; //constでも良い
let delIndex = '';

while (commands !== 'quit') {
    // newの処理
    if (commands === 'new') {
        newToDo = prompt('新しいtodoを追加してください');
        todoList.push(newToDo);
        // commands = prompt('コマンドを入力してください（new, list, delete, quit）');
    }
    // listの処理 
    else if (commands === 'list') {
        console.log('-----');
        for (let i = 0; i <= todoList.length - 1; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('-----');
        // commands = prompt('コマンドを入力してください（new, list, delete, quit）');
    }
    // deleteの処理
    else if (commands === 'delete') {
        delIndex = parseInt(prompt('削除するtodoの番号を入力してください'));
        while (!delIndex || delIndex >= todoList.length) {
            delIndex = parseInt(prompt('エラーが起きました。もう一度削除するtodoの番号を入力してください'))
        }
        const delLog = todoList.splice(delIndex, 1);
        console.log(`${delLog}のtodoが削除されました`);
        // commands = prompt('コマンドを入力してください（new, list, delete, quit）');
    }
    // それ以外の時は再びコマンドを入力してもらう
    commands = prompt('コマンドを入力してください（new, list, delete, quit）');
    // else {
    //     commands = prompt('コマンドを入力してください（new, list, delete, quit）');
    // }
}
// quitの処理
console.log(commands)
console.log('アプリを終了します')