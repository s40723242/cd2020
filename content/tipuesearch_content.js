<<<<<<< HEAD
var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-4 \n week5-8 \n week9-12 \n week13-16 \n \n 分組網站: https://s40723246.github.io/cd2020-bg1/content/index.html \n 舊網站: https://s40723242.github.io/cad2019/content/index.html \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-4', 'text': 'week1: \n \n 1.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 2.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cd2020\'\' \n 3.git clone至自身的USB \n 4.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 5.下載附件 python -m pip install flask_cors \n 6.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 7.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n \n week2: \n (一)各組組長需自行至教學頁面上自行加入 (group leader) 之標誌，並"git pull request"提交 \n 如何提交? \n 1.首先先Fork老師個人倉儲. \n 2.將 Fork後的個人倉儲，以git clone --recurse-submodules\xa0"個人倉儲網址"下載至隨身系統. \n 3.進入編輯頁面增加各組組長別稱 \n 4.提交完畢後已"New \xa0pull request"對老師倉儲新增提交 \n (二)重新建立Python3.8.2 \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n 參考影片: \n \n 操作影片: \n \n (三)開小組會議-討論未來分工及細項事務 \n 本組 gitter : https://gitter.im/cd2020bg1/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link \n 會議大綱: \n 1.網站的格式及編譯 2.工作分配 3.PDF放倉儲的位置及如何放置 \n 第一次會議直播: \n \n week3: \n 分配結果: \n \n \n \n 任務 \n 亂數系統程式 \n 可攜系統 \n 四輪車 \n \n \n 小組長 \n 40723229 \n 40723242 \n 40723206 \n \n \n 組員 \n 40723223 40723226 40703246 \n 40723230 40723201 40732319 \n 40723213 40723241 40723216 \n \n \n \n 可攜系統 \n 操作影片: \n \n 內容整理: \n 重新建立Python3.8.2: \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n \n 加入Solvespace 編譯 \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本是否在"2.13以上" \n 3.git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace(務必在網路穩定地方下進行下載) \n 4.編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 開啟後將第713行及714行前方加上"#" \n 5.將 libpng.dll.a 的編譯，改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 6. cd solvespace\xa0>cd extlib\xa0>cd libpng >mkdir build > cd build\xa0 \n 7.輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.輸入mingw32-make > 退到solvespace > mkdir build > cd build \n 9.在執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 10.在輸入mingw32-make\xa0> Done \n 教學影片: \n \n \n 導入 Webots \n \n 1.下載 Webot 2019a.7z \n 2. 複製start_mdecourse.bat並更名start_mdecourse -webot.bat \n 3.將指令貼上 \n 4.按stop,開啟 start_mdecourse -webot.bat \n 5.完成 \n 參考資料: \n https://2019wcm.blogspot.com/2019/03/ \n week4: \n 本周各組員皆須對各組員繳交之 Assignment 1進行 評分 \n Assignment 1介紹 \n \n', 'tags': '', 'url': 'week1-4.html'}, {'title': 'week5-8', 'text': 'week5: \n -清明連假- \n \n week6: \n 會議大綱: \n 1.第二次作業分配 \n (一)內容整理 \n \n \n \n 任務 \n \n DigitalProductCollaboration.pdf \n IndustrialAndEngineeringProductDesignCollaboration.pdf \n \n \xa0 MechanicalDesignProcess.pdf . \n \n \n 小組長 \n 40723229 \n 40723242 \n 40723206 \n \n \n 組員 \n 40723223 40723226 40703246 \n 40723230 40723201 40732319 \n 40723213 40723241 40723216 \n \n \n \n (二)四輪車外型設置並以鍵盤控制方向 \n 2.提醒組員完成未完成相關事項 \n 第二次會議直播: \n \n \n Chapter 2(精簡版) \n 建立設計 \n 本章將以產品的角度出發，優化所有組成最終對象的對象的方法工作設計 \n 2.1 如何開始 \n \n 全新的設計 \n 延續（或增加）現有設計 \n 現有設計的重大修改 \n \n 2.2 定義設計邊界：系統說明 \n \n 專注於個人責任(工作範圍) \n 瞭解必須與本設計介面的其他設備 \n 整體"系統"功能(而不僅僅是子系統的功能) \n \n 2.3 設計過程 \n 2.3.1總體項目開始到項目完成 \n 1.構思草圖 \n 2.審查想法並授權進行原型製作 \n 3.製作原型構想的圖紙（文件創建） \n 4.原型製造（物理零件） \n 5.原型分析和測試 \n 6.審查原型和測試結果 \n 7.進行更改以改進原型（圖紙和原型） \n 8.對版本2的進一步分析和測試 \n 9.最終文件製作/最終測試/最終審查 \n 10.正式批准生產發布的設計 \n 2.3.2 EPE設計者的開始注意事項 \n 1.確定與負載不直接相關的解決方案的用途和要求 \n 2.根據可能需要單個構件（和組件）承受的所有各種可能類型的載荷來確定或估算工作載荷 \n 3.確定故障機制將是什麼 \n \xa0 \n 2.4.1間隙距離 \n 1.物體和牆壁的公差 \n 2.物體相對於牆壁的運動（在產品運行過程中） \n 3.物體的伸長（在操作過程中） \n 4.總體（外部）尺寸限制 \n 2.4.2對象排列 \n \xa0 設計人員通常會通過“生產”安排最佳化，滿足組裝，維修，美觀或用戶界面的需求 \n \n 加工公差 \n 冷卻要求 \n 組裝和維修要求 \n 產品品管 \n 較小的生態足跡（節省材料） \n 在空間有限的情況下節省空間 \n 降低成本（對於消費者或生產者） \n 產品操作所需的強度 \n \n 2.4.3對象排列示例 \n 2.4 最佳對象放置 \n 將各部件及系統裝置安排至最佳位置 \n \n \n 關於對象排列的一些結論 \n \n 以高效的方式利用空間 \n 放置彼此需要接近的物件,盡可能靠近每個物件，反之亦是如此 \n \n 章節摘要 \n 本章將我們帶入一個只有想法的設計的起點。 它向我們展示瞭解如何將這個想法轉變為物體在空間中的幾何放置，從而使我們對該想法進行物理表現。 \n 首先，我們著眼於起點並定義設計的邊界-我們從什麼開始，什麼是設計的“外緣” 我們必須定義客戶所需的產品。 \n 最後需要權衡取捨，我們必須意識到我們如何確定這些權衡之間的最佳選擇。 \n 心得: \n 本章節訴求在設計是要有一個有想法，從無到有設計產品的過程需要有縝密的考量也需再製造端客戶端之間去做取捨，得到雙方滿意才是個成功的產品 \n week7: \n 四輪車外型設置並以鍵盤控制方向 \n 影片: \n \n 步驟: \n 1.首先點選Add>Primitive shape>Cuboid 建立矩形作為車身，給定尺寸後將車身拉高 2.接著點選Add>Primitive shape>Cylinder 建立四輪車的輪胎，給定尺寸並調整其方向及位置 3.再來點選Add>Joint>Relvoute 新增馬達給予速度並調整其方向及位置 4.檢查車體的碰撞設置是否開啟 5.複製其輪胎及馬達並將位置及結構設置好 6.將四輪車的前輪馬達重新命名為right_motor及left_motor 7.將寫好的子程式加入車體 8.進行測試(以鍵盤控制)四輪車 \n 9.完成 \n \n 第三次開會紀錄: \n \n 作業一(4 輪車) 1.根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機 器人需要做些什麼? 2.四輪車馬達設定及鍵盤控制加速及轉彎 \n week8: \n 第八周上課組員示範: \n \n', 'tags': '', 'url': 'week5-8.html'}, {'title': 'week9-12', 'text': 'week9: \n W9 期中考週線上課程進行步驟: \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影. \n \n week10: \n gm用戶登入設置 \n 影片: \n \n 步驟: \n 1.首先將cd2020pj1 clone下來 2.啟用API，選擇Google+Domains API 3.建立憑證，選擇OAuth ID，選擇"網頁應用程式" 4.輸入授權來源網址 5.使用者類型設為"內部" 6.將用戶端ID及用戶端密碼存入txt，修改名稱後放入與2020pj1同個介面 7.打開leo，開啟cd2020pj1.leo，修改內容 8.儲存後點擊ROC，回到黑窗輸入指令 9.完成後進入cd2020pj1開啟python wsgi.py 10.進到頁面後輸入身分認證後完成 \n week11: \n Ubuntu設定及API連線 \n 影片: \n \n 步驟: \n \n \n 以ssh對Github連線 \n 影片: \n \n 步驟: \n 1.將E:\\201906_fall\\data\\portablegit\\bin中的sh_for_solvespace_compile複製並更名為sh.exe \n 2.進入黑窗輸入 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 3.下載putty並透過putty.chm新增兩枚鑰使 \n 4.修改 start.bat: \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 5.修改自身 倉儲 .git 中的 config 檔案中的 url 設定 \n url =  git@github.com:mdecourse/cad2019.git \n 6.設定putty \n 7.在Y:\\home_mdecourse\\.ssh中新增config並加入指令 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 8.在githun ssh設定中新增鑰使 \n 9.完成 \n week12: \n 第四次開會紀錄: \n \n IPv4 Ubuntu對外連線設定操作: \n 影片: \n 步驟: \n', 'tags': '', 'url': 'week9-12.html'}, {'title': 'week13-16', 'text': 'week13: \n week14: \n week15: \n week16: \n', 'tags': '', 'url': 'week13-16.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': '', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Random grouping', 'text': '資料編輯者:40723242 \n 1.Describe how to do an efficient random grouping for this course or do the roll calling randomly? \n 亂數分組 \n 程序 \n 1.讀取學員資料並將各學員學號轉入數列 \n 2.利用亂數模組中的  shuffle  函式 ,  隨機弄亂學員學號數列 \n 3.利用重複迴圈 ,  將學員學號數列中一一取出 ,  準備進行分組 \n 4.在迴圈中利用整數相除後取得餘數的規律 ,  依照每組幾人的規劃進行分組 \n 5.在分組過程 ,  再設法利用數列 append,  將各組學員學號納為分組數列 \n 6.最後將各組數列再放入選課班級數列中存取備用 \n ~在這之前我們必須了解以下模組 ~ \n for迴圈: 在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴圈(loop) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行。 \n Random.shuffle: shuffle方法將序列的所有元素隨機排序。 \n Request:此模組是為了下載網頁上的資料，並以request模組建立適當的HTTP 請求，透過HTTP 請求從網頁伺服器下載指定的資料，分為兩種模式Post、Get。 \n url: 取得請求網址。 \n status_code:伺服器回應的狀態碼。 \n text:取得網頁  HTML  原始碼。 \n 總結 :亂數分組需從 index.html 或是主程式抓取網址並透過 request 去擷取相關參數並透過 Random.shuffle 去打亂，在利用數列的 append 進行編排，才能完成每周抽點的抽點編排。 \n 參考資訊 : \n https://ithelp.ithome.com.tw/articles/10206215 \n https://www.runoob.com/python/att-string-splitlines.html \n https://www.runoob.com/python/func-number-random.html \n https://www.runoob.com/python/func-number-shuffle.html \n https://2019wcm.blogspot.com/2019/02/blog-post_18.html \n', 'tags': '', 'url': 'Random grouping.html'}, {'title': 'Portable system', 'text': '資料編輯者:40723242 \n 2 .Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n 可攜系統 \n 重新建立 Python3.8.2 – 教學影片 \n 重新建立Python3.8.2: \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n \n 參考資料 :   https://2019wcm.blogspot.com/2019/03/ \n', 'tags': '', 'url': 'Portable system.html'}, {'title': 'four wheel car', 'text': '資料編輯者:40723242 \n 3.What do you need to know from  http://www.coppeliarobotics.com/helpFiles/index.html to implement a four-wheeled robot? \n 四輪車 \n BubbleRob tutorial \n 此教程為簡易的設定BubbleRob機器人，在上學期我們也由實際操做過，其中包括如何建模、設定機器人本體、輪子、馬達、感測器、支撐軸障礙物等等的相關參數，並完整的模擬機器人的相應作動方式及軌跡，此教程也充分的運用 v-rep 軟體。 \n Line following BubbleRob tutorial \n 此教程為銜接 BubbleRob 機器人教程，在模擬過後如何更有效運用 v-rep 內的功能來規劃機器人的路徑及感測器的作動方式。 \n External controller tutorial \n 此教程為 BubbleRob 機器人遠端模擬的控制器，當我們要透過遠端電腦完成控制機器人或四輪車，我們須透過 ROS 機器人作業系統來達成指令，或是直接將程式輸入至背景。 \n Simulation and Simulation dialog \n 此教程為說明模擬是如何建立的，需去設定環境變數及硬體與的關係，透過時間的快慢變化的到對應的數據並印證假想，若假想物過於複雜時間必須拉長才能得到較於完整的相關數據。 \n 總結 : 最後完成四輪車的模擬必須詳細了解各個模擬程式，包括硬體的設置、模型的組合、各個佈建的物理性質、馬達、感測器及視覺感測器的連動 … 等，同時也須與執行程式的相關設定相同才能完成四輪車得模擬及設計。 \n', 'tags': '', 'url': 'four wheel car.html'}, {'title': 'Assignment2', 'text': '', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Topic 0', 'text': 'DigitalProductCollaboration + IndustrialAndEngineeringProductDesignCollaboration \n DigitalProductCollaboration \n 本章闡述何為協同、為甚麼要協同、協同的好處、協同時如何使用的工具及合作流程 \n 協同工具介紹: \n FIGMA \n 這是一個協同共享工作區。 Figma非常適合在設計文件以多人方式同時進行。您可以即時觀看隊友的設計或在同一個設計上一起工作。 \n MARVEL \n 雖然Figma傾向更自由和靈活，但Marvel允許採用更標準化的協同形式。 \xa0 \n Zeplin \n Zeplin是一個傳遞工具，使開發人員可以深入研究設計工作的細節。 \n Quip \n Quip是集思廣益和產品/過程文檔的絕佳平台。使用它來記錄和組織團隊成員在工作時需要知道的所有上下文和知識，對於創新也很有用。 \n 合作流程: \n 1.架構及思考 \n 根據客戶需求和項目以粗略的概念與客戶達成初步的想法。 \n 2.研究與背景 \n 與各方設計師一同研究任務，一方面了解目標及挑戰另一方面了解這項計畫的可行性。 \n 3.省思及回饋 \n 藉由各方設計師的討論激起更多想法並以客戶端為這產品預作設想，確保產品可行性及市場的接受度。 \n 4.客戶回饋與發展 \n 產品設計後期，產品架構通過客戶及上司的認可後，此設計架構將會更廣用於各個技術成面。 \n \n IndustrialAndEngineeringProductDesignCollaboration \n 透過系統性的規劃將繁雜的設計流程簡化並以圖表顯現 \n 完整設計流程: \n \n 簡化設計流程: \n \n 文章中也舉例透過不同設計師設計出的流程表會有些不同，並強調協同的重要性 \n 類型一 由工業設計師主導 \n \n 類型二 由工業設計師及工程設計師主導 \n \n 類型三 由工業及工程組成一個工程組成一個團隊主導 \n \n 類型四  由工業及工程組成一個工程組成一個團隊主導，並加入設計及生產的流程規劃 \n \n \n', 'tags': '', 'url': 'Topic 0.html'}, {'title': 'Topic 1', 'text': '\xa0 MechanicalDesignProcess \n MechanicalDesignProcess \n CH1成功的設計: \n 第一章主要闡述如何創造一個成功的產品，順序為設計指南訂定、團隊的組成、產品的要求規範、報告的編成及成員討論，一個產品完成總體設計後需要在經由市場調查應證，將細節微調除了讓產品更符合客戶的需求也更符合工程經濟學。 \n CH2建立設計: \n 第二章強調產品在設計階段的構思，包括軟體開發、硬體強度材質是否符合產品需求、如何將產品效益最佳化、精度要求及生產程序的排列，設計一件產品除了需要經過繁瑣的設計流程，產品的初步設計，原型產品製造及分析，再將分析結果進行多數次修正以符合規範，最後通過最終測試審查才得以批准進行生產，然而產品進行大量生產後也仍需進行製成規劃及品質管理，將所有規劃及要求完成後才是一件成功的產品。 \n CH3結構問題: \n 第三章是在討論產品的結構設計，包括材料強度、分力設計、材料分析、產品通用性、材料安全係數及市場需求，在產品確立使用功能後同時必須考量結構強度，產品所使用的材料的特性須符合產品功能需求，材料須經過應力、扭矩、熱效應及靜態分析，而文章其中的靜載荷須更為注意， 靜載荷會經由自重或是其他合併構建之重量或是殘餘應力所引起最終導致構建失效並使構建撓曲。 \n CH4材料與工藝: \n 第四章講述產品以符合各項需求後，包含強度、重量、可靠性、法規、安全、熱、屏蔽、金屬兼容性、彈性、導電、不透明、磨損、美學、聲學、阻力及紫外線要求，接著就必須考量產品總體成品，然而本章也藉由提高美學設計提高升產品的附加價值竟而提高獲利，但美學是個兩面刃在材質及技術的選用成本區間差異頗大，因此產品美學設計選用就取決於資方和客戶如何選擇了。 \n', 'tags': '', 'url': 'Topic 1.html'}, {'title': 'Assignment3', 'text': 'link: Assignment3 \n', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'Learn', 'text': 'w7-1 \n \n w7-2 \n \n w7-3 \n \n \n w8-1 \n https://drive.google.com/file/d/1G2L6yKkHrviF9CbZnjp8bXLAWJEmQBUM/view?usp=sharing \xa0 \n w8-2 \n https://drive.google.com/file/d/1GaIy77PYW7hxr4TB6noSuvtShA-6rKfA/view?usp=sharing \xa0 \n \n W9 期中考週線上課程進行步驟: \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影. \n \n', 'tags': '', 'url': 'Learn.html'}]};
=======
var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-4 \n week5-8 \n week9-12 \n week13-16 \n \n 分組網站: https://s40723246.github.io/cd2020-bg1/content/index.html \n 舊網站: https://s40723242.github.io/cad2019/content/index.html \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-4', 'text': 'week1: \n \n 1.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 2.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cd2020\'\' \n 3.git clone至自身的USB \n 4.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 5.下載附件 python -m pip install flask_cors \n 6.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 7.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n \n week2: \n (一)各組組長需自行至教學頁面上自行加入 (group leader) 之標誌，並"git pull request"提交 \n 如何提交? \n 1.首先先Fork老師個人倉儲. \n 2.將 Fork後的個人倉儲，以git clone --recurse-submodules\xa0"個人倉儲網址"下載至隨身系統. \n 3.進入編輯頁面增加各組組長別稱 \n 4.提交完畢後已"New \xa0pull request"對老師倉儲新增提交 \n (二)重新建立Python3.8.2 \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n 參考影片: \n \n 操作影片: \n \n (三)開小組會議-討論未來分工及細項事務 \n 本組 gitter : https://gitter.im/cd2020bg1/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link \n 會議大綱: \n 1.網站的格式及編譯 2.工作分配 3.PDF放倉儲的位置及如何放置 \n 第一次會議直播: \n \n week3: \n 分配結果: \n \n \n \n 任務 \n 亂數系統程式 \n 可攜系統 \n 四輪車 \n \n \n 小組長 \n 40723229 \n 40723242 \n 40723206 \n \n \n 組員 \n 40723223 40723226 40703246 \n 40723230 40723201 40732319 \n 40723213 40723241 40723216 \n \n \n \n 可攜系統 \n 操作影片: \n \n 內容整理: \n 重新建立Python3.8.2: \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n \n 加入Solvespace 編譯 \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本是否在"2.13以上" \n 3.git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace(務必在網路穩定地方下進行下載) \n 4.編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 開啟後將第713行及714行前方加上"#" \n 5.將 libpng.dll.a 的編譯，改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 6. cd solvespace\xa0>cd extlib\xa0>cd libpng >mkdir build > cd build\xa0 \n 7.輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.輸入mingw32-make > 退到solvespace > mkdir build > cd build \n 9.在執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 10.在輸入mingw32-make\xa0> Done \n 教學影片: \n \n \n 導入 Webots \n \n 1.下載 Webot 2019a.7z \n 2. 複製start_mdecourse.bat並更名start_mdecourse -webot.bat \n 3.將指令貼上 \n 4.按stop,開啟 start_mdecourse -webot.bat \n 5.完成 \n 參考資料: \n https://2019wcm.blogspot.com/2019/03/ \n week4: \n 本周各組員皆須對各組員繳交之 Assignment 1進行 評分 \n Assignment 1介紹 \n \n', 'tags': '', 'url': 'week1-4.html'}, {'title': 'week5-8', 'text': 'week5: \n -清明連假- \n \n week6: \n 會議大綱: \n 1.第二次作業分配 \n (一)內容整理 \n \n \n \n 任務 \n \n DigitalProductCollaboration.pdf \n IndustrialAndEngineeringProductDesignCollaboration.pdf \n \n \xa0 MechanicalDesignProcess.pdf . \n \n \n 小組長 \n 40723229 \n 40723242 \n 40723206 \n \n \n 組員 \n 40723223 40723226 40703246 \n 40723230 40723201 40732319 \n 40723213 40723241 40723216 \n \n \n \n (二)四輪車外型設置並以鍵盤控制方向 \n 2.提醒組員完成未完成相關事項 \n 第二次會議直播: \n \n \n Chapter 2(精簡版) \n 建立設計 \n 本章將以產品的角度出發，優化所有組成最終對象的對象的方法工作設計 \n 2.1 如何開始 \n \n 全新的設計 \n 延續（或增加）現有設計 \n 現有設計的重大修改 \n \n 2.2 定義設計邊界：系統說明 \n \n 專注於個人責任(工作範圍) \n 瞭解必須與本設計介面的其他設備 \n 整體"系統"功能(而不僅僅是子系統的功能) \n \n 2.3 設計過程 \n 2.3.1總體項目開始到項目完成 \n 1.構思草圖 \n 2.審查想法並授權進行原型製作 \n 3.製作原型構想的圖紙（文件創建） \n 4.原型製造（物理零件） \n 5.原型分析和測試 \n 6.審查原型和測試結果 \n 7.進行更改以改進原型（圖紙和原型） \n 8.對版本2的進一步分析和測試 \n 9.最終文件製作/最終測試/最終審查 \n 10.正式批准生產發布的設計 \n 2.3.2 EPE設計者的開始注意事項 \n 1.確定與負載不直接相關的解決方案的用途和要求 \n 2.根據可能需要單個構件（和組件）承受的所有各種可能類型的載荷來確定或估算工作載荷 \n 3.確定故障機制將是什麼 \n \xa0 \n 2.4.1間隙距離 \n 1.物體和牆壁的公差 \n 2.物體相對於牆壁的運動（在產品運行過程中） \n 3.物體的伸長（在操作過程中） \n 4.總體（外部）尺寸限制 \n 2.4.2對象排列 \n \xa0 設計人員通常會通過“生產”安排最佳化，滿足組裝，維修，美觀或用戶界面的需求 \n \n 加工公差 \n 冷卻要求 \n 組裝和維修要求 \n 產品品管 \n 較小的生態足跡（節省材料） \n 在空間有限的情況下節省空間 \n 降低成本（對於消費者或生產者） \n 產品操作所需的強度 \n \n 2.4.3對象排列示例 \n 2.4 最佳對象放置 \n 將各部件及系統裝置安排至最佳位置 \n \n \n 關於對象排列的一些結論 \n \n 以高效的方式利用空間 \n 放置彼此需要接近的物件,盡可能靠近每個物件，反之亦是如此 \n \n 章節摘要 \n 本章將我們帶入一個只有想法的設計的起點。 它向我們展示瞭解如何將這個想法轉變為物體在空間中的幾何放置，從而使我們對該想法進行物理表現。 \n 首先，我們著眼於起點並定義設計的邊界-我們從什麼開始，什麼是設計的“外緣” 我們必須定義客戶所需的產品。 \n 最後需要權衡取捨，我們必須意識到我們如何確定這些權衡之間的最佳選擇。 \n 心得: \n 本章節訴求在設計是要有一個有想法，從無到有設計產品的過程需要有縝密的考量也需再製造端客戶端之間去做取捨，得到雙方滿意才是個成功的產品 \n week7: \n 四輪車外型設置並以鍵盤控制方向 \n 影片: \n \n 步驟: \n 1.首先點選Add>Primitive shape>Cuboid 建立矩形作為車身，給定尺寸後將車身拉高 2.接著點選Add>Primitive shape>Cylinder 建立四輪車的輪胎，給定尺寸並調整其方向及位置 3.再來點選Add>Joint>Relvoute 新增馬達給予速度並調整其方向及位置 4.檢查車體的碰撞設置是否開啟 5.複製其輪胎及馬達並將位置及結構設置好 6.將四輪車的前輪馬達重新命名為right_motor及left_motor 7.將寫好的子程式加入車體 8.進行測試(以鍵盤控制)四輪車 \n 9.完成 \n \n 第三次開會紀錄: \n \n 作業一(4 輪車) 1.根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機 器人需要做些什麼? 2.四輪車馬達設定及鍵盤控制加速及轉彎 \n week8: \n 第八周上課組員示範: \n \n', 'tags': '', 'url': 'week5-8.html'}, {'title': 'week9-12', 'text': 'week9: \n W9 期中考週線上課程進行步驟: \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影. \n \n week10: \n gm用戶登入設置 \n 影片: \n \n 步驟: \n 1.首先將cd2020pj1 clone下來 2.啟用API，選擇Google+Domains API 3.建立憑證，選擇OAuth ID，選擇"網頁應用程式" 4.輸入授權來源網址 5.使用者類型設為"內部" 6.將用戶端ID及用戶端密碼存入txt，修改名稱後放入與2020pj1同個介面 7.打開leo，開啟cd2020pj1.leo，修改內容 8.儲存後點擊ROC，回到黑窗輸入指令 9.完成後進入cd2020pj1開啟python wsgi.py 10.進到頁面後輸入身分認證後完成 \n week11: \n Ubuntu設定及API連線 \n 影片: \n \n 步驟: \n 1.首先先下載Ubuntu、CoppeliaSim及Virtualbox \n 2.開啟Virtualbox \n 3.匯入Ubuntu檔案 \n 4.點擊啟動 \n 5.輸入密碼kmol2020 \n 6.點擊上方activites>show application>LX terminal \n 7.輸入指令xterm& \n 8.輸入指令cd coppeliasim4_rev4 \n 9.輸入指令cd CoppeliaSim_Edu_V4_0_0_Ubuntu18_04 \n 10.輸入指令輸入./coppeliaSim.sh \n 11.開啟指令執行後開始模擬 \n 12.完成 \n \n 以ssh對Github連線 \n 影片: \n \n 步驟: \n 1.將E:\\201906_fall\\data\\portablegit\\bin中的sh_for_solvespace_compile複製並更名為sh.exe \n 2.進入黑窗輸入 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 3.下載putty並透過putty.chm新增兩枚鑰使 \n 4.修改 start.bat: \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 5.修改自身 倉儲 .git 中的 config 檔案中的 url 設定 \n url =  git@github.com:mdecourse/cad2019.git \n 6.設定putty \n 7.在Y:\\home_mdecourse\\.ssh中新增config並加入指令 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 8.在githun ssh設定中新增鑰使 \n 9.完成 \n ssh測試 \n week12: \n', 'tags': '', 'url': 'week9-12.html'}, {'title': 'week13-16', 'text': 'week13: \n week14: \n week15: \n week16: \n', 'tags': '', 'url': 'week13-16.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': '', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Random grouping', 'text': '資料編輯者:40723242 \n 1.Describe how to do an efficient random grouping for this course or do the roll calling randomly? \n 亂數分組 \n 程序 \n 1.讀取學員資料並將各學員學號轉入數列 \n 2.利用亂數模組中的  shuffle  函式 ,  隨機弄亂學員學號數列 \n 3.利用重複迴圈 ,  將學員學號數列中一一取出 ,  準備進行分組 \n 4.在迴圈中利用整數相除後取得餘數的規律 ,  依照每組幾人的規劃進行分組 \n 5.在分組過程 ,  再設法利用數列 append,  將各組學員學號納為分組數列 \n 6.最後將各組數列再放入選課班級數列中存取備用 \n ~在這之前我們必須了解以下模組 ~ \n for迴圈: 在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴圈(loop) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行。 \n Random.shuffle: shuffle方法將序列的所有元素隨機排序。 \n Request:此模組是為了下載網頁上的資料，並以request模組建立適當的HTTP 請求，透過HTTP 請求從網頁伺服器下載指定的資料，分為兩種模式Post、Get。 \n url: 取得請求網址。 \n status_code:伺服器回應的狀態碼。 \n text:取得網頁  HTML  原始碼。 \n 總結 :亂數分組需從 index.html 或是主程式抓取網址並透過 request 去擷取相關參數並透過 Random.shuffle 去打亂，在利用數列的 append 進行編排，才能完成每周抽點的抽點編排。 \n 參考資訊 : \n https://ithelp.ithome.com.tw/articles/10206215 \n https://www.runoob.com/python/att-string-splitlines.html \n https://www.runoob.com/python/func-number-random.html \n https://www.runoob.com/python/func-number-shuffle.html \n https://2019wcm.blogspot.com/2019/02/blog-post_18.html \n', 'tags': '', 'url': 'Random grouping.html'}, {'title': 'Portable system', 'text': '資料編輯者:40723242 \n 2 .Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n 可攜系統 \n 重新建立 Python3.8.2 – 教學影片 \n 重新建立Python3.8.2: \n 1.新建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 2 .下載 Windows x86-64 executable installer \xa0，下載至C:\\cd20\\DATA\\py382 \n 3.下載SciTE系統\xa0" full 64-bit download "，下載完後解壓縮完後放置在data底下並稱為wscite \n 4.編輯SciTE， 到\xa0 Options → Open Global Option File \xa0，至139行及300行將前方#拿掉並補上301行的# \n 5.建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 6.下載MSYS2" msys2-x86_64-20190524.exe "，Browse→選擇至CD2020\\data\\ \n 7.在data下先新增portablegit資料夾，下載PortableGit" 64-bit Git for Windows Portable ." ，Browse→選擇至CD2020\\data\\portablegit \n 8.安裝pip至 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到CD2020/data儲存 \n 9.執行指令 \n python get-pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 10.再從新設定使用者及putty即可 \n \n 參考資料 :   https://2019wcm.blogspot.com/2019/03/ \n', 'tags': '', 'url': 'Portable system.html'}, {'title': 'four wheel car', 'text': '資料編輯者:40723242 \n 3.What do you need to know from  http://www.coppeliarobotics.com/helpFiles/index.html to implement a four-wheeled robot? \n 四輪車 \n BubbleRob tutorial \n 此教程為簡易的設定BubbleRob機器人，在上學期我們也由實際操做過，其中包括如何建模、設定機器人本體、輪子、馬達、感測器、支撐軸障礙物等等的相關參數，並完整的模擬機器人的相應作動方式及軌跡，此教程也充分的運用 v-rep 軟體。 \n Line following BubbleRob tutorial \n 此教程為銜接 BubbleRob 機器人教程，在模擬過後如何更有效運用 v-rep 內的功能來規劃機器人的路徑及感測器的作動方式。 \n External controller tutorial \n 此教程為 BubbleRob 機器人遠端模擬的控制器，當我們要透過遠端電腦完成控制機器人或四輪車，我們須透過 ROS 機器人作業系統來達成指令，或是直接將程式輸入至背景。 \n Simulation and Simulation dialog \n 此教程為說明模擬是如何建立的，需去設定環境變數及硬體與的關係，透過時間的快慢變化的到對應的數據並印證假想，若假想物過於複雜時間必須拉長才能得到較於完整的相關數據。 \n 總結 : 最後完成四輪車的模擬必須詳細了解各個模擬程式，包括硬體的設置、模型的組合、各個佈建的物理性質、馬達、感測器及視覺感測器的連動 … 等，同時也須與執行程式的相關設定相同才能完成四輪車得模擬及設計。 \n', 'tags': '', 'url': 'four wheel car.html'}, {'title': 'Assignment2', 'text': '', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Topic 0', 'text': 'DigitalProductCollaboration + IndustrialAndEngineeringProductDesignCollaboration \n DigitalProductCollaboration \n 本章闡述何為協同、為甚麼要協同、協同的好處、協同時如何使用的工具及合作流程 \n 協同工具介紹: \n FIGMA \n 這是一個協同共享工作區。 Figma非常適合在設計文件以多人方式同時進行。您可以即時觀看隊友的設計或在同一個設計上一起工作。 \n MARVEL \n 雖然Figma傾向更自由和靈活，但Marvel允許採用更標準化的協同形式。 \xa0 \n Zeplin \n Zeplin是一個傳遞工具，使開發人員可以深入研究設計工作的細節。 \n Quip \n Quip是集思廣益和產品/過程文檔的絕佳平台。使用它來記錄和組織團隊成員在工作時需要知道的所有上下文和知識，對於創新也很有用。 \n 合作流程: \n 1.架構及思考 \n 根據客戶需求和項目以粗略的概念與客戶達成初步的想法。 \n 2.研究與背景 \n 與各方設計師一同研究任務，一方面了解目標及挑戰另一方面了解這項計畫的可行性。 \n 3.省思及回饋 \n 藉由各方設計師的討論激起更多想法並以客戶端為這產品預作設想，確保產品可行性及市場的接受度。 \n 4.客戶回饋與發展 \n 產品設計後期，產品架構通過客戶及上司的認可後，此設計架構將會更廣用於各個技術成面。 \n \n IndustrialAndEngineeringProductDesignCollaboration \n 透過系統性的規劃將繁雜的設計流程簡化並以圖表顯現 \n 完整設計流程: \n \n 簡化設計流程: \n \n 文章中也舉例透過不同設計師設計出的流程表會有些不同，並強調協同的重要性 \n 類型一 由工業設計師主導 \n \n 類型二 由工業設計師及工程設計師主導 \n \n 類型三 由工業及工程組成一個工程組成一個團隊主導 \n \n 類型四  由工業及工程組成一個工程組成一個團隊主導，並加入設計及生產的流程規劃 \n \n \n', 'tags': '', 'url': 'Topic 0.html'}, {'title': 'Topic 1', 'text': '\xa0 MechanicalDesignProcess \n MechanicalDesignProcess \n CH1成功的設計: \n 第一章主要闡述如何創造一個成功的產品，順序為設計指南訂定、團隊的組成、產品的要求規範、報告的編成及成員討論，一個產品完成總體設計後需要在經由市場調查應證，將細節微調除了讓產品更符合客戶的需求也更符合工程經濟學。 \n CH2建立設計: \n 第二章強調產品在設計階段的構思，包括軟體開發、硬體強度材質是否符合產品需求、如何將產品效益最佳化、精度要求及生產程序的排列，設計一件產品除了需要經過繁瑣的設計流程，產品的初步設計，原型產品製造及分析，再將分析結果進行多數次修正以符合規範，最後通過最終測試審查才得以批准進行生產，然而產品進行大量生產後也仍需進行製成規劃及品質管理，將所有規劃及要求完成後才是一件成功的產品。 \n CH3結構問題: \n 第三章是在討論產品的結構設計，包括材料強度、分力設計、材料分析、產品通用性、材料安全係數及市場需求，在產品確立使用功能後同時必須考量結構強度，產品所使用的材料的特性須符合產品功能需求，材料須經過應力、扭矩、熱效應及靜態分析，而文章其中的靜載荷須更為注意， 靜載荷會經由自重或是其他合併構建之重量或是殘餘應力所引起最終導致構建失效並使構建撓曲。 \n CH4材料與工藝: \n 第四章講述產品以符合各項需求後，包含強度、重量、可靠性、法規、安全、熱、屏蔽、金屬兼容性、彈性、導電、不透明、磨損、美學、聲學、阻力及紫外線要求，接著就必須考量產品總體成品，然而本章也藉由提高美學設計提高升產品的附加價值竟而提高獲利，但美學是個兩面刃在材質及技術的選用成本區間差異頗大，因此產品美學設計選用就取決於資方和客戶如何選擇了。 \n', 'tags': '', 'url': 'Topic 1.html'}, {'title': 'Assignment3', 'text': '', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'Learn', 'text': 'w7-1 \n \n w7-2 \n \n w7-3 \n \n \n w8-1 \n https://drive.google.com/file/d/1G2L6yKkHrviF9CbZnjp8bXLAWJEmQBUM/view?usp=sharing \xa0 \n w8-2 \n https://drive.google.com/file/d/1GaIy77PYW7hxr4TB6noSuvtShA-6rKfA/view?usp=sharing \xa0 \n \n W9 期中考週線上課程進行步驟: \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影. \n \n', 'tags': '', 'url': 'Learn.html'}, {'title': 'Develop', 'text': '', 'tags': '', 'url': 'Develop.html'}]};
>>>>>>> c44374193244095782c795512cc739cf9fb64c6b
