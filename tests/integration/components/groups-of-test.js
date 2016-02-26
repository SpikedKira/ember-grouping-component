import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'groups-of', 'Integration | Component | groups of', {
    integration: true
});

test( 'it renders', function( assert ) {
    assert.expect( 2 );

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render( hbs`{{group-by}}` );

    assert.equal( this.$().text().trim(), '' );

    // Template block usage:
    this.render( hbs`
        {{#groups-of}}
            template block text
        {{/groups-of}}
    `);

    assert.equal( this.$().text().trim(), 'template block text' );
});
