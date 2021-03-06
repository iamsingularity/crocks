const test = require('tape')

const index = require('.')

const applyTo = require('./applyTo')
const composeB = require('./composeB')
const constant = require('./constant')
const flip = require('./flip')
const identity = require('./identity')
const substitution = require('./substitution')

test('combinators entry', t => {
  t.equal(index.applyTo, applyTo, 'provides the T combinator (applyTo)')
  t.equal(index.composeB, composeB, 'provides the B combinator (composeB)')
  t.equal(index.constant, constant, 'provides the K combinator (constant)')
  t.equal(index.flip, flip, 'provides the C combinator (flip)')
  t.equal(index.identity, identity, 'provides the I combinator (identity)')
  t.equal(index.substitution, substitution, 'provides the S combinator (substitution)')

  t.end()
})
