var _ = require('lodash');

var React = require('react');
var ParentNode = require('./ParentNode');
var LeafNode = require('./LeafNode');

var TreeContainer = React.createClass({
  shouldComponentUpdate: function (nextProps, nextState) {
    if (_.isEqual(this.props, nextProps)) {
      return false;
    }
    else {
      return true;
    }
  },

  _selectNode: function (path) {
    this.props.selectNode(path);
  },

  _setSelectedNodeEl: function (el) {
    this.props.setSelectedNodeEl(el);
  },

  render: function () {
    return (
      <div id="tree-container">
        <div>
          <ParentNode
            el={ this.props.html }
            path={ 'html' }
            selectNode={ this._selectNode }
            selectedNodePath={ this.props.selectedNode }
            setSelectedNodeEl={ this._setSelectedNodeEl }
          />
        </div>
      </div>
    );
  }
});

module.exports = TreeContainer;
