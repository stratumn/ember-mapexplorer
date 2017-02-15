/*
    Copyright (C) 2017  Stratumn SAS

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Ember from 'ember';
import layout from '../templates/components/map-explorer';

export default Ember.Component.extend({
  layout,

  actions: {
    close() {
      this.set('segment', null);
      this.onHide();

      const onSelectSegment = this.get('onSelectSegment');
      if (onSelectSegment) {
        onSelectSegment(null);
      }
    },
    show(part) {
      ['state', 'link', 'evidence', 'json'].forEach(part => this.set(part + 'Showed', false));
      this.set(part + 'Showed', true);
    }
  },

  init() {
    this._super(...arguments);
    this.set('stateShowed', true);
  },

  didInsertElement() {
    this.set('builder', new mapexplorerCore.ChainTreeBuilder(this.$()[0]));

    this.get('builder').build({
      id: this.get('mapId'),
      application: this.get('application'),
      chainscript: this.get('chainscript')
    }, Object.assign({}, {
      onclick: (d, onHide, element) => {
        this.onHide = onHide;
        this.set('segment', d.data);
        this.set('evidenceComplete', this.get('segment').meta.evidence.state === 'COMPLETE');

        const onSelectSegment = this.get('onSelectSegment');
        if (onSelectSegment) {
          onSelectSegment(this.get('segment'), element);
        }
      },
      onTag: () => {}
    }, this.get('options')));
  }
});
