## GitHub 使い方

### 約束事
* masterブランチで作業をしない。作業は必ず自分のブランチをきってから行う。
* マージ(Merge)はリーダーが行う。
* `git push origin master`をしない。

### 0.cd カレントフォルダ(HEW2)に移動する

### 1.masterブランチからブランチを作成

`git branch`

（masterブランチにいるか確認する）

`git pull origin master`

(ローカルのmasterブランチをpullで更新)

`git checkout -b 新ブランチ名(自分の名字)`

`git branch`

（自分のブランチにいるか確認する）

### 2.開発

### 3.ステージに追加し、コミット

`git status`

git add するファイル(自分の担当ファイルのみか)を確認する。

**data.sqliteが合った場合は以下のコマンドを打つ！**

`git restore data.sqlite`

`git status`

（現在の状況をもう一度確認し、余計なファイルがないか再確認）

`git add .`

`git status`

（現在の状況を確認する）

`git commit -m "コミットメッセージ"`

`git status`

（現在の状況を確認する）

### 4.ブランチをGitHubにプッシュ
`git push origin ブランチ名(自分の名字)`

### 開発が終了するまで2~4繰り返し（定期的にプッシュする）

### 5.開発が完了したらプルリクエストを出す
**Compare & pull request**をクリック

**Merge pull requestボタンは押さない！！！**

#### 以下は必ずリーダーのみ行う
<details>
Merge pull requestボタンを押しmainブランチにマージ

Delete branchボタンを押し不要になったリモートブランチを削除
</details>

### 6.ローカルブランチを削除する
`git checkout master`

`git branch -D ブランチ名(自分の名前)`

### 7.ローカルのmasterブランチをpullで更新
`git branch`

（masterブランチにいるか確認する）

`git pull origin master`


### 8.ブランチの作成


`git checkout -b ＜新しいブランチ名＞`

### 9各グループへ

    Backend =      バック
    Frontend =     フロント
    Scenario =     シナリオ
    Character =   キャラクター

それぞれのファイルでデータやファイルを共有大丈夫です、ただしmainブランチにアップするものはあくまで出来上がったもの、
変更や修正がいるものは新しいブランチを作ってください



## GitHubコマンド打ちたくない方へ

### オプションは二つあります

#### 1  VSCodeのGithub Extensionをダウンロードしそこから作業する

#### 2  GitHub DesktopをインストールしそこからPull,pushのGitを操作する




### 1.1　Vscodeでやる人はここから

![img1](https://user-images.githubusercontent.com/50572505/119298062-38905a00-bc97-11eb-810a-87627aa79cf7.png)

 1ブランチの確認/変更
   
    左下の部分にブランチの確認と変更ができます


   ![img2](https://user-images.githubusercontent.com/50572505/119298469-10552b00-bc98-11eb-963c-dffc9fea2add.png)
   
    Create new branch...で新しいブランチを作成できます

 2 ChangeとStaged Change　
      
    ＋は変更や作ったものをStaged Changeにする（変更したものを確認したという意味）
    ↶は変更したものを前の状態に戻す（最後のコミット状態）

 3アイコン
      
    M は変更（既にある物を変更）
    A 新しく追加された（ファイル、写真が前のコミットに存在していない）


 4 コミットのコメントを入力する場所
    
    ・コミット名は　[]変更された部分の一言
    例　　　[Fix]ログインエラー   
           [Add]新規登録機能
    ルールではないが誰かが見ても理解できたらいい（各グループで話し合ってきめてもよし



  5 ✔をクリックするとStaged Changeされてる物をコミットする    

ここまでは***個人のPCです***GitHubにはまだアップロードしていません。

![スクリーンショット 2021-05-24 141003](https://user-images.githubusercontent.com/50572505/119299792-9d997f00-bc9a-11eb-9b84-29197b362321.png)

ここの🔄0↓1↑をクリックしない限りアップロードしませんのでご注文ください
    
    ↑　＝　アップロード
    ↓　＝　ダウンロード


これができたら完了です！


  


### 2.1　GitHub Desktopでやるかたこちら

### 1に戻る
