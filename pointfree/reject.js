/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../helpers/curry')

const isArray = require('../predicates/isArray')
const isFunction = require('../predicates/isFunction')
const isObject = require('../predicates/isObject')
const isSameType = require('../predicates/isSameType')
const not = require('../logic/not')

const Pred = require('../crocks/Pred')
const predOrFunc = require('../internal/predOrFunc')

const object = require('../internal/object')

// reject : Foldable f => (a -> Boolean) -> f a -> f a
function reject(pred, m) {
  if(!(isFunction(pred) || isSameType(Pred, pred))) {
    throw new TypeError('reject: Pred or predicate function required for first argument')
  }

  const fn = predOrFunc(pred)

  if(m && isFunction(m.reject)) {
    return m.reject(fn)
  }
  else if(isArray(m)) {
    return m.filter(not(fn))
  }
  else if(isObject(m)) {
    return object.filter(not(fn), m)
  }

  throw new TypeError('reject: Foldable or Object required for second argument')
}

module.exports = curry(reject)
