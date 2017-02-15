/*
    Copyright (C) 2017  Stratumn SAS

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Ember from 'ember';

export function join(items, hash) {
  const delimiter = hash.delimiter || ",";
  return items[0].join(delimiter);
}

export default Ember.Helper.helper(join);
