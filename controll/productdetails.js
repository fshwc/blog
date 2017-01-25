var express = require('express');
var bodyParser = require('body-parser');


var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/productdetails',function(req, res) {
	console.log(req.query);
	res.json({"per_page":"2","total":1,"data":[{"attributeVos":[{"attributeName":"主布","finishedId":1,"id":2,"materialVo":{"fCategory":"工程","fCost":0,"fCut":"否","fID":"1101-BB0002","fMaterial":"外购","fName":"BB1059-28","fPart":10,"fRetail":20,"fUnit":"米","fVol":"定高280","id":2}},{"attributeName":"花边","finishedId":1,"id":3,"materialVo":{"fCategory":"工程","fCost":0,"fCut":"否","fID":"1101-BB0003","fMaterial":"外购","fName":"BB1060-14","fPart":10,"fRetail":20,"fUnit":"米","fVol":"定高280","id":3}},{"attributeName":"窗纱","finishedId":1,"id":4,"materialVo":{"fCategory":"工程","fCost":0,"fCut":"否","fID":"1101-BB0004","fMaterial":"外购","fName":"BB1060-18","fPart":10,"fRetail":20,"fUnit":"米","fVol":"定高280","id":4}}],"name":"主布名字","num":1,"url":"1"}],"current_page":1})
	res.end();
});

