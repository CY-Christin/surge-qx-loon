let url = $request.url;
let to = url.match(/to=(.*?)(?:&|$)/)[1];
let decodedUrl = decodeURIComponent(to);
$done({status: 302, headers: {Location: decodedUrl}});
