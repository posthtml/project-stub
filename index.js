var React = require("react");
var posthtml = require("posthtml");
var renderStaticReact = require("posthtml-static-react");

var html = "<my-custom-element></my-custom-element>";

var MyCustomElement = function (props) {
    return (
        <div className="my-custom-element"></div>
    );
};

var components = {
    "my-custom-element": MyCustomElement
};

posthtml()
    .use(renderStaticReact("my-custom-element", components))
    .process(html)
    .then(function (result) {
        console.log(result.html);
    });
