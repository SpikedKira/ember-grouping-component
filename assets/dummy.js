"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/groups-of', ['exports', 'ember-grouping-component/components/groups-of'], function (exports, groups_of) {

	'use strict';



	exports['default'] = groups_of['default'];

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({

        tableData: [1, 2, 3, 4, 5, 6]

    });

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-grouping-component/tests/modules/ember-grouping-component/components/groups-of.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-grouping-component/components');
  QUnit.test('modules/ember-grouping-component/components/groups-of.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-grouping-component/components/groups-of.js should pass jshint.\nmodules/ember-grouping-component/components/groups-of.js: line 28, col 22, Confusing use of \'!\'.\nmodules/ember-grouping-component/components/groups-of.js: line 34, col 54, Expected \'===\' and instead saw \'==\'.\n\n2 errors');
  });

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Ember-Grouping-Component");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 16
              },
              "end": {
                "line": 34,
                "column": 16
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    [");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("]\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","item",["loc",[null,[33,21],[33,29]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 34,
                  "column": 16
                },
                "end": {
                  "line": 36,
                  "column": 16
                }
              },
              "moduleName": "dummy/templates/index.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                    (");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(")\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","item",["loc",[null,[35,21],[35,29]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 16
                },
                "end": {
                  "line": 38,
                  "column": 16
                }
              },
              "moduleName": "dummy/templates/index.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","item",["loc",[null,[37,20],[37,28]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 16
              },
              "end": {
                "line": 38,
                "column": 16
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","isLast",["loc",[null,[34,26],[34,32]]]]],[],0,1,["loc",[null,[34,16],[38,16]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 8
            },
            "end": {
              "line": 40,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 3,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","if",[["get","isFirst",["loc",[null,[32,22],[32,29]]]]],[],0,1,["loc",[null,[32,16],[38,23]]]]
        ],
        locals: ["item","isFirst","isLast"],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Example");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","docColumn");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        var el3 = dom.createTextNode("Template");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("<table border=\"1\" cellpadding=\"10\">\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{#groups-of\n        tagName=\"tbody\"\n        groupsOf=3\n        groupTag=\"tr\"\n        items=tableData\n        as |item isFirst isLast|\n    }}\n        <td>\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{#if isFirst}}\n                [");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{item}}]\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{else if isLast}}\n                (");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{item}})\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{else}}\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{item}}\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{/if}}\n        </td>\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("{{/groups-of}}\n</table>");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        var el3 = dom.createTextNode("Controller");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("tableData: [ 1, 2, 3, 4, 5, 6 ]");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","exampleColumn");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"border","1");
        dom.setAttribute(el2,"cellpadding","10");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","cb");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4, 1]),1,1);
        return morphs;
      },
      statements: [
        ["block","groups-of",[],["tagName","tbody","groupsOf",3,"groupTag","tr","items",["subexpr","@mut",[["get","tableData",["loc",[null,[30,68],[30,77]]]]],[],[]]],0,null,["loc",[null,[30,8],[40,22]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/groups-of-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('groups-of', 'Integration | Component | groups of', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 12
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'group-by', ['loc', [null, [1, 0], [1, 12]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'groups-of', [], [], 0, null, ['loc', [null, [2, 8], [4, 22]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/groups-of-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/groups-of-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/groups-of-test.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-grouping-component","version":"0.0.0+81ae2ffc"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map