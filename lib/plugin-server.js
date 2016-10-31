var express = require('express');
var app = express();
var fs = require('fs');
var mock = require('mockjs').mock;

/**
 * whistle会通过请求的头部，把配置的值及是否为https或wss请求传递给插件
 */
var RULE_VALUE_HEADER, SSL_FLAG_HEADER;

//获取 pattern helloworld://ruleValue的ruleValue
function getRuleValue(req) {
	return decodeURIComponent(req.headers[RULE_VALUE_HEADER] || '');
}

function initHttpServer(app) {
	app.use(function(req, res, next) {
		var ruleValue = getRuleValue(req);

		fs.readFile(ruleValue, {encoding: 'utf8'}, function(err, data) {
			if (err) {
				res.end('mock:文件读取错误 ' + err);
			} else {
				data = JSON.parse(data);
				res.end(JSON.stringify(mock(data)));
			}
		});
	});
}

module.exports = function(server, options) {
	RULE_VALUE_HEADER = options.RULE_VALUE_HEADER;
	SSL_FLAG_HEADER = options.SSL_FLAG_HEADER;
	server.on('request', app);
	initHttpServer(app);
};
