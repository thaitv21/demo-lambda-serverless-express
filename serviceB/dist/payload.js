"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPayload() {
    return {
        version: '2.0',
        routeKey: "$default",
        rawPath: "/",
        rawQueryString: "",
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            'accept-encoding': "gzip, deflate, br",
            'accept-language': "en-US,en;q=0.9",
            'cache-control': "max-age=0",
            'content-length': "0",
            host: "6bwvllq3t2.execute-api.us-east-1.amazonaws.com",
            'sec-fetch-dest': "document",
            'sec-fetch-mode': "navigate",
            'sec-fetch-site': "none",
            'sec-fetch-user': "?1",
            'upgrade-insecure-requests': "1",
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
            'x-amzn-trace-id': "Root=1-5ff59707-4914805430277a6209549a59",
            'x-forwarded-for': "203.123.103.37",
            'x-forwarded-port': "443",
            'x-forwarded-proto': "https"
        },
        requestContext: {
            accountId: "347971939225",
            apiId: "6bwvllq3t2",
            domainName: "6bwvllq3t2.execute-api.us-east-1.amazonaws.com",
            domainPrefix: "6bwvllq3t2",
            http: {
                method: "GET",
                path: "/users",
                protocol: "HTTP/1.1",
                sourceIp: "203.123.103.37",
                userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
            },
            requestId: "YuSJQjZfoAMESbg=",
            routeKey: "$default",
            stage: "$default",
            time: "06/Jan/2021:10:55:03 +0000",
            timeEpoch: 1609930503973
        },
        isBase64Encoded: false
    };
}
exports.default = createPayload;
