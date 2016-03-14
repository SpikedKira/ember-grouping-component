import Ember from 'ember';
import layout from '../templates/components/groups-of';

export default Ember.Component.extend({

    layout: layout,

    groupsOf: 1,

    groupTag: 'div',

    items: Ember.A(),

    remainderItems: Ember.A(),

    groups: Ember.computed(
        'groupsOf',
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

                    const isFirstGroup = !!groups.length;
                    const isLastGroup = groups.length == parseInt( items.length / groupsOf );

                    groups.push({
                        items: currentGroup,
                        isFirstGroup,
                        isLastGroup
                    });
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
    ),

    remainders: Ember.computed(
        'groupsOf',
        'items',
        function() {
            const items = this.get( 'items' );
            const groupsOf = this.get( 'groupsOf' );

            if ( !groupsOf ) {
                return;
            }

            const remainder = Ember.A();
            const remainderCount = groupsOf - ( items.length % groupsOf );

            for ( let item = 0; item < remainderCount; item++ ) {
                remainder.push({
                    item,
                    isLast: item == remainderCount - 1
                });
            }

            return remainder;
        }
    )

});
