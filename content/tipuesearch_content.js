var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-4 \n week5-8 \n week9-12 \n week13-16 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-4', 'text': 'week1: \n \n 1.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 2.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cd2020\'\' \n 3.git clone至自身的USB \n 4.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 5.下載附件 python -m pip install flask_cors \n 6.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 7.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n \n week2: \n (一)各組組長需自行至教學頁面上自行加入 (group leader) 之標誌，並"git pull request"提交 \n 如何提交? \n 1.首先先Fork老師個人倉儲. \n 2.將 Fork後的個人倉儲，以git clone --recurse-submodules\xa0"個人倉儲網址"下載至隨身系統. \n 3.進入編輯頁面增加各組組長別稱 \n 4.提交完畢後已"New \xa0pull request"對老師倉儲新增提交 \n (二)將現有的Python3.7.3更新至Python3.8.2 \n (三)開小組會議-討論未來分工及細項事務 \n week3: \n week4: \n', 'tags': '', 'url': 'week1-4.html'}, {'title': 'week5-8', 'text': 'week5: \n week6: \n week7: \n week8: \n', 'tags': '', 'url': 'week5-8.html'}, {'title': 'week9-12', 'text': 'week9: \n week10: \n week11: \n week12: \n', 'tags': '', 'url': 'week9-12.html'}, {'title': 'week13-16', 'text': 'week13: \n week14: \n week15: \n week16: \n', 'tags': '', 'url': 'week13-16.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};