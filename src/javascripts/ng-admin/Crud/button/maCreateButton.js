/**
 * Link to create
 *
 * Usage:
 * <ma-create-button entity="entity" default-values="{}" size="xs"></ma-create-button>
 */
export default function maCreateButtonDirective($state) {
    return {
        restrict: 'E',
        scope: {
            entity: '&',
            entityName: '@',
            defaultValues: '&',
            size: '@',
            label: '@',
        },
        link: function (scope, element, attrs) {
            var entityName = scope.entity() ? scope.entity().name() : attrs.entityName;
            var stateParams = entityName == $state.params.entity ? { ...$state.params } : {};
            stateParams.entity = entityName;
            stateParams.defaultValues = scope.defaultValues();
            scope.stateParams = stateParams;
            scope.label = scope.label || 'Create';
        },
        template:
` <a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" ui-sref="create(stateParams)">
<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;<span class="hidden-xs">{{ ::label }}</span>
</a>`
    };
}

maCreateButtonDirective.$inject = ['$state'];
