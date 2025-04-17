<?php
// 获取用户的留言
$message = trim($_POST['message']);

// 定义敏感词汇列表
$sensitive_words = [
    '种族歧视', '政治', '暴力', '性别歧视', '色情', '不当内容', '骂人', '仇恨'
];

// 检查留言是否包含敏感词汇
foreach ($sensitive_words as $word) {
    if (strpos($message, $word) !== false) {
        echo "您的留言包含不当内容，无法提交。";
        exit;  // 如果发现敏感词汇，停止处理
    }
}

// 获取用户IP地址并使用ipinfo.io获取归属地
$user_ip = $_SERVER['REMOTE_ADDR'];
$access_token = "450359aeb47ad2"; // 您的ipinfo.io API Token
$ip_info_url = "http://ipinfo.io/{$user_ip}/json?token={$access_token}";
$ip_info = file_get_contents($ip_info_url);
$ip_data = json_decode($ip_info, true);
$location = $ip_data['city'] ?? '未知城市';

// 创建或追加保存留言到 messages/messages.txt
$timestamp = date("Y-m-d H:i:s");
$log_message = "[$timestamp] [$location] $message\n";

// 确保文件夹存在，避免写入错误
$messages_dir = 'messages';
if (!is_dir($messages_dir)) {
    mkdir($messages_dir, 0777, true);
}

$messages_file = $messages_dir . '/messages.txt';
file_put_contents($messages_file, $log_message, FILE_APPEND);

// 提示留言成功并重定向到留言板首页
header('Location: ../message_board.php');
exit;
?>