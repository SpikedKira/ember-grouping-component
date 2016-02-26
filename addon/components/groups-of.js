import Ember from 'ember';
import layout from '../templates/components/groups-of';

export default Ember.Component.extend({

    layout: layout,

    groupsOf: 1,

    groupTag: 'div',

    items: Ember.A(),

    groups: Ember.computed(
        'items',
        function() {
            const items = this.get( 'items' );
            const groupsOf = this.get( 'groupsOf' );

            if ( !groupsOf ) {
                return;
            }

            const groups = Ember.A();
            let currentGroup = null;

            items.forEach( function( item, index ) {
                if ( !(index % groupsOf) ) {
                    currentGroup = Ember.A();
                    groups.push( currentGroup );
                }

                const isFirst = !currentGroup.length;
                const isLast = currentGroup.length == groupsOf - 1;

                currentGroup.push({
                    item,
                    isFirst,
                    isLast
                });
            });

            return groups;
        }
    )

});
