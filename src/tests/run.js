var engine = require("spbrander");
var siteUrl = "https://andrewpetersen.sharepoint.com/spscript";

engine.page(siteUrl, "/SitePages/Tests.aspx")
        .debug("./src/tests/fileupload.html", "tests");