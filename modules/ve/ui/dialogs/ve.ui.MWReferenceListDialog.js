/*!
 * VisualEditor user interface MWReferenceListDialog class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Dialog for a MediaWiki references list.
 *
 * @class
 * @extends ve.ui.Dialog
 *
 * @constructor
 * @param {ve.ui.Surface} surface
 * @param {Object} [config] Config options
 */
ve.ui.MWReferenceListDialog = function VeUiMWReferenceListDialog( surface, config ) {
	// Parent constructor
	ve.ui.Dialog.call( this, surface, config );
};

/* Inheritance */

ve.inheritClass( ve.ui.MWReferenceListDialog, ve.ui.Dialog );

/* Static Properties */

ve.ui.MWReferenceListDialog.static.titleMessage = 'visualeditor-dialog-referencelist-title';

ve.ui.MWReferenceListDialog.static.icon = 'references';

ve.ui.MWReferenceListDialog.static.modelClasses = [ ve.dm.MWReferenceListNode ];

/* Methods */

ve.ui.MWReferenceListDialog.prototype.initialize = function () {
	// Parent method
	ve.ui.Dialog.prototype.initialize.call( this );

	// Properties
	this.optionsFieldset = new ve.ui.FieldsetLayout( {
		'$$': this.frame.$$,
		'label': ve.msg( 'visualeditor-dialog-reference-options-section' ),
		'icon': 'settings'
	} );

	this.groupInput = new ve.ui.TextInputWidget( { '$$': this.frame.$$ } );
	this.groupLabel = new ve.ui.InputLabelWidget( {
		'$$': this.frame.$$,
		'input': this.groupInput,
		'label': ve.msg( 'visualeditor-dialog-reference-options-group-label' )
	} );

	// Initialization
	this.optionsFieldset.$.append( this.groupLabel.$, this.groupInput.$ );
	this.$body
		.append( this.optionsFieldset.$ )
		.addClass( 've-ui-mwReferenceListDialog-body' );
};

ve.ui.MWReferenceListDialog.prototype.onOpen = function () {
	var node, refGroup;

	// Parent method
	ve.ui.Dialog.prototype.onOpen.call( this );

	// Prepopulate from existing node if we're editing a node
	// instead of inserting a new one
	node = this.surface.getView().getFocusedNode();
	if ( node instanceof ve.ce.MWReferenceListNode ) {
		refGroup = node.getModel().getAttribute( 'refGroup' );

	} else {
		refGroup = '';
	}

	this.groupInput.setValue( refGroup );

	/**
	 * Focused node.
	 *
	 * @private
	 * @property {ve.ce.MWReferenceListNode|undefined}
	 */
	this.node = node;
};

/**
 * @param {string} action Action that caused the window to be closed
 */
ve.ui.MWReferenceListDialog.prototype.onClose = function ( action ) {
	var refGroup, listGroup, oldListGroup, attrChanges,
		doc, model,
		surfaceModel = this.surface.getModel(),
		node = this.node;

	// Save changes
	if ( action === 'apply' ) {
		refGroup = this.groupInput.getValue();
		listGroup = 'mwReference/' + refGroup;

		if ( node ) {
			// Edit existing model
			doc = surfaceModel.getDocument();
			model = node.getModel();
			oldListGroup = model.getAttribute( 'listGroup' );

			if ( listGroup !== oldListGroup ) {
				attrChanges = {
					listGroup: listGroup,
					refGroup: refGroup
				};
				surfaceModel.change(
					ve.dm.Transaction.newFromAttributeChanges(
						doc, model.getOuterRange().start, attrChanges
					)
				);
			}
		} else {
			// Create new model
			surfaceModel.getFragment().collapseRangeToEnd().insertContent( [
				{
					'type': 'mwReferenceList',
					'attributes': {
						'listGroup': listGroup,
						'refGroup': refGroup
					}
				},
				{ 'type': '/mwReferenceList' }
			] );
		}
	}

	// Parent method
	ve.ui.Dialog.prototype.onClose.call( this );
};

/* Registration */

ve.ui.dialogFactory.register( 'mwReferenceList', ve.ui.MWReferenceListDialog );

ve.ui.viewRegistry.register( 'mwReferenceList', ve.ui.MWReferenceListDialog );
