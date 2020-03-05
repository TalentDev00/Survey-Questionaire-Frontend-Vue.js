function loadFile(url,callback){
    PizZipUtils.getBinaryContent(url,callback);
}
function generate() {
    loadFile("template.docx",function(error,content){
        if (error) { throw error };
        var zip = new PizZip(content);
        var doc=new window.docxtemplater().loadZip(zip)
        doc.setData({
            first_name: 'John'
        });
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }
        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        saveAs(out,"output.docx")
    })
}