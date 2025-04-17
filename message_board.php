<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留言板</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #ffffff;
            min-height: 100vh;
            overflow-x: hidden;
        }
        header, footer {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
        }
        .nav-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-bar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .nav-bar ul li {
            margin: 0 10px;
        }
        .nav-bar ul li a {
            text-decoration: none;
            color: white;
            padding: 10px 15px;
            display: block;
        }
        .nav-bar ul li a.active {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }
        .language-selector {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .language-selector select {
            background-color: #333;
            color: #ffffff;
            border: 1px solid #555;
            padding: 5px;
            border-radius: 4px;
        }
        .container {
            padding: 40px 20px;
        }
        h1 {
            text-align: center;
            color: #00d4ff;
        }
        form textarea {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            resize: none;
        }
        form button {
            background: #00d4ff;
            border: none;
            color: white;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 4px;
        }
        .messages {
            margin-top: 20px;
        }
        .message {
            background: rgba(255, 255, 255, 0.1);
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            word-wrap: break-word;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <header>
        <div class="nav-bar">
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="free-vpn.html">免费VPN</a></li>
                <li><a href="paid-vpn.html">收费VPN</a></li>
                <li><a href="tools.html">小工具</a></li>
                <li><a href="articles.html">文章</a></li>
                <li><a href="message_board.php" class="active">留言板</a></li>
            </ul>
            <div class="language-selector">
                <label for="language">
                    <img src="icons/language-icon.svg" alt="Language Icon" style="width: 20px; height: 20px;">
                </label>
                <select id="language">
                    <option value="en">EN English</option>
                    <option value="zh" selected>CN 中文</option>
                    <option value="ru">RU Русский</option>
                    <option value="ar">AR العربية</option>
                    <option value="tr">TR Türkçe</option>
                    <option value="vn">VN Tiếng Việt</option>
                    <option value="kr">KR 한국어</option>
                    <option value="th">TH ไทย</option>
                </select>
            </div>
        </div>
    </header>

    <div class="container">
        <h1>留言板</h1>

        <form action="message_board.php" method="POST">
            <textarea name="message" placeholder="请输入您的留言（请勿涉及种族歧视、政治、性别歧视等敏感内容）" required></textarea>
            <button type="submit">提交留言</button>
        </form>

        <div class="messages">
            <?php
            $messages_file = 'messages/messages.txt';

            if (file_exists($messages_file)) {
                $messages = file($messages_file, FILE_IGNORE_NEW_LINES);
                foreach ($messages as $message) {
                    echo "<div class='message'>$message</div>";
                }
            } else {
                echo "<p>当前没有留言。</p>";
            }
            ?>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 留言板示例 | 本站仅供演示使用</p>
    </footer>

    <script>
        const translations = {
            en: {
                'page-title': 'Message Board',
                'nav-home': 'Home',
                'nav-free-vpn': 'Free VPN',
                'nav-paid-vpn': 'Paid VPN',
                'nav-tools': 'Tools',
                'nav-articles': 'Articles',
                'nav-message-board': 'Message Board',
                'message-placeholder': 'Enter your message (please avoid sensitive topics like racial discrimination, politics, gender discrimination, etc.)',
                'submit-button': 'Submit Message',
                'no-messages': 'No messages available.',
                'footer-text': '© 2025 Message Board Example | This site is for demonstration purposes only.'
            },
            zh: {
                'page-title': '留言板',
                'nav-home': '首页',
                'nav-free-vpn': '免费VPN',
                'nav-paid-vpn': '收费VPN',
                'nav-tools': '小工具',
                'nav-articles': '文章',
                'nav-message-board': '留言板',
                'message-placeholder': '请输入您的留言（请勿涉及种族歧视、政治、性别歧视等敏感内容）',
                'submit-button': '提交留言',
                'no-messages': '当前没有留言。',
                'footer-text': '© 2025 留言板示例 | 本站仅供演示使用'
            }
        };

        function initLanguage(lang) {
            const elements = document.querySelectorAll('[data-lang-key]');
            elements.forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            const textarea = document.querySelector('form textarea');
            if (textarea && translations[lang]['message-placeholder']) {
                textarea.setAttribute('placeholder', translations[lang]['message-placeholder']);
            }

            const submitButton = document.querySelector('form button');
            if (submitButton && translations[lang]['submit-button']) {
                submitButton.textContent = translations[lang]['submit-button'];
            }

            const noMessages = document.querySelector('p');
            if (noMessages && translations[lang]['no-messages']) {
                noMessages.textContent = translations[lang]['no-messages'];
            }

            const footer = document.querySelector('footer p');
            if (footer && translations[lang]['footer-text']) {
                footer.textContent = translations[lang]['footer-text'];
            }
        }

        document.getElementById('language').addEventListener('change', function() {
            const selectedLang = this.value;
            initLanguage(selectedLang);
        });

        window.onload = function() {
            const selectedLang = document.getElementById('language').value;
            initLanguage(selectedLang);
        };
    </script>
</body>
</html>