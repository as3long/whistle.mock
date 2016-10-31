whistle.mock

用于mock数据的whistle插件

## 安装
```
npm i -g whistle.mock
```

## 用法
```
/test.com/(.*)/ mock://E:\debug-json\mock/$1.json
```

## mock json数据配置
参照 [https://github.com/nuysoft/Mock/wiki/Syntax-Specification](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

## 例子
```
{
	"retcode" : 0,
	"result":{
		"term_id|0-10000000": 123,
		"task_id|0-1000000000": 123,
		"task_name": "@paragraph",
		"is_palying|0-1": 1 ,
		"cid": 1,
		"task_bgtime": 147755643,
		"task_endtime": 147755643
	}
}
```