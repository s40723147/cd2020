var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '課堂筆記', 'text': '將紀錄40723147 在CD2020當周課堂筆記 \n ---------------------------------------------------------------------------------------------------------------- \n w2 \n HTTP 與 HTTPS \n 字母 S 代表了網站使用編碼協定的安全性(secure) \n HTTP協定 不使用 加密協定‧ \n 反觀HTTPS協定，以 保密為前提 為研發‧ \n 是以加入SSL協定作為安全憑證， \n 因此網站透過協定上的加密機制後能夠防止資料竊取者 \n 就算攔截到了傳輸資訊卻也無法直接看到傳輸中的資料 \n \n HTTPS 是以安全為目的得 HTTP 通道， \n 經由網站傳輸協定進行通訊和利用 SSL/TLS 憑證來加密封包 \n 參考資料: https://www.webdesigns.com.tw/SSLANDHTTPS.asp \n \n SSL協定 \n SSL\xa0為\xa0 Secure Sockets Layer (安全通訊協定) \xa0的縮寫， \n 後來發展成 Transport Layer Security， \n 傳輸層安全協定 (TLS)；簡單說就是在通訊的過程中， \n 透過特定的演算法把傳遞內容加密， \n 防止內容被竊取或竄改。 \n 參考資料: 網址 \n 參考步驟: 網址', 'tags': '', 'url': '課堂筆記.html'}]};