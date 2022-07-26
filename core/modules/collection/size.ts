import getType from '../function/getType'
import isArrayLink from '../../internal/_isArrayLike'
import { keys } from '../../internal/_utils'

const type = {
  MAP: 'map',
  SET: 'set'
}

export default function size(collection) {
  if(collection == null) return 0

  let t = getType(collection)
  if(t === type.MAP || t === type.SET) return collection.size

  if(isArrayLink(collection)) return collection.length
  return keys(collection).length
}