app.get("/material",function(req, res) {
	console.log("material     "+req.query);
	res.json({ "per_page":"100", "total":8775, "data":[ { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0001", "fMaterial":"外购", "fName":"BB-1009-56", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":1 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0002", "fMaterial":"外购", "fName":"BB1059-28", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":2 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0003", "fMaterial":"外购", "fName":"BB1060-14", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":3 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0004", "fMaterial":"外购", "fName":"BB1060-18", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":4 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0005", "fMaterial":"外购", "fName":"BB1061-29", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":5 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0006", "fMaterial":"外购", "fName":"BBQ1060-6", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":6 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0007", "fMaterial":"外购", "fName":"DLJ180-2", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":7 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0008", "fMaterial":"外购", "fName":"HL213810-19", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":8 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0009", "fMaterial":"外购", "fName":"HL214226-20", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":9 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0010", "fMaterial":"外购", "fName":"HL294509C", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":10 }, { "fCategory":"停产2", "fCost":0, "fCut":"否", "fID":"1101-BD0001", "fMaterial":"外购", "fName":"1080-18", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":11 }, { "fCategory":"待停产", "fCost":0, "fCut":"否", "fID":"1101-BD0002", "fMaterial":"外购", "fName":"1080-23", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":12 }, { "fCategory":"停产1", "fCost":0, "fCut":"否", "fID":"1101-BD0003", "fMaterial":"外购", "fName":"1080-4", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":13 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0004", "fMaterial":"外购", "fName":"1080-棕啡", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":14 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0005", "fMaterial":"外购", "fName":"BD8120-112", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":15 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0006", "fMaterial":"外购", "fName":"BD8120-115", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定宽140", "id":16 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0007", "fMaterial":"外购", "fName":"BD8120-117", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":17 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0008", "fMaterial":"外购", "fName":"BD8120-134", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":18 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0009", "fMaterial":"外购", "fName":"BD8120-141", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":19 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0010", "fMaterial":"外购", "fName":"BD8120-145", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":20 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0011", "fMaterial":"外购", "fName":"BD8120-152", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":21 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0012", "fMaterial":"外购", "fName":"BD8120-156", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":22 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0013", "fMaterial":"外购", "fName":"BD8120-17", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":23 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0014", "fMaterial":"外购", "fName":"BD8120-19", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":24 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0015", "fMaterial":"外购", "fName":"BD8120-24", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":25 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0016", "fMaterial":"外购", "fName":"BD8120-28", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":26 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0017", "fMaterial":"外购", "fName":"BD8120-3", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":27 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0018", "fMaterial":"外购", "fName":"BD8120-33", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":28 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0019", "fMaterial":"外购", "fName":"BD8120-4", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":29 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0020", "fMaterial":"外购", "fName":"BD8120-41", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":30 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0021", "fMaterial":"外购", "fName":"BD8120-45", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":31 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0022", "fMaterial":"外购", "fName":"BD8120-51", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":32 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0023", "fMaterial":"外购", "fName":"BD8120-52", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":33 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0024", "fMaterial":"外购", "fName":"BD8120-77", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":34 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0025", "fMaterial":"外购", "fName":"BD8120-83", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":35 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0026", "fMaterial":"外购", "fName":"BD8120-88", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":36 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0027", "fMaterial":"外购", "fName":"BD8120-93", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":37 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0028", "fMaterial":"外购", "fName":"BD8120-94", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":38 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0029", "fMaterial":"外购", "fName":"BD8120-95", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":39 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0030", "fMaterial":"外购", "fName":"BD8120-96", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":40 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0031", "fMaterial":"外购", "fName":"BD8120-98", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":41 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0032", "fMaterial":"外购", "fName":"ZG4301啡色C12", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":42 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0033", "fMaterial":"外购", "fName":"ZG4301灰色C10", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":43 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0034", "fMaterial":"外购", "fName":"ZG4301米黄C11", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":44 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0035", "fMaterial":"外购", "fName":"ZG4301杏色C9", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":45 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0036", "fMaterial":"外购", "fName":"ZG4302灰色C18", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":46 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0037", "fMaterial":"外购", "fName":"ZG4302兰色C17", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":47 }, { "fCategory":"畅销三类", "fCost":0, "fCut":"否", "fID":"1101-BD0038", "fMaterial":"外购", "fName":"ZG4302米黄C19", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":48 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0039", "fMaterial":"外购", "fName":"ZG4303啡色C15", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":49 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0040", "fMaterial":"外购", "fName":"ZG4303兰色C13", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":50 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0041", "fMaterial":"外购", "fName":"ZG4303杏啡C8", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":51 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0042", "fMaterial":"外购", "fName":"ZG4303杏黄C14", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":52 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0043", "fMaterial":"外购", "fName":"ZG4303紫红C16", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":53 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0044", "fMaterial":"外购", "fName":"8120-100", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":54 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0046", "fMaterial":"外购", "fName":"BD8120-14", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":55 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0047", "fMaterial":"外购", "fName":"BD8120-131", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":56 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0048", "fMaterial":"外购", "fName":"BD8120-48", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":57 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0049", "fMaterial":"外购", "fName":"BD8120-34", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":58 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0050", "fMaterial":"外购", "fName":"BD8120-49", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":59 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0051", "fMaterial":"外购", "fName":"BD8120-2", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":60 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0052", "fMaterial":"外购", "fName":"BD8120-179", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":61 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0053", "fMaterial":"外购", "fName":"BD8120-1", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":62 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0054", "fMaterial":"外购", "fName":"BD8120-82", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":63 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0055", "fMaterial":"外购", "fName":"BD8120-87", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":64 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0056", "fMaterial":"外购", "fName":"BD8120-102", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":65 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0057", "fMaterial":"外购", "fName":"BD8120-54", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":66 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0058", "fMaterial":"外购", "fName":"BD8120-50", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":67 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0059", "fMaterial":"外购", "fName":"BD8120-108", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":68 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0060", "fMaterial":"外购", "fName":"BD8120-36", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":69 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0061", "fMaterial":"外购", "fName":"BD8120-31", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":70 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0062", "fMaterial":"外购", "fName":"BD8120-78", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":71 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0063", "fMaterial":"外购", "fName":"BD8120-148", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":72 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0064", "fMaterial":"外购", "fName":"BD8120-124", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":73 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0065", "fMaterial":"外购", "fName":"BD8120-168", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":74 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0066", "fMaterial":"外购", "fName":"BD8120-149", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":75 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0067", "fMaterial":"外购", "fName":"BD8120-23", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":76 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0068", "fMaterial":"外购", "fName":"BD8120-118", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":77 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0069", "fMaterial":"外购", "fName":"BD8120-81", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":78 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0070", "fMaterial":"外购", "fName":"BD8120-97", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":79 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0071", "fMaterial":"外购", "fName":"BD8120-153", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":80 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0072", "fMaterial":"外购", "fName":"BD8120-61", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":81 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0073", "fMaterial":"外购", "fName":"BD8120-37", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":82 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0074", "fMaterial":"外购", "fName":"BD8120-103", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":83 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0075", "fMaterial":"外购", "fName":"BD8120-7", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":84 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0076", "fMaterial":"外购", "fName":"BD8120-22", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":85 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0077", "fMaterial":"外购", "fName":"BD8120-30", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":86 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0078", "fMaterial":"外购", "fName":"BD8120-44", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":87 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0079", "fMaterial":"外购", "fName":"BD8120-11", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":88 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0080", "fMaterial":"外购", "fName":"BD8120-105", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":89 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0081", "fMaterial":"外购", "fName":"BD8120-55", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":90 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0082", "fMaterial":"外购", "fName":"BD8120-16", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":91 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0083", "fMaterial":"外购", "fName":"BD8120-143", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":92 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0084", "fMaterial":"外购", "fName":"BD8120-84", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":93 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0085", "fMaterial":"外购", "fName":"BD8120-110", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":94 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0086", "fMaterial":"外购", "fName":"BD8120-66", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":95 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0087", "fMaterial":"外购", "fName":"BD8120-5", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":96 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0088", "fMaterial":"外购", "fName":"BD8120-46", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":97 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0089", "fMaterial":"外购", "fName":"BD8120-74", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":98 }, { "fCategory":"", "fCost":0, "fCut":"否", "fID":"1101-BD0090", "fMaterial":"外购", "fName":"BD8120-157", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":99 }, { "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BD0091", "fMaterial":"外购", "fName":"BD8120-67", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":100 } ], "current_page":1 })
	res.end();
})

