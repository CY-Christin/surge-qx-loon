// jump.js
const url = $request.url;
const match = url.match(/^https:\/\/www\.nodeseek\.com\/jump\?to=(.*)/);

if (match && match[1]) {
	const targetUrl = decodeURIComponent(match[1]); // 对 `to` 参数解码
	$done({ response: { status: 302, headers: { Location: targetUrl } } });
} else {
	// 如果无法匹配到正确的 URL，返回原始请求
	$done({});
}
