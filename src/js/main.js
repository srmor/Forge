var React = require('react');

var request = require('superagent');
var htmlparser = require('htmlparser2');

var TreeContainer = require('./TreeContainer');

request
  .get('http://localhost:3000/testhtml')
  .end(function(err, res) {
    var handler = new htmlparser.DomHandler(function (error, dom) {
      if (error)
        console.log('error: ' + error);
      else {
        console.log(dom);
        React.render(<TreeContainer html={ dom[1] }/>, document.getElementById('main-container'));
      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.write(res.text);
    parser.done();
  });