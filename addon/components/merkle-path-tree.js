/*
    Copyright (C) 2017  Stratumn SAS

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Ember from 'ember';
import layout from '../templates/components/merkle-path-tree';

export default Ember.Component.extend({
  layout,

  display() {
    this.get('tree').display(this.get('merkle-path'));
  },

  didInsertElement() {
    this.set('tree', new mapexplorerCore.MerklePathTree(this.$()[0]));

    this.display();
  },

  didUpdateAttrs() {
    this.display();
  }
});