app.get("/finish",function(req, res) {
	console.log("finish     "+req.query.pageNum);
	res.json({ "per_page":"100", "total":1, "data":[ { "id":1, "name":"主布名字", "num":1, "url":"1" } ], "current_page":1 });
	res.end();
})

app.get("/getProductDetailById",function(req, res) {
	console.log("getProductDetailById     "+req.query.id);
	res.json({ "data":{ "attributeVos":[ { "attributeName":"主布", "finishedId":1, "id":2, "materialVo":{ "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0002", "fMaterial":"外购", "fName":"BB1059-28", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":2 } }, { "attributeName":"花边", "finishedId":1, "id":3, "materialVo":{ "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0003", "fMaterial":"外购", "fName":"BB1060-14", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":3 } }, { "attributeName":"窗纱", "finishedId":1, "id":4, "materialVo":{ "fCategory":"工程", "fCost":0, "fCut":"否", "fID":"1101-BB0004", "fMaterial":"外购", "fName":"BB1060-18", "fPart":10, "fRetail":20, "fUnit":"米", "fVol":"定高280", "id":4 } } ], "name":"主布名字", "num":1, "url":"1" } })
	res.end();
})

app.get('/price',function(req, res) {
	res.json({"per_page":2,"total":8775,"data":[{"fCategory":"工程","fCost":0,"fCut":"否","fID":"1101-BB0001","fMaterial":"外购","fName":"BB-1009-56","fPart":10,"fRetail":20,"fUnit":"米","fVol":"定高280","id":1,"modifyFetail":0.1},{"fCategory":"工程","fCost":0,"fCut":"否","fID":"1101-BB0002","fMaterial":"外购","fName":"BB1059-28","fPart":10,"fRetail":20,"fUnit":"米","fVol":"定高280","id":2}],"current_page":1})
	res.end();
});

app.get('/user/getById',function(req, res) {
	res.json({ "data":{ "account":"123", "id":1, "name":"zls", "password":"123", "shopId":1, "userType":0 } });
	res.end();
})

app.put('/price',function(req, res) {
	console.log(1);
	console.log(req.params.id)
	console.log(req.body.id);
	res.json({code:200});
	res.end();
});

app.get('/shop',function(req, res) {
	res.json({"data":[ { "address":"中山", "id":1, "name":"东莞大保健", "phone":"15521258806", "shopType":1 } ] });
	res.end();
})

module.exports = app;